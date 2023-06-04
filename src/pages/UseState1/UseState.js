import React, { useState } from 'react'
import { users } from '../../global/users'

// import UseLocation from '../../props/UseLocation'
// import UseNavigate from '../../props/UseNavigate'

export default function UseState1() {

  const [color, setColor] = useState('light')


  const [myName, setMyName] = useState('Abdul Manan')

  const changeName = () => {

    if (myName == 'Abdul Manan') {
      setMyName('Abdul Manan Web Developer')
    }
    else {
      setMyName('Abdul Manan')
    }

  }

  const [user, setUser] = useState(users)

  const clearArray = () => {
    setUser([]);
  }

  return (
    <>

      {/* <div className="text-center p-3">
        <UseLocation />
      </div>
      <hr className='py-2' /> */}

      <div className="container p-4 text-center">
        <div className="row">
          <div className="col">
            <button className='btn btn-danger me-2' onClick={() => { setColor('danger') }}>Bg Danger</button>
            <button className='btn btn-info me-2' onClick={() => { setColor('info') }}>Bg Info</button>
            <button className='btn btn-success me-2' onClick={() => { setColor('success') }}>Bg Success</button>
            <button className='btn btn-warning me-2' onClick={() => { setColor('warning') }}>Bg Warning</button>
            <button className='btn btn-primary' onClick={() => { setColor('primary') }}>Bg Primary</button>
          </div>
        </div>
      </div>
      <hr className='py-2' />

      <div className="container p-2 text-center">
        <div className="row">
          <div className="col">
            <h3 className='mb-4'>{myName}</h3>
            <button className='btn btn-light' onClick={changeName}>Click Me</button>
          </div>
        </div>
      </div>
      <hr className='py-2' />

      {
        user.map((value, i) => {
          return (
            <div key={i}>
              <div className="container"><br />
                <div className="row d-flex justify-content-center">
                  <div className={`col-10 offset-1 border rounded-2 bg-${color} p-2`}>
                    <div className="row">
                      <div className="col-3">
                        <span>{i + 1}</span>
                      </div>
                      <div className="col-3">
                        <span>{value.name}</span>
                      </div>
                      <div className="col-3">
                        <span>{value.age}</span>
                      </div>
                      <div className="col-3">
                        <span>{value.city}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className='text-center'><button className='btn btn-light mt-3' onClick={clearArray}>Clear Array</button></div>
      <hr className='py-2' />

      {/* <UseNavigate /> */}


    </>
  )
}
