import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

interface UserData {
  name?: string;
  email?: string;
  age?: string;
}

interface Ctx {
  user: UserData;
  setUser: (u: UserData) => void;
}

const UserCtx = createContext<Ctx | null>(null);
export const useUser = () => useContext(UserCtx)!;

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserData>({});
  return <UserCtx.Provider value={{ user, setUser }}>{children}</UserCtx.Provider>;
}
