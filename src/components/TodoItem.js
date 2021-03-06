import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            paddig: '10px',
            borderBottom: '1px #ccc dotted',
            //Dynamic Styling
            textDecoration: this.props.todo.completed?
            'line-through' : 'none'
        }
    }

    render() {

        const { id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                <p>
                    
                <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}></input>
                {' '}
                { title }
                <button onClick={this.props.delItem.bind(this, id)} style={btnStyle}>Delete</button>

                </p>
            </div>
        )
    }
} 


//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '3px 5px',
    cursor: 'pointer',
    float: 'right',
}

export default TodoItem;
