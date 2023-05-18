import React from 'react';
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import chevronRight from '../../components/images/chevronRight.svg';

import Section from './apps/Section';

import styles from './AboutUs.module.css'

const sectionsData = [
  {
    label: 'About us',
    title: 'In short, it\'s a page that can inspire people to work with you or buy your products.',
    paragraph: 'In short, it&apos;s a page that can inspire people to work with you or buy your products.\n' +
      'It can contain (but isn&apos;t limited to containing) your brand story, your achievements,\n' +
      'and your best testimonials. An About page is not a place to push a hard sell or boast about your business.',
  },
  {
    label: 'Services',
    title: 'In short, it\'s a page that can inspire people to work with you or buy your products.',
    paragraph: 'A service page is where you can describe your signature offer or a specific product or service you sell. In fact, one of the most common ways that people land on service pages.',
  },
  {
    label: 'Work with us',
    title: 'In short, it\'s a page that can inspire people to work with you or buy your products.',
    paragraph: 'A service page is where you can describe your signature offer or a specific product or service you sell. In fact, one of the most common ways that people land on service pages.',
  }
]

const AboutUs = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.main}>
        <div className={styles.navigation}>
          <Link to="/">Home</Link>
          <img src={chevronRight} alt="arrow" className={styles.greaterThan} />
          <Link to="/about">About us</Link>
        </div>
        <div className={styles.content}>
          {sectionsData.map(sectionProps => <Section {...sectionProps} key={sectionProps.label} />)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs;
