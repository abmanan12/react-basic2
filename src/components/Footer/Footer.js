import React from 'react'

export default function Footer() {

    var year = new Date().getFullYear()

    return (
        <div className="bg-dark text-white text-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='p-2 mb-0'>&copy; {year}. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
