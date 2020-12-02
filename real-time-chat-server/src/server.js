import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import socketIo from 'socket.io';
import * as admin from 'firebase-admin';
import credentials from './credentials.json';
import { db, getConversation } from './db';
import { routes, protectRoute } from './routes';
import { listenerCreators } from './event-listeners';

admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

const app = express();

app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, protectRoute, route.handler);
});

const server = http.createServer(app);
const io = socketIo(server);

io.use(async (socket, next) => {
    console.log('Verifying user auth token...');
    if (!socket.handshake.query || !socket.handshake.query.token) {
        socket.emit('error', 'You need to include an auth token');
    }

    const user = await admin.auth().verifyIdToken(
        socket.handshake.query.token,
    );
    socket.user = user;

    next();
});

io.on('connection', async socket => {
    const { conversationId } = socket.handshake.query;
    console.log('A new client connected to socket.io!');
    io.emit('userJoined', socket.user);
    const conversation = await getConversation(conversationId)
    socket.emit('heresYourConversation', conversation);

    listenerCreators.forEach(createListener => {
        const listener = createListener(socket, io);
        socket.on(listener.name, listener.handler);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        io.emit('userLeft', socket.user);
    });
});

const start = async () => {
    await db.connect('mongodb://localhost:27017');
    server.listen(8080,() => {
        console.log('Server is listening on port 8080');
    });
}

start();