import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { addItemToShelf } from '../../redux/actions/shelfActions';

const mapStateToProps = reduxState => ({
    reduxState,
});


class AddPage extends Component {

    constructor(props) {
    super(props);
    this.state = {
        item: {
            description: '',
            image_url: '',
            person_id: 0
        }
    }
}
    
    handleChange = (propName) => {
        return event => {
            console.log('event happeneded')
            this.setState({
                item:{
                    ...this.state.item, 
                    [propName]: event.target.value
                }
            })
        };
    }

    // get_shelf_users
    
    addNewItem = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_ITEM', payload: this.state.item})
        this.setState({
            item: {
                description: '',
                image_url: '',
                person_id: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Add a new item!</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewItem}>
                    <input type='text'
                            onChange={this.handleChange} placeholder="description"/>
                    <input type='text'
                            onChange={this.handleChange} placeholder="img URL"/>
                    <input onclick={this.handleClick} type="submit"/>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddPage);
