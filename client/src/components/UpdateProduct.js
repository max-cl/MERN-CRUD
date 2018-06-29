import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { updateProdruct } from '../redux/actions/product-actions';
import axios from 'axios';
import { Segment, Form, Button } from 'semantic-ui-react';

const categories = [
    { key: '1', text: 'Pasta', value: 'Pasta' },
    { key: '2', text: 'Meat', value: 'Meat' },
    { key: '3', text: 'Dairy products', value: 'Dairy products' }
  ]

class UpdateProduct extends Component {
  constructor(props) {
      super(props);
      this.state = {
        id: '',
        nameProduct: '',
        categoryProduct: '',
        dateExpire: '',
        priceProduct: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);   
      this.fetchProductById = this.fetchProductById.bind(this);
  }


    componentWillMount = () => {        
        this.fetchProductById();
    }

    fetchProductById = () => {
        
        axios.get(`http://localhost:5001/product/fetch-product-id/${this.props.match.params.id}`)
        .then(res => {
            this.setState({ 
                id: res.data._id,
                nameProduct: res.data.nameProduct,
                categoryProduct: res.data.categoryProduct,
                dateExpire: res.data.dateExpire,
                priceProduct: res.data.priceProduct
            });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    handleChange = (e, { value }) => {
        this.setState({
          [e.target.name]: value
        }, () => { // arrow function, ES2015
          console.log(this.state);
        });
    }

    handleChange = (e, { value }) => {
        this.setState({
          [e.target.name]: value
        }, () => { 
          console.log(this.state);
        });
    }


    handleUpdate = (e) => {
        e.preventDefault();
        const idProduct = this.state.id;
        const nameProduct = this.state.nameProduct;
        const categoryProduct = this.state.categoryProduct;
        const dateExpire = this.state.dateExpire;
        const priceProduct = this.state.priceProduct;
        this.props.updateProdruct(idProduct, nameProduct, categoryProduct, dateExpire, priceProduct);       
    }

  render(){    
    const edited   = this.props.edited;
        if(edited === true){
            console.log("Product has been Edited");
            return <Redirect to='/display-products'/>;
        } 

    return (
      <div>
        <Segment>
        <Button as={Link} to={'/display-products'} primary>Back to Products List</Button>
        </Segment>
        <Form onSubmit={this.handleUpdate}>
            <Form.Input fluid 
                type="text"  
                name="nameProduct" 
                placeholder='Name of the product' 
                width={6} 
                onChange={ this.handleChange } 
                value={ this.state.nameProduct } 
            />
            <Form.Select fluid 
                name="categoryProduct" 
                value={this.state.categoryProduct} 
                options={categories} 
                placeholder={ categories.filter((a) => { return a['value'] === this.state.categoryProduct })[1] } 
                width={6} 
                onChange={(e, { value }) => this.setState({ categoryProduct: value })} 
            />
            <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                type="text" 
                name="dateExpire" 
                placeholder='Date Expire' 
                onChange={ this.handleChange } 
                value={ this.state.dateExpire }
                width={6} 
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
                width={6} 
            />
            <Button color='green' type="submit">Update product</Button>
        </Form>
    </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        edited : state.productStore.edited
    }
  }
  
export default connect(mapStateToProps, { updateProdruct })(UpdateProduct);