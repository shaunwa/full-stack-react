import { db } from './db';

export const createConversation = async (name, memberIds) => {
    const { insertedId } = await db.getConnection().collection('conversations')
        .insertOne({ name, memberIds, messages: [] });
    return insertedId;
}