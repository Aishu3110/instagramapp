import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ImageListItem, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';


export default function Postfeed(id) {
    const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://dummyapi.io/data/v1/post?limit=10', {
              
              headers: {
                'app-id': '64f80cc1b1fe5f13f06ddeae', 
              },
            });
            console.log(response.data.data)
    
            setPosts(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      const handleLike = (postId) => {
        if (!likedPosts.includes(postId)) {
          setLikedPosts([...likedPosts, postId]);
          setLikeCounts((prevCounts) => ({
            ...prevCounts,
            [postId]: (prevCounts[postId] || 0) + 1,
          }));
        } else {
          setLikedPosts(likedPosts.filter((id) => id !== postId));
          setLikeCounts((prevCounts) => ({
            ...prevCounts,
            [postId]: prevCounts[postId] - 1,
          }));
        }
      };
      useEffect(() => {
        const initialLikeCounts = {};
        posts.forEach((post) => {
          initialLikeCounts[post.id] = post.likes;
        });
        setLikeCounts(initialLikeCounts);
      }, [posts]);
  return (
    <>
    <div>
      {/* Example Post */}
      {posts.map((post) => (
      <Paper key={post.id}elevation={3} sx={{ padding: '16px', marginBottom: '16px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Avatar sx={{ width: '50px', height: '50px', marginRight: '13px' }} src={post.owner.picture}></Avatar>
          <div>
            <h1>{post.owner.firstName}<Link to={`/userfulldetail/${id}`}></Link></h1>
            {/* <h3>yourname{post.owner.map((post1)=>{
                return(
                    <>
                    {post1.firstName}
                    </>
                )
            })}</h3> */}
            <p>{post.location}</p>
          </div>
          <IconButton style={{ marginLeft: 'auto' }}>
            <MoreHorizIcon />
          </IconButton>
        </div>

        {/* Post Image */}
        {console.log(post.id)}
        {console.log(post.image)}
        {console.log(post.owner)}
        {console.log(post.owner.picture)}
        <img style={{ width: '100%' }} src={post.image} />

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
          <div>
          {likedPosts.includes(post.id) ? (
            <IconButton onClick={() => handleLike(post.id)} color="error">
              <FavoriteIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => handleLike(post.id)}>
              <FavoriteBorderIcon />
            </IconButton>
          )}
            <IconButton>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton>
              <SendIcon />
            </IconButton>
          </div>
          <IconButton >
            <FavoriteBorderIcon />
          </IconButton>
        </div>

        {/* Likes and Comments */}
        <div style={{ marginTop: '8px' }}>
          <p>{likeCounts[post.id] || post.likes}likes</p>
          <Typography>
            <strong>{post.firstName}</strong> {post.text}
          </Typography>
          {/* Add more comments as needed */}
        </div>
      </Paper>
      ))}
    </div>
    </>
  )
}
