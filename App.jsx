/*ReactJS
  ReactJs is all about reusing the Components and
   the componments is a small section of code that can include html and js and 
   our function return the code and make it reusable. 

*/






/*  Button.jsx - How to style React Components with Css
(not including external frameworks or preprocessors)

1.External
2.Modulus
3.Inline

*/

/*Props
  read-only properties that are shared between components.
  A parent component can send data to a child component.
  <Component key = value />
*/

/*PropTypes
  A mechanism that ensures that the passed value is of the correct datatype.
  age:prototypes.number
*/

/*defaultProps
  default values for props in case they are not passed from the parent component.
  name:"Guest"
*/

/*Keys and Lists
Keys:
Purpose: Keys help React identify which items have changed, been added, or removed.

Lists
Lists are just arrays of elements that you render in JSX
*/


// import Button from "./button";
// import Card from "./card";
// import Footer from "./footer";
// import LearnComponents from "./LearnComponents";
// import Header from "./Header";
// import Button from "../Button-module/Button";
// import React from "react";
// import Student from "./Student";
// import ClassComp from "./ClassComponent/ClassComp";
// import KeysComp from "./KeysComp";
// import Form from "./Form";
// import ButtonPro from "./ButtonPro";
// import PropsEg from "./FuncComponent/PropsEg";
// import StateEg from "./FuncComponent/StateEg";
// import Emoji from "./Emoji";
// import EventHandling from "./FuncComponent/EventHandling";
// import Food from "./FuncComponent/Food";
//  import TaskManager from "./FuncComponent/TaskManager/TaskManager";
// import Lifecycle from "./Lifecycle";
// import SimpleForm from "./FuncComponent/SimpleForm";
// import TodoList from "./Todo";
// import Props from "./Props";
// import Pagination from "./Pagination";
// import Router from "./Router";
import Simpletheme from '../Hooks/Simpletheme';
import { ThemeProvider } from "../Hooks/ThemeProvider";


function App() {

  return (
    <>
      <div>
        {/* <Props status="success" />
         <Props status="error" />
        <Props status="warning" />
         <Props status="other" /> */}
      </div>

      {/* <LearnComponents/> 
       <Header />
      <Footer />
       <Card />
      <Button />
       */}
      {/* <Student name="Sanjay" age="28" isStudent={false}/>
 <Student name="nithish" age={24} isStudent={false}/>
 <Student name="Dhiva" age={27} isStudent={true}/>
 <Student name="kathir" age={25} isStudent={true}/>
 <Student /> */}
      {/* 
< ClassComp />
 <KeysComp />

 */}
      {/* <KeysComp /> */}
      {/* <Form />   */}
      {/* <Emoji  btn="HAPPY" defaultEmoji= "😁" />
<Emoji  btn="SAD" defaultEmoji= "😔" />
 <Emoji  btn="ANGRY" defaultEmoji= "😡" /> */}
      {/* <ButtonPro /> */}
      {/* <StateEg /> */}
      {/* <PropsEg title ="Welcome to the example of props"/> */}
      {/* <EventHandling /> */}
      {/* <SimpleForm /> */}
      {/* <Food /> */}
      {/* <TaskManager /> */}
      {/* <Lifecycle /> */}
      {/* <TodoList /> */}
      {/* <Form />  */}
      {/* <Pagination /> */}
      {/* <Router/> */}
      <ThemeProvider>
        <Simpletheme />
      </ThemeProvider>


    </>
  )
}

export default App;



