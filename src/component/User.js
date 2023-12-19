import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function User({el}) {
  return (
    <div>
      <Card className='Card' style={{ width: '30em', height: '10rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item> {el.name} </ListGroup.Item>
        <ListGroup.Item>  {el.email} </ListGroup.Item>
        <ListGroup.Item>  {el.phone} </ListGroup.Item>
        <ListGroup.Item>  {el.website} </ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default User
