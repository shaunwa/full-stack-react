import { getUserConversations } from '../db';

export const getUserConversationsRoute = {
    method: 'get',
    path: '/users/:id/conversations',
    handler: async (req, res) => {
        const { id: userId } = req.params;

        if (req.user.user_id !== userId) {
            return res.status(403).json({
                message: 'Users are only allowed to access their own conversations',
            });
        }

        const conversations = await getUserConversations(userId);
        res.status(200).json(conversations);
    },
}