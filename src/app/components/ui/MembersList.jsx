import React from 'react'
import UserCard from './UserCard'

const MembersList = () => {
  const team = {
    id: 'number',
    img: 'URL',
    groupName: 'Group name',
    hackathonTeamName: 'number',
    taskTitle: 'name',
    description: 'description'
  }

  const user = {
    img: 'URL',
    name: 'name',
    lastName: 'last name',
    age: 'number',
    addres: {
      country: 'country',
      city: 'city'
    },
    hackathonTeam: { id: team.id },
    sotialNetworcs: [
      // {id: sotialNetworcs.id} // реализация через отдельную сущность
      { id: 'number', label: 'label', url: 'URL', img: 'URL' }
    ],
    about: {
      id: 'number',
      content: 'text',
      img: 'URL'
    },
    role: 'role in progect',
    features: [{ id: 'number', label: 'label' }],
    skills: [
      // {id: "skills.id"}, // реализация через отдельную сущность
      { id: 'number', label: 'label' }
    ]
  }

  const arrUsers = [user, user, user]

  return (
    <div
      className=''
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
      }}
    >
      {arrUsers.map((member) => {
        return (
          <UserCard
            key={member.id}
            favourites={true}
            name={member.name}
            age={member.age}
            additionalInfo={member.about.content}
            devTask={member.features[0].label}
            arrSocialMediaLinks={[
              { name: 'vk', link: 'vk.com' },
              { name: 'tg', link: 'tg.com' },
              { name: 'facebook', link: 'facebook.com' }
            ]}
            img={
              member.img &&
              'https://yt3.googleusercontent.com/E424mRX4iziWCVVamYbAUt4z70Jz-BtQyprcgcFMOeks8CHtyRh7-U9QnGYqHBw8ZTeZtvF5=s900-c-k-c0x00ffffff-no-rj'
            }
          />
        )
      })}
    </div>
  )
}

export default MembersList
