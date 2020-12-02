import admin from 'firebase-admin';
import { createGroup } from '../db';

export const createGroupRoute = {
    method: 'post',
    path: '/groups',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { name } = req.body;

        const user = await admin.auth().verifyIdToken(token);
        const newGroupId = await createGroup(name, user.user_id);

        res.status(200).json({ newGroupId });
    },
};