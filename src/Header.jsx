import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';



const Header = ({todoHistory, setTodoHistory, setTodos, selectOnlyThis, handleUndo, handleShowDblTapMsg}) => {



    return (
        // static makes app bar  always be at the top, and prevents other content from being hidden underneath it.
        // If you do this, give a margin of 0 to html body
        <AppBar position="fixed">
            <Toolbar>
                <Typography style={{flex: "1"}} variant="h4" >Groceries</Typography>
                {todoHistory.length > 0 ? (
                    <IconButton onClick={handleShowDblTapMsg} onDoubleClick={handleUndo} aria-label="undo">
                        <UndoIcon />
                        <Typography variant="body1">Undo</Typography>
                    </IconButton>
                ) : (
                    <IconButton style={{opacity: "0.55"}} aria-label="undo">
                        <UndoIcon />
                        <Typography variant="body1">Undo</Typography>
                    </IconButton>
                )}

            </Toolbar>
        </AppBar>
    );
};

export default Header;