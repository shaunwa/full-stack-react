import { acceptRequestRoute } from './acceptRequestRoute';
import { createGroupRoute } from './createGroupRoute';
import { createRequestRoute } from './createRequestRoute';
import { createMessageRoute } from './createMessageRoute';
import { getAllGroupsRoute } from './getAllGroupsRoute';
import { getGroupRoute } from './getGroupRoute';
import { getGroupMessagesRoute } from './getGroupMessagesRoute';
import { getJoinGroupRequestsRoute } from './getJoinGroupRequestsRoute';
import { getUserGroupsRoute } from './getUserGroupsRoute';
import { rejectRequestRoute } from './rejectRequestRoute';

export const routes = [
    acceptRequestRoute,
    createGroupRoute,
    createRequestRoute,
    createMessageRoute,
    getAllGroupsRoute,
    getGroupRoute,
    getGroupMessagesRoute,
    getJoinGroupRequestsRoute,
    getUserGroupsRoute,
    rejectRequestRoute,
];