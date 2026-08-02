/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */ // 1. Fixed Fast Refresh warning locally

import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useContext } from "react";
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme:dark").matches,
    "isDarkMode",
  );
  useEffect(function () {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  });
  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext waas used outside of DarModeProvider");
  return context;
}

// export default { DarkModeProvider, useDarkMode };
