import React from "react"

function Label(props) {
  let { value, name } = props

  return (
    <p>{`${name}: ${value}`}</p>
  )
}

export default Label