import React, { Component } from 'react';
import styles from './App.css';

export default class Header extends Component {
  render(){
    return (
      <header className={styles.Header}>
        <nav>
          <ul>
            <li><a className={styles.active} href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </nav>
        <section>
          <h1>The Rick And Morty Api</h1>
          <h2>Hey, did you ever want to hold a Terry fold?</h2>
        </section>
      </header>
    )
  }
};
