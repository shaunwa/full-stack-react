import { db } from './db';
import { getGroup } from './getGroup';
import { getMessagesForGroup } from './getMessagesForGroup';

export const getMemberPopulatedGroup = async (groupId) => {
    const group = await getGroup(groupId);
    const messagesForGroup = await getMessagesForGroup(groupId);
    const populatedGroup = {
        ...group,
        messages: messagesForGroup,
    };
    return populatedGroup;
}