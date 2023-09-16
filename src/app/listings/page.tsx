'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

// export async function getStaticProps() {
//   const allPosts = await getPostList();

//   return {
//     props: {
//       allPosts: allPosts,
//     },
//   };
// }

// type MyProps = {
//   allPosts: any;
// };
export default function Listings() {
  // const { allPosts } = props;
  // console.log(allPosts);
  const [posts, setPosts] = useState([]);
  const queryAllPost = {
    query: `
    query getAllPosts {
      listings {
        nodes {
          listingDetails
        }
      }
    }
  `,
  };

  // useEffect(() => {
  //   async function getPosts() {
  //     try {
  //       const coordinates = await getCoordinates('Langley');
  //       console.log('Coordinates:', coordinates);
  //       const propertyList = await getPropertyList(
  //         coordinates[0],
  //         coordinates[1],
  //         coordinates[2],
  //         coordinates[3],
  //         100000,
  //         410000
  //       );
  //       console.log('Property List:', propertyList);
  //     } catch (error: any) {
  //       console.error('Error:', error.message);
  //     }
  //   }

  //   getPosts();
  // }, []);
  // useEffect(() => {
  //   async function getPosts() {
  //     const response = await fetch('https://savemaxbc.com/graphql', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(queryAllPost),
  //     });

  //     const data = await response.json();
  //     // setPosts(data.data.posts.nodes);
  //     console.log(data);
  //   }

  //   getPosts();
  // }, []);
  return (
    <>
      <Head>
        <title>Latest Listings</title>
      </Head>

      <div className='container mx-auto lg:max-w-4xl'>
        <Header />
      </div>
      <main>
        <div className='mt-[350px] min-h-[15rem]'>
          <h1 className='mt-8 text-center text-6xl text-black'>
            Popular Listings
          </h1>

          <p className='mt-4 text-center text-2xl text-black'>
            See the latest listings
          </p>
        </div>
        <section className='container mx-auto lg:max-w-5xl'></section>
      </main>
      <Footer />
    </>
  );
}
