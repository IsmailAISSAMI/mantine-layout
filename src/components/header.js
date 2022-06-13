import { useMemo, useContext } from "react";
import {
  Header as ApplicationHeader,
  MediaQuery,
  Burger,
  Text,
  Button,
  Group,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { LayoutContext } from "../context/layout.context";

const Header = () => {
  const { theme, opened, setOpened } = useContext(LayoutContext);
  const HeaderMenu = useMemo(
    () => [
      { name: "Dashboard", link: "/" },
      { name: "Settings", link: "/settings" },
    ],
    []
  );
  return (
    <ApplicationHeader className="header" height={60} p="md">
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>

      <Group className="menu" spacing="xl">
        {HeaderMenu.map(({ name, link }) => (
          <Link className="link" to={link}> <Text>{name}</Text></Link>
        ))}
      </Group>
      <Button radius="xl" sx={{ height: 30 }}>
        Get early access
      </Button>
    </ApplicationHeader>
  );
};

const LinkStyle = (theme)=>{

}

export default Header;
