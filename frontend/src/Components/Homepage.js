"use client"
import React, { useState } from 'react'
const { ethers } = require("ethers")

function Homepage() {

    const [walletConnected, setWalletConnected] = useState(false);
    const [provider, setProvider] = useState(null);
    const [accountBalance, setAccountBalance] = useState(null);

    // Function to connect to MetaMask wallet
    async function connectWallet() {
        try {
            // Detect MetaMask provider
            if (window.ethereum) {
                const provider = new ethers.BrowserProvider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                setProvider(provider);
                setWalletConnected(true);
            } else {
                alert('MetaMask not detected. Please install MetaMask to connect your wallet.');
            }
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    }

    async function getAccountBalance() {
        try {
            const accounts = await provider.listAccounts();
            if (accounts.length > 0) {
                const balance = await provider.getBalance(accounts[0]);
                setAccountBalance(ethers.formatEther(balance));
            }
        } catch (error) {
            console.error('Error fetching account balance:', error);
        }
    }

    return (
        <section className='my-2'>
            <div className='flex justify-between items-center border-2 p-2'>
                <div>
                    <h1 className='font-semibold text-[1.3rem]'>Web Three</h1>
                </div>
                <div>
                    {!walletConnected ? (
                        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={connectWallet}>
                            Connect to Wallet
                        </button>
                    ) : (
                        <div>
                            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={getAccountBalance}>
                                Get Account Balance
                            </button>

                        </div>
                    )}
                </div>
            </div>
            <section className="my-12 flex justify-center items-center" >
                <div className="">
                    {accountBalance && <p className="text-[1.5rem]">Account Balance: {accountBalance} ETH</p>}
                </div>
            </section>
        </section>
    );
}

export default Homepage;
