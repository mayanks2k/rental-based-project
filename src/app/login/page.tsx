"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import useAuth from "@/hooks/useAuth";
import { Header } from "@/components/Header";

const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("methadox7992@gmail.com");
  const [password, setPassword] = useState<string>("securepassword");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { login, googleLogin } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleEye = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error message
    try {
      const token = await login(username, password);
      console.log("login token...", token);
      if (token) {
        router.back();
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const googleLoginFunc = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      setLoading(true);
      setError(null); // Reset error message
      try {
        const token = await googleLogin(codeResponse);
        console.log("login token...", token);
        if (token) {
          router.back();
        } else {
          setError("Google login failed.");
        }
      } catch (error) {
        console.error("Auth Error:", error);
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1443657/pexels-photo-1443657.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <div className="flex items-center justify-center flex-1">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="pb-5">
            <h1 className="text-3xl font-bold text-center py-2 text-gray-800">
              Login To Your Account
            </h1>
            {error && (
              <p className="text-red-500 text-sm text-center py-1">{error}</p>
            )}
          </div>
          <form className="space-y-8" onSubmit={handleLogin}>
            <div>
              <input
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none
                focus:ring-green-400 focus:bg-green-100 focus:ring focus:border-green-300"
                placeholder="Your Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="relative w-full">
              <input
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none
                focus:ring-green-400 focus:bg-green-100 focus:ring focus:border-green-300"
                placeholder="Password"
                type={isOpen ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {isOpen ? (
                  <EyeIcon
                    className="h-6 w-6 text-gray-500 cursor-pointer"
                    onClick={toggleEye}
                  />
                ) : (
                  <EyeSlashIcon
                    className="h-6 w-6 text-gray-500 cursor-pointer"
                    onClick={toggleEye}
                  />
                )}
              </div>
            </div>
            <button
              className={`w-full bg-green-500 text-white py-2 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-base font-semibold ">---or sign in with---</p>
            <div className="flex justify-center mt-8 space-x-4 ">
              <button className="p-2 border border-b border-black rounded-xl shadow-lg " onClick={() => googleLoginFunc()}>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
