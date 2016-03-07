import React from 'react'
import Paper from 'material-ui/lib/paper'
import AppBar from 'material-ui/lib/app-bar'

import AddTodo from '../containers/AddTodo'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="body">
          <AppBar 
            title="Todo List"
            showMenuIconButton={false}
          />
          <Paper style={{
            height: '80%',
            width: '100%',
            padding: 50,
            textAlign: 'center'
          }} zDepth={1}
          rounded={false}>
          <AddTodo /> 
        </Paper>
      </div>
    </div>
    )
  }
}
