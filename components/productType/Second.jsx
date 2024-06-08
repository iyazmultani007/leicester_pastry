import React from "react";
import InputField from "../InputField/InputField";

function Second({ setActiveButton, secondData, setSecondData }) {
  const handleInputChange = (key) => (e) => {
    setSecondData({
      ...secondData,
      [key]: e.target.value,
    });
  };

  const handleCalibratorChange = (key) => (e) => {
    setSecondData({
      ...secondData,
      calibrator: {
        ...secondData.calibrator,
        [key]: e.target.value,
      },
    });
  };

  

  return (
    <div className="p-6.5">
      <InputField
        label="General Speed 100%"
        value={secondData.generalSpeed}
        onChange={handleInputChange("generalSpeed")}
        placeholder="Enter General Speed"
        type="text"
        style="mb-4.5"
      />

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="M30 100%"
          value={secondData.m30}
          onChange={handleInputChange("m30")}
          placeholder="Enter M30 100%"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="M31 75%"
          value={secondData.m31}
          onChange={handleInputChange("m31")}
          placeholder="Enter M31 75%"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="M32 60.5%"
          value={secondData.m32}
          onChange={handleInputChange("m32")}
          placeholder="Enter M32 60.5%"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="M34 44.5%"
          value={secondData.m34}
          onChange={handleInputChange("m34")}
          placeholder="Enter M34 44.5%"
          type="text"
          style="w-full xl:w-1/2"
        />

        <InputField
          label="M35 48.5%"
          value={secondData.m35}
          onChange={handleInputChange("m35")}
          placeholder="Enter M35 48.5%"
          type="text"
          style="w-full xl:w-1/2"
        />
      </div>

      <h4 className="text-xl underline mb-6">Calibrator settings</h4>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Dough Thickness"
          value={secondData?.calibrator?.doughThickness}
          onChange={handleCalibratorChange("doughThickness")}
          placeholder="Enter Dough Thickness"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Compact line gelatine"
          value={secondData?.calibrator?.gelatine}
          onChange={handleCalibratorChange("gelatine")}
          placeholder="Enter Compact line gelatine"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Roller settings left"
          value={secondData?.calibrator?.roller}
          onChange={handleCalibratorChange("roller")}
          placeholder="Enter Roller settings left"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Belt Speed"
          value={secondData?.calibrator?.beltSpeed}
          onChange={handleCalibratorChange("beltSpeed")}
          placeholder="Enter Belt Speed"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Belt Speed right"
          value={secondData?.calibrator?.beltSpeedRight}
          onChange={handleCalibratorChange("beltSpeedRight")}
          placeholder="Enter Belt Speed right"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Number of trolleys"
          value={secondData?.calibrator?.numberOfTrolleys}
          onChange={handleCalibratorChange("numberOfTrolleys")}
          placeholder="Enter Number of trolleys"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Number of blocks"
          value={secondData?.calibrator?.numberOfBlocks}
          onChange={handleCalibratorChange("numberOfBlocks")}
          placeholder="Enter Number of blocks"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Each block weight"
          value={secondData?.calibrator?.eachBlockWeight}
          onChange={handleCalibratorChange("eachBlockWeight")}
          placeholder="Enter Each block weight"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Block size"
          value={secondData?.calibrator?.blockSize}
          onChange={handleCalibratorChange("blockSize")}
          placeholder="Enter Block size"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="flex justify-between">
        <button
          className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          onClick={() => setActiveButton("first")}
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
          onClick={() => setActiveButton("cutting")}
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

export default Second;
