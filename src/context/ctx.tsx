import { useContext, createContext, type PropsWithChildren } from "react";
import { useStorageState } from "../hooks/useStorageState";
import { login } from "../utils/auth/login";
import * as z from "zod";
import { LoginSchema } from "../schemas";
import { User } from "../types";

const AuthContext = createContext<{
  signIn: (data: User) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: (data) => {
          setSession(JSON.stringify(data));
        },

        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
