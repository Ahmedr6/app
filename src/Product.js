import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import logi from './logi.jpeg'

function KitchenSinkExample() {
   const Product={
    Name: 'g435',
    description: 'g36 is a fancy logitech headset with ANC "active noise cancelation"',
    price:'450$',
    image: {logi}
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img  className='img' variant="top" src={logi} />
      <Card.Body>
        <Card.Title>name:{Product.Name}</Card.Title>
        <Card.Text>
          description:{Product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>price:{Product.price}</ListGroup.Item>
       
      </ListGroup>
      
    </Card>
  );
}

export default KitchenSinkExample;