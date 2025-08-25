import { useContext } from "react";
import { GlobalLoginState } from "@/context/loginContext";

export function useLoginState() {
  return useContext(GlobalLoginState);
}
