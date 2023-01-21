import { React, useState } from "react"
import Range from "./Range"
import Label from "./Label"

function Picker() {
  let [hueValue, setHue] = useState(0)
  let [saturationValue, setSaturation] = useState(100)
  let [stepsValue, setSteps] = useState(10)

  function labelsValue(value, id) {  
    if (id === 'Hue') setHue(value)
    else if (id === 'Saturation') setSaturation(value)
    else setSteps(value)
  }

  return (
    <>
      <Range name="Hue" startValue={0} min={0} max={360} callMe={labelsValue} />
      <Range name="Saturation" startValue={100} min={0} max={100} callMe={labelsValue} />
      <Range name="Steps" startValue={10} min={5} max={100} callMe={labelsValue}/>
      <Label name="Hue" value={hueValue} />
      <Label name="Saturation" value={saturationValue} />
      <Label name="Steps" value={stepsValue} />
    </>
  )
}

export default Picker