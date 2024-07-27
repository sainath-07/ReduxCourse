import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetchapi();
  }, [users]);
 

  const fetchapi = async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(result.data)
    setusers(result.data);
  };



  return (
    <>
      <div className="container">
        <h1 className="text-center "> Products</h1>
        <div className="d-flex flex-wrap gap-5 justify-content-center mt-4 ">
          {users.map((ele, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className=" d-flex flex-column w-25 h-50 p-4 rounded"
                  style={{
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                >
                   
                            <img
                              src={`https://picsum.photos/id/${index+1*23}/200/300`}
                              className="mt-4 rounded"
                              style={{
                                height:"250px"
                              }}
                              alt=""
                            />
                              

                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <p>name: {ele.name}</p>
                    <p>email :{ele.email}</p>
                    <p>street: {ele.address.street}</p>
                    <p>{ele.company.catchPhrase}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Data;
