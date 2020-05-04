//Created File
import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { Button } from '@material-ui/core';

import './styles.css';

const axios = require('axios').default;

const getHistoryRecords = async (email, setHistoryData) => {
  const resp = await axios.get(`history/${email}`);
  setHistoryData(resp.data);
};

const LaunchHistoryTable = ({ email }) => {
  const [showTable, setShowTable] = useState(false);
  const [historyData, setHistoryData] = useState([]);

  const handleClick = evt => {
    evt.preventDefault();
    if (!showTable) {
      getHistoryRecords(email, setHistoryData);
    }
    setShowTable(!showTable);
  };

  return (
    <div className="LaunchHistoryTable">
      <Button onClick={handleClick} className="history-button" color="primary">
        {showTable ? 'Hide launch history' : 'Get launch history'}
      </Button>
      {showTable && (
        <div className="launch-history-table">
          <h3>Launch History!</h3>
          <Table striped>
            <thead>
              <tr>
                <th>Successful</th>
                <th>Mass</th>
                <th>Angle</th>
                <th>Force</th>
              </tr>
            </thead>
            <tbody>
              {historyData.reverse().map((hr, i) => (
                <tr key={i}>
                  <td>{hr.success ? 'Yes' : 'No'}</td>
                  <td>{hr.mass}</td>
                  <td>{hr.angle}</td>
                  <td>{hr.force}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default LaunchHistoryTable;
