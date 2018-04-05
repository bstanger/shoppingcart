import React from 'react'
import ReactDOM from 'react-dom'

const Confirmation = ({goToNext}) => (
  <form>
    <button onClick={(e) => goToNext(e)}>Complete</button>
  </form>
)


export default Confirmation
