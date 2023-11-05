import Header from '@/components/shared/Header';
type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
};
export default function SharedBanner(props: MyProps) {
  const { headerData, settingsData, bannerData } = props;
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat md:h-[100vh]'
      style={{
        backgroundImage: `url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header settingsData={settingsData} navigation={headerData} />
      <div className='mx-auto flex flex-col items-center justify-center'>
        <div className='mx-auto mt-[90%] flex w-full flex-col items-center justify-center text-center md:mt-[20%] md:py-16'>
          <p className='text-leading-3 text-lg font-bold uppercase text-white md:text-5xl'>
            {bannerData?.bannerHeading}
          </p>
        </div>
      </div>
    </div>
  );
}
