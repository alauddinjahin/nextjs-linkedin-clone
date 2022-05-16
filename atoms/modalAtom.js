// const modalState = atom({
//     key: 'modalState', // unique ID (with respect to other atoms/selectors)
//     default: false, // default value (aka initial value)
// });

import { atom } from 'recoil';

export const modalState = atom({
    key: "modalState",
    default: false,
});


export const modalTypeState = atom({
    key: "modalTypeState",
    default: "dropIn",
});