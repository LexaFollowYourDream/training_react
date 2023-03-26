import React, {useState} from "react";



export default {
    title: "React.memo demo",
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return (
        <div>
            {props.users.map((el, index) => <div key={index}> {el}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    console.log("Example1")
    const [counter ,setCounter] = useState<number>(0)
    const [users ,setUsers] = useState(["Lexa", "Valera", "Ira"])

    const addUsers = () => {
        const newUsers = [ ...users , "Galina" + new Date().getTime()]
        setUsers(newUsers)
    }


    return (
        <>
            <button onClick={()=> setCounter(counter + 1)}> + </button>
            <button onClick={addUsers}> add users</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>

        </>
    )
}