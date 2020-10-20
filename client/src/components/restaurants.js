import React, { Component } from 'react';
import './customers.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



class Items extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('/api/items')
            .then(res => res.json())
            .then(items => this.setState({ items }, () => console.log('Items fetched...', items)))
            .catch((error) => console.error(error));
    }




    render() {
        return (
            <div>





                <h2>Items</h2>
                <div>
                    <Grid container spacing={2} justify="center">

                        {this.state.items.map(items =>
                            <Grid key={items.restaurant_id} >


                                <Button variant="contained"> {items.name} </Button>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </div>
        );
    }
}



export default Items;