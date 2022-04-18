import {
    AppShell,
    Box,
    Button,
    Group,
    Header,
    Image,
    Overlay,
    Space,
    Stack,
    Text,
    ThemeIcon,
    useMantineTheme
} from "@mantine/core";
import {Glass} from "tabler-icons-react";

const headlineUrl = new URL("../resources/headline.png?as=webp", import.meta.url);

export const Main = () => {
    const theme = useMantineTheme();
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
                <Box px={0} sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Image src={headlineUrl.toString()} width={"100vw"} height={500} fit={"cover"}/>
                    <Overlay
                        gradient={`linear-gradient(90deg, ${theme.black} 0%, ${theme.black} 100%)`}/>
                    <Box sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 999
                    }}>
                        <Stack pl={60} pt={100} spacing={0}>
                            <Box sx={{display: "flex"}}>
                                <Text size="xl" variant={"gradient"} weight={300}
                                      gradient={{from: 'pink', to: 'violet', deg: 135}}>
                                    葡萄酒
                                </Text>
                                <Box sx={{flexGrow: 1}}/>
                            </Box>
                            <Text size="xl" weight={300} sx={{lineHeight: 1}}>与玻璃酒杯</Text>
                            <Space pt={60}/>
                            <Button variant={"gradient"} gradient={{
                                from: 'pink',
                                to: 'violet',
                                deg: 135
                            }} sx={{maxWidth: 300}} size={"lg"}>寻找我的酒杯</Button>
                        </Stack>
                    </Box>
                </Box>
            </AppShell>
        </>
    )
}