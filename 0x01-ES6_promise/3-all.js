import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((data) => {
      const [user, photoOut] = data;
      console.log(photoOut.body, user.firstName, user.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
