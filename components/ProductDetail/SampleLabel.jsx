import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/utils/firebase.config";
import { v4 as uuidv4 } from "uuid";
import LoadingButton from "../LoadingButton/LoadingButton";

function SampleLabel({
  setActiveButton,
  innerUrl,
  setInnerUrl,
  outerUrl,
  setOuterUrl,
  handleSubmit,
  loadingBtn,
  params,
  handleUpdate,
}) {
  const [innerProgress, setInnerProgress] = useState(0);
  const [outerProgress, setOuterProgress] = useState(0);

  const uploadFile = (file, setProgress, setUrl) => {
    const fileId = uuidv4();
    const storageRef = ref(storage, `images/${fileId + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
        });
      }
    );
  };

  const handleInnerChange = (e) => {
    if (e.target.files[0]) {
      uploadFile(e.target.files[0], setInnerProgress, setInnerUrl);
    }
  };

  const handleOuterChange = (e) => {
    if (e.target.files[0]) {
      uploadFile(e.target.files[0], setOuterProgress, setOuterUrl);
    }
  };

  const ProgressBar = ({ progress }) => (
    <div className="relative h-4 w-full rounded-full bg-stroke dark:bg-strokedark mt-5">
      <div
        className="absolute left-0 flex h-full w-full items-center justify-center rounded-full bg-primary"
        style={{ width: `${progress}%` }}
      >
        <p className="my-auto text-center text-[10px] font-bold leading-none text-white">
          {progress}%
        </p>
      </div>
    </div>
  );

  const FileUpload = ({ handleChange, progress, url, label }) => (
    <>
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <label className="font-medium text-black dark:text-white">
          {label}
        </label>
      </div>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input type="file" className="hidden" onChange={handleChange} />
        </label>
      </div>
      {progress > 0 && <ProgressBar progress={progress} />}
      {url && (
        <div className="relative w-full mt-5">
          <img src={url} alt="Uploaded" className="w-full h-auto" />
        </div>
      )}
    </>
  );

  return (
    <div className="p-6.5">
      <FileUpload
        handleChange={handleInnerChange}
        progress={innerProgress}
        url={innerUrl}
        label="Sample of Inner Label"
      />
      <FileUpload
        handleChange={handleOuterChange}
        progress={outerProgress}
        url={outerUrl}
        label="Sample of Outer Label"
      />

      <div className="flex justify-between mt-5">
        <button
          className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          onClick={() => setActiveButton("doughWeight")}
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

        {loadingBtn ? (
          <LoadingButton />
        ) : (
          <button
            className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            onClick={() => params.slug !== "add" ? handleUpdate() : handleSubmit()}
          >
            Submit
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
        )}
      </div>
    </div>
  );
}

export default SampleLabel;
