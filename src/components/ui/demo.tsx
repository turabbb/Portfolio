'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';

export function SplineSceneBasic() {
  const [cursor, setCursor] = useState({ x: 50, y: 55 });

  return (
    <Card
      className="w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] bg-black/[0.94] relative overflow-hidden border-white/10"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setCursor({ x, y });
      }}
    >
      <Spotlight className="z-[2]" size={260} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_42%),radial-gradient(circle_at_78%_85%,rgba(125,211,252,0.12),transparent_40%)]" />

      <motion.div
        className="absolute z-20 pointer-events-none"
        animate={{
          left: `${cursor.x}%`,
          top: `${cursor.y}%`,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.5 }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-2 backdrop-blur-sm">
          <Bot className="w-5 h-5 text-white/90" />
        </div>
      </motion.div>

      <div className="flex h-full flex-col md:flex-row">
        <div className="flex-1 p-6 sm:p-8 relative z-10 flex flex-col justify-center md:max-w-[52%]">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-4">AI x Product Engineering</p>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Cursor-Aware
            <br />
            3D Robot Interface
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg leading-relaxed">
            Built for modern SaaS and AI products with smooth interactions, premium motion,
            and a 3D robot scene that feels alive with your cursor.
          </p>
        </div>

        <div className="flex-1 relative min-h-[200px] sm:min-h-[240px] md:min-h-0">
          <SplineScene
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
