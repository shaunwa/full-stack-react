const USER_ID_1 = '<insert user 1 id here>';
const USER_ID_2 = '<insert user 2 id here>';
const USER_ID_3 = '<insert user 3 id here>';

module.exports.users = [{
    id: USER_ID_1,
    email: 'brendabrown@gmail.com',
    fullName: 'Brenda Brown',
}, {
    id: USER_ID_2,
    email: 'jimsmith@gmail.com',
    fullName: 'Jim Smith',
}, {
    id: USER_ID_3,
    email: 'janejones@gmail.com',
    fullName: 'Jane Jones',
}];

module.exports.photos = [{
    url: '/cat-photo.jpeg',
    title: 'My Cat',
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
}, {
    url: '/car-photo.jpg',
    title: 'My Car',
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
}];
