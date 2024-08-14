import { createContext, useCallback, useMemo, useState } from "react";
import { StickyElement } from "./components/StickyElement";

export interface StickyElementProps {
  id: string;
  content: JSX.Element;
  sticky: boolean;
}

export interface StackEntry {
  id: string;
  height: number;
}
export interface StickyStackContext {
  stack: StackEntry[];
  scrollTo: (id: string) => void;
  getOffset: (id: string) => number;
  updateHeight: (id: string, height: number) => void;
}

export const stickyStackContext = createContext<StickyStackContext>(
  {} as StickyStackContext
);

export const StickyStack = ({
  stickies,
  stackOffset,
}: {
  stickies: StickyElementProps[];
  stackOffset?: number;
}) => {
  const orderedStickyIds = useMemo(() => {
    return stickies.map((s) => s.id);
  }, [stickies]);

  const [stack, setStack] = useState<StackEntry[]>([]);
  const sortedStack = useMemo(
    () =>
      stack.sort(
        (a, b) =>
          orderedStickyIds.indexOf(a.id) - orderedStickyIds.indexOf(b.id)
      ),
    [orderedStickyIds, stack]
  );

  const updateHeight = useCallback(
    (id: string, height: number) => {
      const index = stack.findIndex((e) => e.id === id);

      const updatedStack = [...stack];

      if (index === -1) {
        updatedStack.push({ id, height });
      } else {
        updatedStack.splice(index, 1, {
          id,
          height,
        });
      }

      setStack(updatedStack);
    },

    [stack]
  );

  const getOffset = useCallback(
    (id: string): number => {
      const index = stack.findIndex((e) => e.id === id);

      if (index <= 0) {
        return 0;
      } else {
        return (
          (stackOffset ?? 0) +
          stack
            .slice(0, index)
            .reduce((sum, summand) => sum + summand.height, 0)
        );
      }
    },
    [stack, stackOffset]
  );

  const scrollTo = useCallback(
    (id: string) => {
      const entry = stack.find((s) => s.id === id);

      if (!entry) {
        console.error("cant scroll to nonexistant element", id);
        return;
      }
      window.scrollTo({ top: getOffset(entry.id) });
    },
    [getOffset, stack]
  );

  const value = useMemo(() => {
    return { stack: sortedStack, updateHeight, scrollTo, getOffset };
  }, [sortedStack, updateHeight, scrollTo, getOffset]);
  return (
    <stickyStackContext.Provider value={value}>
      <div>
        {stickies.map((s) => (
          <StickyElement key={s.id} {...s} />
        ))}
      </div>
    </stickyStackContext.Provider>
  );
};
