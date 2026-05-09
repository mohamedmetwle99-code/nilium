import { useState, useCallback } from 'react';

export type Currency = 'CHF' | 'EUR';

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  qty: number;
}

const EUR_RATE = 0.94;

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<Currency>('CHF');

  const addItem = useCallback((item: Omit<CartItem, 'qty'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.variant === item.variant);
      if (existing) {
        return prev.map(i =>
          i.id === item.id && i.variant === item.variant
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string, variant: string) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.variant === variant)));
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const formatPrice = useCallback((chfPrice: number) => {
    const price = currency === 'EUR' ? chfPrice * EUR_RATE : chfPrice;
    return `${currency} ${price.toFixed(2)}`;
  }, [currency]);

  return { items, addItem, removeItem, totalItems, subtotal, currency, setCurrency, formatPrice };
}
