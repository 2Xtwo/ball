import { useState } from 'react';
import { PaperAirplaneIcon, PhotoIcon } from '@heroicons/react/24/outline';

interface CreatePostProps {
  onPost: (content: string, image?: File) => void;
}

export default function CreatePost({ onPost }: CreatePostProps) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onPost(content, image || undefined);
      setContent('');
      setImage(null);
      setImagePreview(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          rows={3}
        />
        
        {imagePreview && (
          <div className="mt-2 relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-48 rounded-lg object-cover"
            />
            <button
              type="button"
              onClick={() => {
                setImage(null);
                setImagePreview(null);
              }}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
            >
              ×
            </button>
          </div>
        )}

        <div className="mt-3 flex justify-between items-center">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <PhotoIcon className="h-6 w-6 text-gray-500 hover:text-indigo-500" />
          </label>
          
          <button
            type="submit"
            disabled={!content.trim()}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PaperAirplaneIcon className="h-5 w-5 mr-2" />
            Post
          </button>
        </div>
      </form>
    </div>
  );
}