import React from 'react'
import TvShowsCardComponents from "./TvShowsCardComponent "
export default function TvListComponents(props) {
  return (
    <div className="d-flex flex-wrap gap-3 pt-5 pb-5">
      <TvShowsCardComponents tvList={props.tvList}/>
    </div>
  )
}
