import React from "react";

function IngredientTable({ ingredient }) {
  const ingredients = [
    { name: "Wheat Flour", data: ingredient.wheat },
    { name: "Pastry Margarine", data: ingredient.pastry },
    { name: "Cake Margarine", data: ingredient.cake },
    { name: "Salt", data: ingredient.salt },
    { name: "Water", data: ingredient.water },
    { name: "Trimmings Added?", data: ingredient.trimmings },
  ];

  return (
    <div className="max-w-full overflow-x-auto mb-10">
      <table className="table-auto border shadow-md w-full">
        <thead>
          <tr className="text-left border-b bg-gray-200">
            <th className="p-3 font-bold text-gray-900 border-r" colSpan="2">
              Ingredient
            </th>
            <th className="p-3 font-bold text-gray-900 border-r">Quantity Used</th>
            <th className="p-3 font-bold text-gray-900 border-r">Batch/ Lot Number</th>
            <th className="p-3 font-bold text-gray-900 border-r">Product Code</th>
            <th className="p-3 font-bold text-gray-900">Best Before Date</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((item, index) => (
            <tr key={index} className="text-left border-b">
              <td className="p-3 border-r" colSpan="2">
                {item.name}
              </td>
              <td className="p-3 border-r">{item.data?.quantity}</td>
              <td className="p-3 border-r">{item.data?.batch}</td>
              <td className="p-3 border-r">{item.data?.productCode}</td>
              <td className="p-3">{item.data?.bbd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IngredientTable;
