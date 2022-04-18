import {
    Button,
    Center,
    Container,
    Group,
    Radio,
    RadioGroup,
    Slider,
    Space,
    Stack,
    Text,
    Transition
} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import React, {Reducer, useEffect, useReducer, useState} from "react";
import {useSetRecoilState} from "recoil";
import {wizardKeywordState} from "../states";

interface OptionChoice {
    id: number,
    label: string,
    next: string[]
}

interface Question {
    question: string;
    opts?: Record<string, OptionChoice>;
    slides?: {
        value: number;
        label?: React.ReactNode;
    }[];
}

const questions: Record<string, Question> = {
    base: {
        question: "请在下列选项中选择一项",
        opts: {
            red: {
                id: 0,
                label: "我最常喝红葡萄酒",
                next: ["tanin", "flavor"]
            },
            white: {
                id: 1,
                label: "我最常喝白葡萄酒",
                next: ["sour", "flavor"]
            },
            sparkling: {
                id: 2,
                label: "我最常喝起泡酒",
                next: []
            },
        }
    },
    tanin: {
        question: "请描述您对单宁的容忍程度",
        slides: [
            {value: 1, label: "低"},
            {value: 2, label: "中"},
            {value: 3, label: "高"},
        ]
    },
    sour: {
        question: "请描述您对酸度的容忍程度",
        slides: [
            {value: 1, label: "低"},
            {value: 2, label: "中"},
            {value: 3, label: "高"},
        ]
    },
    flavor: {
        question: "请描述您对香气的追求程度",
        slides: [
            {value: 1, label: "低"},
            {value: 2, label: "中"},
            {value: 3, label: "高"},
        ]
    }
}

interface questionState {
    currentStep: string;
    prevSteps: string[];
    nextSteps: string[];
    choice: Record<string, number>;
    immediateAction?: "cancel" | "submit";
}

const initialState = {
    currentStep: "base",
    prevSteps: [],
    nextSteps: [],
    choice: {},
}

interface stepAction {
    type: "next" | "prev",
    incremental?: Record<string, number>
}

const reducer: Reducer<questionState, stepAction> = (state, action) => {
    const currentQuestion = questions[state.currentStep];
    switch (action.type) {
        case "next":
            const currentChoices = action.incremental!;

            let currentStep;
            var nextSteps;
            if (currentQuestion.opts) {
                const newSteps = currentQuestion.opts[Object.keys(currentChoices)[0]].next;
                const mergedSteps = state.nextSteps.concat(newSteps);
                const [h, ...t] = mergedSteps;
                currentStep = h;
                nextSteps = t;
            } else {
                const [h, ...t] = state.nextSteps;
                currentStep = h;
                nextSteps = t;
            }

            if (!currentStep) {
                return {
                    ...state,
                    choice: {
                        ...state.choice,
                        ...currentChoices
                    },
                    immediateAction: "submit"
                }
            }

            return {
                currentStep,
                prevSteps: state.prevSteps.concat(state.currentStep),
                nextSteps,
                choice: {
                    ...state.choice,
                    ...currentChoices
                }
            }
        case "prev":
            var prevSteps = [...state.prevSteps];
            if (prevSteps.length === 0) {
                return {
                    ...state,
                    immediateAction: "cancel"
                }
            }

            const currentStep_ = prevSteps.pop()!;
            var choice = Object.assign({}, state.choice);

            var nextSteps_ = [state.currentStep, ...state.nextSteps];

            if (currentQuestion.opts) {
                for (const key in currentQuestion.opts) {
                    delete choice[key];
                }
            } else {
                delete choice[currentStep_];
            }

            const prevQuestion = questions[currentStep_];
            if (prevQuestion.opts) {
                for (const key in prevQuestion.opts) {
                    delete choice[key];
                }
                for (const key in prevQuestion.opts) {
                    for (const i in prevQuestion.opts[key].next) {
                        const step = prevQuestion.opts[key].next[i];
                        nextSteps_ = nextSteps_.filter(step_ => step_ !== step);
                    }
                }
            }

            return {
                currentStep: currentStep_,
                prevSteps,
                nextSteps: nextSteps_,
                choice
            }
    }
};

