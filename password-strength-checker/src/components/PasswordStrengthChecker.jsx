import React, { useState } from "react";

export const passwordStrength = (password) => {
  if (typeof password !== "string" || password.length === 0)
    return "Weak Password";

  const hasMinLength = /.{8,}/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[A-Za-z0-9]/.test(password);

  const met = [hasMinLength, hasUpper, hasLower, hasDigit, hasSpecial].filter(
    Boolean
  ).length;

  if (met === 0) return "Weak Password";
  if (met === 1) return "Level 1";
  if (met === 2 || met === 3) return "Level 2";
  return "Level 3";
};

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();

    setStrength(passwordStrength(password));
  };

  return (
    <div>
      <h1>Password Strength Checker</h1>
      <form onSubmit={handleCheck}>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Check Strength</button>
      </form>

      {strength && (
        <p>
          Strength: <strong>{strength}</strong>
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;
