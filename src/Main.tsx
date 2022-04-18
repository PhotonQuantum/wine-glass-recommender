import {AppShell, Group, Header, Text, ThemeIcon} from "@mantine/core";
import {Glass} from "tabler-icons-react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {Welcome} from "./pages/Welcome";
import {Wizard} from "./pages/Wizard";
import {Report} from "./pages/Report";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./transition.css"

export const Main = () => {
    const location = useLocation();

    return (
        <>
            <AppShell padding={0}
                      header={
                          <Header height={50} p={"sm"}>
                              <Group spacing={"sm"}>
                                  <ThemeIcon size={"md"} radius={"lg"}>
                                      <Glass size={16}/>
                                  </ThemeIcon>
                                  <Text<typeof Link> component={Link} to="/"
                                                     sx={{fontFamily: "Julius Sans One"}}>Wine &
                                      Glass</Text>
                              </Group>
                          </Header>
                      }>
                <TransitionGroup>
                    <CSSTransition key={location.key} exit={false} classNames={"fade"} timeout={400}>
                        <Routes>
                            <Route path={"/"} element={<Welcome/>}/>
                            <Route path={"/wizard"} element={<Wizard/>}/>
                            <Route path={"/report"} element={<Report/>}/>
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </AppShell>
        </>
    )
}