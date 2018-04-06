import React from 'react'
import Forms from '../../dist/styles/forms.css'
import Page from '../../dist/styles/page.css'

const Form3 = ({goToNext}) => (
  <section className={Page.section}>
    <form>
      <input placeholder="Credit Card Number"></input>
      <input placeholder="CVV"></input>
      <input placeholder="Expiration Date (MM/DD)"></input>
      <input placeholder="Billing Zip Code"></input>
      <button className={Forms.formButton} onClick={(e) => goToNext(e)}>Next</button>
    </form>
  </section>
)


export default Form3
