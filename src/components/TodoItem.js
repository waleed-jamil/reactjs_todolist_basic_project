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
        return (
            <div style = {this.getStyle()}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
} 


//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;
