import React, {useState} from 'react';
import {ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/OnOff',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof OnOff>;


const callback = action("On or Off clicked");

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>

export const ModeChangIng = () => {
    const [value,setValue]= useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}
