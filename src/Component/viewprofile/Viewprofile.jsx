import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Userprofile = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {/* {user.firstName} {user.lastName} */}
        </Typography>
        <Typography variant="body2">
          {/* Email: {user.email} */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Userprofile;
