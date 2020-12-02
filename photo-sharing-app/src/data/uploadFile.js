import firebase from 'firebase/app';

export const uploadFile = async (url, formData) => {
    const user = firebase.auth().currentUser;

    if (!user) {
        console.log("Error: trying to make an authed request while not logged in");
        return [];
    }

    const response = await fetch(url, {
        method: 'post',
        body: formData,
        headers: { AuthToken: await user.getIdToken() },
    });

    return response;
}