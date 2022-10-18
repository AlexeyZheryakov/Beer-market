import React from 'react';
import useStyles from './styles';

const Footer = () => {
  const { footer } = useStyles();

  return (
    <footer className={footer}>
      <p>Developed by Alexey Zheryakov</p>
    </footer>
  );
};

export default Footer;
