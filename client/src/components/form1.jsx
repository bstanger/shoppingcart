import React from 'react'
import ReactDOM from 'react-dom'

const Form1 = ({goToNext}) => (
  <form>
    <button onClick={(e) => goToNext(e)}>Next</button>
  </form>
)


export default Form1
