import { getPhoto } from './getPhoto'; 
import { getUser } from './getUser';

export const getPopulatedPhoto = async (photoId) => {
    const photo = await getPhoto(photoId);
    const users = await Promise.all(
        photo.sharedWith.map(userId => getUser(userId))
    )
    const userEmails = users.map(user => user.email);
    const populatedPhoto = {
        ...photo,
        sharedWithEmails: userEmails,
    };
    return populatedPhoto;
}
