import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'Example/Accordion',
    component: Accordion,

}

const callback = action("Accordion mode change event fired")
const onClickCallback = action("some item was clicked")


const Template: Story<AccordionPropsType> = (args) => < Accordion{...args}/>

export const HelloCollapsedMode2 = Template.bind({})
HelloCollapsedMode2.args = {
    titleValue: "Hello",
    collapsed: true,
    items: [],
    onChange: callback,
    onClick: onClickCallback,
}


export const HelloCollapsedMode = () => <Accordion titleValue={"Hello"}
                                                   onChange={callback} collapsed={true} items={[]}
                                                   onClick={onClickCallback}/>


export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  onChange={callback} collapsed={false}
                                                  items={[
                                                      {title: "Lexa", value: 1},
                                                      {title: "Sveta", value: 2},
                                                      {title: "Lena", value: 3},
                                                      {title: "Gena", value: 4}
                                                  ]}
                                                  onClick={onClickCallback}/>

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Menu"} collapsed={value}
                      onChange={() => setValue(!value)} items={[
        {title: "Lexa", value: 1},
        {title: "Sveta", value: 2},
        {title: "Lena", value: 3},
        {title: "Gena", value: 4}
    ]}
                      onClick={(value) => {alert(`user with ID ${value}`)
                      }}/>
}












/*

export default  {
    title : "Accordion",    component : Accordion
}
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
export const CollapsedAccordion = Template.bind({})CollapsedAccordion.args = {
    title: "title1",    collapsed: true,
    setCollapsed: (x)=> x}
export const UnCollapsedAccordion = Template.bind({})
UnCollapsedAccordion.args = {    title: "title2",
    collapsed: false,    items : [{ title : "selim", value : 1}, {title : "saleh", value : 2}, { title: "maret", value:3}]
    ,    setCollapsed: (x)=> x
}export const ModeChangingAccordion : Story<AccordionPropsType> = (args) => {
    let [value, setValue] = useState<boolean>(true)    // const onClick = action("some item clicked")
    return (        <Accordion onClickCallBack={(value)=> alert(`user number ${value} should be happy`)} items={[{ title : "selim", value : 1}, {title : "saleh", value : 2}, { title: "maret", value:3}]
    } title={"mode changing"} collapsed={value} setCollapsed={()=>setValue(!value)}/>    )
}ModeChangingAccordion.args = {
    title : "mode changing",    setCollapsed : (value) => value
}
*/


/*
export default {    title: "AddItemForm",
    component: AddItemForm,    argTypes : {
        onClick : {            description : "Button clicked inside form"
        }    },
}as ComponentMeta<typeof AddItemForm>const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;
export const AddItemFormBaseExample = Template.bind({})AddItemFormBaseExample.args = {
    addItem: action('Button clicked inside form')}
const Template1: ComponentStory<typeof AddItemForm> = (args) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>('Title is required')
    const addItem = () => {
        if (title.trim() !== "") {            args.addItem(title);
            setTitle("");        } else {
            setError("Title is required");        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {        if (error !== null) {
        setError(null);        }
        if (e.charCode === 13) {            addItem();
        }    }
    return <div>
        <TextField variant="outlined"                   error={!!error}
                   value={title}                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}                   label="Title"
                   helperText={error}        />
        <IconButton color="primary" onClick={addItem}>            <AddBox />
        </IconButton> !    </div>
} ;
export const AddItemFormErrorStory = Template1.bind({});*/
