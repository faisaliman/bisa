import { useParams } from 'react-router-dom';
import { Typography, Card, List } from 'antd';
import { useEffect, useState } from 'react';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Card title={post.title} style={{ marginBottom: '20px' }}>
        <p>{post.body}</p>
      </Card>

      <Typography.Title level={4}>Comments</Typography.Title>
      <List
        dataSource={comments}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.email}
              description={item.body}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default PostDetail;