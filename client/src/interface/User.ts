export interface User {
  email: string;
  username: string;
  id: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}

export interface loggedInUser {
  email: string;
  id: string;
  username: string;
}
