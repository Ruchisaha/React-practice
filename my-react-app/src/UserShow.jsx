import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserShow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function datafetch() {
      const response = await fetch("http://localhost:3000/");
      const dataList = await response.json();
      console.log(dataList);
      setData(dataList.data);
    }
    datafetch();
  }, []);

  const handleClick = (index) => {
    console.log(data[index]);
    localStorage.setItem("user", JSON.stringify(data[index]));
  };

  return (
    <>
      <h1>Users List</h1>
      {data.map((user, index) => (
        <div key={index}>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>

          <Link to="/profile">
            <button onClick={() => handleClick(index)}>View Profile</button>
          </Link>
        </div>
      ))}
    </>
  );
}

export default UserShow;
