import React from "react";


export type ItemType = {
    title: string,
    value:any,
}


export type  AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value:any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )


    type  AccordionTitlePropsType = {
        title: string
        onChange: () => void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log("AccordionTitle rendering")
        return (
            <h3 onClick={(e) => props.onChange()}> -- {props.title} --</h3>
        );
    }


    type  AccordionBodyPropsType = {
        items: ItemType[]
        onClick: (value:any) => void
    }

    function AccordionBody(props: AccordionBodyPropsType) {
        console.log("AccordionBody  rendering")
        return (
            <ul>
                {props.items.map((el, index) =>
                    <li onClick={() => {props.onClick(el.value)}}
                        key={index}>{el.title}</li>)}
            </ul>
        );
    }
}