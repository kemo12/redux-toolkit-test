import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementAmount } from './redux/counterSlice';
const App = () => {
	const [Value,setValue]=useState(0);
	const counter=useSelector((state)=>state.counter);
	const counterDispatch=useDispatch();
	const handleIncrement=()=>{
		counterDispatch(increment(1))
	}
	const handleDecrement=()=>{
		counterDispatch(decrement(1))
	}
	const hanldleChange=(e)=>{
		setValue(e.target.value)
	}
	const handleIncrementAmount=()=>{

		counterDispatch(incrementAmount(parseInt(Value) ))
	}
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
			<p>counter: {counter}</p>
			<button onClick={handleIncrement}>inrement</button>
			<button onClick={handleDecrement}>decrment</button>
			<br/>
			<input type="number" onChange={hanldleChange} value={Value} placeholder='enter value'/>
			<button onClick={handleIncrementAmount}>increment amount</button>
			<button>decrement amount</button>

		</div>
	);
};

export default App;
