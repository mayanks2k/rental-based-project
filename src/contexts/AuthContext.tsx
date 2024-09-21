import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { authReducer } from "../reducers/authReducer";
import { useGoogleLogin } from "@react-oauth/google";
import axiosInstance from "@/app/utils/axiosInstance";

interface AuthContextType {
  isLoggedIn: boolean;
  googleLogin: (codeResponse: any) => Promise<string | null>;
  login: (username: string, password: string) => Promise<string | null>;
  logout: () => void;
}

const initialState = {
  isLoggedIn: false,
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: async () => null,
  googleLogin: async () => null,
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("car_rental_token");
    if (token) {
      dispatch({ type: "LOGIN" });
    }
  }, []);

  const login = async (
    username: string,
    password: string
  ): Promise<string | null> => {
    try {
      const { data } = await axiosInstance.post(
        "/auth/token/",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("car_rental_token", data?.access);
      dispatch({ type: "LOGIN" });
      return data?.access;
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  };

  const googleLogin = async (codeResponse: any): Promise<string | null> => {
    try {
      console.log('codeResponse is', codeResponse)
      const { data } = await axiosInstance.post(
        `/auth/google/`,
        { access_token: codeResponse.access_token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("data is", data);
      localStorage.setItem("car_rental_token", data.key);
      dispatch({ type: "LOGIN" });
      return data.key;
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("car_rental_token");
    dispatch({ type: "LOGOUT" });
    if (typeof window !== "undefined") {
      const router = useRouter();
      router.push("/login"); // Use router only when client-side
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: state.isLoggedIn, login, googleLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
