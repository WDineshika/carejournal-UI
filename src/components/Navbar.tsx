import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold">
          CareJournal AI
        </h1>

        <div className="flex gap-6">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            to="/add-entry"
            className="hover:text-yellow-300 transition"
          >
            Add Entry
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-300 transition"
          >
            About
          </Link>
            <Link to="/entries">
            View Entries
          </Link>

        </div>

      </div>
    </nav>
  );
}