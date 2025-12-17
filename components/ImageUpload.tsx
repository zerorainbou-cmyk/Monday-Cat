import React, { useCallback } from 'react';

interface ImageUploadProps {
  onImageSelected: (base64: string) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onImageSelected(base64String);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelected]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCF8] p-4">
      <div className="max-w-lg w-full text-center">
        <h2 className="text-4xl font-serif text-stone-800 mb-4 italic">Upload Reference</h2>
        <p className="text-stone-500 mb-8 font-light">
          Upload your logo or character image.<br/>
          We will generate the entire Monday Rabbit collection based on it.
        </p>

        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-stone-300 border-dashed rounded-xl cursor-pointer bg-stone-50 hover:bg-stone-100 transition-colors group">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-10 h-10 mb-3 text-stone-400 group-hover:text-stone-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p className="mb-2 text-sm text-stone-500"><span className="font-semibold text-stone-700">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-stone-400">PNG, JPG (Max 5MB)</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};