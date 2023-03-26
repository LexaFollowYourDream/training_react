import React from 'react';
import {ComponentMeta } from '@storybook/react';
import  UncontrolledOfOnn  from "./UncontrolledOfOnn";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/UncontrolledOfOnn',
    component: UncontrolledOfOnn,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof UncontrolledOfOnn>;


const callback = action("On or Onn clicked")

export const OnMode = ()=> <UncontrolledOfOnn onChange={callback}/>
export const OffMode = () => <UncontrolledOfOnn onChange={callback}/>