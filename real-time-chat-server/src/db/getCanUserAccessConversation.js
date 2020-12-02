import { getConversation } from './getConversation';

export const getCanUserAccessConversation = async (userId, conversationId) => {
    const conversation = await getConversation(conversationId);
    return conversation.memberIds.includes(userId);
}
