import React from 'react';
import joys from '../images/joys.jpg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        
        <a href='#'>
        <div className='logo'>
            <img src={joys} alt='logo' width="100"/>
        </div>
        </a>
        <ul className='menu'>
            <li >
                <a href='#'> Home</a>

            </li>
            <li>
            <a href='#'>About </a>
            </li>
            <li>
                <Link to = "/Support"> Support</Link>

            </li>
            <li>
                <a href='#'>Reviews</a>

            </li>
            <li>
                <a href='#'> Ranking</a>

            </li>
        </ul>
        <div className='search'  >
            <box-icon name='search' > </box-icon>
            
           
            </div>
        <div className='user'>
            <box-icon name='user'> </box-icon>
            </div>
        <div className='cart'>
            <box-icon name='cart'> </box-icon>
            <span className='item__total'>0</span>
            
        </div>
        
    </header>
  )
}