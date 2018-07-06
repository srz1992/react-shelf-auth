import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { addItemToShelf } from '../../redux/actions/shelfActions';
import { fetchUser } from '../../redux/actions/userActions';


const mapStateToProps = state => ({
    user: state
  });
  

class AddPage extends Component {


    componentDidMount() {
        this.props.dispatch(fetchUser());
      }
    

    constructor(props) {
    super(props);
    this.state = {
        item: {
            description: '',
            image_url: '',
            person_id: this.props.user.id
        }
    }
}
    
    handleChange = (event) => {
        
        console.log(this.state.item);
        this.setState({
            item:{
                ...this.state.item, [event.target.name]: event.target.value
            }
        })
        
        };
    

    // get_shelf_users
    
    addNewItem = event => {
        console.log('event:', event);
        console.log('state:', this.state.item);
        
        this.props.dispatch(addItemToShelf(this.state.item));
        event.preventDefault();
        this.setState({
            item: {
                description: '',
                image_url: ''
            }
        });
    }

    render() {
        console.log('user:', this.props.user );
        return (
            <div>
                <h2>Add a new item!</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewItem}>
                    <input type='text'
                            onChange={this.handleChange} name="description" placeholder="description"/>
                    <input type='text'
                            onChange={this.handleChange} name="image_url" placeholder="img URL"/>
                    <input onClick={this.addNewItem} type="submit"/>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddPage);
