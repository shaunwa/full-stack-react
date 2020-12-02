import { db } from './db';

export const getUserConversations = async (userId) => {
    const conversations = await db.getConnection().collection('conversations')
        .find({ memberIds: userId })
        .toArray();
    return conversations;
}