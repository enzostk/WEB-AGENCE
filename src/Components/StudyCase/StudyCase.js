import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import works from '../../data/works'

const StudyCase = () => {

  const [currentWork, setCurrentWork] = useState(undefined);
  const { workSlug } = useParams();

  useEffect (() => {
    const foundWork = works.find((work) => work.slug === workSlug);
    setCurrentWork(foundWork);
  }, [workSlug])

  const showWork = () => {
    return (
      <div>
        <h1>{currentWork.slug}</h1>
        <h2>{currentWork.title}</h2>
        <p>{currentWork.description}</p>
        <img src={currentWork.image} alt=''/>
      </div>
      )
  }

  return (
    <div> 
      {
        currentWork !== undefined ? showWork() : "Erreur"
      }
    </div>
  )
}

export default StudyCase