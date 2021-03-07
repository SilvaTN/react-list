import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';



const Header = ({canDelete, setCanDelete}) => {
    return (
        // static makes app bar  always be at the top, and prevents other content from being hidden underneath it.
        // If you do this, give a margin of 0 to html body
        <AppBar position="static">
            <Toolbar>
                <Typography style={{flex: "1"}} variant="h4" >To dos</Typography>
                <IconButton onDoubleClick={() => setCanDelete(!canDelete)} aria-label="settings">
                    <Typography variant="body1">Toggle Clear</Typography>
                    <DoubleArrowIcon fontSize="medium" />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;