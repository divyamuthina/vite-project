import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleHomeClick}>Home</button>
    </div>
  );
}
