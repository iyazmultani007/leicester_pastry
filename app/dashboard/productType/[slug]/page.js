"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumbs";
import Cutting from "@/components/productType/Cutting";
import First from "@/components/productType/First";
import Second from "@/components/productType/Second";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase.config";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { useRouter, useParams } from "next/navigation";
import TabButton from "@/components/TabButton/TabButton";


function page() {
  const [activeButton, setActiveButton] = useState("first");
  const [productType, setProductType] = useState("");
  const [firstData, setFirstData] = useState({
    generalSpeed: "",
    m30: "",
    m31: "",
    m32: "",
    m34: "",
    m35: "",
    calibrator: {
      rollers: "",
      beltSpeed: "",
      doughThickness: "",
      gelatine: "",
      ComBeltSpeed: "",
    },
  });
  const [secondData, setSecondData] = useState({
    generalSpeed: "",
    m30: "",
    m31: "",
    m32: "",
    m34: "",
    m35: "",
    calibrator:{
      doughThickness: "",
      gelatine: "",
      roller: "",
      beltSpeed: "",
      beltSpeedRight: "",
      numberOfTrolleys: "",	
      numberOfBlocks: "",	
      eachBlockWeight: "",	
      blockSize: "",
    }
  });
  const [cuttingData, setCuttingData] = useState({
    generalSpeed: "",
    m30: "",
    m31: "",
    m32: "",
    m34: "",
    m35: "",
    calibrator: {
      roller: "",
      beltSpeedRight: "",
      beltSpeed: "",
      totalWaste: "",
      calibratorThickness: "",
    },
  });
  const [error, setError] = useState(false)

  const router = useRouter();
  const params = useParams();

  

  const getData = async () => {
    if (params.slug !== "add") {
      
      const ref = doc(db, "productType", params.slug);
      const snapshot = await getDoc(ref);
      
      setProductType(snapshot.data().productType);
      setFirstData(snapshot.data().firstData);
      setSecondData(snapshot.data().secondData);
      setCuttingData(snapshot.data().cuttingData);
    }
  };

  useEffect(() => {
    getData();
  }, [params.slug]);

  const handleSubmit = async () => {
    const col = collection(db, "productType");

    try {
      
      const docRef = await addDoc(col, {
        productType,
        firstData,
        secondData,
        cuttingData,
        timestamp: serverTimestamp(),
      });

      if (docRef) {
        router.push("/dashboard/productType");
      } else {
        console.log("error");
      }
    } catch (error) {
      throw error;
    }
  };

  const handleUpdate = async () => {
    const ref = doc(db, "productType", params.slug);
    setDoc(ref, {
      productType,
        firstData,
        secondData,
        cuttingData,
        timestamp: serverTimestamp(),
    })
      .then(() => {
        router.push("/dashboard/productType");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Breadcrumb pageName={params.slug === "add" ? "Add Product Type" : "Edit Product Type"} />

      
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mb-7.5 mt-8 ml-8 flex flex-wrap gap-3 border-b border-stroke pb-5 dark:border-strokedark">
          <TabButton
            buttonText="First fold"
            isActive={activeButton === "first"}
            onClick={() => setActiveButton("first")}
          />
          <TabButton
            buttonText="Second fold"
            isActive={activeButton === "second"}
            onClick={() => {
              if(productType === "") {
                setError(true)
              } else {
                setActiveButton("second")
              }
            }}
          />
          <TabButton
            buttonText="Cutting"
            isActive={activeButton === "cutting"}
            onClick={() => {
              if(productType === "") {
                setError(true)
              } else {
                setActiveButton("cutting")
              }
            }}
          />
        </div>

        {activeButton === "first" ? (
          <First
            setActiveButton={setActiveButton}
            setFirstData={setFirstData}
            firstData={firstData}
            setProductType={setProductType}
            productType={productType}
            error={error}
            setError={setError}
          />
        ) : activeButton === "second" ? (
          <Second
            setActiveButton={setActiveButton}
            setSecondData={setSecondData}
            secondData={secondData}
          />
        ) : (
          <Cutting
            setActiveButton={setActiveButton}
            setCuttingData={setCuttingData}
            cuttingData={cuttingData}
            handleSubmit={handleSubmit}
            params={params}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  );
}

export default page;