export const Wizard = () => {
    const navigate = useNavigate();
    const setWizardKeyword = useSetRecoilState(wizardKeywordState);

    const [{currentStep, immediateAction, choice}, dispatch] = useReducer(reducer, initialState);
    const [draftChoice, setDraftChoice] = useState<Record<string, number>>({});
    const [mounted, setMounted] = useState(true);
    const [pendingFn, setPendingFn] = useState({
        fn: () => {
        }
    });

    const currentQuestion = questions[currentStep];

    useEffect(() => {
        switch (immediateAction) {
            case "cancel":
                navigate("/");
                break;
            case "submit":
                let keywords: string[] = [];
                if (choice.hasOwnProperty("red")) {
                    keywords.push("red");
                    if ((4 - choice.tanin) > choice.flavor) {
                        keywords.push("tanin");
                    } else if (choice.flavor > (4 - choice.tanin)) {
                        keywords.push("flavor");
                    }
                }
                if (choice.hasOwnProperty("white")) {
                    keywords.push("white");
                    if ((4 - choice.sour) > choice.flavor) {
                        keywords.push("sour");
                    } else if (choice.flavor > (4 - choice.sour)) {
                        keywords.push("flavor");
                    }
                }
                if (choice.hasOwnProperty("sparkling")) {
                    keywords.push("sparkling");
                }

                console.log("keywords", keywords);
                setWizardKeyword(keywords);
                navigate("/report");
                break;
        }
    }, [immediateAction]);

    const value = currentQuestion.opts ? Object.keys(draftChoice)[0] : draftChoice[currentStep];

    if (currentQuestion.slides && !value) {
        setDraftChoice({[currentStep]: 1});
    }

    return (
        <Center pt={256}>
            <Transition transition={"fade"} duration={400} timingFunction={"ease"} mounted={mounted} onExited={() => {
                pendingFn.fn();
                pendingFn.fn = () => {
                };
                setMounted(true);
            }}>
                {(styles) => (
                    <Container sx={{maxWidth: 800}} px={30} style={styles}>
                        <Stack spacing={60}>
                            <Text weight={300} size={"xl"}>{currentQuestion.question}</Text>
                            {currentQuestion.opts ? (
                                <RadioGroup value={value as string}
                                            orientation={"vertical"}
                                            onChange={(value) => setDraftChoice({[value]: 0})}>
                                    {
                                        Object.keys(currentQuestion.opts).map(key => {
                                            const value: OptionChoice = currentQuestion.opts![key];
                                            return {key, value}
                                        }).sort(({key: _1, value: v1}, {key: _2, value: v2}) => (
                                            v1.id - v2.id
                                        )).map(({key, value}) => {
                                            const idx = String.fromCharCode('A'.charCodeAt(0) + value.id);
                                            return (<Radio key={`${currentStep}-${key}$`} value={key} label={<Group>
                                                <Text weight={100} sx={{fontSize: 36}}>{idx}.</Text>
                                                <Text weight={300} size={"lg"}>{value.label}</Text>
                                            </Group>}/>)
                                        })
                                    }
                                </RadioGroup>
                            ) : (
                                <Slider
                                    label={(val) => currentQuestion.slides!.find((mark) => mark.value == val)!.label}
                                    marks={currentQuestion.slides}
                                    min={1}
                                    max={3}
                                    value={value as number || 1}
                                    onChange={(value) => setDraftChoice({[currentStep]: value})}
                                    key={currentStep}
                                />
                            )}
                            <Group>
                                <Space sx={{flexGrow: 1}}/>
                                <Button radius={"xs"} variant={"subtle"} sx={{minWidth: 120, fontWeight: 400}}
                                        onClick={() => {
                                            setPendingFn({
                                                fn: () => {
                                                    dispatch({type: "prev"});
                                                    setDraftChoice({});
                                                }
                                            });
                                            setMounted(false);
                                        }}>返回</Button>
                                <Button disabled={!value} radius={"xs"} variant={"outline"}
                                        sx={{minWidth: 120, fontWeight: 400}}
                                        onClick={() => {
                                            setPendingFn({
                                                fn: () => {
                                                    dispatch({type: "next", incremental: draftChoice});
                                                    setDraftChoice({});
                                                }
                                            });
                                            setMounted(false);
                                        }}>确认</Button>
                            </Group>
                        </Stack>
                    </Container>
                )}
            </Transition>
        </Center>
    );
}