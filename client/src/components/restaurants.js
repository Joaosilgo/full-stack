import React, { Component } from 'react';
import './customers.css';
//import Button from '@material-ui/core/Button';
//import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';



class Items extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            isLoading: true,
            items: []
        };
    }


    componentDidMount() {
        fetch('/api/items')
            .then(res => res.json())
            .then(items => this.setState({ items, isLoading: false }, () => console.log('Items fetched...', items)));

    }




    render() {
        return (


            this.state.isLoading ? <CircularProgress disableShrink size={24} thickness={4} color="inherit" /> : (

                <div>



                    <h2>Items</h2>

                    <div>

                        {/*  <Grid container spacing={2} justify="center"> */}
                        <ul>

                            {this.state.items && this.state.items.map((items, index) =>
                                // <Grid key={items.restaurant_id} >
                                //     <Button variant="contained"> {items.name} </Button>
                                //  </Grid>


                                <li key={items.restaurant_id} > {items.name}</li>

                            )}


                        </ul>

                        {/*   </Grid> */}

                    </div>


                </div>
            )
        );
    }
}



export default Items;