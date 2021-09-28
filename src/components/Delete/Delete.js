import './Delete.css';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Delete() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');


  useEffect(
    () => {
      setId(localStorage.getItem('id'));
      setFirstName(localStorage.getItem('firstName'));
      setLastName(localStorage.getItem('lastName'));
    }, []
  )

  const callMockApi = () => {
    const endpointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";
    const formData = {
      firstName,
      lastName
    }
    axios.delete(endpointURL+'/'+id, formData)
      .then(response => console.log(response.formData))
      .catch(error => console.log(error))

      axios.get(endpointURL, formData)
      .then(response => console.log(response.formData))
      .catch(error => console.log(error))
  }

  return (
    <div className="Delete">
      <Form unstackable>
        <Form.Group widths={2}>
          <Form name='firstName'
            label='First name' value = {firstName} />
            <h2>Are you sure you want to delete?</h2>
          <Form name='lastname'
            label='Last name' value = {lastName} />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Link to ="/read">
        <Button
          type='submit'
          onClick={callMockApi}>Delete</Button>
        </Link>
      </Form>

    </div>

  );
}

Delete.propTypes = {};

Delete.defaultProps = {};

export default Delete;
