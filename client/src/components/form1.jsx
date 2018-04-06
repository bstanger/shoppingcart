import React from 'react'
import Forms from '../../dist/styles/forms.css'
import Page from '../../dist/styles/page.css'

class Form1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: null,
      email: null,
      password: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState({
      [inputName]: inputValue
    });
  }

  render(){
    return (
      <section className={Page.section}>
        <form>
          <input name="name" placeholder="Name" onChange={this.handleChange}></input>
          <input name="email" placeholder="Email" onChange={this.handleChange}></input>
          <input name="password" type="password" placeholder="Password" onChange={this.handleChange}></input>
          <button className={Forms.formButton}>Next</button>
        </form>
      </section>
    )
  }
}


export default Form1
