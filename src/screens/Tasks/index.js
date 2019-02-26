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
                { id: 3, title: 'Comprar cervezas', completed: true },
                { id: 4, title: 'Sacar al perro', completed: false },
                { id: 5, title: 'Comprar croquetas', completed: false }
            ]
        }
    }

    render(){

        const { tasks = [] } = this.state;

        return(
            <View style={{flex:1}}>
                <TaskHeader tasks={ tasks } />
                <TasksList taks={ tasks }/>
            </View>
        )
    }
}