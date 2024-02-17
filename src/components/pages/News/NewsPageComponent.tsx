'use client';

import { useEffect, useState } from 'react';

import NewsSection from '@/components/elements/NewsSection';
import NewsBanner from '@/components/pages/News/NewsBanner';
import NewsBottom from '@/components/pages/News/NewsBottom';
import Footer from '@/components/shared/Footer';
import Loader from '@/components/utils/Loader';

type Props = {
  data: any;
  searchParams: any;
  totalPages :any;
};


const NewsPageComponent = (props: Props) => {
  const { data, searchParams, totalPages } = props;
  const [loading, setLoading] = useState<boolean>(true);
  

  useEffect(() => {
    if(data?.posts?.nodes){
      setLoading(false);
    }
  }, [data?.posts?.nodes]);

  return (
    <div>
      <main>
        {!loading ? (
          <>
            <NewsBanner
              bannerData={data?.pages?.nodes[0]?.news?.bannerSection}
              headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
              settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
              usingFor='news'
            />
            <NewsSection
              totalPages={totalPages}
              currentPageID={parseInt(searchParams?.page?.toString() || '1')}
              newsSection={data?.posts?.nodes}
            />
            <NewsBottom
              bottomSection={data?.pages?.nodes[0]?.news?.bottomSection}
            />
            <Footer
              navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
              settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
            />
          </>
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
};

export default NewsPageComponent;
