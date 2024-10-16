import React from 'react';

type ToggleFn = (newVal?: boolean) => void;

export default function useToggle(
  initialValue: boolean = false
): [boolean, ToggleFn] {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback((newVal?: boolean) => {
    setValue((v) => {
      // The main use case for this function is to be called without any arguments, which flips the `value` between true/false.
      // However, the user can supply a new boolean value if they want to explicitly turn it on or off.
      // The trick here is that we want to ignore any non-boolean values. This becomes relevant when the `toggle` function is passed as a callback function to an event handler; we want to ignore the MouseEvent or whatever that is automatically passed in.
      if (typeof newVal === 'boolean') {
        return newVal;
      }

      return !v;
    });
  }, []);

  return [value, toggle];
}
