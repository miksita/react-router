import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  addPost: (newPost: any) => void;
};

export default function CreatePost({ addPost }: Props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPost = {
      id: Date.now(), 
      title,
      body,
    };

    addPost(newPost);
    navigate('/posts');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1>Давай, создавай пост</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Название:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Описание:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border rounded h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-black rounded-lg px-4 py-2 text-center"
        >
          Создать
        </button>
      </form>
    </div>
  );
}