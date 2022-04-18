import {atom} from "recoil";

export const wizardKeywordState = atom<string[]>({
    key: 'wizardKeywordState',
    default: [],
});