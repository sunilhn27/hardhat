"use client"
import React from 'react'
function Homepage() {


    const handleClick = () => {

    }

    return (
        <section className='my-2'>
            <div className='flex justify-between items-center border-2 px-6 p-2'>
                <div>
                    <h1 className='font-semibold text-[1.3rem]'>Web Three</h1>
                </div>
                <div>
                    <button onClick={handleClick} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                        Connect to Wallet
                    </button>
                </div>
            </div>

            <section className=''>

            </section>
        </section>
    );
}

export default Homepage;