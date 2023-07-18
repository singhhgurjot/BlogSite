import React from 'react'

export default function blogMiniView(props) {
  return (
    <div className="bg-black w-80 h-20 truncate overflow-ellipsis">
      <h1 className="font-calli text-bold text-2xl" onClick={props.openIndividualPage}>{props.title}</h1>
      <p> {props.author}</p>
      <p>{props.content}</p>
      
    </div>
  )
}
