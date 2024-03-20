import React, { useState } from "react";
import axios from "axios";

const ListSpace = () => {
  const [data, setData] = useState(""); // Correctly initialize `data` and create a `setData` function to update it

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:4000/space");
      // Assuming the response data is what you want to display
      setData(JSON.stringify(response.data)); // Use `setData` to update the state with the response data
    } catch (error) {
      console.error("Error fetching data:", error);
      setData("Error fetching data"); // Optionally handle errors by updating state with an error message
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>See people in Space</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <h1>Data from space:</h1>
        <pre>{data}</pre>; {/* Display `data` here */}
      </form>
    </div>
  );
};

export default ListSpace;
