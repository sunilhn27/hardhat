"use client"
import React, { useState } from 'react'
import ABI from "../../Greeter.sol/Greeter.json"
import { ethers } from 'ethers'

function Hero() {

    const [greet, setGreet] = useState("")
    async function readGreet() {
        if (window.ethereum) {
            console.log("Inside if")
            const provider = new ethers.BrowserProvider(window.ethereum);

            // get instance of contract
            const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; //Greet
            const contractabi = ABI.abi;
            const contract = await provider.Contract(contractAddress, contractabi, provider);

            const getContract = await contract.greet();
            setGreet(getContract);

        } else {
            console.error('MetaMask not detected. Please install MetaMask to connect your wallet.');
        }

    }

    return (
        <section className='my-12'>
            <div className='flex justify-center items-center'>
                <button className='' onClick={readGreet}>Read Greet</button>
            </div>
            <p>{greet && greet}</p>
        </section>)
}

export default Hero