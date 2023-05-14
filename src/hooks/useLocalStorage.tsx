import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [session, setSession] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const value = localStorage.getItem(key);

      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(session));
  }, [key, session]);
  return [session, setSession];
}

export default useLocalStorage;
