import React, {useEffect, useState, KeyboardEvent} from "react";
import s from './Select.module.css'



type ItemType = {
    title: string,
    value: any,
}

type  SelectPropsType = {
    value?: any,
    onChange: (value: any) => void
    items: ItemType[]

}

export function Select(props: SelectPropsType) {


    const [active, setActive] = useState<boolean>(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find((el) => el.value === props.value)
    const hoveredItem = props.items.find((el) => el.value === hoveredElement)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])


    const toggleItem = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItem()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItem}>
                {selectedItem && selectedItem.title}</span>

                {
                    active &&
                    <div className={s.items}>
                        {props.items.map((el) => <div onMouseEnter={() => {
                                setHoveredElement(el.value)
                            }}
                                                      className={s.item + '' + (hoveredItem === el ? s.select : "")}
                                                      key={el.value}
                                                      onClick={() => {
                                                          onItemClick(el.value)
                                                      }}
                            >
                                {el.title}
                            </div>
                        )}

                    </div>
                }

            </div>
        </>
    )
}
