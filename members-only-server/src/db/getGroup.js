import { db } from './db';
import { getUser } from './getUser';

export const getGroup = async (groupId) => {
    const connection = db.getConnection();
    const group = await connection.collection('groups').findOne({ id: groupId });
    const owner = await getUser(group.ownerId);
    const populatedGroup = {
        ...group,
        owner,
    };

    return populatedGroup;
}
