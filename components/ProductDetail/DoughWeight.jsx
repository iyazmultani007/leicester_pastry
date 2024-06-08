import React from "react";
import InputField from "../InputField/InputField";

function DoughWeight({ dough, setDough, setActiveButton, rows, setRows }) {
  

  const handleInputChange = (key) => (e) => {
    setDough({
      ...dough,
      [key]: e.target.value,
    });
  };

  const handleTableInputChange = (index, key, value) => {
    const newRows = [...rows];
    newRows[index][key] = value;
    
    setRows(newRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        doughWeight: "",
        doughNote: "",
        productWeight: "",
        productNote: "",
      },
    ]);
  };

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6.5">
      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
        <InputField
          label="Dough setting"
          value={dough.doughSetting}
          onChange={handleInputChange("doughSetting")}
          placeholder="Enter Dough setting"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="Accepted Weight"
          value={dough.acceptedWeight}
          onChange={handleInputChange("acceptedWeight")}
          placeholder="Enter Accepted Weight"
          type="text"
          style="w-full xl:w-1/3"
        />

        <InputField
          label="No. of Blocks"
          value={dough.noOfBlocks}
          onChange={handleInputChange("noOfBlocks")}
          placeholder="Enter No. of Blocks"
          type="text"
          style="w-full xl:w-1/3"
        />
      </div>

      <div className="max-w-full overflow-x-auto mt-10">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Dough Weight
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Notes
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Product Weight Check
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Notes
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <input
                    type="text"
                    value={item.doughWeight}
                    onChange={(e) =>
                      handleTableInputChange(
                        index,
                        "doughWeight",
                        e.target.value
                      )
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black dark:text-white outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <input
                    type="text"
                    value={item.doughNote}
                    onChange={(e) =>
                      handleTableInputChange(index, "doughNote", e.target.value)
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black dark:text-white outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <input
                    type="text"
                    value={item.productWeight}
                    onChange={(e) =>
                      handleTableInputChange(
                        index,
                        "productWeight",
                        e.target.value
                      )
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black dark:text-white outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <input
                    type="text"
                    value={item.productNote}
                    onChange={(e) =>
                      handleTableInputChange(
                        index,
                        "productNote",
                        e.target.value
                      )
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black dark:text-white outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  {rows.length > 1 && (
                    <button
                      onClick={() => removeRow(index)}
                      className="text-red hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <button
            onClick={addRow}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900"
          >
            Add Row
          </button>
        </div>
        <div className="flex justify-between mt-7">
          <button
            className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            onClick={() => setActiveButton("batch")}
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
            onClick={() => setActiveButton("sampleLabel")}
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
    </div>
  );
}

export default DoughWeight;
