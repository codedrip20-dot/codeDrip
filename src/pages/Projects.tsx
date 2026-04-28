import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Gym Website */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Gym Website</h2>
          <p className="text-gray-400 mb-4">
            Modern fitness landing page with smooth UI and responsive design.
          </p>

          <a 
            href="https://your-gym-link.vercel.app" 
            target="_blank"
            className="inline-block px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Live Demo
          </a>
        </div>

        {/* Cafe Website */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Cafe Website</h2>
          <p className="text-gray-400 mb-4">
            Elegant cafe website with aesthetic layout and mobile-first design.
          </p>

          <a 
            href="https://caferizz.vercel.app/" 
            target="_blank"
            className="inline-block px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Live Demo
          </a>
        </div>

      </div>

      {/* Back Button */}
      <div className="text-center mt-10">
        <Link to="/" className="text-purple-400 hover:underline">
          ← Back to Home
        </Link>
      </div>

    </div>
  );
}

export default Projects;
