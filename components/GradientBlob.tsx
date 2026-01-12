"use client";

export default function GradientBlob() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Vermelho principal - left side */}
      <div
        className="absolute -top-20 -left-20 w-[700px] h-[600px] rounded-full animate-blob"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(194, 77, 61, 0.5) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Vermelho secundário - center */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[500px] rounded-full animate-blob-slow"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(194, 77, 61, 0.4) 0%, transparent 60%)',
          filter: 'blur(90px)',
          animationDelay: '2s',
        }}
      />

      {/* Vermelho escuro - right side */}
      <div
        className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full animate-blob"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(150, 50, 40, 0.4) 0%, transparent 60%)',
          filter: 'blur(80px)',
          animationDelay: '4s',
        }}
      />

      {/* Toque sutil de laranja */}
      <div
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full animate-float"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(237, 171, 118, 0.3) 0%, transparent 60%)',
          filter: 'blur(70px)',
          animationDelay: '1s',
        }}
      />
    </div>
  );
}
