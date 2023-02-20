import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { GetStaticProps } from 'next';
import { ISocial } from '../interfaces';
import { FC } from 'react';
import Socials from '../components/Socials';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

interface IHomeProps {
  socials: [ISocial];
}

const Home: FC<IHomeProps> = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Next.js Project</h1>
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
