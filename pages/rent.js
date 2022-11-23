import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import banner from '../public/banner2.jpg';

const containerStyles = css`
  width: 1260px;
  margin: auto;

  h1 {
    margin-top: 50px;
  }
`;

const listingStyles = css`
  margin-top: 50px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  gap: 40px 20px;
`;

const cardItemStyles = css`
  width: 300px;
  height: 350px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: auto;
  background-color: #fff;
  box-shadow: 3px 3px 25px #c2c2c2;

  :hover {
    box-shadow: 5px 5px 10px #c2c2c2;
  }

  p + p {
    margin: 20px;
    line-height: 5px;
  }
`;

const imgStyle = css`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const priceStyle = css`
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #4e6c50;
`;

const buttonStyle = css`
  width: 80px;
  height: 22px;
  border-radius: 15px;
  color: #f0ebce;
  background-color: #4e6c50;
  border: none;
  margin: 0 auto;
  display: block;
`;

export default function Rent(props) {
  return (
    <>
      <Head>
        <title>Houses and Appartments for Rent</title>
        <meta name="description" content="Find an appartment" />
      </Head>

      <main>
        <div css={containerStyles}>
          <h1> Offers for rent </h1>
          {/* <div css={listingStyles}>
            {props.listings.slice(0, 25).map((res) => {
              return (
                <div key={res.property_id} css={cardItemStyles}>
                  <Image
                    src={res.photo}
                    alt="appartment"
                    width="300"
                    height="200"
                    css={imgStyle}
                  />

                  <p css={priceStyle}>${res.price} </p>
                  <p>
                    {res.beds} bed {res.baths} baths {res.sqft} sqft
                  </p>

                  <p>{res.address}</p>
                </div>
              );
            })}
          </div> */}
        </div>
      </main>
    </>
  );
}

/* export async function getServerSideProps() {
  const fetch = await require('node-fetch');

  const url =
    'https://realty-in-us.p.rapidapi.com/properties/list-for-rent?state_code=NY&city=New%20York%20City&limit=16&offset=0&sort=photos';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  const listings = data.listings;

  return {
    props: { listings },
  };
} */
