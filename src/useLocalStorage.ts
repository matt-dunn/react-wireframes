import { useState } from "react";

export function useLocalStorage<P>(key: string, initial?: P | undefined): [P | undefined, (newValue: P | undefined) => void] {
  const [value, setValue] = useState<P | undefined>(() => {
    try {
      const storageValue = window.localStorage.getItem(key);
      return storageValue ? JSON.parse(storageValue) : initial;
    } catch (ex) {
      /* istanbul ignore next */
      console.error(ex); // eslint-disable-line no-console
      /* istanbul ignore next */
      return initial;
    }
  });

  return [
    value,
    (newValue: P | undefined) => {
      setValue(newValue);

      try {
        if (newValue !== undefined) {
          window.localStorage.setItem(key, JSON.stringify(newValue));
        } else {
          window.localStorage.removeItem(key);
        }
      } catch (ex) {
        /* istanbul ignore next */
        console.error(ex); // eslint-disable-line no-console
      }
    },
  ];
}
