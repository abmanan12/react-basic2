import React, { useEffect, useState } from 'react'

// import UseLocation from '../../props/UseLocation'
// import UseNavigate from '../../props/UseNavigate'

export default function UseEffect() {

  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
    else {
      setCount(0)
    }
  }

  useEffect(() => {
    if (count >= 1) {
      document.title = `Chats(${count})`
    }
    else {
      document.title = 'Chats'
    }
  }, [count])



  const [windowSize, setWindowSize] = useState(window.screen.width)

  const actualWidth = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', actualWidth)

    return () => {
      window.removeEventListener('resize', actualWidth)
    }
  }, [])

  return (
    <>

      {/* <div className="text-center p-3">
        <UseLocation />
      </div>
      <hr className='py-2' /> */}

      <div className="bg-light">
        <div className="container">
          <div className="row text-center p-3">
            <div className="col">
              <p>{count}</p>
              <button className='btn btn-success' onClick={increase}>Increase</button>
              <button className='btn btn-danger ms-2' onClick={decrease}>Decrease</button>
            </div>
          </div>
        </div>
      </div>
      <hr className='py-2' />

      <div className="bg-light">
        <div className="container">
          <div className="row text-center p-3">
            <div className="col">
              <p>Resize Screen Width</p>
              <h6 className='mt-2'>{windowSize}</h6>
            </div>
          </div>
        </div>
      </div>
      <hr className='py-2' />

      {/* <UseNavigate /> */}

    </>
  )
}
