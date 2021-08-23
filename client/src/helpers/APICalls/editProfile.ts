import { FetchOptions } from '../../interface/FetchOptions';
import { APIProfileResponse, Profile } from '../../interface/Profile';

const editProfile = async (id: string, profile: Profile): Promise<APIProfileResponse> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
    credentials: 'include',
  };
  return await fetch(`/profile/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default editProfile;
