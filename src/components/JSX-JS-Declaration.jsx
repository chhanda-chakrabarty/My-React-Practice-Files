const name = 'chhanda';
let todoDescription = "There is no one perfect but there is one above all!"
let todoDate = "23-02-25";
let dateTime = new Date();
let currentDateTime = dateTime.getDate()

const First = () => {
  return (
    <div>
      <div className='bg-red-500 font-bold text-center text-lg '>This is chhanda Chakrabarty</div>
      <h1 className='bg-amber-500 text-5xl font-extrabold p-1 m-1 rounded '>{name}</h1>
      <p className='bg-red-400 text-2xl font-extrabold p-1 m-1 rounded'>{todoDescription}</p>
      <p className='text-red-600 text-9xl font-bold '>{todoDate}</p>
      <p className='text-red-400 text-7xl p-1 m-1 font-bold'>{currentDateTime}</p>
    </div>
  )
}

export default First