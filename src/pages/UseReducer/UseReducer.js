import React, { useEffect, useReducer, useRef } from 'react'
import { Link } from 'react-router-dom'

import notification from '../../assets/audios/music.mp3'

// import UseLocation from '../../../../../Practice_4/src/props/UseLocation'
// import UseNavigate from '../../../../../Practice_4/src/props/UseNavigate'

const initialState = 0

export default function UseReducer() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Increment':
                return state + 1
            case 'Decrement':
                return state >= 1 ? state - 1 : state
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)


    const notificationPlayer = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            notificationPlayer.current.play()
        }, 1000)
    })

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
                            <h4 className='mb-2'>{state}</h4>
                            <button className='btn btn-success' onClick={() => { dispatch({ type: 'Increment' }) }}>Increment</button>
                            <button className='btn btn-danger ms-2' onClick={() => { dispatch({ type: 'Decrement' }) }}>Decrement</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-2' />


            <div className="bg-light">
                <div className="container">
                    <div className="row text-center p-3">
                        <div className="col">
                            <h5>UseRef Hook</h5>
                            <audio ref={notificationPlayer} src={notification}></audio>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-2' />


            {/* <UseNavigate /> */}


        </>
    )
}
