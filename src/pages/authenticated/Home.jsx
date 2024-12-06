import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate  = useNavigate();

    const handleAboutClick = () => {
        navigate('/vite-project/about');
    }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleAboutClick}>About</button>
    </div>
  );
}
