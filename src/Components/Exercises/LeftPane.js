import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Fragment } from 'react';

export default function LeftPane(props) {
  return (
    <Paper style={props.styles.Paper}>
        {props.exercises.map(([group,item],index) => 
          <Fragment key={index}>
            <Typography variant="h5" style={{textTransform: 'capitalize'}}>
              {group}
            </Typography>

            {/* Viết ngắn gọn */}
            {/* <List component="nav" aria-label="secondary mailbox folders">
              {item.map(({ title }) =>  // destructuring
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              )}
            </List> */}


            <List component="nav" aria-label="secondary mailbox folders">
              {item.map(value => 
                <ListItem button>
                  <ListItemText primary={value.title} />
                </ListItem>
              )}
            </List>
          </Fragment>
        )}
    </Paper>
  )
}
