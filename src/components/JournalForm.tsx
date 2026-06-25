import { useState } from "react";
import type { JournalEntry } from "../types/JournalEntry";
import { saveJournalEntry } from "../services/JournalService";
export default function JournalForm() {

  // State object that stores all form data
  const [entry, setEntry] = useState<JournalEntry>({
    entryDate: "",
    symptoms: "",
    medications: "",
    notes: "",
  });

  // Updates state whenever a user types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target;

    setEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
  try {

    const savedEntry = await saveJournalEntry(entry);

    console.log("Saved Entry:", savedEntry);

    alert("Journal entry saved successfully!");

    setEntry({
      entryDate: "",
      symptoms: "",
      medications: "",
      notes: "",
    });

  } catch (error) {

    console.error("Error saving journal entry:", error);

    alert("Failed to save journal entry.");

  }
};
  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Add Journal Entry
        </h2>

        {/* Date */}

        <div className="mb-4">

          <label className="font-semibold block mb-2">
            Date
          </label>

          <input
            type="date"
            name="entryDate"
            value={entry.entryDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

        </div>

        {/* Symptoms */}

        <div className="mb-4">

          <label className="font-semibold block mb-2">
            Symptoms
          </label>

          <textarea
            name="symptoms"
            value={entry.symptoms}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={4}
          />

        </div>

        {/* Medications */}

        <div className="mb-4">

          <label className="font-semibold block mb-2">
            Medications
          </label>

          <textarea
            name="medications"
            value={entry.medications}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={4}
          />

        </div>

        {/* Notes */}

        <div className="mb-4">

          <label className="font-semibold block mb-2">
            Notes
          </label>

          <textarea
            name="notes"
            value={entry.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={4}
          />

        </div>

        {/* Save Button */}

       <button
  type="button"
  onClick={handleSubmit}
  className="
    bg-green-600
    hover:bg-green-700
    text-white
    px-6
    py-3
    rounded-lg
  "
>
  Save Entry
</button>

      </div>

    </div>

  );
}