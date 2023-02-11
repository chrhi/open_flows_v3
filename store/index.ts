import {addFlowReducer} from "./formReducers/addFlowReducer"
import {currentPageReducer} from "./appReducers/currentPageReducer"
import {app_statusReducer} from "./appReducers/app_statusReducer"
import {userReducer} from "./userReducers/userReducer"


//this will allow us to import all the reducers from one file
export {
    addFlowReducer , // this will handle passing the form data to add new project
    currentPageReducer, // this will tell the program which page we are in 
    app_statusReducer , // this will handle the state of the application such as error infor
    userReducer // this will have the data about the current user


}