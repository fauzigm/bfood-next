import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CateringPackage } from "@/sanity.types";

interface CartItem {
  cateringPackage: CateringPackage;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (cateringPackage: CateringPackage) => void;
  removeItem: (cateringPackageId: string) => void;
  deleteCartProduct: (cateringPackageId: string) => void;
  resetCart: () => void;
  getTotalPrice: () => number;
  getSubtotalPrice: () => number;
  getItemCount: (cateringPackageId: string) => number;
  getGroupedItems: () => CartItem[];
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (cateringPackage) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.cateringPackage._id === cateringPackage._id
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.cateringPackage._id === cateringPackage._id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              items: [...state.items, { cateringPackage, quantity: 1 }],
            };
          }
        }),
      removeItem: (cateringPackageId) =>
        set((state) => ({
          items: state.items.reduce((acc, item) => {
            if (item.cateringPackage._id === cateringPackageId) {
              if (item.quantity > 1) {
                acc.push({ ...item, quantity: item.quantity - 1 });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, [] as CartItem[]),
        })),
      deleteCartProduct: (cateringPackageId) =>
        set((state) => ({
          items: state.items.filter(
            ({ cateringPackage }) => cateringPackage?._id !== cateringPackageId
          ),
        })),
      resetCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) =>
            total + (item.cateringPackage.price ?? 0) * item.quantity, 0
        );
      },
      getSubtotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.cateringPackage.price ?? 0;
          const discount = ((item.cateringPackage.discount ?? 0) * price) / 100;
          const discountedPrice = price - discount; // Fixed: Subtract discount
          return total + discountedPrice * item.quantity;
        }, 0);
      },
      getItemCount: (cateringPackageId) => {
        const item = get().items.find(
          (item) => item.cateringPackage._id === cateringPackageId
        );
        return item ? item.quantity : 0;
      },
      getGroupedItems: () => get().items,
    }),
    { name: "cart-store" }
  )
);

export default useCartStore;