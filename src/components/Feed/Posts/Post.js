import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import './Post.css';
//Icons
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import { useStateValue } from '../../../StateProvider';
import { LensTwoTone } from '@material-ui/icons';

function Post({ profilePic, image, message, timestamp, username }) {

    const [like, setLike] = useState(0);

    const [{user}, dispatch] = useStateValue();

    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={user.photoURL} className='post__avatar' />
                <div className='post__topInfo' >
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className='post__bottom'>
                <p>{message}</p>
            </div>
            
            <div className='post__image'>
                <img src={image} alt='' />
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpOutlinedIcon onClick={() => setLike(like + 1)}/>
                    <p onClick={() => setLike(like + 1)} >{like} Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeOutlinedIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post;
