import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Customer from './components/customer';

const customer = {
  'name': '테스터',
  'birthday': '20200211',
  'gender': '남자',
  'job': '대학생'
}
  class App extends React.Component {
  render() {
    return(
        <Customer
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
        />
    );
  }
}

export default App;
