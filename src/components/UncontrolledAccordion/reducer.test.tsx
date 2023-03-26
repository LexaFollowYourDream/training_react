import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";


test("collapsed should be true", () => {
//date
    const state: StateType = {
        collapsed: false
    }

//action
    const NewState = reducer(state, {type: TOGGLE_COLLAPSED})

//expect
    expect(NewState.collapsed).toBe(true)

})


test("collapsed should be false", () => {
//date
    const state: StateType = {
        collapsed: true
    }

//action
    const NewState = reducer(state, {type: TOGGLE_COLLAPSED})

//expect
    expect(NewState.collapsed).toBe(false)

})


test("collapsed should be Error", () => {
    //date
    const state: StateType = {
        collapsed: true
    }
    //action
    expect(()=> {
        reducer(state,{type:"FAKE"})
    }).toThrowError();

})