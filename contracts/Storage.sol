// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Storage {
    uint256 x = 60; //0x1
    uint256 y = 70; //0x2
    mapping (uint => uint) testing; //0x3

    constructor(){
        // keccak256(20 + 0x3)
        testing[20] = 76;

        // keccak256(40 + 0x3)
        testing[40] = 89;

    }
}