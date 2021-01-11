import React, {Component, useContext} from 'react';
import {getAllTask} from './../Redux/taskAction';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';


class ViewTask extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllTask();
      }

      render(){
          const {task} = this.props;
          const tasks = this.props.task;
            const task_len = tasks.task.length+1;
          console.log(task_len)
          if(task.data_state=="NOT_INITIALIZE"){
            return(
              <div className="container text-center">
                    <Spinner color="primary" />
              </div>
            )
          }else{
              return(
                <div className="container mt-5">
                <Link className="btn btn-primary m-3" to={`/add-task/${task_len}`}>Add task</Link>    
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>title</th>
                            <th>Completed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {task.task.map((d, i) => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.completed.toString()}</td>
                                <td><button>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
              )
          }
      }
      
}

const mapStateToProps = state=>({
    task:state.task,
  })
  
export default connect (mapStateToProps,{getAllTask})(withRouter(ViewTask));
