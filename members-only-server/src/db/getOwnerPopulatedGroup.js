import { db } from './db';
import { getMemberPopulatedGroup } from './getMemberPopulatedGroup';
import { getRequestsForGroup } from './getRequestsForGroup';

export const getOwnerPopulatedGroup = async (groupId) => {
    const group = await getMemberPopulatedGroup(groupId);
    const requests = await getRequestsForGroup(groupId);
    const populatedGroup = {
        ...group,
        requests,
    };
    return populatedGroup;
}