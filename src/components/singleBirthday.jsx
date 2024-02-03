import React from 'react'

function SingleBirthday({ name, image, age }) {
  return (
    <div className="person">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  )
}

export default SingleBirthday
