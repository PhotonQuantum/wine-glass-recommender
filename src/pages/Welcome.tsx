import {Box, Button, Image, Overlay, Space, Stack, Text, useMantineTheme} from "@mantine/core";
import {Link} from "react-router-dom";
import {useViewportSize} from "@mantine/hooks";

const headlineUrl = new URL("../../resources/headline.png?as=webp", import.meta.url);

export const Welcome = () => {
    const theme = useMantineTheme();
    const {height: vh} = useViewportSize();

    return (
        <Box px={0} sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Image src={headlineUrl.toString()} width={"100vw"} height={vh - 50} fit={"cover"}/>
            <Overlay
                gradient={`linear-gradient(90deg, ${theme.black} 0%, ${theme.black} 100%)`}/>
            <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 999,
                display: "flex",
            }}>
                <Space sx={{flexGrow: 1}}/>
                <Stack px={60} pt={(vh - 400) / 3} spacing={0} sx={{flexGrow: 1}}>
                    <Box sx={{display: "flex"}}>
                        <Text variant={"gradient"} weight={300}
                              gradient={{from: 'pink', to: 'violet', deg: 135}}
                              sx={{fontSize: 68}}>
                            葡萄酒
                        </Text>
                        <Box sx={{flexGrow: 1}}/>
                    </Box>
                    <Text weight={300} sx={{fontSize: 68, lineHeight: 1}}>与玻璃酒杯</Text>
                    <Space pt={60}/>
                    <Button<typeof Link> component={Link} to="/wizard" variant={"gradient"} gradient={{
                        from: 'pink',
                        to: 'violet',
                        deg: 135
                    }} sx={{maxWidth: 300}} size={"md"}>寻找我的酒杯</Button>
                </Stack>
                <Space sx={{flexGrow: 2}}/>
            </Box>
        </Box>
    );
}