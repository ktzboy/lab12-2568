import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponent {
  userName: string;
  type?: "admin" |"student";
}
export type { Sidebar };
export default function Sidebar( { userName, type }: SidebarComponent) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Group p={10}>
        <Indicator color="cyan" size={12} withBorder>
          <Avatar
            size="lg"
            radius="sm"
            src="../../public/picturegu.png"
          />
       </Indicator>
        <Text>User: {userName} : {type}</Text>
      </Group>
    </Stack>
  );
}
