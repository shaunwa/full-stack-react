import {
    getUserOwnsPhoto,
    sharePhotoWithUserByEmail,
    getPopulatedPhoto,
} from '../db';

export const shareWithEmailRoute = {
    method: 'post',
    path: '/photos/:id/shared-with',
    handler: async (req, res) => {
        const photoId = req.params.id;
        const userId = req.user.user_id;
        const { email } = req.body;
        const userOwnsGroup = await getUserOwnsPhoto(userId, photoId);

        if (userOwnsGroup) {
            await sharePhotoWithUserByEmail(photoId, email);
            const updatedPhoto = await getPopulatedPhoto(photoId);
            res.status(200).json(updatedPhoto);
        } else { 
            res.status(401).json({ message: "Only the group owner can share a photo" });
        }
    },
}