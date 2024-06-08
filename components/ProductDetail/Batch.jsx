import React from "react";
import InputField from "../InputField/InputField";

function Batch({ setActiveButton, setBatch, batch }) {

  
  const handleInputChange = (key) => (e) => {
    setBatch({
      ...batch,
      [key]: e.target.value,
    });
  };

  return (
    <div className="p-6.5">
      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Batch Number"
          value={batch.batchNumber}
          onChange={handleInputChange("batchNumber")}
          placeholder="Enter Batch Number"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Use by date or Best Before Date"
          value={batch.useDate}
          onChange={handleInputChange("useDate")}
          placeholder="Enter Use by date or Best Before Date"
          type="date"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Expire Date"
          value={batch.expiryDate}
          onChange={handleInputChange("expiryDate")}
          placeholder="Enter Expire Date"
          type="date"
          style="w-full xl:w-1/3"
        />
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Inner Label Check"
          value={batch.innerLabel}
          onChange={handleInputChange("innerLabel")}
          placeholder="Enter Inner Label Check"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Outer Label Check"
          value={batch.outerLabel}
          onChange={handleInputChange("outerLabel")}
          placeholder="Enter Outer Label Check"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Production Manager Name"
          value={batch.managerName}
          onChange={handleInputChange("managerName")}
          placeholder="Enter Production Manager Name"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="flex justify-between">
        <button
          className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          onClick={() => setActiveButton("ingredient")}
        >
          <svg
            className="mr-2 w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
          Back
        </button>
        <button
          className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          onClick={() => setActiveButton("doughWeight")}
        >
          Next
          <svg
            className="ml-2 w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Batch;
