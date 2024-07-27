import React, { useState } from "react";
import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider";

const DropDown = () => {
  const [check, setcheck] = useState(0);
  // console.log(check,'')

  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["hyd", "mumbai"],
    },
    {
      name: "Pakistan",
      value: "PK",
      cities: ["Lahore", "karachi"],
    },
    {
      name: "bangladesh",
      value: "BG",
      cities: ["chittagong", "Dhaka"],
    },
  ];
  return (
    <>
      <div>
        {/*1st drop down  */}
        <select
          name=""
          id=""
          onChange={(e) => {
            setcheck(e.target.value);
          }}
        >
          {countries.map((obj, index) => {
            return (
              <React.Fragment key={index}>
                <option
                  value={index}
               
                >
                  {obj.name}
                </option>
              </React.Fragment>
            );
          })}
        </select>

        {/* 2drop down  */}
        <select name="" id=""
        onChange={(e)=>{
            console.log(e.target.value ,"secdrp")
        }}
        >
          {countries[check].cities.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <option value={item}>{item}</option>
              </React.Fragment>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default DropDown;
