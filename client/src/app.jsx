import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header.jsx'
import Banner from './components/banner.jsx'
import Form1 from './components/form1.jsx'
import Form2 from './components/form2.jsx'
import Form3 from './components/form3.jsx'
import Confirmation from './components/confirmation.jsx'

import axios from 'axios'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentPage: 'homepage',
      form1Data: {}
    }
  }

  goToCheckout(){
    if(this.state.currentPage === "homepage"){
      this.setState({ currentPage: 'form1' });
    }
  }

  goToNext(formData){
    console.log('formData ', formData);
    debugger;
    event.preventDefault();
    debugger;
    switch(this.state.currentPage){
      case "form1":
        this.setState({
          currentPage: 'form2'
        });
        break;
      case "form2":
        this.setState({ currentPage: 'form3' });
        break;
      case "form3":
        this.setState({ currentPage: 'confirmation' });
        break;
      case "confirmation":
        this.setState({ currentPage: 'homepage' });
        break;
    }
  }

  render() {
    let body = null;
    switch(this.state.currentPage){
      case "homepage":
        body = <Banner />
        break;
      case "form1":
        body = <Form1 goToNext={this.goToNext.bind(this)} />
        break;
      case "form2":
        body = <Form2 goToNext={this.goToNext.bind(this)} />
        break;
      case "form3":
        body = <Form3 goToNext={this.goToNext.bind(this)} />
        break;
      case "confirmation":
        body = <Confirmation goToNext={this.goToNext.bind(this)} />
        break;
    }
    return (
      <div className="app-content">
        <Header goToCheckout={this.goToCheckout.bind(this)}/>
        {body}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
