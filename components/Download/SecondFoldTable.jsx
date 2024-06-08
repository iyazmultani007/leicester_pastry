import React from 'react'
import CommonTable from './CommonTable';

function SecondFoldTable({secondData}) {

  

    const secondFoldDetails = [
        { label: "General Speed 100%", value: secondData?.generalSpeed },
        { label: "M30 100%", value: secondData?.m30 },
        { label: "M31 71%", value: secondData?.m31 },
        { label: "M32 57%", value: secondData?.m32 },
        { label: "M34 42%", value: secondData?.m34 },
        { label: "M35 45.3%", value: secondData?.m35 },
      ];

      const calibratorDetails = [
        { label: "Dough thickness", value: secondData?.calibrator?.doughThickness },
        { label: "Compact line gelatine", value: secondData?.calibrator?.gelatine },
        { label: "Roller setting left", value: secondData?.calibrator?.roller },
        { label: "Belt speed", value: secondData?.calibrator?.beltSpeed },
        { label: "Belt speed right", value: secondData?.calibrator?.beltSpeedRight },
        { label: "Number of trolleys", value: secondData?.calibrator?.numberOfTrolleys },
        { label: "Number of blocks", value: secondData?.calibrator?.numberOfBlocks },
        { label: "Each block weight", value: secondData?.calibrator?.eachBlockWeight },
        { label: "Block size", value: secondData?.calibrator?.blockSize },
      ];

  return (
    <div>
        <CommonTable title="Second fold" details={secondFoldDetails} />
        <CommonTable title="Calibrator settings" details={calibratorDetails} />
    </div>
  )
}

export default SecondFoldTable