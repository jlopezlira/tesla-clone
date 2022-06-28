import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    try {
      const savedData = window.localStorage.getItem(key);

      if (savedData) {
        setState(JSON.parse(savedData));
        return;
      }

      if (key === 'theme') {
        const prefersDark =
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (prefersDark) {
          setState('dark');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setAndPersistValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(state) : value;
      // Save state
      setState(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [state, setAndPersistValue];
};
