import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div className="d-flex justify-content-around p-5  bg-dark">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ height: '10rem', objectFit: 'cover' }} src="https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png" />
        <Card.Body>
          <Card.Title>Card Title 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="warning">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ height: '10rem', objectFit: 'cover' }} src="https://static-assets.codecademy.com/assets/course-landing-page/meta/4x3/learn-python.jpg" />
        <Card.Body>
          <Card.Title>Card Title 2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="warning">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ height: '10rem', objectFit: 'cover' }} src="https://res.cloudinary.com/practicaldev/image/fetch/s--y2fF9U3x--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x8vfaqfibaay30pubk73.jpeg" />
        <Card.Body>
          <Card.Title>Card Title 3</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="warning">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
