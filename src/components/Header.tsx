import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <nav className="bg-white text-sm border-b-2 border-grey px-4">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-blue-700 hover:bg-black rounded-lg px-4 py-2 text-center">
                        <Link to="/profile-setup">Войти</Link>
                    </button>
                </div>
                <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                    <li>
                        <Link to="/" className="block py-2 px-3  text-gray-900 md:hover:text-blue-700">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="block py-2 px-3  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                            Мой профиль
                        </Link>
                    </li>
                    <li>
                        <Link to="/posts" className="block py-2 px-3  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                            Посты
                        </Link>
                    </li>
                    <li>
                        <Link to="/create-post" className="block py-2 px-3  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                            Создать пост
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;