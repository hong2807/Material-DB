import React from 'react'
import Grid from '@material-ui/core/Grid';
import LeftPane from './LeftPane';
import RightPane from './RightPane';


const styles = {
  Paper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10, 
    height: 500, 
    overflowY: 'auto'
  }
}

export default function Exercises (props) {
  console.log('hong',props.exercises);
  console.log('hong',props.exercises[0][0]);
 
  return (
    <Grid container>
      <Grid item sm={4}>
        <LeftPane styles={styles} exercises={props.exercises} muscleType={props.muscleType}></LeftPane>
        
      </Grid>
      <Grid item sm={8}>
        <RightPane styles={styles}></RightPane>
      </Grid>
    </Grid>
  )
}


// Bình thường, đối với Function Component những biến thường được đặt sau export trước return (đặt sau như vậy sẽ luôn được render lại)
// Còn những biến đặt trước export là không muốn render lại
// Như trường hợp này biến styles chỉ có tác dụng css nên ko cần thiết render lại => đặt trước export
