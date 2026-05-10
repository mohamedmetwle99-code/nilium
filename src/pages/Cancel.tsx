import React from 'react';

export const Cancel: React.FC = () => {
  return (
    <main className="min-h-screen bg-ivory text-nile-dark flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-display mb-6">Payment Cancelled</h1>
        <p className="text-base md:text-lg text-charcoal/80 mb-8">
          Your checkout session was cancelled. You can return to the shop to adjust your order or try again.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-nile px-8 py-3 text-sm uppercase tracking-[0.24em] text-nile hover:bg-nile hover:text-ivory transition-colors"
        >
          Return Home
        </a>
      </div>
    </main>
  );
};
