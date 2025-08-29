import React, { useState,useEffect } from "react";
import { renderToNodeStream } from "react-dom/server";

//create your first component
const Home = () => {
	// Todo list
	// that contanin a list of task
	// reieved from user input

	const [groceries, setGroceries] = useState([]);
	const [userInput, setUserInput] = useState("");

	


	useEffect(() =>{
		getUser()
	}, [])
	const addToList = (e) => {
		
	};
	console.log(groceries)
	
	const updateBoughtItem = (index) => {
		
	};

	const removeGrocery = (i) => {
		
	};

	const getUser = async() =>{
		let repsonse = await fetch('https://playground.4geeks.com/todo/users/ByronRolle')
		let data = await repsonse.json()
		if(typeof data.name != 'undefined') {
			setGroceries(data.todos)
			console.log(data.name)
		}
		else if (typeof data.detail != 'undefined ') {
			let repsonse = await fetch('https://playground.4geeks.com/todo/users/ByronRolle',{
				method: "POST",
				headers: {"Content-type": "application/json"},

			})
			let data = await repsonse.json()
		}
	}
	return (
		<div className="text-center mt-5 h-100">
			<input
				type="text"
				onChange={(e) => setUserInput(e.target.value)}
				value={userInput}
			/>
			<button onClick={(e) => addToList(e, userInput)}>Add to List</button>

			{/* array of todos displayed as list*/}
			<ul>
				{groceries?.map((grocery, index) => {
					if(grocery.bought != true) {
					return <li key={index}>{grocery.value}<span onClick={() => removeGrocery(index)}> ❌ </span></li>
					}
			})}
			</ul>
		</div>
	);
};

export default Home;