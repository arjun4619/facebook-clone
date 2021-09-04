import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';
import './Sidebar.css';
//Icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { useStateValue } from '../../StateProvider';

function Sidebar() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow
            src={user.photoURL}
            title={user.displayName}
            />
            <SidebarRow Icon={LocalHospitalIcon}
            title='Covid-19 Information Centre'
            />
            <SidebarRow Icon={EmojiFlagsIcon}
            title='Pages'
            />
            <SidebarRow Icon={PeopleIcon} 
            title='Groups'
            />
            <SidebarRow Icon={BusinessCenterIcon}
            title='Jobs'
            />
            <SidebarRow Icon={StoreMallDirectoryIcon}
            title='Marketplace'
            />
            <SidebarRow Icon={VideoLibraryIcon}
            title='Videos'
            />
            <SidebarRow Icon={ExpandMoreIcon}
            title='See More'
            />
        </div>
    )
}

export default Sidebar;
