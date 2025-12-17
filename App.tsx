import React, { useState } from 'react';
import { ApiKeyInput } from './components/ApiKeyInput';
import { ImageUpload } from './components/ImageUpload';
import { ProductShowcase } from './components/ProductShowcase';
import { Layout } from './components/Layout';

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [sourceImage, setSourceImage] = useState<string>('');

  // Step 1: API Key Entry
  if (!apiKey) {
    return <ApiKeyInput onSetKey={setApiKey} />;
  }

  // Step 2: Image Upload
  if (!sourceImage) {
    return (
      <div className="relative">
         {/* Re-using layout structure partially for consistency */}
         <div className="absolute top-0 w-full p-6">
             <div className="text-xl font-serif italic font-bold tracking-tight text-center">Monday Rabbit</div>
         </div>
         <ImageUpload onImageSelected={setSourceImage} />
      </div>
    );
  }

  // Step 3: Main Showcase
  return (
    <Layout>
      <ProductShowcase apiKey={apiKey} sourceImage={sourceImage} />
    </Layout>
  );
};

export default App;