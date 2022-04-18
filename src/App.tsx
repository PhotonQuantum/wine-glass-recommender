import {MantineProvider} from "@mantine/core";
import {Main} from "./Main";
import "@fontsource/julius-sans-one"
import {BrowserRouter as Router} from "react-router-dom";
import {RecoilRoot} from "recoil";

export const App = () => {
    return (
        <RecoilRoot>
            <MantineProvider theme={{
                colorScheme: "dark",
                fontSizes: {
                    xl: 48,
                    lg: 28,
                },
                primaryColor: "pink"
            }} withGlobalStyles withNormalizeCSS withCSSVariables>
                <Router>
                    <Main/>
                </Router>
            </MantineProvider>
        </RecoilRoot>
    )
}
