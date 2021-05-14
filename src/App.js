import './App.css';
import { Fragment, useState } from 'react';
import {Header, Footer} from './Components/Layouts/Layouts';
import Exercises from './Components/Exercises/Exercises';
// import BaiTap from './Components/BaiTap/';
import {exercises, muscles} from './store';

function App() {
  const [task, setTask] = useState(exercises);

  const [muscleType, setMuscleType] = useState('');

  const [descriptionType, setDescriptionType] = useState('');

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
    setMuscleType(value);
  }

  const onSelectDescription = (title)  => {
    console.log(title);
    setDescriptionType(title);
  }

  return (
    <Fragment>
      <Header></Header>                         

      <Exercises exercises={getExercisesByMuscles()} muscleType={muscleType} onSelectDescription={onSelectDescription} descriptionType={descriptionType}></Exercises >
      {/* <BaiTap></BaiTap> */}

      <Footer muscles={muscles} onSelect={onSelect}></Footer>
    </Fragment>
  );
}

export default App;


// Khi import bất kì component nào mà trong component đó có file index.js thì chỉ cần import tới thằng cha chứa file index.js là tự động nó hiểu component đó file chính là index.js
// Trong trường hợp file index.js mà đổi thành tên khác thì phải import chi tiết tới file cần import thì nó mới hiểu