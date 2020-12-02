import React from 'react';
import { PhotosListItem } from './PhotosListItem';

export const PhotosList = ({ isLoading, photos }) =>
    isLoading
        ? <p>Loading...</p>
        : (
        <div className="photos-list">
            {photos.map(photo => (
                <PhotosListItem key={photo._id} photo={photo} />
            ))}
        </div>
        );