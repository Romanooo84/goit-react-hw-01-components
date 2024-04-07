const user = require('./users/user.json');

const{username, tag, location,avatar, stats } = user

export const Name = props => {
    return (
     <div>
      <img src={avatar} alt="jgluke, Jacques Gluke" width="640" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
    );
}

export const Stats = props => {
  return(
  <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
    )}