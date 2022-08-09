import React from 'react'
import { Link } from 'react-router-dom'
import works from '../../data/works'

const Works = () => {
  return (
    <div>
      {
          works.map(work => (
            <Link to = {`/works/${work.slug}`}>{work.slug}</Link>
          ))
        }
    </div>
  )
}

export default Works
