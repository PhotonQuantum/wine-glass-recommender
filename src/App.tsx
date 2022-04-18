import {MantineProvider} from "@mantine/core";
import {Main} from "./Main";
import "@fontsource/julius-sans-one"

export const App = () => {
    return (
        <MantineProvider theme={{
            colorScheme: "dark",
            fontSizes: {
                xl: 68
            },
            primaryColor: "pink"
        }} withGlobalStyles withNormalizeCSS withCSSVariables>
            <Main/>
        </MantineProvider>
    )
}
