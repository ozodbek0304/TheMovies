import React from 'react'
import ContentCardComponent from './ContentCardComponent'

export default function ConentListComponent(props) {
  return (
    <div className="d-flex flex-wrap gap-3 pt-5 pb-5">
      <ContentCardComponent movieList={props.movieList}/>
    </div>
  )
}
