import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'
import { Button, Typography, Paper, Grid} from "@material-ui/core";
import Header from "./Header";
import AddIcon from '@material-ui/icons/Add';
import ClearButtons from "./ClearButtons";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TouchAppIcon from '@material-ui/icons/TouchApp';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [snackIsOpen, setSnackIsOpen] = useState(false);
  const [copySnackIsOpen, setCopySnackIsOpen] = useState(false);
  let snackTimeout;
  const [todos, setTodos] = useState([]);
  const [todoHistory, setTodoHistory] = useState([]);
  const nameRef = useRef(); //will give us access to input element

  //only runs when mounted
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, [])

  //runs when mounted (I think?) and every time todos is updated
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleShowDblTapMsg() {
    if (snackTimeout) {
      console.log("already a snack pending");
      return;
    } 
    console.log("no snack pending");
    setCopySnackIsOpen(false);
    snackTimeout = setTimeout(setSnackIsOpen, 800, true);
    console.log("setTimeout(setSnackIsOpen, 1000)");
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackIsOpen(false);
  };

  const handleCloseCopyMsg = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCopySnackIsOpen(false);
  };

  function toggleTodo(id) {
    const newTodos = [...todos]; //makes a copy of todos
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(eventProperty) {
    //.current.value is the name of whatever element we are currently referencing
    const name = nameRef.current.value.trim();
    nameRef.current.value = null;
    if (name === '') {
      return;
    }
    // console.log("handleAddTodo: setting todo history");
    setTodoHistory([...todoHistory, todos]);
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false, selected: false }]
    })

  }

  function handleClearDoneTodos() {
    clearTimeout(snackTimeout);
    console.log("clearTimeout(snackTimeout)");
    setSnackIsOpen(false); //in case there is one already open
    // console.log("handleClearDoneTodos: setting todo history");
    setTodoHistory([...todoHistory, todos]);
    const newTodos = todos.filter(todo => !todo.complete);
    if (todos.length !== newTodos) {
      setTodos(newTodos);
    }
  }

  function handleClearAllTodos() {
    clearTimeout(snackTimeout);
    console.log("clearTimeout(snackTimeout)");
    setSnackIsOpen(false); //in case there is one already open
    // console.log("handleClearAllTodos: setting todo history");
    setTodoHistory([...todoHistory, todos]);
    setTodos([]);
  }

  //possible alternatives to onPaste:
  //https://charles-stover.medium.com/manage-your-customers-clipboard-with-react-hooks-18486220d0d1
  //https://www.npmjs.com/package/react-use-clipboard
  function handlePaste() {
    // console.log("pasted to the input");
    //the following does not work with the current version of firefox and safari (I think it's because they need permission to read clipboard) BUT works with Chrome (after it asked for permission and I gave it).
    navigator.clipboard.readText().then(
      clipText => {
        addPastedList(clipText);
        // console.log("handlePaste: setting todo history");
        setTodoHistory([...todoHistory, todos]);
      });
  }

  function addPastedList(clipText) {
    nameRef.current.value = null;
    if (clipText.trim() === "") {
      // console.log("There was nothing to paste");
      return;
    }
    //.trim() the string first to remove the last \n which would otherwise produce an empty string (remove .trim and you'll see)
    let newTodos;
    if (clipText.trim().includes("\n")) {
      // console.log("is separated by new line");
      newTodos = clipText.trim().split("\n");
    } else { //it's separated by new lines
      // console.log("this one is separated by commas")
      newTodos = clipText.trim().split(",");
    }
    
    newTodos.forEach( (name) => {
      setTodos(prevTodos => {
        return [...prevTodos, { id: uuidv4(), name: name, complete: false, selected: false }]
      });
    });
  }

  function handleCopyList() {
    const remainingArray = todos.filter(todo => !todo.complete).map(function(todo) {return todo.name});
    const remainingStr = remainingArray.join("\n");
    navigator.clipboard.writeText(remainingStr).then(function() {
      setSnackIsOpen(false);
      setCopySnackIsOpen(true);
      // console.log("successfully copied");
    }, function() {
      // console.log("could not copy");
    });
  }

  function selectOnlyThis(todoID = "none") {
    // console.log("selectOnlyThis");
    const newTodos = [...todos]; //makes a copy of todos
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === todoID) {
        newTodos[i].selected = true;
      } else {
        newTodos[i].selected = false;
      }
    }
    setTodos(newTodos);
  }

  function updateTodo(newName, todo) {

    // console.log("updatedTodo: b4, the history length was: " + todoHistory.length);
    if (todoHistory.length > 0) {
      setTodoHistory([...todoHistory, todos]);
    } else {
      setTodoHistory([todos]);
    }
    // console.log("updatedTodo: now, the history length is: " + todoHistory.length);

    const updatedName = newName.trim();
    if (updatedName !== todo.name) {
      let i = 0;
      while (todos[i].id !== todo.id) {
        i++;
      }
      const isSelected = todos[i].selected;
      const isComplete = todos.complete;
      const firstHalf = todos.slice(0, i);
      const middle = [{ id: uuidv4(), name: updatedName, complete: isComplete, selected: isSelected }];
      const secondHalf = todos.slice(i+1);
      // console.log("first, middle and second half");
      // console.log(firstHalf);
      // console.log(middle);
      // console.log(secondHalf);
      const newTodos = [...firstHalf, ...middle, ...secondHalf];
      setTodos(newTodos);
    }
  }

  function handleUndo() {
    clearTimeout(snackTimeout);
    console.log("clearTimeout(snackTimeout)");
    setSnackIsOpen(false); //in case there is one already open
    selectOnlyThis();
    //todoHistory is an array of all todos excluding the current.
    if (todoHistory.length >= 1) {
        // console.log("handleUndo: setting todo history");
        setTodoHistory(todoHistory.slice(0, todoHistory.length - 1));
        setTodos(todoHistory[todoHistory.length - 1]);
    }
  }


  return (
    <Paper className="bg" style={{backgroundColor: "rgba(66, 66, 66, 0.9)"}}>
      <Grid container direction="column" >
        <Grid item>
          <Header todoHistory={todoHistory} setTodoHistory={setTodoHistory} setTodos={setTodos} selectOnlyThis={selectOnlyThis} handleUndo={handleUndo} handleShowDblTapMsg={handleShowDblTapMsg} />
        </Grid>
        <Grid item container style={{marginBottom: "80px"}}>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <div style={{display: "flex", marginTop: "5vh", marginBottom: "5vh"}}>
              <input 
                style={{width: "65%", fontSize: "22px"}} 
                ref={nameRef} type="text" 
                onPaste={handlePaste}  
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === 'Escape') {
                    handleAddTodo();
                }}}
                />
              <Button  style={{width: "35%"}} variant="contained" color="secondary"  startIcon={<AddIcon />} onClick={handleAddTodo}>Add</Button>
            </div>
            
            <TodoList todos={todos} toggleTodo={toggleTodo} selectOnlyThis={selectOnlyThis}  updateTodo={updateTodo} />
            <div style={{marginBottom: "1vh", marginTop: "2vh"}}><Typography>{todos.filter(todo => !todo.complete).length} remaining</Typography></div>   
            <Button style={{backgroundColor: "#696969"}} variant="outlined" onClick={handleCopyList}>Copy Remaining</Button>

  {/* in the options, you can clear all and clear complete items */}
            <ClearButtons handleShowDblTapMsg={handleShowDblTapMsg} handleClearAllTodos={handleClearAllTodos} handleClearDoneTodos={handleClearDoneTodos} />
                
          </Grid>
          <Grid item xs={1} sm={2} />

        
        {/* xs={false} is the same as xs={0}, and it means on xtra small screens and up, we take up 0 of the 12 spaces. sm={2} means on small screens and up, we take up 2 of the 12 spaces */}
          {/* <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={2} />  */}
        </Grid>
      </Grid>
      <Snackbar open={snackIsOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert  
          onClose={handleClose} 
          icon={<span>
            <TouchAppIcon style={{fontSize: "20px"}} />
            <TouchAppIcon style={{fontSize: "20px"}} />
          </span>}
          severity="info"
        >
          <Typography style={{fontSize: "20px"}}> Must double tap button. </Typography>
        </Alert>
      </Snackbar>
      <Snackbar open={copySnackIsOpen} autoHideDuration={3000} onClose={handleCloseCopyMsg}>
        <Alert onClose={handleCloseCopyMsg} severity="success">
          <Typography> Copied list to clipboard </Typography>
        </Alert>
      </Snackbar>
    </Paper>
    );
    
}

export default App;
