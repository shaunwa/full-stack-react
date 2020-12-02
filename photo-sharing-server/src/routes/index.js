import { getMyPhotosRoute } from './getMyPhotosRoute';
import { getPhotoRoute } from './getPhotoRoute';
import { getSharedWithMePhotosRoute } from './getSharedWithMePhotosRoute';
import { shareWithEmailRoute } from './shareWithEmailRoute';
import { uploadPhotoRoute } from './uploadPhotoRoute';

export { protectRoute } from './protectRoute';
export const routes = [
    getMyPhotosRoute,
    getPhotoRoute,
    getSharedWithMePhotosRoute,
    shareWithEmailRoute,
    uploadPhotoRoute,
];