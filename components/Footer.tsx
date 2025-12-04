import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Mohammed Ali. All rights reserved.
        </p>
        <p className="text-slate-600 text-sm">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;