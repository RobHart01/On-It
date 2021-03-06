import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// Imported Files
import Homepage from "./shared/pages/Homepage/Homepage";
import Nav from "./shared/components/navigation/Nav";
import CreateGoal from "./goal/components/CreateGoal/CreateGoal";
import GoalList from "./goal/components/GoalsList/GoalList";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
// CSS
import "./App.css";

function App() {
  // const [userGoals, setGoals] = useState([
  //   {
  //     id: 123,
  //     title: "Complete MERN project",
  //     description: "React Goal tracking project",
  //     totalTime: 50,
  //     completed: false,
  //     logs: [{ CompletedDescription: "2 Hours at Coffee Shop", time: 2 }]
  //   },
  //   {
  //     id: 234,
  //     title: "Complete VUE project",
  //     description: "Vue Peronsal project",
  //     totalTime: 25,
  //     completed: false,
  //     logs: [
  //       { Description: "1 hour at home", duration: 1 },
  //       { Description: "2 hours at home", duration: 2 }
  //     ]
  //   },
  //   {
  //     id: 445,
  //     title: "Complete MEAN project",
  //     description: "MEAN motivational project",
  //     totalTime: 5,
  //     completed: true,
  //     logs: [
  //       { Description: "3 hour at home", duration: 1 },
  //       { Description: "2 hours at home", duration: 2 }
  //     ]
  //   }
  // ]);
  const [enteredGoal, setEnteredGoal] = useState([]);
  const deleteGoalHandler = goal => {
    console.log(goal);
    // setEnteredGoal(prevGoals => {
    //   prevGoals.splice(goal);
    // })
  };
  const addGoalHandler = (goal, id) => {
    setEnteredGoal(prevGoals => [
      ...prevGoals,
      { id: Math.random().toString(), ...goal }
    ]);
  };

  console.log(enteredGoal);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={<Homepage />} />
          <Route exact path="/goals" render={props => <GoalList userGoals={enteredGoal} {...props}/>} />
          <Route exact path="/new/goal" render={props => <CreateGoal onAddGoal={addGoalHandler} {...props}/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <ul>
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     <Link to="/goals">Goals</Link>
//   </li>
//   <li>
//     <Link to="/new/goal">Create Goal</Link>
//   </li>
// </ul>;
