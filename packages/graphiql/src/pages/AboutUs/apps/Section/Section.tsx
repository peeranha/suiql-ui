import React from 'react';
import styles from './Section.module.css';

type SectionProps = {
  label: string,
  title: string,
  paragraph: string,
}

const Section = ({ label, title, paragraph }: SectionProps) => {
  return (
    <div className={styles.root}>
      <span className={styles.sectionLabel}>
        {label}
      </span>
      <h1 className={styles.sectionTitle}>
        {title}
      </h1>
      <p className={styles.sectionParagraph}>
        {paragraph}
      </p>
    </div>
  )
}

export default Section;
