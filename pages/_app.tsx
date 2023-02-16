import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';
// import Image from 'next/image';
// import youtubeImg from '../public/youtube.png';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
      {/* <Image
        className='youtubeImg'
        src={youtubeImg}
        width={600}
        height={350}
        alt='preview'
        placeholder='blur'
      /> */}
    </>
  );
};

export default App;
