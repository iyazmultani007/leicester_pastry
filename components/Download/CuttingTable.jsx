import React from 'react'
import CommonTable from './CommonTable';

function CuttingTable({cuttingdata}) {

    const cuttingDetails = [
        { label: "General Speed 74%", value: cuttingdata?.generalSpeed },
        { label: "M30 100%", value: cuttingdata?.m30 },
        { label: "M31 86%", value: cuttingdata?.m31 },
        { label: "M32 53%", value: cuttingdata?.m32 },
        { label: "M34 71%", value: cuttingdata?.m34 },
        { label: "M35 68%", value: cuttingdata?.m35 },
      ];
    
      const calibratorDetails = [
        { label: "Roller setting left", value: cuttingdata?.calibrator?.rollers },
        { label: "Belt speed right", value: cuttingdata?.calibrator?.beltSpeedRight },
        { label: "Belt speed", value: cuttingdata?.calibrator?.beltSpeed },
        { label: "Total waste", value: cuttingdata?.calibrator?.totalWaste },
        {
          label: "Calibrator thickness",
          value: cuttingdata?.calibrator?.calibratorThickness,
        },
      ];


  return (
    <div>
        <CommonTable title="Cutting" details={cuttingDetails} />
        <CommonTable title="Calibrator settings" details={calibratorDetails} />
    </div>
  )
}

export default CuttingTable