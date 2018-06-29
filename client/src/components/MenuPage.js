import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class MenuPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: 'home'
        };
        
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;
        return (
            <Menu size='small' inverted>
                <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item as={Link} to='/add-product' name='add-product' active={activeItem === 'add-product'} onClick={this.handleItemClick} />
                <Menu.Item as={Link} to='/display-products' name='display-products' active={activeItem === 'display-products'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                </Menu.Menu>
            </Menu>
        )
    }
}
  
export default MenuPage;