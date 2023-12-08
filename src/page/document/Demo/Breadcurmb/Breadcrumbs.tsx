
import UpBreadcrumbs from '@/component/upBreadcrumb/UpBreadcrumbs';
import React from 'react';


const Breadcrumbs: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Category', link: '/category' },
    { label: 'Product', link: '/category/product' },
  ];

  return (
    <div>
      <UpBreadcrumbs items={breadcrumbItems} />
    </div>
  );
};

export default Breadcrumbs;
