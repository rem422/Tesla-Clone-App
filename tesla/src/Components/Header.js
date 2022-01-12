import React, { useState } from 'react'
import styled from 'styled-components'
import {MdMenu} from "react-icons/md";
import {MdClose} from "react-icons/md";
import { selectCars } from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
                <img src='/images/logo.svg'alt='Logo'/>

            <Menu>
                {cars && cars.map((car, index)=>(
                    <a key={index} href="#">{car}</a>       
                ))}
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={()=> setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                <CustomClose onClick={()=> setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index)=>(
                    <li><a key={index} href="">{car}</a></li>      
                ))}
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade-in</a></li>
                <li><a href="">Test Drive</a></li>
                <li><a href="">PowerWall</a></li>
                <li><a href="">Commercial Energy</a></li>
                <li><a href="">Utilities</a></li>
                <li><a href="">Find Us</a></li>
                <li><a href="">Support</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Account</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
        min-height: 60px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;

        img{
            width: 80px;
        }
`

const Menu = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        a{
            font-size: 16px;
            font-weight: normal;
            color: black;
            padding: 0 18px;
            flex-wrap: no-wrap;
            transition: all 0.5s;

            :hover{
                background: rgba(211, 211, 211, 0.651);
                border-radius: 6px;
            }
        }

        @media(max-width: 768px){
            display None
        }
`

const RightMenu = styled.div`
    display: flex;
    align-item: center;
    
    a{
        color: black;
        font-size: 16px;
        font-weight: normal;
        margin-right: 18px;
    }
`

const CustomMenu = styled(MdMenu)`
cursor: pointer;
font-size: 22px;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: Start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.5s;

    li {
        padding: 15px 20px;
        // border-bottom: 1px solid rgba(0, 0, .2);

        a{
            font-weight: normal;
            cursor: pointer;
        }
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(MdClose)`
    cursor: pointer;
    font-size: 22px;
    transition: background ;
    
    :hover{
        background: rgb(235, 235, 235);
        border-radius: 50px; 
    }
`


