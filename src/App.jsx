import BirthdayList from './components/BirthdayList'
import { useState } from 'react'
import data from './data'
const App = () => {
  const [peopleList, setPeopleList] = useState(data)
  function handleClick() {
    setPeopleList([])
  }
  return (
    <main>
      <div className="container">
        <h3>Birthday Reminder - Starter</h3>
        <BirthdayList peopleList={peopleList} data={data} />
        <button className="btn" type="btn" onClick={handleClick}>
          {' '}
          Clear All
        </button>
      </div>
    </main>
  )
}
export default App
