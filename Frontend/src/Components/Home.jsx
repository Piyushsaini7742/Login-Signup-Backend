import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">Welcome to Our Platform</h1>
      <p className="text-lg mb-6 opacity-80 animate-slide-up">
        Experience the best services with seamless integration and features.
      </p>
      <button
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300 animate-bounce"
        onClick={() => navigate("/")}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default Home;