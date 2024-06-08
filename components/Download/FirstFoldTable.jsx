import React from "react";
import CommonTable from "./CommonTable";

function FirstFoldTable({ firstData }) {
  const firstFoldDetails = [
    { label: "General Speed 100%", value: firstData?.generalSpeed },
    { label: "M30 100%", value: firstData?.m30 },
    { label: "M31 75%", value: firstData?.m31 },
    { label: "M32 60.5%", value: firstData?.m32 },
    { label: "M34 44.5%", value: firstData?.m34 },
    { label: "M35 48.5%", value: firstData?.m35 },
  ];

  const calibratorDetails = [
    { label: "Calibrator rollers", value: firstData?.calibrator?.rollers },
    { label: "Calibrator belt speed", value: firstData?.calibrator?.beltSpeed },
    { label: "Dough thickness", value: firstData?.calibrator?.doughThickness },
    { label: "Compact line gelatine", value: firstData?.calibrator?.gelatine },
    {
      label: "Compact line belt speed",
      value: firstData?.calibrator?.ComBeltSpeed,
    },
  ];

  return (
    <div>
      <CommonTable title="First fold" details={firstFoldDetails} />
      <CommonTable title="Calibrator settings" details={calibratorDetails} />
      
    </div>
  );
}

export default FirstFoldTable;
