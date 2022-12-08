import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useField } from "../hooks/index";
import authServices from "../services/auth";

const PasswordReset = () => {
  const { tokenId } = useParams();
  const navigate = useNavigate();
  const password = useField("password", "password");
  const confirmPassword = useField("confirmPassword", "confirmPassword");

  useEffect(() => {
    (async () => {
      try {
        await authServices.checkPasswordResetValidity(tokenId);
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    })();
  }, [tokenId, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await authServices.passwordReset(
        tokenId,
        password.attributes.value,
        confirmPassword.attributes.value
      );

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>Reset your password</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Password: </label>
          <input {...password.attributes} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>

          <input {...confirmPassword.attributes} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordReset;
