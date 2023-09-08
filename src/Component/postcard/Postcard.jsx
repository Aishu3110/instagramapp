import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const PostCard = ({ post }) => {
  return (
    <Card>
      <CardMedia component="img" height="200" image={post.image} alt={post.owner.firstName} />
      <CardContent>
        <Typography variant="h6">{post.owner.firstName} {post.owner.lastName}</Typography>
        <Typography variant="body2">{post.text}</Typography>
      </CardContent>
      <div>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default PostCard;