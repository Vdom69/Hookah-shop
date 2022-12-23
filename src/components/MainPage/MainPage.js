import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPage.module.scss';
import Catalog from '../Catalog/Catalog';

const MainPage = () => (
  <div className={styles.MainPage}>
<Catalog/>
  </div>
);

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default MainPage;
