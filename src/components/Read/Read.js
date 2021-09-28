import React, { useEffect, useState } from 'react';
import './Read.css';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import {Link} from 'react-router-dom';


function Read() {
  const [tableData, setTableData] = useState([]);

  useEffect(
    () => {
      const endpointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";
      axios.get(endpointURL)
        .then(response => setTableData(response.data))
    }, []);

    function logId(data){
      localStorage.setItem("id", data.id);
      localStorage.setItem("firstName",data.firstName);
      localStorage.setItem("lastName",data.lastName);
    }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Surname</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            tableData.map(
              data => {
                return (<Table.Row>
                  <Table.Cell>{data.id}</Table.Cell>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>
                    <Link to ="/update">
                    <Button color="green" onClick={() =>  
                    logId(data) }>Update</Button>
                    </Link>
                    </Table.Cell>
                  <Table.Cell>
                  <Link to ="/delete">
                    <Button color="red" onClick={() =>  
                    logId(data) }>Delete</Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>)
              }
            )
          }
        </Table.Body>
      </Table>
    </div>
  )
}

Read.propTypes = {};

Read.defaultProps = {};

export default Read;
