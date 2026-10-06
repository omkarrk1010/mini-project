import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })

    setTask(copyTask)
    console.log(task)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {

    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='min-h-screen lg:flex-row flex flex-col bg-black  text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex p-10 lg:w-1/2 flex-col items-start gap-4  '>

        <h1 className='text-3xl font-bold'>Add Notes</h1>
        {
          /*First Input */
        }

        <input
          className='border-2 px-5 py-2 w-full outline-none rounded '
          type="text"
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}

        />

        {
          /*Second Input */
        }
        <textarea
          className='border-2 px-5 py-2 w-full outline-none rounded h-32'
          type="text"
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}

        />

        <button
          className='bg-white w-full outline-none text-black active:scale-95 px-5 py-2 rounded'

        >Add Note</button>

      </form>
      <div className=' lg:w-1/2 gap-2 lg:border-l-2 p-10 '>
        {/* Write details here*/}
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-4 mt-5 '>

          {task.map(function (elem, idx) {

            return <div key={idx} className='min-h-52 w-40 sm:w-40 bg-white rounded-2xl p-4 text-black break-all flex flex-col justify-between'>

              <div> <h1 className='leading-tight text-xl font-bold'>{elem.title}</h1>
                <p className='mt-2 leading-tight font-medium'>{elem.details}</p>
              </div>

              <div className='text-center bg-red-400 active:scale-95 rounded-full'>
                <button onClick={() => {
                  deleteNote(idx)
                  console.log(idx)
                }}>delete Note</button>
              </div>

            </div>
          })}



        </div>
      </div>


    </div>
  )
}

export default App
