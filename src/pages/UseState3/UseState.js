import React, { useState } from 'react'

// import UseLocation from '../../props/UseLocation'
// import UseNavigate from '../../props/UseNavigate'

const initialState = { email: '', password: '' }

export default function UseState3() {

  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsProcessing(true)

    const { email, password } = state
    console.log(email);
    console.log(password);

    setTimeout(() => {
      setIsProcessing(false)
    }, 3000);

  }


  const [myBio, setMyBio] = useState({ name: 'Abdul Manan', age: 22, city: 'Shahkot' })

  const updateName = () => {
    setMyBio({ ...myBio, name: 'Ahmad Mujtaba' })
  }

  return (
    <>

      {/* <div className="text-center p-3">
        <UseLocation />
      </div>
      <hr className='py-2' /> */}

      <div className="p-4">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="card mx-auto p-3 w-75 bg-light">
                <h6>Email: {state.email}</h6>
                <h6 className='py-1'>Password: {state.password}</h6>
                <form action="" onSubmit={handleSubmit}>
                  <input type="text" className='form-control' name="email" placeholder='Email' autoComplete='off' onChange={handleChange} />
                  <input type="password" className='form-control my-3' name="password" placeholder='Password' autoComplete='off' onChange={handleChange} />
                  <button className='btn btn-success w-100' disabled={isProcessing}>
                    {
                      !isProcessing
                        ? 'Submit'
                        : <div className='spinner-grow spinner-grow-sm'></div>
                    }
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='py-2' />


      <div className="container p-2 text-center">
        <div className="row">
          <div className="col">
            <h6 className='mb-4'>My Name is {myBio.name} and age is {myBio.age}</h6>
            <button className='btn btn-light' onClick={updateName}>Click Me</button>
          </div>
        </div>
      </div>
      <hr className='py-2' />

      {/* <UseNavigate /> */}


    </>
  )
}
