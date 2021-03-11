import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';



const Header = ({todoHistory, setTodoHistory, setTodos}) => {

    function handleUndo() {
        //todoHistory is an array of all todos excluding the current.
        if (todoHistory.length >= 1) {
            setTodoHistory(todoHistory.slice(0, todoHistory.length - 1));
            console.log("history is greater than 2");
            setTodos(todoHistory[todoHistory.length - 1]);
        }
        
    }

    return (
        // static makes app bar  always be at the top, and prevents other content from being hidden underneath it.
        // If you do this, give a margin of 0 to html body
        <AppBar position="static">
            <Toolbar>
                <Typography style={{flex: "1"}} variant="h4" >Groceries</Typography>
                <IconButton onDoubleClick={handleUndo} aria-label="undo">
                    <UndoIcon />
                    <Typography variant="body1">Undo</Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;