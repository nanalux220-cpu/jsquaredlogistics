const LOGO_SRC = 'https://static.readdy.ai/image/4428baccc60709cd2682246ca105b4f4/1196234564d857bc2c894e5f71f7555b.png';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      className={className}
      src={LOGO_SRC}
      alt="Jsquared Logistics"
      width={633}
      height={136}
      decoding="async"
    />
  );
}