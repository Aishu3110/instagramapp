import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Postcard from '../postcard/Postcard';

const Postfeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dummyapi.io/data/v1/post?limit=10',
          {
            headers: {
              'app-id': '64f80cc1b1fe5f13f06ddeae',
            },
          }
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Postcard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Postfeed;