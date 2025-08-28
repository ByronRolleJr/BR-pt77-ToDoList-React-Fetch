import React, { useState } from "react";
import { renderToNodeStream } from "react-dom/server";

//create your first component
const Home = () => {
	// Todo list
	// that contanin a list of task
	// reieved from user input

	const [groceries, setGroceries] = useState([]);
	const [userInput, setUserInput] = useState("");
	// item = dressing
	const addToList = (e) => {
		e.preventDefault();
		let grocery = {value: userInput, bought: false}
			setGroceries([...groceries, grocery]);
		//with spread operator = ["apples","bananas","corn"], "dressing"
		//without spread = ["apples","bananas","corn", "dressing"]
		setUserInput("")
	}
	console.log(groceries)
	
	const updateBoughtItem = (index) => {
		let thisGrocery = groceries
		let groceryList = groceryList[index];
		thisGrocery.bought = true; 
		setGroceries(groceryList);
	}

	const removeGrocery = (i) => {
		const newArray = groceries.filter((grocery,index) => index !== i);
		setGroceries(newArray);
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