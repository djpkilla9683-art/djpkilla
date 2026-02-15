
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async fetchBioInfo(): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Tell me about DJPKILLA, the professional DJ from Reading, Pennsylvania. Mention his style, connection to the local music scene, and reputation. Keep it professional and hype him up for his official website.",
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      return response.text || "DJPKILLA is Reading Pennsylvania's premier open-format DJ, known for his electrifying energy, technical skill, and deep roots in the PA music scene. From club residencies to major festivals, he brings a unique blend of remixes and original mashups that keep the dance floor moving.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "DJPKILLA is one of Reading, Pennsylvania's most influential DJs. With a signature style that blends urban beats, top 40 hits, and exclusive remixes, he has become a staple in the tri-state area's nightlife. His dedication to the craft and his fans drives every set.";
    }
  }
}

export const geminiService = new GeminiService();
