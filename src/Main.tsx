import {AppShell, Group, Header, Text, ThemeIcon} from "@mantine/core";
import {Glass} from "tabler-icons-react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Welcome} from "./pages/Welcome";

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
                                  <Text sx={{fontFamily: "Julius Sans One"}}>Wine & Glass</Text>
                              </Group>
                          </Header>
                      }>
                <Router>
                    <Routes>
                        <Route path={"/"} element={<Welcome/>}/>
                        <Route path={"/wizard"} element={<div>test</div>}/>
                    </Routes>
                </Router>
            </AppShell>
        </>
    )
}