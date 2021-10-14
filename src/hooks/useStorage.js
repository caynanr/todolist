import { useState, useEffect } from "react";

export default function useStorage(key, initial) {
  const [storage, setStorage] = useState(() => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    } else return initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
  }, [storage, key]);
  return [storage, setStorage];
}
