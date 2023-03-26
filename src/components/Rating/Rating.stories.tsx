import React, {useState} from 'react';
import {ComponentMeta } from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/UncontrolledRating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const EmptyRating = () => <Rating value={0} onClick={a=>a}/>
export const Rating1 = () => <Rating value={1} onClick={a=>a}/>
export const Rating2 = () => <Rating value={2} onClick={a=>a}/>
export const Rating3 = () => <Rating value={3} onClick={a=>a}/>
export const Rating4 = () => <Rating value={4} onClick={a=>a}/>
export const Rating5 = () => <Rating value={5} onClick={a=>a}/>
export const RatingChanging = () => {
    const [rating,setRating] = useState<RatingValueType>(3);
    return<Rating value={rating} onClick={setRating}/>
}