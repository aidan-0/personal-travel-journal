import React from 'react';
import Navigation from './Components/Navigation';
import Card from './Components/Card';
import './Styles.css';
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      item={item}
      />
    )
  })

  return (
    <>
      <Navigation />
      <section className='card-list' >{cards}</section>
    </>
  )
}

export default App
