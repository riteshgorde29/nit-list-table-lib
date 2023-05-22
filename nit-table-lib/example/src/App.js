import React from 'react'

import NitTable,{ ExampleComponent } from 'nit-table'
import 'nit-table/dist/index.css'

const App = () => {
  const data=[
    {
      name:'s1',
      rno:1
    },
    {
      name:'s2',
      rno:2
    }
  ]
  return <NitTable headers={['Std Name','Std rno']} data={data} columns={['name','rno']} />
}

export default App
