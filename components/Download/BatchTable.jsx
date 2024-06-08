import React from "react";

function BatchTable({ batch }) {
  const batchDetails = [
    { label: "Batch Number", value: batch?.batchNumber },
    { label: "Use by date or Best Before Date", value: batch?.useDate },
    {
      label: "Expiry Date (Plus 1 year from production date)",
      value: batch?.expiryDate,
    },
    {
      label: "Inner Label Check (Attached to this record Y/N)",
      value: batch?.innerLabel,
    },
    {
      label: "Outer Label Check (Attached to this record Y/N)",
      value: batch?.outerLabel,
    },
    { label: "Production Manager Name", value: batch?.managerName },
  ];

  return (
    <div className="max-w-full overflow-x-auto mb-10">
      <table className="table-auto border shadow-md w-full">
        {/* <thead>
          <tr className="text-left border-b bg-gray-200">
            <th className="p-3 font-bold border-r">Batch Information</th>
            <th className="p-3 font-bold">Details</th>
          </tr>
        </thead> */}
        <tbody>
          {batchDetails.map((detail, index) => (
            <tr key={index} className="text-left border-b">
              <th className="p-3 font-bold border-r">{detail.label}</th>
              <td className="p-3">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BatchTable;

