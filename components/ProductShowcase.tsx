import React, { useEffect, useState } from 'react';
import { ProductItem } from '../types';
import { generateProductMockup } from '../services/geminiService';

interface ProductShowcaseProps {
  apiKey: string;
  sourceImage: string;
}

const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: '1',
    title: 'Welcome Kit',
    description: 'A sustainable welcome kit marking the start of a new journey.\nIncludes a box, card, and basic stationery.',
    prompt: 'minimalist corporate welcome kit box set with stationery, pens, and notebooks',
    isLoading: false,
  },
  {
    id: '2',
    title: 'Eco Tumbler Set',
    description: 'A well-designed tumbler set for daily hydration. Clean and simple.',
    prompt: 'modern white minimalist insulated tumbler cup and packaging box',
    isLoading: false,
  },
  {
    id: '3',
    title: '2024 Essentials',
    description: 'Prepare for the new year with our signature calendar and compact umbrella.',
    prompt: 'minimalist desk calendar and a small folding umbrella on a desk',
    isLoading: false,
  },
  {
    id: '4',
    title: 'Signature Umbrella',
    description: 'A sturdy, wind-resistant umbrella that keeps you dry in style.',
    prompt: 'open blue umbrella with a large custom logo print on the canopy, studio shot',
    isLoading: false,
  },
  {
    id: '5',
    title: 'Planner Diary',
    description: 'A hard-cover diary with premium paper for your daily thoughts and plans.',
    prompt: 'hardcover notebook diary teal color with sticker set',
    isLoading: false,
  },
  {
    id: '6',
    title: 'Ergonomic Stand',
    description: 'Aluminum laptop stand adjustable to 6 angles for comfortable work.',
    prompt: 'silver aluminum laptop stand with a custom sticker on the surface',
    isLoading: false,
  },
  {
    id: '7',
    title: 'Wireless Charger',
    description: 'Fast wireless charging pad with a soft matte finish.',
    prompt: 'round white wireless charging pad with custom graphic printed on top',
    isLoading: false,
  },
  {
    id: '8',
    title: 'Acrylic Keyring',
    description: 'A cute acrylic keyring to accessorize your bag or keys.',
    prompt: 'custom shape acrylic keyring keychain attached to a metal ring',
    isLoading: false,
  },
  {
    id: '9',
    title: 'Character Mousepad',
    description: 'Non-slip mousepad shaped like the character\'s face.',
    prompt: 'custom shape mousepad with a cute face design on a desk with a computer mouse',
    isLoading: false,
  },
   {
    id: '10',
    title: 'Enamel Pin',
    description: 'Gold-plated enamel pin for a touch of elegance.',
    prompt: 'gold plated enamel lapel pin badge with shiny finish',
    isLoading: false,
  },
  {
    id: '11',
    title: 'Canvas Eco Bag',
    description: 'Durable canvas tote bag for your daily commute.',
    prompt: 'navy blue canvas tote bag with a large graphic print in the center',
    isLoading: false,
  },
];

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ apiKey, sourceImage }) => {
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [isGeneratingAll, setIsGeneratingAll] = useState(false);

  // Helper to update a specific product
  const updateProduct = (id: string, updates: Partial<ProductItem>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const generateSingleProduct = async (product: ProductItem) => {
    if (product.imageUrl) return; // Already generated

    updateProduct(product.id, { isLoading: true });
    try {
      const generatedImage = await generateProductMockup(apiKey, sourceImage, product.prompt);
      if (generatedImage) {
        updateProduct(product.id, { isLoading: false, imageUrl: generatedImage });
      } else {
        updateProduct(product.id, { isLoading: false }); // Failed silent
      }
    } catch (e) {
      console.error(e);
      updateProduct(product.id, { isLoading: false });
    }
  };

  const handleGenerateAll = async () => {
    setIsGeneratingAll(true);
    // Generate individually to update UI progressively
    for (const product of products) {
        if(!product.imageUrl) {
             await generateSingleProduct(product);
        }
    }
    setIsGeneratingAll(false);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-6xl md:text-7xl font-serif italic mb-8 font-medium">Monday Rabbit</h1>
        <div className="max-w-2xl mx-auto space-y-4 text-sm text-stone-600 leading-relaxed font-light">
          <p>Hello, this is Monday Rabbit.</p>
          <p>We dream of a world where cuteness meets sustainability.</p>
          <p>Creating goods that don't just look good, but feel good.</p>
          <p className="text-rose-400">Small happiness in your daily routine.</p>
        </div>
      </section>

      {/* Collection Header & Controls */}
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center mb-16 border-b border-stone-200 pb-4">
        <span className="text-xs uppercase tracking-widest text-stone-400">2024 Collection</span>
        <button 
          onClick={handleGenerateAll}
          disabled={isGeneratingAll}
          className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all border ${
            isGeneratingAll 
              ? 'bg-stone-100 text-stone-400 border-stone-100' 
              : 'bg-stone-800 text-white border-stone-800 hover:bg-white hover:text-stone-800'
          }`}
        >
          {isGeneratingAll ? 'Generating Mockups...' : 'Auto-Generate All'}
        </button>
      </div>

      {/* Product List */}
      <div className="max-w-2xl mx-auto space-y-32 px-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center group">
            <div className="relative w-full aspect-square bg-rose-50/50 rounded-sm overflow-hidden mb-8 shadow-sm transition-shadow hover:shadow-md">
                {/* Image or Loading State */}
                {product.isLoading ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-rose-300">
                        <div className="w-12 h-12 border-2 border-rose-200 border-t-rose-400 rounded-full animate-spin mb-4"></div>
                        <span className="text-xs font-serif italic">Designing...</span>
                    </div>
                ) : product.imageUrl ? (
                    <img 
                        src={product.imageUrl} 
                        alt={product.title} 
                        className="w-full h-full object-cover animate-fade-in"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300">
                        <button 
                            onClick={() => generateSingleProduct(product)}
                            className="px-6 py-3 border border-stone-200 text-stone-400 text-xs uppercase tracking-widest hover:border-stone-400 hover:text-stone-600 transition-colors"
                        >
                            Generate Mockup
                        </button>
                    </div>
                )}
            </div>
            
            <h3 className="text-2xl font-serif italic mb-3 text-stone-800">{product.title}</h3>
            <p className="text-xs text-stone-500 text-center max-w-sm leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <section className="bg-stone-50 py-24 mt-32">
          <div className="max-w-4xl mx-auto text-center mb-16">
              <h3 className="text-2xl font-serif italic mb-2">Monday Rabbit Process</h3>
              <p className="text-xs text-stone-400">How we bring your custom goods to life.</p>
          </div>
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                  { step: '01', title: 'Consultation', desc: 'Confirm budget and schedule' },
                  { step: '02', title: 'Quotation', desc: 'Product selection and cost estimate' },
                  { step: '03', title: 'Design', desc: 'Drafting and proofing' },
                  { step: '04', title: 'Production', desc: 'Manufacturing the goods' },
                  { step: '05', title: 'Delivery', desc: 'Shipping to your location' },
              ].map((item) => (
                  <div key={item.step} className="bg-white p-6 rounded-sm shadow-sm hover:-translate-y-1 transition-transform duration-300">
                      <div className="text-rose-100 text-4xl font-serif font-bold mb-2 -ml-1 opacity-50">{item.step}</div>
                      <h4 className="font-serif font-bold text-sm mb-2 text-stone-800">{item.title}</h4>
                      <p className="text-[10px] text-stone-500 leading-normal">{item.desc}</p>
                  </div>
              ))}
          </div>
          <div className="mt-12 text-center text-[10px] text-stone-400 space-x-6">
              <span>✔ Small quantity production available.</span>
              <span>✔ Custom packaging options.</span>
          </div>
      </section>

      {/* Floating Reference Image */}
      <div className="fixed top-32 right-8 z-40 w-24 md:w-32 bg-white p-2 shadow-lg rounded-sm border border-stone-100 transform rotate-2 hover:rotate-0 transition-transform duration-300 hidden xl:block">
          <p className="text-[10px] text-center text-stone-400 mb-2 uppercase tracking-wider">Reference</p>
          <img src={sourceImage} alt="Ref" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};