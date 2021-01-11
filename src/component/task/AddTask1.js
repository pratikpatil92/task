import React, { Component } from 'react';
import {getAllTask} from '../Redux/taskAction';
import {AddTask} from '../Redux/taskAction';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import { Spinner } from 'reactstrap';


class AddTask1 extends Component {
    constructor(props){
        super(props)
        const id = props.match.params.id;
            this.state = {
                userId:1,
                id:id,
                title:"",
                completed:false
            }
        
    }

    componentDidMount = ()=>{
        this.props.getAllTask();
    }

    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit=()=>{
        const obj={
            userId:this.state.userId,
            id:this.state.id,
            title:this.state.title,
            completed:this.state.completed,
        }
        // console.log(obj)
        this.props.AddTask(obj);
    }

    render() {
        const {id, title, completed} = this.state;
        const tasks = this.props.task;
        const task_len = tasks.task.length+1;
        console.log("lenth",task_len)
        if(tasks.data_state=="NOT_INITIALIZED"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        }else{
        return (
            <div className="container">
                <input className="form-control disabled my-3" value={id} name="id" onChange={this.onHandleChange}></input>
               
                 <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title" value={title} onChange={this.onHandleChange}></input>
                </div>
                <button className="btn btn-success" onClick={this.onSubmit}>Add</button>
            </div>
        )
        }
    }
}

const mapStateToProps=state=>({
    task:state.task,
});

export default  connect (mapStateToProps,{getAllTask, AddTask})(withRouter(AddTask1));