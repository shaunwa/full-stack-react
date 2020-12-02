import React from 'react';
import { useProtectedResource } from '../data';
import { MyPhotosList } from './MyPhotosList';
import { PhotosList } from './PhotosList';

export const BrowsePhotosPage = () => {
    const {
        isLoading: isLoadingMyPhotos,
        data: myPhotos,
    } = useProtectedResource(`/my-photos`, []);
    const {
        isLoading: isLoadingSharedPhotos,
        data: sharedPhotos,
    } = useProtectedResource(`/shared`, []);

    return (
        <div>
            <h2 className="section-heading">My Photos</h2>
            <MyPhotosList
                isLoading={isLoadingMyPhotos}
                photos={myPhotos} />
            <h2 className="section-heading">Shared With Me</h2>
            <PhotosList
                isLoading={isLoadingSharedPhotos}
                photos={sharedPhotos} />
        </div>
    );
}