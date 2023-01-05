import React from 'react';
import { useEffect, useState } from "react";
import ToDoListItem from "./TodoListItem";
import "./TodoList.css";


const port = 5001;

const ToDoList = () => {
    const [Tasks, setTasks] = useState([]);
    const [Task, setTask] = useState("");

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/v1/tasks`)
            const data = await response.json();
            console.log(data);
            setTasks(data)
        }
        try {
            fetchTasks();
        } catch (err) {
            console.log(err);
        }
    }, []);


    const addTask = () => {
        if (Task !== "") {
            let newtask = { id: Tasks.length + 1, name: Task, description: Task, isDone: false }
            setTasks([
                ...Tasks,
                newtask
            ]);
            fetch(`http://localhost:${port}/api/v1/tasks`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                //make sure to serialize your JSON body
                body: JSON.stringify(newtask)
            })
                .then((response) => {
                    console.log(response)
                });
        }
    };

    const deleteTask = (text, id) => {
        const newTasks = Tasks.filter((Task) => {
            return Task !== text;
        });

        setTasks(newTasks);
        fetch(`http://localhost:${port}/api/v1/tasks/${id}`, {
            method: "delete",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify(newTasks)
        })
            .then((response) => {
                console.log(response)
            });


    };


    return (


        <div className='App'>

            <h1> My ToDo List</h1>

            <div className='input-wrapper'>
                <input
                    type="text"
                    name="todo"
                    value={Task}
                    placeholder="Create a new todo"
                    onChange={(e) => {
                        setTask(e.target.value);
                    }}
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ul className='todo-list'>
                {Tasks.map(task =>
                    <>
                        <li>
                            <input type="checkbox" />
                            <ToDoListItem
                                key={task.id}
                                id={task.id}
                                name={task.name} />
                            <textarea>description for my task</textarea>
                            <button className="delete-button" onClick={() => { deleteTask(task, task.id); }}>
                                Delete task {task.id}
                            </button>
                        </li>
                    </>
                )}
            </ul>

        </div>

    )
};


export default ToDoList;