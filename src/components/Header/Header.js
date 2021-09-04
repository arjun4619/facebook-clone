import React from 'react';
import './header.css';
//Images
import facebookLogo from '../../Images/facebook-logo.png';
//Icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MenuIcon from '@material-ui/icons/Menu';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';

function Header() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <img src={`${facebookLogo}`}  />
                <div className='header__input'>
                    <SearchIcon className='searchIcon'/>
                    <input type='text' placeholder='Search Facebook' />
                </div>
            </div>


            <div className='header__middle'>
                <div className='header__options'>
                    <HomeIcon /* fontSize='large' */ className='icons'/>
                </div>

                <div className='header__options'>
                    <LiveTvIcon /* fontSize='large' */ className='icons'/>
                </div>

                <div className='header__options'>
                    <StorefrontIcon /* fontSize='large' */ className='icons'/>
                </div> 

                <div className='header__options'>
                    <GroupIcon /* fontSize='large' */ className='icons'/>
                </div>

                <div className='header__options'>
                    <SportsEsportsIcon /* fontSize='large' */ className='icons'/>
                </div> 

            </div>


            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL} className='avatar'/>
                    <h4>{user.displayName}</h4>
                </div>

                <div className='side__icons'>
                <MenuIcon />
                </div>
                <div className='side__icons'>
                <MessageIcon />
                </div>
                <div className='side__icons'>
                <NotificationsIcon />
                </div>
                <div className='side__icons'>
                <ArrowDropDownIcon />
                </div>
            </div>

        </div>
    )
}

export default Header
