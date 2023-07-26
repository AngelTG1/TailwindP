import React from 'react'

function List({children}) {
  return (
    <ul className="divide-y divide-slate-100">
      {children}
    </ul>
  )
}

export default List