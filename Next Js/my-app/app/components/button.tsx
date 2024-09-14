"use client"

import React from "react";

const Button: any = ({ color, name= "Abdul Rehman" }: any) => {
  return (
    <div className={`text-${color}-500 text-sm cursor-pointer`} onClick={()=>alert(`Hello ${name}`)}>
      Click me
    </div>
  );
};

export default Button;
