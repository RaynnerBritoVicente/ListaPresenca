import React, { useState, useEffect } from 'react';
import './App.css'

import Card from '../../components/Card/Card'

function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

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
  /*
    useEffect(() => {
      async function fetchData(){
        const response = await fetch('https://api.github.com/users/raynnerbritovicente')
        const data = await response.json();
        console.log("DADOS ===> ", data);
        setUser({
          name: data.name,
          avatar: data.avatar_url
        });
      }

      fetchData();
    },[]);
  */

    useEffect(() => {
      fetch('https://api.github.com/users/raynnerbritovicente')
      .then(response => response.json())
      .then(data => {
        console.log("DADOS ===> ", data);
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      });
    },[]);
  

  return (
    <div className='flex flex-col items-center font-roboto'>

      <header className='flex justify-between w-[58%]'>
        <h1 className='text-3xl font-black my-5 text-center'>Lista de Presença</h1>
        <div className='float-right flex items-center'>
          <strong className='mx-3'>{user.name}</strong>
          <img className='h-[60px] w-[60px] rounded-full' src={user.avatar} alt="Foto de Perfil" />
        </div>

      </header>

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
        students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
        />))
      }
    </div>
  )
}

export default App
