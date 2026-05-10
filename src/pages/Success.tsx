import React from 'react';

export const Success: React.FC = () => {
  return (
    <main className="min-h-screen bg-ivory text-nile-dark flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-display mb-6">Thank you for your purchase.</h1>
        <p className="text-base md:text-lg text-charcoal/80 mb-8">
          Your order has been received and we are preparing it for fulfillment. You will receive a confirmation email shortly.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-nile px-8 py-3 text-sm uppercase tracking-[0.24em] text-nile hover:bg-nile hover:text-ivory transition-colors"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
};
