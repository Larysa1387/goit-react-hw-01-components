import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'




const Statistics = ({ title, statDatas }) => {
  const colors = ['#ff00b9', '#e7f043', '#852eae', '#3986ae', '#398624'];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.stat_list}>
        {statDatas.map(({ id, label, percentage }, index) => (
          <li
            key={id}
            className={styles.item}
            style={{
              backgroundColor:
                colors[randomIntegerFromInterval(0, colors.length - 1)],
            }}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
  };

Statistics.defaultProps = {
  statDatas: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  statDatas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};

export default Statistics;
