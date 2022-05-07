import React, {Fragment} from 'react';
import {Table, Button} from 'react-bootstrap';

function ItemListContainer() {
    return (
        <fragment>
            <Table className='responsive'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>button</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>
                            <Button variant="dark">Dark</Button>{' '}
                        </td>
                    </tr>

                    <tr>
                        <td>Mark</td>
                        <td>
                            <Button variant="dark">Dark</Button>{' '}
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Mark</td>
                        <td>
                            <Button variant="dark">Dark</Button>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </fragment>
    );
  }
  
  export default ItemListContainer;