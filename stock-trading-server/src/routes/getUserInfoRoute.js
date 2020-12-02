import { getUserInfo } from '../db';

export const getUserInfoRoute = {
    method: 'get',
    path: '/user-info',
    handler: async (req, res) => {
        const userInfo = await getUserInfo(req.app.locals.stockHistory);
        res.status(200).json(userInfo);
    },
};