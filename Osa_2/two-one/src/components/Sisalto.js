import React from 'react'
import Note from './Note'
import Osa from './Osa'

const Sisalto = ({ notes }) => {
  return (
    <ul>
      {notes.map(note => <Osa 
        key={note.id} 
        partInfo={note}
      />)}
    </ul>
  )
}

export default Sisalto