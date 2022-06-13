import { useState, createContext } from "react";
import { useMantineTheme } from "@mantine/core";

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <LayoutContext.Provider value={{ theme, opened, setOpened }}>
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutProvider, LayoutContext };
