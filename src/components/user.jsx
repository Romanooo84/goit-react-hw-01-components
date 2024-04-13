import css from "../css/user.module.css"
const user = require('./data/user.json');

const{username, tag, location,avatar, stats } = user

export const Name = () => {
    return (
      <div className={css.description}>
        <img src={avatar} alt="jgluke, Jacques Gluke" width="640" className={css.userImg}/>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
    </div>
    );
}

export const Stats = props => {
  return(
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers </span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views </span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes </span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
    )}