import axios from 'axios';

export const getAllTask = () =>{
    return(dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(res =>{
            // console.log("action",res.data)
            if(res.status==200){
                dispatch(onGetTaskSuccess(res.data))
            }
        }).catch(
            err=>{
                console.log(err)
            }
        )

    }
}

export const AddTask = (data)=>{
    console.log("actipn",data)
    return(dispatch)=>{
        if(data){
            dispatch(onAddTaskSuccess(data))
        }
    }
}

export const onGetTaskSuccess = (res)=>{
    return{
        type:"ON_TASK_SUCCESSS",
        payload:res,
    }
}

export const onAddTaskSuccess = (data)=>{
    return{
        type:"ON_ADDTASK_SUCCESSS",
        payload:data,
    }
}