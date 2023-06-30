import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    if (!photo || !user) {
      return { photo: null, user: null };
    }
    return { photo, user };
  } catch (err) {
    throw Error(err);
  }
}
