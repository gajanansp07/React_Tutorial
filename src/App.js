// import logo from './logo.svg';
import './App.css';
// import MyComponant from './Componants/Hello';//Default Export
// import  Hello  from './Componants/Hello'; //Default Export
// // import {Hello} from './Componants/Hello'; //Named Export
// import Welcome from './Componants/Welcome';
// import WithoutJXS from './Componants/WithoutJXS'
// import Greet from './Componants/Greet';
// import Message from './Componants/Message';
// import Counter from './Componants/Counter';
// import GreetD from './Componants/DistructuringProps';
// import FunctionClick from './Componants/FunctionClick';
// import EventBind from './Componants/EventBind'
// import ClassClick from './Componants/ClassClick';
import ParentComponent from './Componants/ParentComponent';
function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <Message /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <Counter /> */}
    {/* <GreetD name="Ganesh" language="Malayalam"/> */}
      
      {/* <Greet name="Mahesh" language="All" > <p> This is Children Property </p> </Greet>
      <Greet name="Gajanan" language="Marathi" ><button>Super</button></Greet>
      <Greet name="Gitimoni" language="Assamise" />
      <Welcome name="Gitimoni" language="Assamise"/>
      <Welcome name="Gajanan" language="Marathi"/>
      <Welcome name="Mahesh" language="All"/>
      <Hello />
      <WithoutJXS /> */}
    </div>
  );
}

export default App;
