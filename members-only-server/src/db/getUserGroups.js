import { db } from './db';
import { getUser } from './getUser';

export const getUserGroups = async (userId) => {
    const connection = db.getConnection();
    const groups = await connection.collection('groups').find({ members: userId }).toArray();
    const groupOwners = await Promise.all(groups.map(group => getUser(group.ownerId)));
    const populatedGroups = groups.map((group, i) => ({
        ...group,
        owner: groupOwners[i],
    }));
    return populatedGroups;
}