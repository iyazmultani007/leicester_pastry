import React, { useState } from "react";
import { db } from "@/utils/firebase.config";
import { deleteDoc, doc } from "firebase/firestore";


function DeleteModal({
  modal,
  setModal,
  id,
  setData,
  type,
  data,
  searchData,
  setSearchData,
}) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const handleDelete = async () => {
    setLoadingBtn(true);
    if (type === "productDetail") {
      const ref = doc(db, "productDetails", id);
      deleteDoc(ref)
        .then(() => {
          let removeItem;
          if (searchData) {
            removeItem = searchData.filter((item) => item.id !== id);
            setSearchData(removeItem);
          } else {
            removeItem = data.filter((item) => item.id !== id);
            setData(removeItem);
          }
          setModal(false);3
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type === "productType") {
      const ref = doc(db, "productType", id);
      deleteDoc(ref)
        .then(() => {
          let removeItem;
          if (searchData) {
            removeItem = searchData.filter((item) => item.id !== id);
            setSearchData(removeItem);
          } else {
            removeItem = data.filter((item) => item.id !== id);
            setData(removeItem);
          }
          setModal(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setLoadingBtn(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        modal ? "block" : "hidden"
      }`}
    >
      <div className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
        <span className="mx-auto inline-block">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.1"
              width="60"
              height="60"
              rx="30"
              fill="#DC2626"
            ></rect>
            <path
              d="M30 27.2498V29.9998V27.2498ZM30 35.4999H30.0134H30ZM20.6914 41H39.3086C41.3778 41 42.6704 38.7078 41.6358 36.8749L32.3272 20.3747C31.2926 18.5418 28.7074 18.5418 27.6728 20.3747L18.3642 36.8749C17.3296 38.7078 18.6222 41 20.6914 41Z"
              stroke="#DC2626"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          Are you sure you want to delete?
        </h3>
        {/* <p class="mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum been.
        </p> */}
        <div className="-mx-3 flex flex-wrap gap-y-4 mt-10">
          <div className="w-full px-3 2xsm:w-1/2">
            <button
              onClick={() => setModal(false)}
              className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
            >
              Cancel
            </button>
          </div>
          <div className="w-full px-3 2xsm:w-1/2">
            <button
              onClick={handleDelete}
              disabled={loadingBtn}
              className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white transition hover:bg-opacity-90"
            >
              {loadingBtn ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
