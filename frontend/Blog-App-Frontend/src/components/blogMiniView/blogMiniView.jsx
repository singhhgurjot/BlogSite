import React from 'react'

export default function blogMiniView(props) {
  return (
    <div className="bg-black w-40 h-20">
      <h1 className="font-calli text-bold text-2xl">{props.title}</h1>
      <p> {props.author}</p>
      <p>{props.content}</p>
      
    </div>
  )
}
