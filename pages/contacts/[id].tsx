import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { IContact } from '../../interfaces';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

interface IContactProps {
  contact: IContact;
}

const Contact: FC<IContactProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
