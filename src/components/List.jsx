import React from 'react'

const List = props => {
    const style = {
        textDecoration: "line-through",
    }

    return (
    <li tabIndex="0" style={props.isComplete ? style : undefined}>
        {`${props.text}, ${props.due.toDateString()}`}
        <button onClick={props.completeTask}>Done</button>
    </li>);
}

export default List;