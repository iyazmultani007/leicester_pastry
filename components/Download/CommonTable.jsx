import React from 'react'

function CommonTable({ title, details }) {
  return (
    <div className="mb-10">
    <h3 className="text-lg font-bold underline mb-4">{title}</h3>
    <div className="max-w-full overflow-x-auto">
      <table className="table-auto border shadow-md w-full">
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className="text-left border-b">
              <th className="p-3 font-bold border-r">{detail.label}</th>
              <td className="p-3">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default CommonTable