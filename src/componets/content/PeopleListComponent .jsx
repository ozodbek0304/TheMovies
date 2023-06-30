import React from 'react'
import PeopleCardComponent from "./PeopleCardComponent"

export default function PeopleListComponent(props) {
  return (
    <div>
      <div className="d-flex flex-wrap gap-3 pt-4">
        <PeopleCardComponent people={props.people} />
      </div>  
    </div>
  )
}
