import React from "react";
import InputField from "../InputField/InputField";

function First({
  setActiveButton,
  setFirstData,
  firstData,
  setProductType,
  productType,
  error,
  setError,
}) {
  const handleInputChange = (key) => (e) => {
    setFirstData({
      ...firstData,
      [key]: e.target.value,
    });
  };

  const handleCalibratorChange = (key) => (e) => {
    setFirstData({
      ...firstData,
      calibrator: {
        ...firstData.calibrator,
        [key]: e.target.value,
      },
    });
  };

  

  return (
    <div className="p-6.5">
      <InputField
        label="Product Type"
        value={productType}
        onChange={(e) => {
          setProductType(e.target.value);
          setError(false);
        }}
        placeholder="Enter Product Type"
        type="text"
        style="mb-4.5"
        required={true}
        error={error}
      />

      <InputField
        label="General Speed 100%"
        value={firstData.generalSpeed}
        onChange={handleInputChange("generalSpeed")}
        placeholder="Enter General Speed"
        type="text"
        style="mb-4.5"
      />

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="M30 100%"
          value={firstData.m30}
          onChange={handleInputChange("m30")}
          placeholder="Enter M30 100%"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="M31 75%"
          value={firstData.m31}
          onChange={handleInputChange("m31")}
          placeholder="Enter M31 75%"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="M32 60.5%"
          value={firstData.m32}
          onChange={handleInputChange("m32")}
          placeholder="Enter M32 60.5%"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="M34 44.5%"
          value={firstData.m34}
          onChange={handleInputChange("m34")}
          placeholder="Enter M34 44.5%"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="M35 48.5%"
          value={firstData.m35}
          onChange={handleInputChange("m35")}
          placeholder="Enter M35 48.5%"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>

      <h4 className="text-xl underline mb-6">Calibrator settings</h4>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Calibrator rollers"
          value={firstData.calibrator.rollers}
          onChange={handleCalibratorChange("rollers")}
          placeholder="Enter Calibrator rollers"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Calibrator belt speed"
          value={firstData.calibrator.beltSpeed}
          onChange={handleCalibratorChange("beltSpeed")}
          placeholder="Enter Calibrator belt speed"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Dough thickness"
          value={firstData.calibrator.doughThickness}
          onChange={handleCalibratorChange("doughThickness")}
          placeholder="Enter Dough thickness"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Compact line gelatine"
          value={firstData.calibrator.gelatine}
          onChange={handleCalibratorChange("gelatine")}
          placeholder="Enter Compact line gelatine"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="Compact line belt speed"
          value={firstData.calibrator.ComBeltSpeed}
          onChange={handleCalibratorChange("ComBeltSpeed")}
          placeholder="Enter Compact line belt speed"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>

      <div className="flex justify-end">
        <button
          className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          onClick={() => {
            if (productType === "") {
              setError(true);
            } else {
              setActiveButton("second");
            }
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

export default First;
