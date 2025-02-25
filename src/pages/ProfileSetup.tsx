import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileSetup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    navigate('/profile');
  };

  return (
    <div className='p-10 px-40'>
      <form onSubmit={handleSubmit} className="relative p-10 bg-white mx-8 shadow rounded-3xl space-y-10">
        <div>
        <h1 className= "text-center text-4xl font-bold">Регистрация</h1>
          <label>
            Имя:
            <input
            className='px-4 py-2 border bg-white focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
              type="text"
              placeholder='Введите ваше имя'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Пароль:
            <input
             className='px-4 py-2 border bg-white focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
              type="text"
              placeholder='Введите пароль'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-black rounded-lg px-4 py-2 text-center">Войти</button>
      </form>
    </div>
  );
}
