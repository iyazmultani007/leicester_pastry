import React from "react";
import InputField from "../InputField/InputField";

function Cutting({
  setActiveButton,
  setCuttingData,
  cuttingData,
  handleSubmit,
  params,
  handleUpdate,
}) {
  const handleInputChange = (key) => (e) => {
    setCuttingData({
      ...cuttingData,
      [key]: e.target.value,
    });
  };

  const handleCalibratorChange = (key) => (e) => {
    setCuttingData({
      ...cuttingData,
      calibrator: {
        ...cuttingData.calibrator,
        [key]: e.target.value,
      },
    });
  };

  

  return (
    <div className="p-6.5">
      <InputField
        label="General Speed 74%"
        value={cuttingData.generalSpeed}
        onChange={handleInputChange("generalSpeed")}
        placeholder="Enter General Speed"
        type="text"
        style="mb-4.5"
      />

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="M30 100%"
          value={cuttingData.m30}
          onChange={handleInputChange("m30")}
          placeholder="Enter M30 100%"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="M31 86%"
          value={cuttingData.m31}
          onChange={handleInputChange("m31")}
          placeholder="Enter M31 86%"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="M32 53%"
          value={cuttingData.m32}
          onChange={handleInputChange("m32")}
          placeholder="Enter M32 53%"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="M34 71%"
          value={cuttingData.m34}
          onChange={handleInputChange("m34")}
          placeholder="Enter M34 71%"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="M35 68%"
          value={cuttingData.m35}
          onChange={handleInputChange("m35")}
          placeholder="Enter M35 68%"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>

      <h4 className="text-xl underline mb-6">Calibrator settings</h4>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Roller setting left"
          value={cuttingData.calibrator.roller}
          onChange={handleCalibratorChange("roller")}
          placeholder="Enter Roller setting left"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Belt speed right"
          value={cuttingData.calibrator.beltSpeedRight}
          onChange={handleCalibratorChange("beltSpeedRight")}
          placeholder="Enter Belt speed right"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Belt speed"
          value={cuttingData.calibrator.beltSpeed}
          onChange={handleCalibratorChange("beltSpeed")}
          placeholder="Enter Belt speed"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
      <InputField
          label="Total waste"
          value={cuttingData.calibrator.totalWaste}
          onChange={handleCalibratorChange("totalWaste")}
          placeholder="Enter Total waste"
          type="text"
          style="w-full xl:w-1/2"
        />
        
        <InputField
          label="Calibrator thickness"
          value={cuttingData.calibrator.calibratorThickness}
          onChange={handleCalibratorChange("calibratorThickness")}
          placeholder="Enter Calibrator thickness"
          type="text"
          style="w-full xl:w-1/2"
        />

        
      </div>

      <div className="flex justify-between">
        <button
          className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          onClick={() => setActiveButton("second")}
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
          onClick={() => {
            if (params.slug !== "add") {
              handleUpdate();
            } else {
              handleSubmit();
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Cutting;
