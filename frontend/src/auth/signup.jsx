import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await api.post("/auth/register", {
        name,
        email,
        password
      });

      // after successful signup → go to login
      navigate("/login");
    } catch (err) {
      setError("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 border rounded">
        <h1 className="text-2xl font-bold mb-6">Create account</h1>

        <input
          className="w-full p-2 border mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-2 border mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 border mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          onClick={handleSignup}
          className="w-full bg-black text-white py-2 rounded"
        >
          Sign Up
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
