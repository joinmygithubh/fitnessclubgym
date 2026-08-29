import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 bg-[#0a0d14]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-500 mx-auto flex items-center justify-center">
          <Dumbbell className="w-8 h-8" />
        </div>

        <h1 className="text-6xl font-black text-white">404</h1>
        <h2 className="text-2xl font-extrabold text-white">Page Not Found</h2>

        <p className="text-sm text-slate-400">
          The fitness page or resource you are looking for does not exist or has been moved.
        </p>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-sm rounded-xl transition-all shadow-lg shadow-yellow-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return To Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
