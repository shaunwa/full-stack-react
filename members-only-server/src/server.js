import express from 'express';
import bodyParser from 'body-parser';
import * as admin from 'firebase-admin';
import credentials from './credentials.json';
import { db } from './db';
import { routes } from './routes';

admin.initializeApp({ credential: admin.credential.cert(credentials) });
const app = express();

const DB_NAME = 'members-only-key';

app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const start = async () => {
    await db.connect('mongodb://localhost:27017', DB_NAME);
    await app.listen(8080);
    console.log("Listening on port 8080");
}

start();

process.on('exit', function() {
    db.close();
    console.log('Closed database!');
});