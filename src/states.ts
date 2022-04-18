import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist({
    storage: sessionStorage
});

export const wizardKeywordState = atom<string[]>({
    key: 'wizardKeywordState',
    default: [],
    effects_UNSTABLE: [persistAtom],
});