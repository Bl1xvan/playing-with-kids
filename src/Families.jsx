import React from 'react'
import Children from './Children'

export default function({members}){

  return(
    <div>
      {members.map(member=>
        <div key={member}><p>{member.name}, {member.job}</p>
          {member.kids.map(kid=>
                <Children child={kid} />
          )}
          
        </div>
      )}
    </div>
  )
}