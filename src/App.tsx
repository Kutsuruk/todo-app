import React from 'react';
import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import {Box} from "@material-ui/core";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
      <div>
          <Box style={{width: '50%'}} display='flex' flexDirection='column'>
              <Header />
              <Panel />
              <TodoList />
          </Box>
      </div>
  );
}

export default App;
