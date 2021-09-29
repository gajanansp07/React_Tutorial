// import logo from './logo.svg';
import './App.css';
import Inline from './Componants/Inline';
// import ConditionalRendaring from './Componants/ConditionalRendaring';
// import ListRendaringUsingMap from './Componants/ListRendaringUsingMap';
// import NameList from './Componants/NameList';
import StyleSheet from './Componants/StyleSheet';
import StylModule from './Componants/StylModule';
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
// import ParentComponent from './Componants/ParentComponent';
// import ShopingList from './Componants/ShopingList';
// import ConditionalRendaring from './Componants/ConditionalRendaring';
function App() {
  return (
    <div className="App">
      <StyleSheet primary={true} />
      <Inline />
      <StylModule />
      {/* <NameList /> */}

      {/* <ListRendaringUsingMap /> */}
      {/* <ConditionalRendaring /> */}
      {/* <ParentComponent />
      <ShopingList name="Ganesh" /> */}
      {/* <Message /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <Counter /> */}
    {/* <GreetD name="Ganesh" language="Malayalam"/> */}
      
      {/* <Greet name="Mahesh" language="All" > <p> This is Children Property </p> </Greet> */}
      {/* <Greet name="Gajanan" language="Marathi" ><button>Super</button></Greet> */}
      {/* <Greet name="Gitimoni" language="Assamise" /> */}
      {/* <Welcome name="Gitimoni" language="Assamise"/> */}
      {/* <Welcome name="Gajanan" language="Marathi"/> */}
      {/* <Welcome name="Mahesh" language="All"/> */}
      {/* <Hello /> */}
      {/* <WithoutJXS /> */}
    </div>
  );
}

export default App;
