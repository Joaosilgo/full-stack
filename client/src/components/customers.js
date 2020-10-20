import React, { Component } from 'react';
import './customers.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
  }




  render() {
    return (
      <div>





        <h2>Customers</h2>
        <div>
          <Grid container spacing={2} justify="center">

            {this.state.customers.map((customer, index) =>
              <Grid key={customer.id}  >
                <Button variant="contained"> {customer.firstName} {customer.lastName}</Button>
              </Grid>
            )}
          </Grid>
        </div>
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