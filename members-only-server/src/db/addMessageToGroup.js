import { db } from './db';

export const addMessageToGroup = async (groupId, userId, text) => {
    const connection = db.getConnection();
    connection.collection('messages').insertOne({ groupId, userId, text });
}