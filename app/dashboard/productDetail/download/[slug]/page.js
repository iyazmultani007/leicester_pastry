"use client";

import { db } from "@/utils/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ProductTable from "@/components/Download/ProductTable";
import IngredientTable from "@/components/Download/IngredientTable";
import BatchTable from "@/components/Download/BatchTable";
import FirstFoldTable from "@/components/Download/FirstFoldTable";
import SecondFoldTable from "@/components/Download/SecondFoldTable";
import CuttingTable from "@/components/Download/CuttingTable";
import DoughTable from "@/components/Download/DoughTable";
import Sample from "@/components/Download/Sample";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

function ProductDetailDownload() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [productType, setProductType] = useState("");
  const [ingredient, setIngredient] = useState({});
  const [batch, setBatch] = useState({});
  const [dough, setDough] = useState({});
  const [rows, setRows] = useState({});
  const [innerUrl, setInnerUrl] = useState({});
  const [outerUrl, setOuterUrl] = useState({});
  const [loading, setLoading] = useState(false);
  const [productTypeDetails, setProductTypeDetails] = useState({});

  const pdfRef = useRef();

  const getData = async () => {
    if (params.slug !== "add") {
      const ref = doc(db, "productDetails", params.slug);
      const snapshot = await getDoc(ref);
      setProduct(snapshot.data().data.product);
      setProductType(snapshot.data().data.productType);
      setIngredient(snapshot.data().data.ingredient);
      setBatch(snapshot.data().data.batch);
      setProductTypeDetails(snapshot.data().data.productTypeDetails);
      setDough(snapshot.data().data.dough);
      setRows(snapshot.data().data.rows);
      setInnerUrl(snapshot.data().data.innerUrl);
      setOuterUrl(snapshot.data().data.outerUrl);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const waitForImagesToLoad = (container) => {
  //   const imgElements = container.getElementsByTagName("img");
  //   const imgPromises = [];
  //   for (let img of imgElements) {
  //     if (!img.complete) {
  //       imgPromises.push(
  //         new Promise((resolve) => {
  //           img.onload = img.onerror = resolve;
  //         })
  //       );
  //     }
  //   }
  //   return Promise.all(imgPromises);
  // };

  // const generatePDF = async () => {
  //   setLoading(true);
  //   const input = document.getElementById("pdfContent");

  //   await waitForImagesToLoad(input);

  //   const pdf = new jsPDF("p", "mm", "a4");
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = pdf.internal.pageSize.getHeight();
  //   const margin = 10;
  //   const pageHeight = pdfHeight - 2 * margin;
  //   const inputHeight = input.clientHeight;
  //   const canvasHeight = inputHeight * (pdfWidth / input.clientWidth);
  //   const numPages = Math.ceil(canvasHeight / pageHeight);

  //   html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
  //     for (let i = 0; i < numPages; i++) {
  //       const imgData = canvas.toDataURL("image/png");
  //       const imgProps = pdf.getImageProperties(imgData);
  //       const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //       const pageCanvas = document.createElement("canvas");
  //       pageCanvas.width = canvas.width;
  //       pageCanvas.height = canvas.height / numPages;
  //       const pageCtx = pageCanvas.getContext("2d");
  //       pageCtx.drawImage(canvas, 0, -(i * pageCanvas.height));
  //       const pageData = pageCanvas.toDataURL("image/png");
  //       pdf.addImage(
  //         pageData,
  //         "PNG",
  //         margin,
  //         margin,
  //         pdfWidth - 2 * margin,
  //         imgHeight / numPages
  //       );

  //       if (i < numPages - 1) {
  //         pdf.addPage();
  //       }
  //     }
  //     pdf.save("download.pdf");
  //     setLoading(false);
  //   });
  // };

  const waitForImagesToLoad = (container) => {
    const imgElements = container.getElementsByTagName("img");
    const imgPromises = [];
    for (let img of imgElements) {
      if (!img.complete) {
        imgPromises.push(
          new Promise((resolve) => {
            img.onload = img.onerror = resolve;
          })
        );
      }
    }
    return Promise.all(imgPromises);
  };

  const generatePDF = async (elementIds) => {
    setLoading(true);
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const pageHeight = pdfHeight - 2 * margin;

    for (const elementId of elementIds) {
      const input = document.getElementById(elementId);

      await waitForImagesToLoad(input);

      const canvas = await html2canvas(input, { scale: 2, useCORS: true });
      const inputHeight = input.clientHeight;
      const canvasHeight = inputHeight * (pdfWidth / input.clientWidth);
      const numPages = Math.ceil(canvasHeight / pageHeight);

      for (let i = 0; i < numPages; i++) {
        const imgData = canvas.toDataURL("image/png");
        const imgProps = pdf.getImageProperties(imgData);
        const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = canvas.height / numPages;
        const pageCtx = pageCanvas.getContext("2d");
        pageCtx.drawImage(canvas, 0, -(i * pageCanvas.height));
        const pageData = pageCanvas.toDataURL("image/png");
        pdf.addImage(
          pageData,
          "PNG",
          margin,
          margin,
          pdfWidth - 2 * margin,
          imgHeight / numPages
        );

        if (i < numPages - 1) {
          pdf.addPage();
        }
      }

      pdf.addPage(); // Add a new page after each element's content
    }

    pdf.deletePage(pdf.getNumberOfPages()); // Remove the last blank page added
    pdf.save("download.pdf");
    setLoading(false);
  };

  const handleGeneratePDF = () => {
    generatePDF([
      "pdfContent1",
      "pdfContent2",
      "pdfContent3",
      "pdfContent4",
      "pdfContent5",
      "pdfContent6",
    ]); // Pass the IDs of the elements you want to include in the PDF
  };

  return (
    <ProtectedRoute>
      <div
        id="pdfContent"
        ref={pdfRef}
        className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <div id="pdfContent1">
          <ProductTable
            productDetailId={params.slug}
            product={product}
            productType={productType}
          />
          <IngredientTable ingredient={ingredient} />
        </div>

        <div id="pdfContent2">
          <BatchTable batch={batch} />
          <FirstFoldTable firstData={productTypeDetails?.firstData} />
        </div>

        <div id="pdfContent3">
          <SecondFoldTable secondData={productTypeDetails?.secondData} />
        </div>

        <div id="pdfContent4">
          <CuttingTable cuttingdata={productTypeDetails?.cuttingdata} />
        </div>

        <div id="pdfContent5">
          <DoughTable dough={dough} rows={rows} />
        </div>

        <div id="pdfContent6">
          <Sample innerUrl={innerUrl} outerUrl={outerUrl} />
        </div>
      </div>
      <button
        onClick={handleGeneratePDF}
        className="mb-4 mt-6 px-4 py-2 bg-blue-500 text-white rounded"
        disabled={loading}
      >
        {loading ? "Loading..." : "Generate PDF"}
      </button>
    </ProtectedRoute>
  );
}

export default ProductDetailDownload;
