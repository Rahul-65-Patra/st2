import React from 'react'


const Card = ({image,text}) => {
  return (
    <>
      <div>
        <img src={image} alt="image" />
        <p>{text}</p>
      </div>
    </>
  )
}

export default Card
