import {
  ChartColumnBig, Facebook, Feather, Instagram, MonitorSmartphone, Package, Printer, Smartphone, Twitter, Youtube,
  type LucideProps,
} from 'lucide-react';
import type { ServiceIcon } from '@/data/site';

const serviceIcons = {
  brand: Feather, print: Printer, digital: MonitorSmartphone, info: ChartColumnBig, uiux: Smartphone, pack: Package,
} satisfies Record<ServiceIcon, unknown>;

const socialIcons = { facebook: Facebook, instagram: Instagram, twitter: Twitter, youtube: Youtube };

export function ServiceGlyph({ name, ...props }: { name: ServiceIcon } & LucideProps) {
  const Icon = serviceIcons[name];
  return <Icon aria-hidden="true" {...props} />;
}

export function SocialGlyph({ name, ...props }: { name: keyof typeof socialIcons } & LucideProps) {
  const Icon = socialIcons[name];
  return <Icon aria-hidden="true" {...props} />;
}
