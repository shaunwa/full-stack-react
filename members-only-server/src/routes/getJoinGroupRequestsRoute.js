import admin from 'firebase-admin';
import { getGroup, getRequestsForGroup } from '../db';

export const getJoinGroupRequestsRoute = {
    method: 'get',
    path: '/groups/:id/requests',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;

        const user = await admin.auth().verifyIdToken(token);
        const group = await getGroup(id);

        if (!token || !user || !group.members.includes(user.user_id)) {
            return res.status(400).json({ message: "Must be authenticated and a member of the group to see messages" });
        }

        const requests = await getRequestsForGroup(id);

        res.status(200).json(requests);
    },
};