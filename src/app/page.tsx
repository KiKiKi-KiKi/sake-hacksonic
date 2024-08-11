import { PageContainer } from '@/components/layouts/PageContainer';
import { HomePageContent } from '@/features/pages/HomePage';

export default function Home() {
  return (
    <PageContainer isHome={true}>
      <HomePageContent />
    </PageContainer>
  );
}
