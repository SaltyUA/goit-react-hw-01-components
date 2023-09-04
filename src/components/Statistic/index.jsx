import './statistic.css';
import { randomHexColor } from 'js/randomHex';

const Statistics = ({ title, data }) => {
  const itemWidth = `${100 / data.length}%`;
  return (
    <section className="statistics">
      {title !== undefined && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {data.map(data => {
          return (
            <li
              style={{
                width: itemWidth,
                backgroundColor: randomHexColor(),
              }}
              className="item"
              key={data.id}
            >
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
