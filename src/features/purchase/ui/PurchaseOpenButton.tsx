'use client';

import { Button } from '@shared/ui';
import { usePathname, useRouter } from 'next/navigation';

const PurchaseOpenButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button variant="primary" size="lg" onClick={() => router.push(`${pathname}?purchase-open`)}>
      Buy
    </Button>
  );
};

export default PurchaseOpenButton;
