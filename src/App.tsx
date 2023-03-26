import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledOfOnn from "./components/UncontrolledOnOff/UncontrolledOfOnn";






function App() {

    console.log("App rendered")



    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component "}/>
            Article 1
            {/*/    <Accordion titleValue={"Menu"} collapsed={true}/>*/}

            <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
            />

            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*/  <OnOff on={switchOn} onChange={setSwitchOn}/> */}
            <UncontrolledOfOnn onChange={setSwitchOn}/>{switchOn.toString()}
            <UncontrolledAccordion titleValue={"Menu1"}/>
            <UncontrolledAccordion titleValue={"Menu2"}/>

        </div>
    );

}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}

export default App;
