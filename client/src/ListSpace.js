// src/ListSpace.js
import React, { useState } from "react";
import { fetchSpaceData } from "./GetSpaceAPI";

const ListSpace = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const fetchedData = await fetchSpaceData();
      setData(JSON.stringify(fetchedData)); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data"); // Update state with error message
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>See people in Space</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        {error && <p className="error">{error}</p>} {/* Display error if it exists */}
        <h1>Data from space:</h1>
        <pre>{data}</pre> {/* Display data here */}
      </form>
    </div>
  );
};

export default ListSpace;
