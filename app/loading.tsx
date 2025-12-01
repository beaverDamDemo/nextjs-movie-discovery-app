import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <Image
        src="/camera-bottom-only.png"
        alt="Camera bottom"
        width={200}
        height={200}
        className="relative z-0"
      />

      <Image
        src="/camera-wheel-left-small.png"
        alt="Camera wheel left"
        width={60}
        height={60}
        className="absolute z-10 animate-spin"
        style={{
          left: '22px',
          top: '328px',
          animation: 'spin 1626ms linear infinite',
        }}
      />

      <Image
        src="/camera-wheel-right-large.png"
        alt="Camera wheel right"
        width={80}
        height={80}
        className="absolute z-10 animate-spin"
        style={{
          right: '23px',
          top: '318px',
          animation: 'spin 2000ms linear infinite',
        }}
      />
    </div>
  );
}
