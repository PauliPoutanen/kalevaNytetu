import React, { useState, useEffect } from 'react'
import Tviit from './services/Tviit'
import tviits from './services/tviits'
import tviitService from './services/tviits'

const App = () => {
const [tviit, setTviit] = useState([])
const [newTviit, setNewTviit] = useState('')


useEffect(()=> {
  console.log('useEffect')
  tviitService
  .getAll()
.then(initialTviits => {
  console.log('promise fulfilled')
  setTviit(initialTviits)
})}, [])

console.log('render', tviit.length, 'tviit')

const addTviit =(event) =>{
  event.preventDefault()
  console.log('Send clicked', event.target)
  const tviitObject ={
    content: newTviit,
    date: new Date().toDateString(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    important : true,
    id: tviit.length +1,
  }
tviitService
 .create(tviitObject)
 .then(returnedTviit => {
   setTviit(tviit.concat(returnedTviit))
   setNewTviit('')
 })
}

const handleTviitChange =(event) =>{
  console.log(event.target.value)
  setNewTviit(event.target.value)
}





return (
  <div>

<h2>Juuri Nyt Etulauta</h2>

<div>

<ul>
 {tviit.map(tviit =>
  <Tviit key={tviit.id} tviit={tviit} />)}
</ul>

</div>
<h2>Takalauta</h2>
<form onSubmit={addTviit}>
  <input value={newTviit} 
  onChange={handleTviitChange} />
  <button type="submit">Julkaise</button>
</form>
</div>
)}

export default App