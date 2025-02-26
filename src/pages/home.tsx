import Image from '../../public/cats.png';

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1>Приветик тут ты можешь смотреть чужие посты и создавать свои :))) </h1>
      <img src={Image} className="w-96 h-auto"></img>
    </div>
  );
}