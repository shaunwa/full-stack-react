import { db } from './db';

export const acceptRequest = async (requestId) => {
    const connection = db.getConnection();
    const request = await connection.collection('requests').findOne({ id: requestId });
    await connection.collection('requests').deleteOne({ id: requestId });
    await connection.collection('groups').updateOne({ id: request.groupId }, {
        $push: { members: request.userId }
    });
}