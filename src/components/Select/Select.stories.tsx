import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";



export default {
    title:'Example/Select',
    component:Select,
}

const onClickCallback = action("some item was clicked")

export const WithValue = () => {

    const [value , setValue] = useState('2')
    return<>
    <Select onChange={setValue}
            value={value}
            items={[
                {value:"1", title:"Minsk"},
                {value:"2", title:"Soligorsk"},
                {value:"3", title:"Brest"},
                {value:"4", title:"Grodno"},

            ]}/>
    </>
}

export const WithoutValue = () => {

    const [value , setValue] = useState(null);
    return<>
    <Select onChange={setValue}
            value={value}
            items={[
                {value:"1", title:"Minsk"},
                {value:"2", title:"Soligorsk"},
                {value:"3", title:"Brest"},
                {value:"4", title:"Grodno"},

            ]}/>
    </>
}





