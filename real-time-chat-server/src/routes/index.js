import { createConversationRoute } from './createConversationRoute';
import { getAllUsersRoute } from './getAllUsersRoute';
import { getConnectionRoute } from './getConnectionRoute';
import { getUserConversationsRoute } from './getUserConversationsRoute';

export { protectRoute } from './protectRoute';
export const routes = [
    createConversationRoute,
    getAllUsersRoute,
    getConnectionRoute,
    getUserConversationsRoute,
];