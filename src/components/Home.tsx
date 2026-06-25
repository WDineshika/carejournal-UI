export default function Home() {

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="max-w-4xl mx-auto text-center pt-20">

        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Welcome to CareJournal AI
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Track symptoms, medications and
          daily health notes with ease.
        </p>

        <button
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          py-3
          rounded-lg
          shadow-lg
          "
        >
          Get Started
        </button>

      </div>

    </div>

  );
}