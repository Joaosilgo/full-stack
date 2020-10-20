import React, { Component } from 'react';
import './customers.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';



class Customers extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      isLoading: true,
      customers: []
    };
  }


  /*
  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
  }
  */

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            isLoading: false,
            items: result.items
          }, console.log('Customers fetched...', result));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            isLoading: false,
            error
          });
        }
      )
  }





  render() {
    return (
      <div>





        <h2>Customers</h2>
        { this.state.isLoading ? <CircularProgress disableShrink size={24} thickness={4} color="inherit" /> : (
        <div>
          <Grid container spacing={2} justify="center">

            {this.state.customers.map((customer, index) =>
              <Grid key={customer.id}  >
                <Button variant="contained"> {customer.firstName} {customer.lastName}</Button>
              </Grid>
            )}
          </Grid>
        </div>
        )}
      </div>
    );
  }
}


/*

<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

*/

export default Customers;