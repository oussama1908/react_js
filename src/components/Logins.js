import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Logins() {
  return (
    <Form className="bg-warning">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  className="mx-auto" 
      style={{ width: '25%' }}  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="mx-auto" 
      style={{ width: '25%' }} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="mx-auto" 
      style={{ width: '25%' }} type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Logins;