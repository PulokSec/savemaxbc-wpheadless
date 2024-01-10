'use client';
import dynamic from 'next/dynamic';
import React from 'react';

import Loader from '@/components/utils/Loader';
const MultiMapComponent = dynamic(() => import('@/components/utils/MultiMap'), {
  ssr: false,
});
const MapBox = dynamic(() => import('@/components/utils/MapBox'), {
  loading: () => <Loader />,
  ssr: false,
});
const filterData = [
  { name: 'House', value: 'House' },
  { name: 'Townhouse', value: 'Town' },
  { name: 'Condominium', value: 'Condo' },
];
type MyProps = {
  posts: Array<any>;
  totalCount: number;
  latitude: any;
  longitude: any;
};

const MapSearch = (props: MyProps) => {
  const { posts, totalCount, latitude, longitude } = props;
  // const [mapField, setMapField] = useState('');
  // const [type, setType] = useState('');
  // const [count, setCount] = useState(0);
  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');
  // const domNode: any = useRef();
  // const { setQueryParam } = useQueryParams();

  // console.log(posts);

  // const handleRemove = (data: string) => {
  //   setFilters(
  //     filters.filter((filter: { name: string }) => filter.name !== data)
  //   );
  // };
  // const handleSelect = (data: string) => {
  //   setType(data);
  //   setQueryParam('query', data);
  // };
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();

  //   if (mapField?.length > 0) {
  //     setQueryParam('query', mapField);
  //   }
  // };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const city = mapField?.split(',')[0] || mapField || query;
  //       const street = mapField?.split(',')[1] || mapField || query;
  //       const province = mapField?.split(',')[2] || mapField || query;
  //       const result = await getSearchQuery({
  //         cityParam: city ? city : '',
  //         streetParam: street ? street : '',
  //         provinceParam: province ? province : '',
  //         pageParam: pageParam ? pageParam : 1,
  //       });
  //       setFiltersData(result?.listings);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   if (mapField.length > 0 || query.length > 0 || pageParam > 0) {
  //     fetchData();
  //   }
  // }, [mapField, pageParam, query]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await getMapProperties({
  //       searchQuery: query?.toString() || '',
  //     });
  //     setLatitude(data?.listings[0]?.post?.Latitude);
  //     setLongitude(data?.listings[0]?.post?.Longitude);
  //     setCount(data?.totalCount);
  //     setPosts(data?.listings as any);
  //   }
  //   fetchData();
  // }, [query]);

  // const handleMapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setMapField(e.target.value);
  // };

  return (
    <section>
      <div className=''>
        {/* <MapBox
          allPosts={posts}
          totalCount={totalCount}
          lng={longitude}
          lat={latitude}
        /> */}
        <MultiMapComponent
          allPosts={posts}
          totalCount={totalCount}
          latitude={longitude}
          longitude={latitude}
        />
      </div>
    </section>
  );
};

export default MapSearch;
