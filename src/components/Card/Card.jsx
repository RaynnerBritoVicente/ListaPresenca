import './Card.css'

function Card(props) {
  return (
    <div className='p-4 flex items-center justify-between text-white bg-indigo-600 h-[100px] w-[50%] rounded-xl my-2'>
      <strong className='font-semibold '>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}

export default Card