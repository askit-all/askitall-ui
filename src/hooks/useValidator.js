import React from "react";
import SimpleReactValidator from "simple-react-validator";

export default function useValidator(passInOptions = {}) {
  const [{ options }, forceUpdate] = React.useReducer(
    ({ options }) => ({ options }),
    {
      options: passInOptions,
    }
  );
  const simpleValidator = React.useMemo(
    () =>
      new SimpleReactValidator(
        options.autoForceUpdate
          ? {
              ...options,
              autoForceUpdate: {
                forceUpdate,
              },
              element: (message) => message,
            }
          : options
      ),
    [options]
  );
  return [simpleValidator, forceUpdate];
}
