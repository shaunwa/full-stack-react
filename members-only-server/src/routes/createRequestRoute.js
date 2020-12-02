import admin from 'firebase-admin';
import { createJoinRequest } from '../db';

export const createRequestRoute = {
    method: 'post',
    path: '/groups/:id/request',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;

        const user = await admin.auth().verifyIdToken(token);

        if (!token || !user) {
            res.status(400).json({ message: "Must be logged in to submit requests" });
        }

        await createJoinRequest(id, user.user_id);

        res.status(200).json({ message: "Success!" });
    },
};