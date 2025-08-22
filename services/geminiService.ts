
import { GoogleGenAI, Type } from "@google/genai";
import type { QuizQuestion } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This will be caught by the calling function.
  // In a real app, you might have more robust handling or a visible error state.
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const emailMarketingTipsContext = `
  1. Compelling Content: People scan, not read. Use F-shaped or Z-shaped patterns. Keep text short, relevant, and personalized.
  2. Smart Layout: Use a clear hierarchy: Header, Intro (most important info), Secondary Info, Footer. Make it eye-catching.
  3. Strong Call to Actions (CTAs): Use obvious, big buttons (min 44px recommended by Apple). Buttons perform better than text links.
  4. Clear Typography: Ensure readability on all screen sizes. Use high contrast text (e.g., black on white). Header text should be ideally no smaller than 20px and body text 13px.
  5. Uniformity & Consistency: Use constant design elements (logos, headers). Keep emails narrow (around 600px width) for readability on all devices.
  6. Strategic Colour: Use standard brand colours consistently to build recognition and trust.
  7. Effective Subject Lines: Keep it under 50 characters for better open rates. Use numbers, questions, and scarcity tactics. Always A/B test.
  8. Purposeful Imagery: Avoid putting essential text within an image. Use natural photography. Double image size for Retina displays.
  9. Mobile-First Design: Over 50% of emails are opened on mobile, so a consistent, responsive customer experience is crucial.
  10. Rigorous Testing: Don't just preview in a web browser. Test on main email providers like Gmail, Outlook, and Apple Mail as they render emails differently.
`;

export const generateQuizQuestions = async (): Promise<QuizQuestion[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Based on the following text about email marketing best practices, generate 5 unique multiple-choice quiz questions. Each question should have exactly 4 options, with only one being correct. The questions should be challenging but fair.
      
      Context: """${emailMarketingTipsContext}"""`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: {
                    type: Type.STRING,
                    description: 'The quiz question text.',
                  },
                  options: {
                    type: Type.ARRAY,
                    description: 'An array of 4 string options.',
                    items: {
                      type: Type.STRING,
                    },
                  },
                  correctAnswer: {
                    type: Type.STRING,
                    description: 'The correct answer, which must be one of the strings from the options array.',
                  },
                },
              },
            },
          },
        },
      },
    });

    const jsonText = response.text;
    const parsed = JSON.parse(jsonText);
    return parsed.questions as QuizQuestion[];

  } catch (error) {
    console.error("Error generating quiz questions:", error);
    // In a real app, you might want to return a default set of questions or handle the error more gracefully.
    throw new Error("Failed to generate quiz questions from AI service.");
  }
};
