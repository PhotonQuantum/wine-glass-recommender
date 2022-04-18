import {
    ActionIcon,
    Box,
    Card,
    Center,
    Group,
    Image,
    SimpleGrid,
    Space,
    Stack,
    Text,
    useMantineTheme
} from "@mantine/core";
import {Diamond, GlassFull, Omega, ShoppingCart} from "tabler-icons-react";
import {useMediaQuery} from "@mantine/hooks";

const imgISO = new URL("../../resources/iso.jpg?as=webp", import.meta.url);

export const Report = () => {
    const theme = useMantineTheme();
    const md = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);
    return (
        <Center>
            <Stack pt={md ? 128 : 30} px={50} spacing={30} sx={{maxWidth: 1000}}>
                <Text size={"xl"} weight={300}>您的酒杯推荐</Text>
                <Box>
                    <Text size={"md"} weight={300}>根据您的回答，您可能想要这些酒杯</Text>
                    <Text size={"md"} weight={300}>这些图标会帮助您挑选您的酒杯</Text>
                </Box>
                <SimpleGrid cols={md ? 3 : 2} sx={{maxWidth: 350}}>
                    <Group>
                        <GlassFull color={theme.colors.pink[7]} strokeWidth={1}/>
                        <Text size={"md"} weight={300}>红酒杯</Text>
                    </Group>
                    <Group>
                        <GlassFull color={theme.colors.lime[2]} strokeWidth={1}/>
                        <Text size={"md"} weight={300}>白酒杯</Text>
                    </Group>
                    <Group>
                        <Omega strokeWidth={1}/>
                        <Text size={"md"} weight={300}>通用杯</Text>
                    </Group>
                    <Group>
                        <Diamond strokeWidth={1}/>
                        <Text size={"md"} weight={300}>水晶杯</Text>
                    </Group>
                </SimpleGrid>
                <Space/>
                <SimpleGrid cols={md ? 3 : 1}>
                    <Card withBorder={true}>
                        <Card.Section>
                            <Box sx={{backgroundColor: "#ffffff"}}>
                                <Image src={imgISO.toString()} height={223} fit={"contain"}/>
                            </Box>
                        </Card.Section>
                        <Stack pt={10}>
                            <Group spacing={5}><Omega strokeWidth={1}/><Diamond strokeWidth={1}/></Group>
                            <Text weight={600}>ISO 杯</Text>
                            <Text size={"sm"} weight={200}>
                                合文格领格火风却，府西热者能至青个，论MG露此特。
                            </Text>
                            <ActionIcon size={"lg"} radius={"xl"}>
                                <ShoppingCart strokeWidth={1}/>
                            </ActionIcon>
                        </Stack>
                    </Card>
                </SimpleGrid>
            </Stack>
        </Center>
    )
}