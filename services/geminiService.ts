import { GoogleGenAI } from "@google/genai";

// N'initialise le client que côté serveur (Node) avec une API key disponible via process.env.
let ai: any = null;
if (typeof window === 'undefined' && process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getPrioritiesBotResponse = async (query: string) => {
  if (!ai) {
    // On se trouve probablement côté client ou l'API key n'est pas fournie.
    console.warn('Gemini client non initialisé. Requête ignorée côté client.');
    return "L'assistant n'est pas disponible dans ce contexte. Veuillez réessayer depuis le serveur ou contactez l'administrateur.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `Vous êtes 'Priorités-Bot', l'assistant officiel du portail Priorités RDC. 
        Votre rôle est de guider les investisseurs, citoyens et partenaires internationaux. 
        Soyez professionnel, institutionnel, et factuel sur le développement de la République Démocratique du Congo. 
        Utilisez les couleurs bleu, or et vert dans vos descriptions métaphoriques. 
        Répondez en français par défaut, sauf si on vous parle une autre langue.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Je suis désolé, je rencontre une difficulté technique. Veuillez réessayer plus tard.";
  }
};
