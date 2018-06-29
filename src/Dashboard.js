import React from 'react'
import Pet from './components/Pet'

const onAdoptPet = pet => {
  console.log(pet.name)
}

export const Dashboard = ({ catToAdopt, dogToAdopt }) => {
  return (
    <main>
      {[catToAdopt, dogToAdopt].map((pet, i) => {
        return <Pet pet={pet} onAdoptPet={onAdoptPet} key={i} />
      })}
    </main>
  )
}

export default Dashboard
