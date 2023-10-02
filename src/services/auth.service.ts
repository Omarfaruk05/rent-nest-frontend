import { AUTH_KEY } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setToLocalStorage(AUTH_KEY, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(AUTH_KEY);
  console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    console.log(decodedData);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(AUTH_KEY);

  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
