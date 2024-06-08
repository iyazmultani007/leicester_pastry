import React from "react";

function ProductTable({ product, productType, productDetailId }) {
  return (
    <div className="max-w-full overflow-x-auto mb-10">
      <table className="table border shadow-md w-full h-90">
        <thead>
          <tr className="text-left border-b bg-gray-200">
            <th className="p-3 font-bold border-r">Product Detail Id</th>
            <td className="p-3 font-bold">{productDetailId}</td>
          </tr>
          <tr className="text-left border-b bg-gray-200">
            <th className="p-3 font-bold border-r">Product type</th>
            <td className="p-3 font-bold">{productType}</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left border-b bg-gray-200">
            <th className="p-3 border-r">No. of Blocks</th>
            <td className="p-3">{product?.noOfBlocks}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">Quantity</th>
            <th className="p-3">Boxes:</th>
            <td className="p-3  border-r">{product?.boxes}</td>
            <th className="p-3">Units per box:</th>
            <td className="p-3  border-r">{product?.unitsPerBox}</td>
            <th className="p-3">Total Units:</th>
            <td className="p-3">{product?.totalUnits}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">Trimmings made (Kg)</th>
            <td className="p-3">{product?.trimmingsMade}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 text-left border-r">Production date</th>
            <td className="p-3">{product?.productionDate}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">Production start time:</th>
            <td className="p-3 border-r">{product?.productionStartTime}</td>
            <th className="p-3 border-r">Production end time:</th>
            <td className="p-3 ">{product?.productionEndTime}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">Total production time:</th>
            <td className="p-3">{product?.totalProductionTime}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">No. of production staff</th>
            <td className="p-3">{product?.noOfProductionStaff}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">Packing date</th>
            <td className="p-3">{product?.packingDate}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">Packing start time:</th>
            <td className="p-3 border-r">{product?.packingStartTime}</td>
            <th className="p-3 border-r">Packing end time:</th>
            <td className="p-3">{product?.packingEndTime}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">Total packing time:</th>
            <td className="p-3">{product?.totalPackingTime}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">No. of packing staff</th>
            <td className="p-3">{product?.noOfPackingStaff}</td>
          </tr>
          <tr className="text-left border-b">
            <th className="p-3 border-r">Problems/solutions/Notes:</th>
            <td className="p-3">{product?.notes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
