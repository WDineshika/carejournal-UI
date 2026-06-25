import {
  DocumentTextIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import hero from "../assets/hero.png";
export default function Home() {

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}

      <section className="min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">

                CareJournal
                <span className="text-blue-600"> AI</span>

              </h1>

              <p className="mt-6 text-xl text-gray-600">

                Track symptoms, maintain health records,
                and prepare better for doctor consultations.

              </p>

              <div className="mt-8 flex gap-4">

                <a
                  href="/add-entry"
                  className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  "
                >
                  Start Journaling
                </a>

                <a
                  href="/entries"
                  className="
                  border
                  border-blue-600
                  text-blue-600
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  "
                >
                  View Entries
                </a>

              </div>

            </div>

            {/* Right */}

            <div>

              <img
                src={hero}
                alt="Healthcare"
                className="
                w-full
                drop-shadow-2xl
                hover:scale-105
                transition
                duration-500
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">

            Features

          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              <DocumentTextIcon className="h-12 w-12 text-blue-600" />
              <h3 className="font-bold mt-4">
                Health Journal
              </h3>
              <p className="text-gray-600 mt-2">
                Record symptoms and observations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <CalendarDaysIcon className="h-12 w-12 text-blue-600" />
              <h3 className="font-bold mt-4">
                Timeline Tracking
              </h3>
              <p className="text-gray-600 mt-2">
                Maintain health history over time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <UserCircleIcon className="h-12 w-12 text-blue-600" />
              <h3 className="font-bold mt-4">
                Doctor Support
              </h3>
              <p className="text-gray-600 mt-2">
                Organize information for consultations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <SparklesIcon className="h-12 w-12 text-blue-600" />
              <h3 className="font-bold mt-4">
                AI Summaries
              </h3>
              <p className="text-gray-600 mt-2">
                Coming soon.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}