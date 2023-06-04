import React, { useState } from 'react'
import { users } from '../../global/users'

// import UseLocation from '../../props/UseLocation';
// import UseNavigate from '../../props/UseNavigate';

export default function UseState2() {

  const [user, setUser] = useState(users)

  const clearArray = () => {
    setUser([]);
  }

  const removeElem = (id) => {
    let newUser = user.filter((elem) => {
      return elem.id !== id
    })
    setUser(newUser);
  }


  const [demo, setDemo] = useState(false)

  return (
    <>

      {/* <div className="text-center p-3">
        <UseLocation />
      </div>
      <hr className='py-2' /> */}

      {
        user.map((value, i) => {
          return (
            <div key={i}>
              <div className="container"><br />
                <div className="row d-flex justify-content-center">
                  <div className={`col-10 offset-1 border rounded-2 bg-light p-1`}>
                    <div className="row">
                      <div className="col-2">
                        <span>{i + 1}</span>
                      </div>
                      <div className="col-3">
                        <span>{value.name}</span>
                      </div>
                      <div className="col-2">
                        <span>{value.age}</span>
                      </div>
                      <div className="col-3">
                        <span>{value.city}</span>
                      </div>
                      <div className="col-2">
                        <button className='btn btn-danger' onClick={() => { removeElem(value.id) }}>Delete</button>
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


      <div className="container p-2 text-center">
        <div className="row">
          <div className="col">
            <h3 className='mb-4'>Short Circuit</h3>
            <h6>{demo ||                            // if it is true then left side executes if false then right side
              <>
                <h6>Hy I'm Abdul Manan</h6>
                <h6>This is Short Circuit of React</h6>
              </>
            }</h6>
            <h6>{demo && 'Abdul Manan'}</h6>      {/* // if it is true then right side executes and if false then nothing*/}
          </div>
        </div>
      </div>
      <hr className='py-2' />

      {/* <UseNavigate /> */}


    </>
  )
}
