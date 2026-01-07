"use client";

export default function GradientBlob() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Pink/Orange blob - top left */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[400px] rounded-full opacity-60 animate-blob"
        style={{
          background: 'radial-gradient(ellipse at center, #fa888e 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Blue blob - top center/right */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full opacity-50 animate-blob animation-delay-2000"
        style={{
          background: 'radial-gradient(ellipse at center, #c0d8d9 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Purple blob - top right */}
      <div
        className="absolute -top-10 right-0 w-[400px] h-[350px] rounded-full opacity-60 animate-blob animation-delay-4000"
        style={{
          background: 'radial-gradient(ellipse at center, #cba8af 0%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />

      {/* Orange accent - floating */}
      <div
        className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full opacity-40 animate-float"
        style={{
          background: 'radial-gradient(ellipse at center, #edab76 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
}
