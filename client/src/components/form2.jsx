import React from 'react'
import Forms from '../../dist/styles/forms.css'
import Page from '../../dist/styles/page.css'

const Form2 = ({goToNext}) => (
  <section className={Page.section}>
    <form>
      <label htmlFor="address"></label>
      <input id="address" placeholder="Address"></input>
      <input placeholder="Address"></input>
      <input placeholder="City"></input>
      <select>
        <option>CA</option>
      </select>
      <input placeholder="Zip Code"></input>
      <input placeholder="Phone Number"></input>
      <button className={Forms.formButton} onClick={(e) => goToNext(e)}>Next</button>
    </form>
  </section>
)


export default Form2
