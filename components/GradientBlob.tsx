"use client";

export default function GradientBlob() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Pink blob - top left - fast */}
      <div
        className="absolute -top-20 -left-20 w-[600px] h-[500px] rounded-full animate-blob"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(250, 136, 142, 0.7) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Blue blob - top center - slow with delay */}
      <div
        className="absolute -top-10 left-1/4 w-[700px] h-[400px] rounded-full animate-blob-slow"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(192, 216, 217, 0.8) 0%, transparent 60%)',
          filter: 'blur(70px)',
          animationDelay: '2s',
        }}
      />

      {/* Purple blob - right side - medium with delay */}
      <div
        className="absolute top-10 right-0 w-[500px] h-[450px] rounded-full animate-blob"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(203, 168, 175, 0.75) 0%, transparent 60%)',
          filter: 'blur(75px)',
          animationDelay: '4s',
        }}
      />

      {/* Orange accent - floating */}
      <div
        className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full animate-float"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(237, 171, 118, 0.6) 0%, transparent 60%)',
          filter: 'blur(60px)',
          animationDelay: '1s',
        }}
      />
    </div>
  );
}
