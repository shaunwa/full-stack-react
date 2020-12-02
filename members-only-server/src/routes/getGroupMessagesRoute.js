import admin from 'firebase-admin';
import { getGroup, getMessagesForGroup } from '../db';

export const getGroupMessagesRoute = {
    method: 'get',
    path: '/groups/:id/messages',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;

        const user = await admin.auth().verifyIdToken(token);
        const group = await getGroup(id);

        if (!token || !user || !group.members.includes(user.user_id)) {
            return res.status(400).json({ message: "Must be authenticated and a member of the group to see messages" });
        }

        const messages = await getMessagesForGroup(id);

        res.status(200).json(messages);
    },
};