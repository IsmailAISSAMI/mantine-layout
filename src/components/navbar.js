import { useContext } from "react";
import { Navbar as ApplicationNavbar, Text } from "@mantine/core";
import { LayoutContext } from "../context/layout.context";

const Navbar = () => {
  const { opened } = useContext(LayoutContext);
  return (
    <ApplicationNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, md: 225, lg: 250 }}
    >
      <Text>Application navbar</Text>
    </ApplicationNavbar>
  );
};

export default Navbar;
