import React from 'react'

export const NitTable = (props) => {
  const {headers,data,columns}=props;
  return (
     <table border='1px'>
        <thead>
          <tr>
            {
                headers.map((v,i)=>{
                    return <th key={i}>{v}</th>
                })
            }
          </tr>
        </thead>
        <tbody>
           {
            data.map((obj,ind)=>{
                return <tr key={ind}>
                     {
                        columns.map((col,i)=>{
                            return <td key={i}>{obj[col]}</td>
                        })
                     }
                </tr>
            })
           }
        </tbody>
     </table>
  )
}
