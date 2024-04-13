import css from '../css/stats.module.css'
const stats = require('./data/stats.json');
const colors = ['rgb(176, 105, 105)', 'rgb(84, 79, 231)', 'rgb(104, 231, 79)', 'rgb(231, 223, 79)', 'rgb(183, 183, 176)']

export const Data = () => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>{
        stats.map(({ id, label, percentage }, index) => (
          <li className={css.item} key={index} style={{ backgroundColor: colors[index] }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))
        }</ul>
    </section>
  );
};