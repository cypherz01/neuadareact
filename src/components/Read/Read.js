import React,{useEffect,useState} from 'react';
import './Read.css';
import { Table } from 'semantic-ui-react'
import axios from 'axios';


function Read(){
  const [tableData , setTableData] = useState([]);

  useEffect(
    () => {
      const endpointURL = "https://6151d1954a5f22001701d471.mockapi.io/people";
      axios.get(endpointURL)
            .then(response => setTableData(response.data))
    } ,[]
  );


  return(
  <div>
       <Table celled>
     <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Surname</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        tableData.map(
          data => {return ( <Table.Row>
            <Table.Cell>{data.id}</Table.Cell>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
          </Table.Row>) }
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
