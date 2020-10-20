import React, { Component } from 'react';
import './customers.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



class Weather extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            isLoading: true,
            weather: []
        };
    }
    /*
        componentDidMount() {
            fetch('https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1151200.json')
                .then(res => res.json())
                .then(weather => this.setState({ weather }, () => console.log('Weather fetched...', weather)));
        }
        */


    componentDidMount() {
        fetch('https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1151200.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        isLoading: false,
                        items: result.items
                    }, console.log('Weather fetched...', result));
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
            <div >
                { this.state.isLoading ? <CircularProgress disableShrink size={24} thickness={4} color="inherit" /> : (
                    <Paper elevation={1}>





                        <Typography variant="h5" component="h3">Weather</Typography>

                        <Typography component="p">
                            Paper can be used to build surface or other elements for your application.
        </Typography>

                    </Paper>
                )}

            </div>
        );
    }
}




export default Weather;