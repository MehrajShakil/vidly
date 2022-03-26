import React, { Component } from 'react';
import './App.css';

function App() {
  const arr = [
       {
         Name: 'Muhammad Mehraj Hossain',
         Roll: 'ASH1801002M',
         Dept: 'CSTE',
         Session: '2017-18'
       },
       {
        Name: 'Muhammad Mahadi Hasan Sad',
        Roll: 'ASH1801003M',
        Dept: 'CSTE',
        Session: '2017-18'
      },
      {
        Name: 'Muhammad Mirz',
        Roll: 'ASH1801004M',
        Dept: 'CSTE',
        Session: '2017-18'
      },
      {
        Name: 'Muhammad',
        Roll: 'ASH1801005M',
        Dept: 'CSTE',
        Session: '2017-18'
      }
  ];
  return ( 

          <table className='table table-hover table-dark table-bordered'>
            <thead className=''> 
              <tr> 
                <th> Name </th>
                <th> Roll </th>
                <th> Department</th>
                <th> Session </th>
              </tr>
            </thead>
            <tbody > 
              {arr.map((student  ) => 
              <tr key={student.Roll}> 
                <td>
                  {student.Name}
                </td>
                <td>
                  {student.Roll}
                </td>
                <td>
                  {student.Dept}
                </td>
                <td>
                  {student.Session}
                </td>
              </tr>
              )}
            </tbody>
          </table>
   );
}

export default App;