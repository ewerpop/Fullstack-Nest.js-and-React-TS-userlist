import React from 'react';

interface AppContextProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = React.createContext<AppContextProps>({
  username: '',
  setUsername: () => {},
});