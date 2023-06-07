import React from 'react'

const ReactHooksSynchronously = () => {
  return (
    <article className="mt-24">
      <header>
        <h1 className="text-4xl text-opacity-80 tracking-wide text-white font-semibold">Understanding Redux Synchronously</h1>
        <div className="h-3"></div>
        <p className="published-date tracking-wider text-lg text-[#A8ADB1] font-mono">February 26, 2022 • 8 mins • Reading</p>
        <div className="h-6"></div>

      </header>

      <main className='text-lg font-light tracking-wider text-white text-opacity-80 flex flex-col gap-6'>
        <p className="">
          Passing data to a component is exhausting especially when the data is needed several components deep. This is called prop drilling, the same data passes through nested components to a specific child component, in between, the components receive the data just to pass it to another child component. It can be very tedious if you have deep nested components.
        </p>
        {/* <div className="h-3"></div> */}
        <p className="">
          Redux helps prevent prop drilling and managing state across many components through a store. A store is a global state that spans the whole application which can be accessed by components.
        </p>

        <h1 className="text-2xl text-opacity-80 tracking-wide text-white font-semibold">Store</h1>
        <p className="font-mono text-base md:text-lg">./src/app/Store.js</p>

        <pre className='p-3 bg-[#161B22] text-base overflow-x-scroll'>
          {`import { configureStore } from "@redux/toolkit";
export const store = configureStore({
    reducer: {
      counter: counterReducer 
    },
  })`}
        </pre>

        <h1 className="text-2xl text-opacity-80 tracking-wide text-white font-semibold">Slice</h1>
        <p>A collection of Redux reducer logic and actions for a single feature in your app. A state can be split/slice into parts to handle separate concerns. Slicing a part of the store allows us to make logic that only affects data needed for a feature.</p>
        <p className="font-mono text-base md:text-lg">./src/features/counter/counterSlice.js</p>

        <pre className='p-3 bg-[#161B22] text-base overflow-x-scroll'>
          {`import { configureStore } from "@redux/toolkit";
export const store = configureStore({
    reducer: {
      counter: counterReducer 
    },
  })`}
        </pre>

        <h1 className="text-2xl text-opacity-80 tracking-wide text-white font-semibold">Reducer</h1>
        <p>{"Reducers is a part of slice, which allows modification of a 'sliced' state (a part of state the reducers are responsible of)."}</p>
        <p className="font-mono text-base md:text-lg">./src/features/counter/counterSlice.js</p>

        <pre className='p-3 bg-[#161B22] text-base overflow-x-scroll'>
          {`import { createSlice } from "@redux/toolkit";

// in slice files, createSlice scaffolds the actions needed for interacting reducer.
// slice files should export the slice, actions, and the reducer as default

export const counterSlice = createSlice({
  name: "counterName", // name will be used as a suffix to interact with its logic outside of the file. (counterName/reducersKey)
  initialState: {
    value: 0,
  },
  reducers: {
    // keys of reducers are used to generate action types
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// createSlice returns an object {actions: {...}, ...otherProps}
// the actions in counterSlice.actions are actionCreators.
// actionCreators are functions that returns an object required for a dispatch e.g. {type: <reducerKeys>, payload: <value>}
<!--  the payload is optional, if used, a value can be passed as parameter to action creators e.g. incrementByAmount(2)-->
<!--  using these in another file: dispatch(incrementByAmount(2)) -> dispatch({type: "incrementByAmount", payload: 2}) -->

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`}
        </pre>
        <p>Slices enable us to combine state and logic through reducers to create a store. We have the necessary store files that include the configuration and slices to handle specific parts of the store so <span className='font-bold'>How can we globally access the store created by combining state and logic using reducers through slices?</span></p>
        <p>The component makes the Redux store available to any nested components that need to access the Redux store. It typically contains the top level component and has a property of store which makes the store accessible to any components via redux hooks (e.g. useDispatch, useSelector)</p>
        <p className="font-mono text-base md:text-lg">./src/index.js</p>
        <pre className='p-3 bg-[#161B22] text-base overflow-x-scroll'>
          {`import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './app/store' 
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)`}
        </pre>

        <h1 className="text-2xl text-opacity-80 tracking-wide text-white font-semibold">useSelector & useDispatch hooks</h1>
        <p>These hooks allows us to interact with the store from any component contained by the Provider Context component.</p>
        <p className="text-lg font-medium">useSelector(selector: Function, equalityFn?: Function)</p>
        <p>It allows a component to read data from store. This hook subscribe to the store and uses the function&apos;s return value to extracts data from the store.</p>
        <pre className='p-3 bg-[#161B22] text-base overflow-x-scroll'>
          {`import {useSelector} from 'react-redux';
 
 const componentA = () => {
  const var1 = useSelector((state) => state.value);
  
  // ...render the component using the var1
  return (
   <div>
    <p>{var1}</p>
   </div>
  )`}
        </pre>


        <p className="text-lg font-medium">useDispatch()</p>
        <p>It allows a component to modify the store. This hook returns the dispatch function connected to the store and is used to trigger state changes.</p>
        <pre className='p-3 bg-[#161B22] text-base overflow-x-scroll'>
          {`import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './src/features/counter/counterSlice.js';
 
const componentA = () => {
 const var1 = useSelector((state) => state.value);
 const dispatch = useDispatch();
 
 // ...render the component using the var1
 // add interaction to store using HTML tags for user interaction
 return (
   <div>
    <p>{var1}</p>
    <button onClick={() => {dispatch({type:"increment"}}}>Increment</button>
    // or use the actionCreator generated by createSlice.
    <button onClick={() => {dispatch(increment()}}>Increment</button>
   </div>
  )
}`}
        </pre>

      <p>{`These powerful hooks simplifies state management in React applications.
      useSelector allows components to efficiently access and subscribe to specific portions of the Redux store.
       On the other hand, useDispatch provides a way to modify state through dispatch actions from components, enabling seamless interaction with the Redux store.`}
       </p>

       <hr className='' />
       <p>This article focuses on the synchronous aspect of Redux. Stay tuned for the upcoming article that will cover the asynchronous part of Redux. </p>
      </main>
    </article>
  )
}

export default ReactHooksSynchronously