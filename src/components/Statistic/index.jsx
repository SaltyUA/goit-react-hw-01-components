import css from './statistic.module.css';
import { randomHexColor } from 'js/randomHex';

const Statistics = ({ title, data }) => {
  const itemWidth = `${100 / data.length}%`;
  return (
    <section className={css.statistics}>
      {title !== undefined && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat__list}>
        {data.map(data => {
          return (
            <li
              style={{
                width: itemWidth,
                backgroundColor: randomHexColor(),
              }}
              className={css.item}
              key={data.id}
            >
              <span className={css.label}>{data.label}</span>
              <span className={css.percentage}>{data.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
