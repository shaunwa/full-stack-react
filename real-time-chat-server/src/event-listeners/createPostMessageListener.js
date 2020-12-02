import {
    addMessageToConversation,
    getCanUserAccessConversation,
    getConversation,
} from '../db';

export const createPostMessageListener = (socket, io) => ({
    name: 'postMessage',
    handler: async ({ text, conversationId }) => {
        const { user_id: userId } = socket.user;
        const userIsAuthorized = await getCanUserAccessConversation(userId, conversationId);
        if (userIsAuthorized) {
            await addMessageToConversation(text, userId, conversationId);
            const updatedConversation = await getConversation(conversationId);
            io.emit('messagesUpdated', updatedConversation.messages);
        }
    },
})