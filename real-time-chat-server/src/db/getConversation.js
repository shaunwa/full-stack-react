import { ObjectID } from 'mongodb';
import { db } from './db';
import { getUser } from './getUser';

export const getConversation = async (conversationId) => {
    const conversation = await db.getConnection().collection('conversations')
        .findOne({ _id: ObjectID(conversationId) });
    const members = await Promise.all(
        conversation.memberIds.map(id => getUser(id)),
    );
    const usersForMessages = await Promise.all(
        conversation.messages.map(message => getUser(message.postedById)),
    );
    const populatedMessages = conversation.messages.map((message, i) => ({
        ...message,
        postedBy: usersForMessages[i],
    }));
    const populatedConversation = {
        ...conversation,
        members,
        messages: populatedMessages,
    };
    return populatedConversation;
}