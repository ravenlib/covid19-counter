import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function AppNavBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static' color='secondary'>
                <Toolbar variant='dense'>
                    <Typography variant='h6' color='inherit' className={classes.title}>
                        COVID-19 Counter
                    </Typography>
                    <IconButton href='https://github.com/pandabyte/covid19-counter' target='_blank' rel="noopener noreferrer">
                        <GitHubIcon />
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    githubLink: {
        color: 'black',
        textDecoration: 'none'
    }
}));