import axios from "axios";
import type { JournalEntry } from "../types/JournalEntry";

const API_URL = "http://localhost:8080/api/journal";

export const saveJournalEntry = async (
  entry: JournalEntry
): Promise<JournalEntry> => {
  const response = await axios.post<JournalEntry>(
    API_URL,
    entry
  );

  return response.data;
};

export const getAllJournalEntries = async (): Promise<JournalEntry[]> => {
  const response = await axios.get<JournalEntry[]>(API_URL);

  return response.data;
};