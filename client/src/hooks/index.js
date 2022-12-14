import { useState } from "react";

export const useField = (type, id) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    attributes: {
      type,
      id,
      value,
      onChange,
    },
    reset,
    error,
    setError,
  };
};

export const useError = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleError = (errorState, errorMessage) => {
    setError(errorState);
    setErrorMsg(errorMessage);
  };

  const disableError = () => {
    setError(false);
    setErrorMsg("");
  };

  return { handleError, disableError, error, errorMsg };
};
