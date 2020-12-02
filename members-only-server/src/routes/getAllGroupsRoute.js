import { getAllGroups } from '../db';

export const getAllGroupsRoute = {
    method: 'get',
    path: '/groups',
    handler: async (req, res) => {
        const groups = await getAllGroups();
        res.status(200).json(groups);
    },
};