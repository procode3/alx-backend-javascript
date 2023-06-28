import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      const [photoOut, user] = data;
      console.log(`${photoOut.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      throw new Error('Signup system offline');
    });
}
