import React from 'react';

const TodoListItem = props => {
    return (
        <>
            <p>{props.id}. {props.name} </p>
        </>
    )
};
export default TodoListItem;