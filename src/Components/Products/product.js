import React, { useState } from 'react';
import { phonesData } from "./product.data";
import { Card, Button } from "react-bootstrap";

const Products = () => {
    const [items, setItems] = useState(phonesData);

    return (
        <div>
            <h1 className='bg-dark text-white p-2'>iPhone Store BD</h1>
            {items.map((item, index) => (

                <div className='d-inline-block p-2 m-2'>
                    <Card key={index} className='shadow p-3 mb-5 bg-body rounded' style={{ width: '13rem' }}>

                        <Card.Img style={{ height: '8rem' }}
                         className="p-2"
                        variant="top" src={require(`../assests/${item.image}.jfif`)} />

                        {/* <Card.Img variant="top" src="https://www.bing.com/th?id=OIP.nYEuBjiuwCD6oR2JeVu5DwHaEK&w=166&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" /> */}

                        <Card.Body>
                            <Card.Title>{item.model}</Card.Title>
                            <Card.Text>
                                <p>{item.desc}</p>
                            </Card.Text>
                            <h6>Price: {item.price} BDT</h6>
                            <Button className='f-1' variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </div>

            ))}
        </div>
    );
};

export default Products;
