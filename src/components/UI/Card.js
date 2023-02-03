import React from 'react'

import classes from './Card.module.css'

function Card(props) {
  const classesList = `${classes.card} ${props.className}`
  return <div className={classesList}>{props.children}</div>
}

export default Card
