import React from 'react';

const DisplayList = ({ friends, allUsers, searchActivated }) => {

  const friendsCards = friends.map(friend => {
    return (
      <Cards
        icon={friend.icon}
        username={friend.username}
        myersBriggs={friend.myersBriggs}
        enneagram={friend.enneagram}
      />
    )
  })
  const allUsersCards = user.map(user => {
    return (
      <Cards
        icon={user.icon}
        username={user.username}
        myersBriggs={user.myersBriggs}
        enneagram={user.enneagram}
      />
    )
  })

  return (
    <>
    { searchActivated ?
      <section className="allUsersCards">
      {allUsersCards}
      </section> :
      <section className="friendsCards">
        {friendsCards}
      </section>
    }
    </>
  )
}

export default DisplayList;
