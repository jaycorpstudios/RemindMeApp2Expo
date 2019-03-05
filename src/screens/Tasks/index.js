import React, {Component} from 'react';
import { View } from 'react-native';
import styles from './TasksStyles';
import TaskHeader from './../../components/TaskHeader';
import TasksList from './../../components/TasksList';

export default class Tasks extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [
                { id: 1, title: 'Sacar la basura', completed: true },
                { id: 2, title: 'Paga colegiatura', completed: false },
                { id: 3, title: 'Comprar cervezas', completed: false },
                { id: 4, title: 'Sacar al perro', completed: false },
                { id: 5, title: 'Comprar croquetas', completed: false }
            ]
        }
    }

    updateTask(taskId) {
        const {tasks = []} = this.state;
        const tasksList = tasks.map( task => {
            return task.id === taskId
                        ? {...task, completed: !task.completed }
                        : {...task}
        });
        this.setState({tasks: tasksList});
    }

    render(){

        const { tasks = [] } = this.state;

        return(
            <View style={styles.container}>
                <TaskHeader tasks={ tasks } />
                <TasksList tasks={ tasks } onUpdateTask={this.updateTask.bind(this)}/>
            </View>
        )
    }
}