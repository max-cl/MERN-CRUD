import React, { Component } from 'react';
import { connect } from "react-redux";
import { addProduct } from '../redux/actions/product-actions';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
//import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


const categories = [
    { key: '1', text: 'Pasta', value: 'Pasta' },
    { key: '2', text: 'Meat', value: 'Meat' },
    { key: '3', text: 'Dairy products', value: 'Dairy products' }
  ]
  

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameProduct: '',
            categoryProduct: '',
            dateExpire: null,
            priceProduct: ''
            //datePay: moment(), //Si quiero ver el dia actual en el calendario al iniciarlo
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
    }

    componentWillUnmount() {
        this.setState({
            nameProduct: '',
            categoryProduct: '',
            dateExpire: null,
            priceProduct: ''
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        const dateExpire = this.state.dateExpire.format("DD-MM-YYYY");
        this.props.addProduct(
                                this.state.nameProduct,
                                this.state.categoryProduct,
                                dateExpire,
                                this.state.priceProduct
                            );
    }

    handleChange = (e, { value }) => {
        this.setState({
          [e.target.name]: value
        }, () => {
          console.log(this.state);
        });
    }

    handleChange1 = (date) => {
        this.setState({
            dateExpire: date
        });
    }

    render() {  
        
        return (
            <div className='login-form'>
                {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
                */}
                <style>
                {`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                    height: 100%;
                    }
                `}
                </style>
                <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
                >
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src={require('../logo.svg')} />
                    {' '}Add Products
                </Header>
                <Form size='large' onSubmit={this.handleClick}>
                    <Segment stacked>
                    
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            type="text" 
                            name="nameProduct" 
                            placeholder='Name of the product' 
                            onChange={ this.handleChange } 
                            value={ this.state.nameProduct }
                        />
                        
                        <Form.Select fluid 
                            name="categoryProduct" 
                            options={categories} 
                            placeholder='Category products' 
                            onChange={(e, { value }) => this.setState({categoryProduct: value})} 
                        />
                        
                        
                        <DatePicker
                            dateFormat="DD-MM-YYYY"
                            placeholderText="Date expire"
                            selected={this.state.dateExpire}
                            onChange={this.handleChange1}
                            //maxDate={moment()}
                            todayButton={"Today"}
                        />

                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            type="text" 
                            name="priceProduct" 
                            placeholder='Price of the product' 
                            onChange={ this.handleChange } 
                            value={ this.state.priceProduct }
                        />

                    <Button color='teal' fluid size='large' type="submit">Add Product</Button>
                    </Segment>
                </Form>
                </Grid.Column>
                </Grid>
            </div>
        )
    }
}

  
export default connect(null, { addProduct })(AddProduct);
