import React, {Component} from 'react';
import {connect} from 'react-redux';

class TasksList extends Component {
    render = () => {
        return (
            <div>
                <ul>
                {
                    this.props.tasks.map(value => {
                        return (
                        <li key={value.id}>ID : {value.id} ; NAME : {value.name}</li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.allTasks
    }
};

export default connect(mapStateToProps)(TasksList)
