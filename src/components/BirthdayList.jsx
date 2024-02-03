import React from 'react'

import SingleBirthday from './singleBirthday'

function BirthdayList({ data, peopleList }) {
  const BirthdayList = peopleList.map((singleList) => {
    const { id, image, name, age } = singleList

    return <SingleBirthday {...singleList} key={id} />
  })
  return <div>{BirthdayList}</div>
}

export default BirthdayList
