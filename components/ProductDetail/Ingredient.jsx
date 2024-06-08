import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import InputField from "../InputField/InputField";



function Ingredient({ ingredient, setIngredient, setActiveButton }) {
  

  const handleInputChange = (field, key) => (e) => {
    setIngredient({
      ...ingredient,
      [field]: {
        ...ingredient[field],
        [key]: e.target.value,
      },
    });
  };

  return (
    <div className="p-6.5">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <label className="font-medium text-xl text-black dark:text-white">
          Wheat Flour
        </label>
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Quantity Used"
          value={ingredient.wheat.quantity}
          onChange={handleInputChange("wheat", "quantity")}
          placeholder="Enter Quantity Used"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Batch/Lot Number"
          value={ingredient.wheat.batch}
          onChange={handleInputChange("wheat", "batch")}
          placeholder="Enter Batch/Lot Number"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Product Code"
          value={ingredient.wheat.productCode}
          onChange={handleInputChange("wheat", "productCode")}
          placeholder="Enter Product Code"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Best Before Date"
          value={ingredient.wheat.bbd}
          onChange={handleInputChange("wheat", "bbd")}
          placeholder="Enter Best Before Date"
          type="date"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <label className="font-medium text-xl text-black dark:text-white">
          Pastry Margarine
        </label>
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Quantity Used"
          value={ingredient.pastry.quantity}
          onChange={handleInputChange("pastry", "quantity")}
          placeholder="Enter Quantity Used"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Batch/Lot Number"
          value={ingredient.pastry.batch}
          onChange={handleInputChange("pastry", "batch")}
          placeholder="Enter Batch/Lot Number"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Product Code"
          value={ingredient.pastry.productCode}
          onChange={handleInputChange("pastry", "productCode")}
          placeholder="Enter Product Code"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Best Before Date"
          value={ingredient.pastry.bbd}
          onChange={handleInputChange("pastry", "bbd")}
          placeholder="Enter Best Before Date"
          type="date"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <label className="font-medium text-xl text-black dark:text-white">
          Cake Margarine
        </label>
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Quantity Used"
          value={ingredient.cake.quantity}
          onChange={handleInputChange("cake", "quantity")}
          placeholder="Enter Quantity Used"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Batch/Lot Number"
          value={ingredient.cake.batch}
          onChange={handleInputChange("cake", "batch")}
          placeholder="Enter Batch/Lot Number"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Product Code"
          value={ingredient.cake.productCode}
          onChange={handleInputChange("cake", "productCode")}
          placeholder="Enter Product Code"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Best Before Date"
          value={ingredient.cake.bbd}
          onChange={handleInputChange("cake", "bbd")}
          placeholder="Enter Best Before Date"
          type="date"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <label className="font-medium text-xl text-black dark:text-white">
          Salt
        </label>
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Quantity Used"
          value={ingredient.salt.quantity}
          onChange={handleInputChange("salt", "quantity")}
          placeholder="Enter Quantity Used"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Batch/Lot Number"
          value={ingredient.salt.batch}
          onChange={handleInputChange("salt", "batch")}
          placeholder="Enter Batch/Lot Number"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Product Code"
          value={ingredient.salt.productCode}
          onChange={handleInputChange("salt", "productCode")}
          placeholder="Enter Product Code"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Best Before Date"
          value={ingredient.salt.bbd}
          onChange={handleInputChange("salt", "bbd")}
          placeholder="Enter Best Before Date"
          type="date"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <label className="font-medium text-xl text-black dark:text-white">
          Water
        </label>
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Quantity Used"
          value={ingredient.water.quantity}
          onChange={handleInputChange("water", "quantity")}
          placeholder="Enter Quantity Used"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Batch/Lot Number"
          value={ingredient.water.batch}
          onChange={handleInputChange("water", "batch")}
          placeholder="Enter Batch/Lot Number"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Product Code"
          value={ingredient.water.productCode}
          onChange={handleInputChange("water", "productCode")}
          placeholder="Enter Product Code"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Best Before Date"
          value={ingredient.water.bbd}
          onChange={handleInputChange("water", "bbd")}
          placeholder="Enter Best Before Date"
          type="date"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <label className="font-medium text-xl text-black dark:text-white">
          Trimmings Added
        </label>
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Quantity Used"
          value={ingredient.trimmings.quantity}
          onChange={handleInputChange("trimmings", "quantity")}
          placeholder="Enter Quantity Used"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Batch/Lot Number"
          value={ingredient.trimmings.batch}
          onChange={handleInputChange("trimmings", "batch")}
          placeholder="Enter Batch/Lot Number"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Product Code"
          value={ingredient.trimmings.productCode}
          onChange={handleInputChange("trimmings", "productCode")}
          placeholder="Enter Product Code"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Best Before Date"
          value={ingredient.trimmings.bbd}
          onChange={handleInputChange("trimmings", "bbd")}
          placeholder="Enter Best Before Date"
          type="date"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="flex justify-between">
        <button
          className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          onClick={() => setActiveButton("product")}
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
          onClick={() => setActiveButton("batch")}
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

export default Ingredient;
