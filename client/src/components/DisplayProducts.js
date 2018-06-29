import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from '../redux/actions/product-actions';
import { Grid, Segment } from 'semantic-ui-react';

import TableProducts from './TableProducts';

class DisplayProducts extends Component {
    constructor(props) {
        super(props);

        this.deleteClick = this.deleteClick.bind(this);
    }
    
    
    componentWillMount = () => {
        this.props.fetchProducts();
    }


    deleteClick = (e, { value }) => {
        console.log("Delete: ",value);
        const idProduct = value;
        this.props.deleteProduct(idProduct);
    }
    

    render() {   
        
        const products = Object.keys(this.props.products).length;
        
        return (
            <div>
                <Segment textAlign='center'>
                    Products
                </Segment> 
                {
                    products > 0 ? 
                    <Grid celled>
                        <Grid.Row>            
                            <Grid.Column width={16}>
                                <TableProducts 
                                    objects={this.props.products} delProduct={this.deleteClick}
                                />  
                            </Grid.Column>             
                        </Grid.Row>
                    </Grid>
                    : <Grid celled><h3>There are not Products registered</h3></Grid>
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        products : state.productStore.products
    }
  }
  
export default connect(mapStateToProps, { fetchProducts, deleteProduct })(DisplayProducts);