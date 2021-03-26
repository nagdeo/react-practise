import { combineReducers,createStore } from 'redux';

//increment action in redux
export const incrementAction={
    type:"INCREMENT"
}
export function createCourse(course){
    return{
        type:"AddCourse",
        course   //course:course === course(es6)

    }
  
}
//counter reducer in redux
const counterReducer=(state=1,action)=>{
    switch(action.type){
        case "INCREMENT":return state+1;    //return to store
        default: return state;
    }
}

//course add reducer in redux
const courseReducer=(state=[{title:'react'}],action)=>{
    switch(action.type){
        case "AddCourse":return [...state,Object.assign({},action.course)];    //return to store
        default: return state;
    }
}

const rootReducer=combineReducers({counter:counterReducer,course:courseReducer})

//store in redux configured to all reducers
export const store=createStore(rootReducer)