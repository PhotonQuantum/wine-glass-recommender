import {Button, Center, Grid, MantineProvider, Text} from "@mantine/core";
import {useState} from "react";
import {Main} from "./Main";

export const App = () => {
    return (
        <MantineProvider theme={{
            colorScheme: "dark",
            fontSizes: {
                xl: 68
            },
        }} withGlobalStyles withNormalizeCSS withCSSVariables>
            <Main />
        </MantineProvider>
    )
}
