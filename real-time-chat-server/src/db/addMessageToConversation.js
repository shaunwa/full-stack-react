import { ObjectID } from 'mongodb';
import { db } from './db';

export const addMessageToConversation = async (messageText, userId, conversationId) => {
    const newId = new ObjectID();
    const newMessage = {
        _id: newId,
        text: messageText,
        postedById: userId,
    };
    console.log(newMessage, conversationId);
    await db.getConnection().collection('conversations')
        .updateOne({ _id: ObjectID(conversationId) }, {
            $push: { messages: newMessage },
        });
}