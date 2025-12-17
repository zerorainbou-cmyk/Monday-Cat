import { GoogleGenAI } from "@google/genai";

/**
 * Generates a product mockup based on a source image and a text prompt.
 * Uses gemini-2.5-flash-image for efficient image-to-image generation.
 */
export const generateProductMockup = async (
  apiKey: string,
  sourceImageBase64: string,
  productPrompt: string,
  aspectRatio: string = "1:1"
): Promise<string | null> => {
  try {
    // 1. Initialize the client dynamically with the user-provided key
    const ai = new GoogleGenAI({ apiKey });

    // 2. Clean the base64 string if it contains headers
    const cleanBase64 = sourceImageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

    // 3. Construct the prompt
    // We ask for a photorealistic product shot incorporating the source design.
    const fullPrompt = `
      Create a high-quality, professional studio product photograph of a ${productPrompt}.
      The product MUST feature the character or design shown in the provided reference image.
      Apply the design from the reference image onto the product naturally (e.g., printed on the material).
      The background should be a soft, clean, pastel color (like soft pink, beige, or light grey) consistent with a modern minimalist brand identity.
      Lighting should be soft and diffuse.
      Do not include text overlays or watermarks.
      Make it look like a real physical product.
    `;

    // 4. Call the API
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: fullPrompt,
          },
          {
            inlineData: {
              mimeType: 'image/png', // Assuming PNG for upload simplicity, GenAI handles most common types
              data: cleanBase64,
            },
          },
        ],
      },
      config: {
        // We do not use responseMimeType for image generation models generally, 
        // but we look for the image part in the response.
      },
    });

    // 5. Extract the generated image
    // The model returns the generated image within the content parts.
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData && part.inlineData.data) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    return null;

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};