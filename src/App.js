// import logo from './bart.png';
// import './App.css';

import ToDoList from "./ToDoList";
import PersonalInfo from "./PersonalInfo";
import AudioPlayerButton from "./media";

const ToDo = ()=> {

  return <div class="ToDoContainer">
    <p> My Todo List is</p>
    <ToDoList />
    <PersonalInfo />
    <ToDoList />
    <AudioPlayerButton />
  </div>
}

export default ToDo;