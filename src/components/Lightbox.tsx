import { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface Props {
  image: string | null;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (image) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        className="absolute top-6 right-6 text-slate-400 hover:text-white transition p-2 rounded-full hover:bg-slate-800/50"
        onClick={onClose}
        aria-label="Close preview"
      >
        <X className="w-8 h-8" />
      </button>
      <img
        src={image}
        alt="Full Preview"
        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-slate-800 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
