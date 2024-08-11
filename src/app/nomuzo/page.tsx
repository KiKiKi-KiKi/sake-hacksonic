import { Metadata } from 'next';

import { PageContainer } from '@/components/layouts/PageContainer';
import { APP_NAME } from '@/config';
import { Nomuzo } from '@/features/pages/NomuzoPage';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `飲むぞ！ | ${APP_NAME}`,
  };
};

export default function NomuzoPage() {
  return (
    <PageContainer title='飲むぞ！'>
      <Nomuzo />
    </PageContainer>
  );
}
