import React, {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

import './Create.css';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const callMockApi = () => {
    const endpointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";

    const formData = {
      firstName,
      lastName
    }
    axios.post(endpointURL,formData)
          .then(response => console.log(response.formData))
          .catch( error => console.log(error))
  }

  return (
    <div className="Create">
    <Form unstackable>
    <Form.Group widths={2}>
      <Form.Input label='First name' placeholder='First name' 
        onChange= {
          e=>setFirstName(e.target.value)
        } />
      <Form.Input label='Last name' placeholder='Last name' onChange= {
          e=>setLastName(e.target.value)
        } />
    </Form.Group>
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button 
          type='submit'
          onClick ={callMockApi}>Submit</Button>
  </Form>
    
  </div>

  );
}


export default Create;