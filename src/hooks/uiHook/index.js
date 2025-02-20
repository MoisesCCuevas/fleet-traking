import { useContext } from "react";
import { UIContext } from "@providers/UiProvider";

export default function useUI() {
  return useContext(UIContext);
}
