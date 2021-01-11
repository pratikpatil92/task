const initialState = {
    task:{},
    data_state:"NOT_INITIALIZE",
}


const taskReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_TASK_SUCCESSS":
            return{
                ...state,
                task:action.payload,
                data_state:"FETCH_SUCCESS",
            }
        case "ON_ADDTASK_SUCCESSS":
            return{
                ...state,
                task:action.payload,
            }    
        default:
            return{
                ...state
            }     
    }
}

export default taskReducer;