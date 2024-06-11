"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumbs";
import TabButton from "@/components/TabButton/TabButton";
import DoughWeight from "@/components/ProductDetail/DoughWeight";
import SampleLabel from "@/components/ProductDetail/SampleLabel";
import Batch from "@/components/ProductDetail/Batch";
import Ingredient from "@/components/ProductDetail/Ingredient";
import Product from "@/components/ProductDetail/Product";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase.config";
import {
  collection,
  getDocs,
  serverTimestamp,
  addDoc,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

function ProductDetailSlug() {
  const [activeButton, setActiveButton] = useState("product");
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const [product, setProduct] = useState({
    noOfBlocks: "",
    boxes: "",
    unitsPerBox: "",
    totalUnits: "",
    trimmingsMade: "",
    productionDate: "",
    productionStartTime: "",
    productionEndTime: "",
    totalProductionTime: "",
    noOfProductionStaff: "",
    packingDate: "",
    packingStartTime: "",
    packingEndTime: "",
    totalPackingTime: "",
    noOfPackingStaff: "",
    notes: "",
  });
  const [ingredient, setIngredient] = useState({
    wheat: {
      quantity: "",
      batch: "",
      productCode: "",
      bbd: "",
    },
    pastry: {
      quantity: "",
      batch: "",
      productCode: "",
      bbd: "",
    },
    cake: {
      quantity: "",
      batch: "",
      productCode: "",
      bbd: "",
    },
    salt: {
      quantity: "",
      batch: "",
      productCode: "",
      bbd: "",
    },
    water: {
      quantity: "",
      batch: "",
      productCode: "",
      bbd: "",
    },
    trimmings: {
      quantity: "",
      batch: "",
      productCode: "",
      bbd: "",
    },
  });
  const [batch, setBatch] = useState({
    batchNumber: "",
    useDate: "",
    expiryDate: "",
    innerLabel: "",
    outerLabel: "",
    managerName: "",
  });
  const [dough, setDough] = useState({
    doughSetting: "",
    acceptedWeight: "",
    noOfBlocks: "",
  });
  const [rows, setRows] = useState([
    {
      doughWeight: "",
      doughNote: "",
      productWeight: "",
      productNote: "",
    },
  ]);

  const [loadingBtn, setLoadingBtn] = useState(false);
  const [error, setError] = useState(false);
  const [productionDateError, setproductionDateError] = useState(false);
  const [innerUrl, setInnerUrl] = useState("");
  const [outerUrl, setOuterUrl] = useState("");

  const router = useRouter();
  const params = useParams();

  const calculateTimeDifference = (startTime, endTime) => {
    if (startTime && endTime) {
      const start = new Date(`1970-01-01T${startTime}:00`);
      const end = new Date(`1970-01-01T${endTime}:00`);

      if (end > start) {
        const diff = end - start;
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        return `${hours} hours and ${minutes} minutes`;
      } else {
        return "End time must be after start time";
      }
    }
    return "";
  };

  useEffect(() => {
    const totalPackingTime = calculateTimeDifference(
      product.packingStartTime,
      product.packingEndTime
    );
    setProduct((prevProduct) => ({
      ...prevProduct,
      totalPackingTime,
    }));
  }, [product.packingStartTime, product.packingEndTime]);

  useEffect(() => {
    const totalProductionTime = calculateTimeDifference(
      product.productionStartTime,
      product.productionEndTime
    );
    setProduct((prevProduct) => ({
      ...prevProduct,
      totalProductionTime,
    }));
  }, [product.productionStartTime, product.productionEndTime]);

  useEffect(() => {
    const fetch = async () => {
      const col = collection(db, "productType");
      const spanshot = await getDocs(col);
      setOptions(
        spanshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    };
    fetch();
  }, []);

  const getData = async () => {
    if (params.slug !== "add") {
      const ref = doc(db, "productDetails", params.slug);
      const snapshot = await getDoc(ref);
      
      setSelectedOption(snapshot.data().data.productTypeDetails.id);
      setProduct(snapshot.data().data.product);
      setIngredient(snapshot.data().data.ingredient);
      setBatch(snapshot.data().data.batch);
      setDough(snapshot.data().data.dough);
      setRows(snapshot.data().data.rows);
      setInnerUrl(snapshot.data().data.innerUrl);
      setOuterUrl(snapshot.data().data.outerUrl);
    }
  };

  useEffect(() => {
    getData();
  }, [params.slug]);

  const handleSubmit = async () => {
    setLoadingBtn(true);
    const productData = options?.find((option) => option.id === selectedOption);
    const data = {
      productType: productData.productType,
      productTypeDetails: productData,
      product,
      ingredient,
      batch,
      dough,
      rows,
      innerUrl,
      outerUrl,
    };

    const col = collection(db, "productDetails");

    try {
      const docRef = await addDoc(col, {
        data,
        timestamp: serverTimestamp(),
      });
      if (docRef) {
        router.push("/dashboard/productDetail");
      } else {
        console.log("error");
      }
    } catch (error) {
      throw error;
    } finally {
      setLoadingBtn(false);
    }
  };

  const handleUpdate = async () => {
    setLoadingBtn(true);
    const productData = options?.find((option) => option.id === selectedOption);
    const data = {
      productType: productData.productType,
      productTypeDetails: productData,
      product,
      ingredient,
      batch,
      dough,
      rows,
      innerUrl,
      outerUrl,
    };
    const ref = doc(db, "productDetails", params.slug);
    setDoc(ref, {
      data,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        router.push("/dashboard/productDetail");
        setLoadingBtn(false);
      })
      .catch((error) => {
        setLoadingBtn(false);
        console.log(error);
      });
  };

  return (
    <ProtectedRoute>
      <Breadcrumb
        pageName={
          params.slug === "add" ? "Add Product Deatil" : "Edit Product Deatil"
        }
      />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mb-7.5 mt-8 ml-8 flex flex-wrap gap-3 border-b border-stroke pb-5 dark:border-strokedark">
          <TabButton
            buttonText="Product"
            isActive={activeButton === "product"}
            onClick={() => setActiveButton("product")}
          />
          <TabButton
            buttonText="Ingredient"
            isActive={activeButton === "ingredient"}
            onClick={() =>
              selectedOption === ""
                ? setError(true)
                : product.productionDate === ""
                ? setproductionDateError(true)
                : setActiveButton("ingredient")
            }
          />
          <TabButton
            buttonText="Batch"
            isActive={activeButton === "batch"}
            onClick={() =>
              selectedOption === ""
                ? setError(true)
                : product.productionDate === ""
                ? setproductionDateError(true)
                : setActiveButton("batch")
            }
          />
          <TabButton
            buttonText="Dough Weight"
            isActive={activeButton === "doughWeight"}
            onClick={() =>
              selectedOption === ""
                ? setError(true)
                : product.productionDate === ""
                ? setproductionDateError(true)
                : setActiveButton("doughWeight")
            }
          />
          <TabButton
            buttonText="Sample Label"
            isActive={activeButton === "sampleLabel"}
            onClick={() =>
              selectedOption === ""
                ? setError(true)
                : product.productionDate === ""
                ? setproductionDateError(true)
                : setActiveButton("sampleLabel")
            }
          />
        </div>

        {activeButton === "product" ? (
          <Product
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            isOptionSelected={isOptionSelected}
            setIsOptionSelected={setIsOptionSelected}
            setActiveButton={setActiveButton}
            options={options}
            product={product}
            setProduct={setProduct}
            error={error}
            setError={setError}
            productionDateError={productionDateError}
            setproductionDateError={setproductionDateError}
          />
        ) : activeButton === "ingredient" ? (
          <Ingredient
            ingredient={ingredient}
            setIngredient={setIngredient}
            setActiveButton={setActiveButton}
          />
        ) : activeButton === "batch" ? (
          <Batch
            batch={batch}
            setBatch={setBatch}
            setActiveButton={setActiveButton}
          />
        ) : activeButton === "doughWeight" ? (
          <DoughWeight
            dough={dough}
            setDough={setDough}
            setActiveButton={setActiveButton}
            rows={rows}
            setRows={setRows}
          />
        ) : activeButton === "sampleLabel" ? (
          <SampleLabel
            setActiveButton={setActiveButton}
            innerUrl={innerUrl}
            setInnerUrl={setInnerUrl}
            outerUrl={outerUrl}
            setOuterUrl={setOuterUrl}
            handleSubmit={handleSubmit}
            loadingBtn={loadingBtn}
            params={params}
            handleUpdate={handleUpdate}
          />
        ) : null}
      </div>
    </ProtectedRoute>
  );
}

export default ProductDetailSlug;
