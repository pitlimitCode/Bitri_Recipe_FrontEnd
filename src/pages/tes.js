import React, { useState, useEffect } from "react";

import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import PaginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";

export default function tes() {
  const [players, setPlayers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const getPlayersData = async () => {
    try {
      const data =await axios.get("https://nba-players.herokuapp.com/players-stats");
      console.log(data);
      setPlayers(data.data);
      setIsLoading(true);
    } catch (e) {
      console.log(e);
    }
  }

  const columns = [
    { dataField: "name", text: "Player Name" },
    { dataField: "points_per-game", text: "Points Per Game" },
    { dataField: "team_name", text: "Player Team" },
  ];

  useEffect(() => {
    getPlayersData();
  }, []);
  
  return (
    <>
      {loading ? (
        <BootstrapTable
          keyField="name"
          data={players}
          columns={columns}
          pagination={PaginationFactory()}
        />
      ) : (
        <ReactBootstrap.Spinner animation="border" />
      )}
    </>
  )
};