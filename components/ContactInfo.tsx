import { FC } from 'react';
import { IContact } from '../interfaces';

interface ContactInfoProps {
  contact: IContact;
}

const ContactInfo: FC<ContactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <h3>Empty contact</h3>;
  }

  return (
    <>
      <h3>{name}</h3>
      <div>
        <strong>Email:</strong>
        {email}
        <br />
        <strong>Address:</strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
