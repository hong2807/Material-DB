import './App.css';
import { Fragment, useState } from 'react';
import {Header, Footer} from './Components/Layouts/Layouts';
import Exercises from './Components/Exercises/Exercises';
import {exercises, muscles} from './store';

function App() {
  const [task,useTask] = useState(exercises);

  const getExercisesByMuscles = () => {
    return Object.entries(
      task.reduce((newExercises,item,index) => {
      
      const { muscles } = item;
      
      newExercises[muscles] = newExercises[muscles] ? [...newExercises[muscles],item] : [item]

      return newExercises
    }, {})
    )
  }

  console.log(getExercisesByMuscles());

  const onSelect = (value)  => {
    console.log(value);
  }

  return (
    <Fragment>
      <Header></Header>                         

      <Exercises exercises={getExercisesByMuscles()}></Exercises>

      <Footer muscles={muscles} onSelect={onSelect}></Footer>
    </Fragment>
  );
}

export default App;
