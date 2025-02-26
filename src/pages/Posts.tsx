import { useEffect, useState } from 'react';
import { fetchPosts, fetchUsers } from '../api/api';

type Props = {
  createdPosts: any[];
};

export default function Posts({ createdPosts }: Props) {
  const [posts, setPosts] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [postsData, usersData] = await Promise.all([
          fetchPosts(),
          fetchUsers()
        ]);
        
        const allPosts = [...createdPosts, ...postsData];
        setPosts(allPosts);
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error("Ошибочка:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [createdPosts]);

  const getUserName = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Ваш пост';
  };

  if (loading) {
    return <h1 >Загрузка постов...</h1>;
  }

  return (
    <div className="p-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <div className="bg-white p-4 rounded-lg shadow-md" key={post.id}>
          <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-3">{post.body}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-600">
              {getUserName(post.userId)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}