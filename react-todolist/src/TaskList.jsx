import React, {Component} from 'react';
import TaskItems from './TaskItems';

class TaskList extends Component{
    render(){
        return(
            <div>
                Title of task
                <TaskItems />
                <button>delete</button>
            </div>
        )
    }
}

export default TaskList;