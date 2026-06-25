import { useEffect, useState } from "react";
import type { JournalEntry } from "../types/JournalEntry";
import { getAllJournalEntries } from "../services/JournalService";

export default function ViewEntries() {

  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchEntries = async () => {

      try {

        const data = await getAllJournalEntries();
        setEntries(data);

      } catch (error) {

        console.error("Error loading entries", error);

      } finally {

        setLoading(false);

      }
    };

    fetchEntries();

  }, []);

  if (loading) {
    return <p className="p-8">Loading entries...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Journal Entries
        </h1>

        {entries.length === 0 ? (
          <p>No journal entries found.</p>
        ) : (

          <div className="grid gap-4">

            {entries.map((entry) => (

              <div
                key={entry.id}
                className="bg-white p-6 rounded-xl shadow"
              >

                <h3 className="text-xl font-semibold mb-2">
                  {entry.entryDate}
                </h3>

                <p>
                  <strong>Symptoms:</strong> {entry.symptoms}
                </p>

                <p>
                  <strong>Medications:</strong> {entry.medications}
                </p>

                <p>
                  <strong>Notes:</strong> {entry.notes}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}