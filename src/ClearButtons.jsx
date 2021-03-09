import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button, Grid} from "@material-ui/core";

function ClearButtons({handleClearDoneTodos, handleClearAllTodos}) {
    return (
        <Grid item container style={{marginTop: "2vh"}} >
            <Button style={{backgroundColor: "#696969"}} variant="outlined" startIcon={<DeleteOutlineIcon />} onDoubleClick={handleClearDoneTodos}>Clear Ticked</Button>
            <Button style={{backgroundColor: "#696969"}} variant="outlined" startIcon={<DeleteIcon />} onDoubleClick={handleClearAllTodos}>Clear All</Button>
        </Grid>
    );


}

export default ClearButtons;