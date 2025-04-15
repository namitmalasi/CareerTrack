const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-700">
        Welcome to JobTrackr 🚀
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-xl">
        Organize, track, and optimize your job hunt in one simple dashboard.
      </p>
      <a
        href="/register"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700 transition"
      >
        Get Started
      </a>
    </div>
  );
};

export default Home;
