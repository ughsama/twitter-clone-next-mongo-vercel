import { useState, createContext, useContext } from "react";

const UserContext = createContext();
const SetUserContext = createContext();
//improve later with functions inside state
export function useUser() {
  return useContext(UserContext);
}

export function useSetUser() {
  return useContext(SetUserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
}
