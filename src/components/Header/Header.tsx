import React, {FC} from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import {HeaderProps} from "../../types";

const Header:FC<HeaderProps> = ({todoCount}) => {
    const useStyles = makeStyles({
        heading: {
            fontSize: '3rem',
            textAlign: 'left',
        }
    })
    const classes = useStyles();
    return(
        <Box>
            <Typography className={classes.heading} component="h1">
                To-Do List {todoCount}
            </Typography>
        </Box>
    )
}

export default Header