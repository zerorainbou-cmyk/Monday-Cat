import React, { useState } from 'react';

interface ApiKeyInputProps {
  onSetKey: (key: string) => void;
}

export const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onSetKey }) => {
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputKey.trim()) {
      setError('Please enter a valid API Key');
      return;
    }
    onSetKey(inputKey.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCF8] p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-stone-100">
        <h2 className="text-3xl font-serif text-center mb-2 text-stone-800">Monday Rabbit</h2>
        <p className="text-center text-stone-500 mb-8 text-sm">Enter your Gemini API Key to begin creating.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="apiKey" className="block text-xs font-medium text-stone-600 uppercase tracking-wider mb-1">
              API Key
            </label>
            <input
              type="password"
              id="apiKey"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-transparent transition-all"
              placeholder="AIza..."
            />
          </div>
          
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-700 transition-colors font-medium text-sm"
          >
            Start Designing
          </button>
        </form>
        <p className="mt-4 text-xs text-center text-stone-400">
          Your key is used locally and never stored on our servers.
        </p>
      </div>
    </div>
  );
};