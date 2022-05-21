import React from 'react'


export default function Children({child}){
  return(<p>{child.name} {child.gender} {child.age}</p>)
}