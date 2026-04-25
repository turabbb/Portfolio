import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type SlideTabItem = {
  id: string;
  label: string;
};

type SlideTabsProps = {
  tabs: SlideTabItem[];
  selectedId: string;
  onTabSelect: (id: string) => void;
  className?: string;
};

type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

export const SlideTabs = ({ tabs, selectedId, onTabSelect, className }: SlideTabsProps) => {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabsRef = useRef<Array<HTMLLIElement | null>>([]);
  const selectedIndex = useMemo(
    () => Math.max(0, tabs.findIndex((tab) => tab.id === selectedId)),
    [tabs, selectedId],
  );

  useEffect(() => {
    const updateCursorToSelected = () => {
      const selectedTab = tabsRef.current[selectedIndex];
      if (!selectedTab) return;

      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    };

    updateCursorToSelected();
    window.addEventListener('resize', updateCursorToSelected);

    return () => window.removeEventListener('resize', updateCursorToSelected);
  }, [selectedIndex]);

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selectedIndex];
        if (!selectedTab) return;

        const { width } = selectedTab.getBoundingClientRect();
        setPosition({
          left: selectedTab.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative mx-auto flex w-fit rounded-full border border-border/70 bg-background/80 p-1 backdrop-blur-xl ${className ?? ''}`}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.id}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          setPosition={setPosition}
          onClick={() => onTabSelect(tab.id)}
          isActive={selectedId === tab.id}
        >
          {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  onClick: () => void;
  isActive: boolean;
};

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick, isActive }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          if (!ref || typeof ref === 'function') return;
          const current = ref.current;
          if (!current) return;

          const { width } = current.getBoundingClientRect();
          setPosition({
            left: current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-2.5 md:text-sm tracking-wider transition-colors ${
          isActive ? 'text-background' : 'text-foreground/85'
        }`}
      >
        {children}
      </li>
    );
  },
);

Tab.displayName = 'Tab';

const Cursor = ({ position }: { position: CursorPosition }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-foreground md:h-10"
      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
    />
  );
};
