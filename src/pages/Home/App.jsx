import React, { useState } from 'react';
import './App.css'

import Card from '../../components/Card/Card'

function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent () {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <div className='flex flex-col items-center font-roboto'>
      <h1 className='text-3xl font-black my-3'>Lista de Presença</h1>
      <input 
        className='p-2 border bg-gray-200 text-black w-7/12 rounded-md text-lg font-medium my-1' 
        type="text" 
        placeholder='Digite o nome do Aluno(a)...'
        onChange={e => setStudentName(e.target.value)}
        />
      <button 
        type='button'
        className='p-2 border bg-pink-500 w-7/12 rounded-md text-white text-lg font-bold my-1'
        onClick={handleAddStudent}
      >
        Adicionar
      </button>
      {
        students.map(student => <Card name={student.name} time={student.time}/>)

      }
    </div>
  )
}

export default App
