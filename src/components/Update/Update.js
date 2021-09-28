import './Update.css';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Update() {
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
    axios.put(endpointURL+'/'+id, formData)
      .then(response => console.log(response.formData))
      .catch(error => console.log(error))

      axios.get(endpointURL)
      .then(response => console.log(response.formData))
      .catch(error => console.log(error))
  }

  return (
    <div className="update">
      <Form unstackable>
        <Form.Group widths={2}>
          <Form.Input name='firstName'
            label='First name' value = {firstName}
            onChange={
              e => setFirstName(e.target.value)
            } />
          <Form.Input name='lastname'
            label='Last name' value = {lastName} onChange={
              e => setLastName(e.target.value)
            } />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Link to ="/read">
        <Button
          type='submit'
          onClick={callMockApi}>Update</Button>
        </Link>
      </Form>

    </div>

  );
}

Update.propTypes = {};

Update.defaultProps = {};

export default Update;
