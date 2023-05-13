import React, { useState } from 'react'
import UserCard from '../ui/UserCard'
import TextField from '../common/form/TextField'
import TeamInfo from '../ui/TeamInfo'
import api from '../../../api'
import MembersList from '../ui/MembersList'
import Button from '../common/button'
import { useLocation } from 'react-router-dom'

export default function MainPage() {
  // const [listVisual, setListVisual] = useState(true)

  // const { pathname } = useLocation()
  // console.log(pathname)

  // const handleTransformList = () => {
  //   // localStorage.setItem('configList', listVisual)
  //   setListVisual(!listVisual)
  // }

  const team2 = {
    id: 'number',
    img: 'URL',
    groupName: 'Group name',
    hackathonTeamName: 'number',
    taskTitle: 'name',
    description: 'description'
  }

  const user1 = {
    id: '1',
    img: 'data:image/png;base64,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',
    name: 'name',
    lastName: 'last name',
    age: 'number',
    addres: {
      country: 'country',
      city: 'city'
    },
    hackathonTeam: { id: team2.id },
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
    features: [{ id: 'number1', label: 'label' }],
    skills: [
      // {id: "skills.id"}, // реализация через отдельную сущность
      { id: 'number', label: 'label' }
    ]
  }

  const user2 = {
    id: '2',
    img: 'data:image/png;base64,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',
    name: '2',
    lastName: 'last name',
    age: 'number',
    addres: {
      country: 'country',
      city: 'city'
    },
    hackathonTeam: { id: team2.id },
    sotialNetworcs: [
      // {id: sotialNetworcs.id} // реализация через отдельную сущность
      { id: 'number2', label: 'label', url: 'URL', img: 'URL' }
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

  const user3 = {
    id: '3',
    img: 'data:image/png;base64,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',
    name: '3',
    lastName: 'last name',
    age: 'number',
    addres: {
      country: 'country',
      city: 'city'
    },
    hackathonTeam: { id: team2.id },
    sotialNetworcs: [
      // {id: sotialNetworcs.id} // реализация через отдельную сущность
      { id: 'number3', label: 'label', url: 'URL', img: 'URL' }
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

  const allUsers = [user1, user2, user3]

  const { users, team } = api

  return (
    <>
      <h1>Main page</h1>
      <TeamInfo
        name={team.teamName}
        img={team.img}
        title={team.taskTitle}
        description={team.description}
      />
      {/* <Button
        handler={handleTransformList}
        buttonName={'Изменить вид списка'}
        className='mb-4'
      /> */}
      <MembersList
        allUsers={allUsers}
        // visualConfig={listVisual ? 'firstConfig' : 'secondConfig'}
      />
      <TextField label={'текстовое поле'} htmlFor={''} name={'name'} />
    </>
  )
}
