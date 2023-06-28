import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then(() => createUser())
    .then((data) => console.log(data.firstName, data.lastName));
}
