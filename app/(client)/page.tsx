import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Container';
import ProductGrid from '@/components/ProductGrid';

export default async function Home() {
  return (
    <div>
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}