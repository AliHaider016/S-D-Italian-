import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartLineItem {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    image?: {
      url: string;
      altText: string | null;
    } | null;
    price: {
      amount: string;
      currencyCode: string;
    };
    product: {
      title: string;
      handle: string;
    };
  };
}

interface CartCost {
  subtotalAmount: {
    amount: string;
    currencyCode: string;
  };
  totalAmount: {
    amount: string;
    currencyCode: string;
  };
}

interface CartState {
  // State
  cartId: string | null;
  checkoutUrl: string;
  lines: CartLineItem[];
  cost: CartCost | null;
  totalQuantity: number;
  isCartOpen: boolean;

  // Actions
  setCartId: (id: string) => void;
  setCart: (cart: any) => void;
  addToCart: (line: CartLineItem) => void;
  updateLine: (lineId: string, quantity: number) => void;
  removeLine: (lineId: string) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartId: null,
      checkoutUrl: '',
      lines: [],
      cost: null,
      totalQuantity: 0,
      isCartOpen: false,

      setCartId: (id: string) => set({ cartId: id }),

      setCart: (cart: any) =>
        set({
          cartId: cart.id,
          checkoutUrl: cart.checkoutUrl,
          lines: cart.lines?.nodes || cart.lines || [],
          cost: cart.cost,
          totalQuantity: cart.totalQuantity || 0,
        }),

      addToCart: (line: CartLineItem) => {
        const { lines } = get();
        const existingIndex = lines.findIndex((l) => l.merchandise.id === line.merchandise.id);

        if (existingIndex >= 0) {
          const newLines = [...lines];
          newLines[existingIndex] = {
            ...newLines[existingIndex],
            quantity: newLines[existingIndex].quantity + line.quantity,
          };
          set({ lines: newLines, totalQuantity: get().totalQuantity + line.quantity });
        } else {
          set({
            lines: [...lines, line],
            totalQuantity: get().totalQuantity + line.quantity,
          });
        }
        get().openCart();
      },

      updateLine: (lineId: string, quantity: number) => {
        const { lines } = get();
        if (quantity <= 0) {
          set({
            lines: lines.filter((l) => l.id !== lineId),
            totalQuantity: get().totalQuantity - (lines.find((l) => l.id === lineId)?.quantity || 0),
          });
        } else {
          set({
            lines: lines.map((l) => (l.id === lineId ? { ...l, quantity } : l)),
          });
        }
      },

      removeLine: (lineId: string) => {
        const { lines } = get();
        const line = lines.find((l) => l.id === lineId);
        set({
          lines: lines.filter((l) => l.id !== lineId),
          totalQuantity: get().totalQuantity - (line?.quantity || 0),
        });
      },

      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

      openCart: () => set({ isCartOpen: true }),

      closeCart: () => set({ isCartOpen: false }),

      clearCart: () =>
        set({
          lines: [],
          cost: null,
          totalQuantity: 0,
          cartId: null,
          checkoutUrl: '',
        }),
    }),
    {
      name: 'fenty-cart',
      partialize: (state) => ({
        cartId: state.cartId,
        checkoutUrl: state.checkoutUrl,
        lines: state.lines,
        cost: state.cost,
        totalQuantity: state.totalQuantity,
      }),
    }
  )
);
