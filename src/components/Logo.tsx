import { site } from '@/data/site';

export default function Logo({ className = '' }: { className?: string }) {
  return <img className={className} src={site.logo} alt={site.name} width={633} height={136} decoding="async" />;
}
