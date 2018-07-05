import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { fetchUser } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import axios from 'axios';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './UserPage.css'

const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      shelf: []
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchUser());
    this.getShelfItems();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  getShelfItems = () =>{
    console.log('getShelfItems');
    axios.get('/api/shelf')
    .then((response)=>{
      console.log('this works');
      
      console.log('response.data:', response);
      this.setState({shelf: [...response.data]})
      console.log('this.state:', this.state);
      
    }).catch((error)=>{
      console.log('error getting shelf items! ask Bill what is wrong');
    })
    ;
    
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <GridList padding={0} margin={0} className="gridList" cellHeight={160} cols={4}>
          {this.state.shelf.map((item)=> 
              <GridListTile key={item.id} cols={2}><img alt={item.description} src={item.image_url} /></GridListTile>
            )}
          </GridList>
          <Paper>
            <h4>Here is what is on the shelf:</h4>
          
         
          
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>description</TableCell>
                <TableCell>image_url</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {this.state.shelf.map((item)=> <TableRow key={item.id}>
              <TableCell>{item.description}</TableCell>
              <TableCell><img alt={item.description} src={item.image_url} /></TableCell>
            </TableRow>)}
            </TableBody>
          </Table>

          </Paper>
          
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

