import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

export default class Character extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    lastLocation: PropTypes.string.isRequired,
  }

  render(){      
    const { image, name, status, species, gender, origin, lastLocation } = this.props;
    return(
      // name, status, species, gender, origin, last location, image
      <article className={styles.Character}>
        <img src={image}/>
        <h2>{name}</h2>
        <div>
          <span>STATUS</span>
          <p>{status}</p>
        </div>
        <div>
          <span>SPECIES</span>
          <p>{species}</p>
        </div>
        <div>
          <span>GENDER</span>
          <p>{gender}</p>
        </div>
        <div>
          <span>ORIGIN</span>
          <p>{origin}</p>
        </div>
        <div>
          <span>LAST LOCATION</span>
          <p>{lastLocation}</p>
        </div>
      </article>
    )
  }
}
