import { db } from './db';

export const rejectRequest = async (requestId) => {
    const connection = db.getConnection();
    await connection.collection('requests').deleteOne({ id: requestId });
}