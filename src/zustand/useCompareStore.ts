import { create } from "zustand";
import { CompareItemProps } from "@/common/types";

type CompareState = {
  compareItems: (CompareItemProps | null)[];
  addCompareItem: (item: CompareItemProps) => void;
  removeCompareItem: (productId: string) => void;
  clearCompareItems: () => void;
};

const initialCompareItems = [null, null, null];

export const useCompareStore = create<CompareState>((set) => ({
  compareItems: initialCompareItems,

  addCompareItem: (item) =>
    set((state) => {
      const index = state.compareItems.findIndex((i) => i === null);
      if (index !== -1) {
        const newItems = [...state.compareItems];
        newItems[index] = item;
        return { compareItems: newItems };
      }
      return state;
    }),

  removeCompareItem: (productId) =>
    set((state) => ({
      compareItems: state.compareItems.map((item) =>
        item?.productId === productId ? null : item
      ),
    })),

  clearCompareItems: () => set({ compareItems: initialCompareItems }),
}));
