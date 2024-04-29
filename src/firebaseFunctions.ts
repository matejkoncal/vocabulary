// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import { CardSource } from "./utils/utils";

export async function getVocabularySourceByAi(topSideLanguage: string, bottomSideLanguage: string, topic: string): Promise<CardSource[]> {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "cards-dcc58.firebaseapp.com",
    projectId: "cards-dcc58",
  };

  const app = initializeApp(firebaseConfig);
  const functions = getFunctions(app);
  const func = httpsCallable(functions, "getVocabularySource");
  const result = await func({ topSideLanguage, bottomSideLanguage, topic, count: 50 });
  const parsedResult = JSON.parse(result.data as string);
  return parsedResult.cards as CardSource[];
}
