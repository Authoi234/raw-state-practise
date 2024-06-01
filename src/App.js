import { createContext, useState } from 'react';
import './App.css';
import Parent from './pages/Parent';
import ShortForm from './pages/ShortForm';
import Child from './pages/Child';
import GrandChild from './pages/GrandChild';
import LongForm from './pages/LongForm';
import Counter from './pages/Counter';

export const COUNTER_CONTEXT = createContext();

function App() {
  // const [count, setCount] = useState(0)
  return <LongForm></LongForm>
  // return <Counter></Counter>
  // return <ShortForm></ShortForm>
  // return <Parent></Parent>
  // return <Child></Child>
  // return <GrandChild></GrandChild>
  // const value = {
  //   count,
  //   setCount
  // }

  // return (
  //   <COUNTER_CONTEXT.Provider value={ value }>
  //     <div className="App mt-20 mx-20 flex justify-center items-center">
  //       <div>
  //         <Parent></Parent>
  //       </div>
  //     </div>
  //   </COUNTER_CONTEXT.Provider>
  // );
}

export default App;
