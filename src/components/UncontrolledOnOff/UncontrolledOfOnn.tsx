import React, {useState} from "react";


type PropsType = {

    onChange: (on: boolean) => void
}

export function UncontrolledOnOff (props: PropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '10px',
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '10px',
        backgroundColor: on ? "white" : "red",
    };

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        props.onChange(false)
        setOn(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}> On
            </div>
            <div style={offStyle} onClick={offClicked}> Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

 export default UncontrolledOnOff;