import React from "react";

function DoughTable({ dough, rows }) {
  return (
    <div>
      <h3 className="text-lg font-bold underline mb-4 text-center">
        Dough Weights
      </h3>

      <p className="mb-2">Dough setting: {dough.doughSetting}</p>
      <p className="mb-2">Accepted Weight: {dough.acceptedWeight}</p>
      <p className="mb-2">Accepted Weight: {dough.noOfBlocks}</p>

      <div className="max-w-full overflow-x-auto mb-10 mt-6">
        <table className="table-auto border shadow-md w-full">
          <thead>
            <tr className="text-left border-b bg-gray-200">
              <th className="p-3 font-bold text-gray-900 border-r">
                Dough Weight
              </th>
              <th className="p-3 font-bold text-gray-900 border-r">Notes</th>
              <th className="p-3 font-bold text-gray-900 border-r">
                Product Weight Check
              </th>
              <th className="p-3 font-bold text-gray-900">Notes</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(rows) &&
              rows.map((item, index) => (
                <tr key={index} className="text-left border-b">
                  <td className="p-3 border-r">{item.doughWeight}</td>
                  <td className="p-3 border-r">{item.doughNote}</td>
                  <td className="p-3 border-r">{item.productWeight}</td>
                  <td className="p-3">{item.productNote}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoughTable;
