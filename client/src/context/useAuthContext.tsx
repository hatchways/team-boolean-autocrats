import { createContext, FunctionComponent, useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginWithCookies from '../helpers/APICalls/loginWithCookies';
import logoutAPI from '../helpers/APICalls/logout';
import { AuthApiData, AuthApiDataSuccess } from '../interface/AuthApiData';
import { Profile } from '../interface/Profile';
import { User } from '../interface/User';
import getProfile from './../helpers/APICalls/getProfile';

interface IAuthContext {
  loggedInUser: User | null | undefined;
  userProfile: Profile | null | undefined;
  updateLoginContext: (data: AuthApiDataSuccess) => void;
  updateProfileContext: (data: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  loggedInUser: undefined,
  userProfile: undefined,
  updateLoginContext: () => null,
  updateProfileContext: () => null,
  logout: () => null,
});

export const AuthProvider: FunctionComponent = ({ children }): JSX.Element => {
  // default undefined before loading, once loaded provide user or null if logged out
  const [loggedInUser, setLoggedInUser] = useState<User | null | undefined>();
  const [userProfile, setUserProfile] = useState<Profile | null | undefined>();
  const history = useHistory();

  const updateLoginContext = useCallback(
    (data: AuthApiDataSuccess) => {
      setLoggedInUser(data.user);
      getProfile(data.user.id).then((res) => {
        setUserProfile(res.profile);
      });
      history.push('/dashboard');
    },
    [history],
  );

  const updateProfileContext = useCallback((data: any) => {
    setUserProfile(data);
  }, []);

  const logout = useCallback(async () => {
    // needed to remove token cookie
    await logoutAPI()
      .then(() => {
        history.push('/login');
        setLoggedInUser(null);
        setUserProfile(null);
      })
      .catch((error) => console.error(error));
  }, [history]);

  // use our cookies to check if we can login straight away
  useEffect(() => {
    const checkLoginWithCookies = async () => {
      await loginWithCookies().then((data: AuthApiData) => {
        if (data.success) {
          updateLoginContext(data.success);
        } else {
          // don't need to provide error feedback as this just means user doesn't have saved cookies or the cookies have not been authenticated on the backend
          setLoggedInUser(null);
          setUserProfile(null);
        }
      });
    };
    checkLoginWithCookies();
  }, [updateLoginContext, history]);

  return (
    <AuthContext.Provider value={{ loggedInUser, userProfile, updateLoginContext, updateProfileContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
