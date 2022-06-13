import { useContext } from "react";
import { AppShell, Text } from "@mantine/core";
import { LayoutContext } from "../context/layout.context";
import Header from "../components/header";
import Navbar from "../components/navbar";

const MainLayout = ({ children }) => {
  return <div className="main-layout">{children}</div>;
};

const DashboardLayout = ({ children }) => {
  const { theme } = useContext(LayoutContext);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar />}
      header={<Header />}
    >
      {children}
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
};

export { MainLayout, DashboardLayout };
