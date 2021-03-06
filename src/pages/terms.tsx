import { useRouter } from 'next/router';

import PageEn from './en/terms';
import PageEs from './es/terms';
import PagePt from './pt/terms';

export default function Terms() {
  const router = useRouter();

  switch (router.locale) {
    case 'pt':
      return <PagePt />;
    case 'es':
      return <PageEs />;
    default:
      return <PageEn />;
  }
}
