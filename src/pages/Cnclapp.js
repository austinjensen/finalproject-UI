import React, { Component } from 'react';
import Navbar from '../components/Navbar'

class Cancel extends Component {
  render() {
    return (
      <div>
        <header className='banner'><h1>Cancel Appointment</h1></header>
        <Navbar/>
        <main>
          <h2>This Is The Calendar</h2>
          <div>
            <button>Cancel My Appointment</button>
          </div>
        </main>
      </div>
    );
  }
}

export default Cancel;
