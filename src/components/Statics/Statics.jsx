import React from "react";
import { PieChart, Pie } from "recharts";

const Statics = () => {
  const assignments = [
    { name: "assignment1", value: 60 },
    { name: "assignment2", value: 60 },
    { name: "assignment3", value: 58 },
    { name: "assignment4", value: 60 },
    { name: "assignment5", value: 60 },
    { name: "assignment6", value: 60 },
    { name: "assignment7", value: 60 },
  ];

  return (
    <div className="d-flex flex-column align-items-center justify-content-center border my-5 container shadow rounded-5 border-5">
      <h4 className="p-4 text-danger">My Assignments Marks from 1 to 7:</h4>
      <PieChart width={500} height={250}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={assignments}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
};

export default Statics;
