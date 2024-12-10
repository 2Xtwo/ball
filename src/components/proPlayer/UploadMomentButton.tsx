import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

interface UploadMomentButtonProps {
  onUpload: () => void;
}

export default function UploadMomentButton({ onUpload }: UploadMomentButtonProps) {
  return (
    <button
      onClick={onUpload}
      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
    >
      <CloudArrowUpIcon className="h-5 w-5 mr-2" />
      Upload Moment
    </button>
  );
}