import {Button, Center, Container, Group, Radio, RadioGroup, Space, Stack, Text} from "@mantine/core";
import {useNavigate} from "react-router-dom";

export const Wizard = () => {
    const navigate = useNavigate();

    return (
        <Center pt={256}>
            <Container sx={{maxWidth: 800}} px={30}>
                <Stack spacing={60}>
                    <Text weight={300} size={"xl"}>请在下列选项中选择一项</Text>
                    <RadioGroup orientation={"vertical"}>
                        <Radio value={"red"} label={<Group>
                            <Text weight={100} sx={{fontSize: 36}}>A.</Text>
                            <Text weight={300} size={"lg"}>我更常喝红葡萄酒</Text>
                        </Group>}/>
                        <Radio value={"white"} label={<Group>
                            <Text weight={100} sx={{fontSize: 36}}>B.</Text>
                            <Text weight={300} size={"lg"}>我更常喝白葡萄酒</Text>
                        </Group>}/>
                    </RadioGroup>
                    <Group>
                        <Space sx={{flexGrow: 1}}/>
                        <Button radius={"xs"} variant={"subtle"} sx={{minWidth: 120, fontWeight: 400}}>返回</Button>
                        <Button radius={"xs"} variant={"outline"} sx={{minWidth: 120, fontWeight: 400}} onClick={() => {
                            navigate("/report");
                        }}>确认</Button>
                    </Group>
                </Stack>
            </Container>
        </Center>
    );
}