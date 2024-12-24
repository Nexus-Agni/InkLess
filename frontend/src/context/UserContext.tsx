import { createContext, useState, ReactNode } from 'react';

interface UserContextProps {
  username: string;
  setUsername: (username: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  username: '',
  setUsername: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};