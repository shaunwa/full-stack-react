export const getConnectionRoute = {
    method: 'get',
    path: '/conversations/:id/connection',
    handler: (req, res) => {
        res.status(200).send();
    }
}
