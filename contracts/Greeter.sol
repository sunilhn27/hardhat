// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract Greeter{

    string private greeting;

    constructor(string memory _greeting){
        greeting =_greeting;
    }

    function greet() public view returns(string memory){
        return greeting;
    }

    function setGreet(string memory _greeting) public  {
        console.log("The value is ",_greeting);
        greeting =_greeting;
    } 

}