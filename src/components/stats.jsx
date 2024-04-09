const stats = require('./users/stats.json');

export const Data = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">{
        stats.map(({ id, label, percentage }, index) => (
          <li className="item" key={index}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))
        }</ul>
    </section>
  );
};