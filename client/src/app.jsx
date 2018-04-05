import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header.jsx'
import Banner from './components/banner.jsx'
import Form1 from './components/form1.jsx'
import Form2 from './components/form2.jsx'
import Form3 from './components/form3.jsx'
import Confirmation from './components/confirmation.jsx'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isHomepage: true,
      isForm1: false,
      isForm2: false,
      isForm3: false,
      isConfirmation: false
    }
  }

  goToCheckout(){
    if(this.state.isHomepage){
      this.setState({
        isHomepage: false,
        isForm1: true
      });
    }
  }

  goToNext(target){
    console.log('Next clicked');
  }

  render() {
    let body = null;
    if (this.state.isHomepage){
      body = <Banner />
    } else if (this.state.isForm1){
      body = <Form1 goToNext={this.goToNext.bind(this)} />
    } else if (this.state.isForm2){
      body = <Form2 goToNext={this.goToNext.bind(this)} />
    } else if (this.state.isForm3){
      body = <Form3 goToNext={this.goToNext.bind(this)} />
    } else if (this.state.isConfirmation){
      body = <Confirmation goToNext={this.goToNext.bind(this)} />
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
