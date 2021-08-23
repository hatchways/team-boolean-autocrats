import { FetchOptions } from '../../interface/FetchOptions';
import { APIProfileResponse, Profile } from '../../interface/Profile';

const createProfile = async (profile: Profile): Promise<APIProfileResponse> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
    credentials: 'include',
  };
  return await fetch(`/profile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default createProfile;
