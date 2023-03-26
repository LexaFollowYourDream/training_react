import React from 'react';
import {ComponentMeta } from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/UncontrolledAccordion',
    component: UncontrolledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof UncontrolledAccordion>;

const callback = action("Accordion mode change event fired")


export const ModeChange = () => {
    return <UncontrolledAccordion titleValue={"Menu"}  />
}
