import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function AddRecipe() {
  return (
    <SLink>AddRecipe</SLink>
  )
}
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: initial;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;

    }

    svg {
        color: white;
        font-size: 1.5rem; 

    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057)
    }

`
export default AddRecipe;