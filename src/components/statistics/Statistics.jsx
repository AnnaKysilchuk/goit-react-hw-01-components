import PropTypes from "prop-types";
import style from './Statistics.module.css'

export const Statistics = ({
  title,
  data
}) => {
  return (
    <div className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {data.map(({ label, percentage, id }) => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={style.statItem}
            key={id}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
}