import React, {FC} from "react";
import {Box, Typography} from "@material-ui/core";


const Header:FC = () => {
    return(
        <Box>
            <Typography style={{fontSize: '35px', textAlign: 'left'}} variant="h1" component="h1">
                To-Do List App
            </Typography>
        </Box>
    )
}

export default Header