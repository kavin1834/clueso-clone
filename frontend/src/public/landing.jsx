import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Clueso</h1>
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-black text-white rounded"
          >
            Get Started
          </Link>
        </div>
      </header>

      <section className="flex flex-col items-center text-center mt-32 px-6">
        <h2 className="text-5xl font-bold max-w-3xl">
          Turn customer feedback into actionable insights
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl">
          Collect, analyze, and summarize feedback using AI — all in one place.
        </p>
        <Link
          to="/signup"
          className="mt-8 px-6 py-3 bg-black text-white rounded"
        >
          Start Free
        </Link>
      </section>
    </div>
  );
}
