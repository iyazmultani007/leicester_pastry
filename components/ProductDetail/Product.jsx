import React from "react";
import InputField from "../InputField/InputField";

function Product({
  selectedOption,
  setSelectedOption,
  isOptionSelected,
  setIsOptionSelected,
  setActiveButton,
  options,
  product,
  setProduct,
  error,
  setError,
  productionDateError,
  setproductionDateError,
}) {
  const handleInputChange = (key) => (e) => {
    if (key === "productionDate") {
      setproductionDateError(false);
    }
    setProduct({
      ...product,
      [key]: e.target.value,
    });
  };

  

  return (
    <div className="p-6.5">
      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Product Type
            <span className="text-meta-1">*</span>
          </label>

          <div className="relative z-20 bg-transparent dark:bg-form-input">
            <select
              value={selectedOption}
              onChange={(e) => {
                setError(false);
                setSelectedOption(e.target.value);
                setIsOptionSelected(true);
              }}
              className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                isOptionSelected ? "text-black dark:text-white" : ""
              }`}
            >
              <option
                value=""
                disabled
                className="text-body dark:text-bodydark"
              >
                Select Product Type
              </option>
              {Array.isArray(options) &&
                options.map((option) => (
                  <option
                    key={option}
                    value={option.id}
                    className="text-body dark:text-bodydark"
                  >
                    {option.productType}
                  </option>
                ))}
            </select>
            {error && (
              <p className="text-meta-1 mt-2">
                <span className="text-meta-1">*</span> Required Product Type
              </p>
            )}
          </div>
        </div>

        <InputField
          label="No. of Blocks"
          value={product?.noOfBlocks}
          onChange={handleInputChange("noOfBlocks")}
          placeholder="Enter No. of Blocks"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <label className="font-medium text-black dark:text-white">
          Quantity
        </label>
      </div>
      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Boxes"
          value={product?.boxes}
          onChange={handleInputChange("boxes")}
          placeholder="Enter Boxes"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Units per box"
          value={product?.unitsPerBox}
          onChange={handleInputChange("unitsPerBox")}
          placeholder="Enter Units per box"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Total Units"
          value={product?.totalUnits}
          onChange={handleInputChange("totalUnits")}
          placeholder="Enter Total Units"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark" />

      <div className="mb-4.5 mt-5">
        <InputField
          label="Trimmings made (kg)"
          value={product?.trimmingsMade}
          onChange={handleInputChange("trimmingsMade")}
          placeholder="Enter Trimmings made (kg)"
          type="text"
          style=""
        />
      </div>

      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Production Date"
          value={product?.productionDate}
          onChange={handleInputChange("productionDate")}
          placeholder="Enter Production Date"
          type="date"
          style="w-full xl:w-1/3"
          required={true}
          error={productionDateError}
        />

        <InputField
          label="Production start time"
          value={product?.productionStartTime}
          onChange={handleInputChange("productionStartTime")}
          placeholder="Enter Production start time"
          type="time"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Production end time"
          value={product?.productionEndTime}
          onChange={handleInputChange("productionEndTime")}
          placeholder="Enter Production end time"
          type="time"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Total production time"
          value={product?.totalProductionTime}
          onChange={handleInputChange("totalProductionTime")}
          placeholder="Enter Total production time"
          type="text"
          style="w-full xl:w-1/2"
          disabled={true}
        />

        <InputField
          label="No. of production staff"
          value={product?.noOfProductionStaff}
          onChange={handleInputChange("noOfProductionStaff")}
          placeholder="Enter No. of production staff"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Packing Date"
          value={product?.packingDate}
          onChange={handleInputChange("packingDate")}
          placeholder="Enter Packing Date"
          type="date"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Packing start time"
          value={product?.packingStartTime}
          onChange={handleInputChange("packingStartTime")}
          placeholder="Enter Packing start time"
          type="time"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Packing end time"
          value={product?.packingEndTime}
          onChange={handleInputChange("packingEndTime")}
          placeholder="Enter Packing end time"
          type="time"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="mb-4.5 mt-5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Total packing time"
          value={product?.totalPackingTime}
          onChange={handleInputChange("totalPackingTime")}
          placeholder="Enter Total packing time"
          type="text"
          style="w-full xl:w-1/2"
          disabled={true}
        />

        <InputField
          label="No. of packing staff"
          value={product?.noOfPackingStaff}
          onChange={handleInputChange("noOfPackingStaff")}
          placeholder="Enter No. of packing staff"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="mb-4.5 mt-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          Notes
        </label>
        <textarea
          rows={3}
          placeholder="Type your notes"
          value={product?.notes}
          onChange={handleInputChange("notes")}
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          onClick={() => {
            selectedOption === ""
              ? setError(true)
              : product.productionDate === ""
              ? setproductionDateError(true)
              : setActiveButton("ingredient");
          }}
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

export default Product;
