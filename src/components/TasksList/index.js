import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TasksList extends Component {

  renderTasks() {
    const { tasks } = this.props;
    return tasks.map( task => <Text>{task.title}</Text> )
  }

  render(){
    return(
      <View>
        { this.renderTasks() }
      </View>
    )
  }

}