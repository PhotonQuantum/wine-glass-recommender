import {
    ActionIcon,
    Box,
    Card,
    Center,
    Group,
    Image,
    MantineTheme,
    SimpleGrid,
    Space,
    Stack,
    Text,
    useMantineTheme
} from "@mantine/core";
import {ChartBubble, Diamond, GlassFull, Omega, ShoppingCart} from "tabler-icons-react";
import {useMediaQuery} from "@mantine/hooks";
import {Categories, glasses} from "../glasses";

const categoryToIcon: (theme: MantineTheme) => { [key in Categories]: JSX.Element } =
    (theme) => ({
        [Categories.crystal]: <Diamond strokeWidth={1}/>,
        [Categories.red]: <GlassFull color={theme.colors.pink[7]} strokeWidth={1}/>,
        [Categories.white]: <GlassFull color={theme.colors.lime[2]} strokeWidth={1}/>,
        [Categories.universal]: <Omega strokeWidth={1}/>,
        [Categories.sparkling]: <ChartBubble strokeWidth={1}/>
    });

export const Report = () => {
    const theme = useMantineTheme();
    const md = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);
    return (
        <Center>
            <Stack pt={md ? 128 : 30} px={50} spacing={30} sx={{maxWidth: 1000}}>
                <Text size={"xl"} weight={300}>您的酒杯推荐</Text>
                <Box>
                    <Text size={"md"}>根据您的回答，您可能想要这些酒杯</Text>
                    <Text size={"md"}>这些图标会帮助您挑选您的酒杯</Text>
                </Box>
                <SimpleGrid cols={md ? 3 : 2} sx={{maxWidth: 400}}>
                    <Group>
                        <GlassFull color={theme.colors.pink[7]} strokeWidth={1}/>
                        <Text size={"md"}>红葡萄酒杯</Text>
                    </Group>
                    <Group>
                        <GlassFull color={theme.colors.lime[2]} strokeWidth={1}/>
                        <Text size={"md"}>白葡萄酒杯</Text>
                    </Group>
                    <Group>
                        <ChartBubble strokeWidth={1}/>
                        <Text size={"md"}>起泡酒杯</Text>
                    </Group>
                    <Group>
                        <Omega strokeWidth={1}/>
                        <Text size={"md"}>ISO 杯</Text>
                    </Group>
                    <Group>
                        <Diamond strokeWidth={1}/>
                        <Text size={"md"}>水晶材质</Text>
                    </Group>
                </SimpleGrid>
                <Space/>
                <SimpleGrid cols={md ? 3 : 1}>
                    {
                        glasses.map((glass) => {
                            return (
                                <Card withBorder={true} sx={{display: "flex", flexDirection: "column"}}>
                                    <Card.Section>
                                        <Box sx={{backgroundColor: "#ffffff"}}>
                                            <Image src={glass.img.toString()} height={223} fit={"contain"}/>
                                        </Box>
                                    </Card.Section>
                                    <Stack pt={10} sx={{flexGrow: 1}}>
                                        <Group spacing={5}>
                                            {glass.categories.map(category => (categoryToIcon(theme)[category]))}
                                        </Group>
                                        <Text weight={600}>{glass.name}</Text>
                                        <Text size={"sm"}>
                                            {glass.description}
                                        </Text>
                                        <ActionIcon<'a'> component={"a"} href={glass.link} target={"_blank"}
                                                         size={"lg"} radius={"xl"} mt={"auto"}>
                                            <ShoppingCart strokeWidth={1}/>
                                        </ActionIcon>
                                    </Stack>
                                </Card>
                            )
                        })
                    }
                </SimpleGrid>
            </Stack>
        </Center>
    )
}