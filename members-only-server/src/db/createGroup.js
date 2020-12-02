import { v4 as uuid } from 'uuid';
import { db } from './db';

export const createGroup = async (groupName, userId) => {
    const connection = db.getConnection();
    const newGroupId = uuid();
    await connection.collection('groups').insertOne({
        id: newGroupId,
        name: groupName,
        ownerId: userId,
        members: [userId],
    });
    return newGroupId;
}
