import uploadPhoto from './5-photo-reject'; // Adjust the import according to your file structure
import createUser from './4-user-promise'; // Adjust the import according to your file structure

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('photo-profile-1.jpg'); // Call uploadPhoto
    const userResponse = await createUser('Guillaume', 'Salva'); // Call createUser

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the async functions fail, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
