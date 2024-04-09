const friends = require('./users/friends.json');

const friendsData = friends.map(({ isOnline, avatar, name }, index) => (
    <li className="friendsList" key={index}>
        {isOnline ? (
            <>
                <p className='onLine'>is Online</p>
                <img src={avatar} alt="friends' avatar" />
                <p>{name}</p>
            </>
        ) : (
            <>
                <p className='offLine'>is Offline</p>
                <img src={avatar} alt="friends' avatar" />
                <p>{name}</p>
            </>
        )}
    </li>
));

export const Friends = props => {
    return (
<ul className="friend-list">
            {friendsData}
</ul>
    )
}

