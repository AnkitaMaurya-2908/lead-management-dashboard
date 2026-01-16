"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "admin@test.com" && password === "admin123") {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#232321] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-[#FAF8F4] rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-center text-[#232321] mb-6">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232321]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="admin123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232321]"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#232321] text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
