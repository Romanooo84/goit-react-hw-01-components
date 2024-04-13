import css from '../css/friends.module.css'
const friends = require('./data/friends.json');

const friendsData = friends.map(({ isOnline, avatar, name }, index) => (
    <li className={css.friendsList} key={index}>
        {isOnline ? (
            <>
                <p className={css.onLine}></p>
                <img src={avatar} alt="friends' avatar" className={css.imgFriends} />
                <p>{name}</p>
            </>
        ) : (
            <>
                    <p className={css.offLine}></p>
                <img src={avatar} alt="friends' avatar" className={css.imgFriends}/>
                <p>{name}</p>
            </>
        )}
    </li>
));

export const Friends =()=> {
    return (
        <ul className={css.mainFriendList}>
            {friendsData}
        </ul>
    )
}

