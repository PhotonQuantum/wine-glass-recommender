import {AppShell, Group, Header, Text, ThemeIcon} from "@mantine/core";
import {Glass} from "tabler-icons-react";
import {Link, Route, Routes} from "react-router-dom";
import {Welcome} from "./pages/Welcome";
import {Wizard} from "./pages/Wizard";
import {Report} from "./pages/Report";

export const Main = () => {
    return (
        <>
            <AppShell padding={0}
                      header={
                          <Header height={50} p={"sm"}>
                              <Group spacing={"sm"}>
                                  <ThemeIcon size={"md"} radius={"lg"}>
                                      <Glass size={16}/>
                                  </ThemeIcon>
                                  <Text<typeof Link> component={Link} to="/" sx={{fontFamily: "Julius Sans One"}}>Wine &
                                      Glass</Text>
                              </Group>
                          </Header>
                      }>
                <Routes>
                    <Route path={"/"} element={<Welcome/>}/>
                    <Route path={"/wizard"} element={<Wizard/>}/>
                    <Route path={"/report"} element={<Report/>}/>
                </Routes>
            </AppShell>
        </>
    )
}