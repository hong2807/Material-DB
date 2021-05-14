import React from 'react';
import Paper from '@material-ui/core/Paper';

export default function RightPane(props) {
    console.log(props.exercises);
    let newExercises;
    props.exercises.forEach((item,index) => {
      const title = item[1].find((value) => value.title === props.descriptionType);
      if (title) {
        newExercises = title;
      }
    })
    console.log('newExercises',newExercises);
   
    return (
        <Paper style={{ height: '100%', padding: 20 }}>
            {/* {props.exercises.map(([group, item], index) => { */}
            {/* {newExercises.map(([group, item], index) => {
              return item.map((value) => <p>{value.description} </p>)
            })} */}
        </Paper>
    );
}
