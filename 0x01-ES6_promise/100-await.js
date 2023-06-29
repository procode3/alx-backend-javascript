import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  if (!photo || !user) {
    const obj = { photo: null, user: null };
    return obj;
  }
  const obj = { photo, user };
  return obj;
}
