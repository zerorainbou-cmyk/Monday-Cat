export interface ProductItem {
  id: string;
  title: string;
  description: string;
  prompt: string;
  imageUrl?: string;
  isLoading: boolean;
  aspectRatio?: "1:1" | "4:3" | "3:4";
}

export interface GenerationConfig {
  apiKey: string;
  sourceImage: string; // Base64
}