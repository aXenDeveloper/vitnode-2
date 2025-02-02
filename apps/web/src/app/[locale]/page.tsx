import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('core');

  return (
    <div>
      <h1>{t('example')}</h1>
      <Link href="/about">{t('example')}</Link>
    </div>
  );
}
