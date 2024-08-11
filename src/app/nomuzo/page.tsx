import { Metadata } from 'next';

import { PageContainer } from '@/components/layouts/PageContainer';
import { APP_NAME } from '@/config';
import { NomuzoCounter } from '@/features/NomuzoCounter';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `飲むぞ！ | ${APP_NAME}`,
  };
};

export default function NomuzoPage() {
  return (
    <PageContainer title='飲むぞ！'>
      <NomuzoCounter />
    </PageContainer>
  );
}
