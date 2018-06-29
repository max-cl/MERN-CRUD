import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

const TableProducts = ({ objects, delProduct }) => { 

    return (
        <div> 
            
            <Table celled inverted selectable>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Date expire</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>            
                {   
                    objects.map((object, id) => 
                    {
                    return(
                        <Table.Row key={id}>
                            <Table.Cell>
                                {object.nameProduct}
                            </Table.Cell>
                            <Table.Cell>
                                {object.categoryProduct}
                            </Table.Cell>
                            <Table.Cell>
                                {object.dateExpire}
                            </Table.Cell>
                            <Table.Cell>
                                {object.priceProduct}
                            </Table.Cell>
                           
                            <Table.Cell width={3}>
                             <Button as={Link} to={`update-product/${object._id}`} primary>Edit</Button>
                             <Button onClick={delProduct} value={object._id} primary>Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    )
                    })
                }
                </Table.Body>
            </Table>        
        </div>
    );  
}

export default TableProducts;