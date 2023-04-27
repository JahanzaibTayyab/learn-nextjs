// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Calculator {
    function add(uint256 a, uint256 b) external pure returns (uint256) {
        return a + b;
    }
}