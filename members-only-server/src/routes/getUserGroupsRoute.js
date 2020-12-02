import * as admin from 'firebase-admin';
import { getUserGroups } from '../db';

export const getUserGroupsRoute = {
    method: 'get',
    path: '/users/:id/groups',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const userId = req.params.id;

        const user = await admin.auth().verifyIdToken(token);
        if (user.user_id !== userId) {
            return res.status(400).json({ message: "Not authorized!" });
        }

        const userGroups = await getUserGroups(userId);
        res.status(200).json(userGroups);
    },
};