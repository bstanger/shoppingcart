import React from 'react'
import Forms from '../../dist/styles/forms.css'
import Page from '../../dist/styles/page.css'

const Confirmation = ({goToNext}) => (
  <section className={Page.section}>
    <form>
      <button className={Forms.formButton} onClick={(e) => goToNext(e)}>Purchase</button>
    </form>
  </section>
)


export default Confirmation
