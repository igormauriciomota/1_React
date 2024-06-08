import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        {/* Inicio */}
        <dir>
            <h2>O nome do usuario: {props.name}</h2>
        </dir>
        {/* Fim */}
    </div>
  )
}

export default ShowUserName