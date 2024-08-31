import {
  Button,
  Html,
  Body,
  Img,
  Section,
  Text,
  Link,
} from '@react-email/components';

import React, { CSSProperties } from 'react';

interface emailVerificationProps {
  urlLink: string;
  userName: string;
}

export default function EmailVerificationTemplate({
  urlLink,
  userName,
}: emailVerificationProps) {
  return (
    <Html>
      <Body style={bodyStyle}>
        <Section style={sectionStyle}>
          <Img
            style={logo}
            src="https://lh3.googleusercontent.com/a-/ALV-UjWKdyjyZmVbPeEGIzd2M7rOv89RUHYURj9VhxmyLEPwrzhUlaI=s64-p-k-rw-no"
            width="96"
            height="96"
            alt="bfs comapny logo"
          />
          <Text style={heading}>Potvrdite svoju email adresu</Text>
          <Text style={userText}>Poštovani/a: {userName} </Text>
          <Text style={infoText}>
            Hvala vam što ste se registrovali na našu platformu! Da biste
            završili proces registracije i potvrdili svoju email adresu, molimo
            vas da kliknete na sledeći link:
          </Text>
          <Link style={link} href={urlLink}>
            Link za verifikaciju
          </Link>
          <Text style={infoText}>
            Ako niste zatražili ovu registraciju, slobodno zanemarite ovaj
            email.
          </Text>
          <Text style={infoText}>
            Ukoliko imate bilo kakvih pitanja ili poteškoća, slobodno nas
            kontaktirajte na{' '}
            <span style={emialStyle}>info.bfscompany@gmail.com</span>
          </Text>
        </Section>
      </Body>
    </Html>
  );
}

const bodyStyle = {
  width: '100%',
  minHeight: '100vh',
};

const sectionStyle: CSSProperties = {
  maxWidth: '600px',
  margin: '0 atuo',
  padding: '48px 48px',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  // display: 'flex',
  // flexDirection: 'column',
  // gap: '1rem',
  // justifyContent: 'center',
  // alignItems: 'center',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.1)',
};

const logo: CSSProperties = {
  margin: '0 auto',
  display: 'block',
  marginBottom: '3rem',
};

const heading: CSSProperties = {
  fontSize: '2rem',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  marginBottom: '1rem',
};

const userText: CSSProperties = {
  fontSize: '1rem',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  marginBottom: '1rem',
  fontWeight: '600',
};

const infoText: CSSProperties = {
  fontSize: '1rem',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  marginBottom: '1rem',
  color: 'gray',
  fontWeight: '500',
};

const link: CSSProperties = {
  fontSize: '1rem',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  marginBottom: '1rem',
  width: 'fit-content',
  fontWeight: '500',
  textDecoration: 'none',
  margin: '0 auto',
  color: 'white',
  padding: '1rem',
  backgroundColor: '#222a35',
  borderRadius: '0.5rem',
  display: 'block',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
};

const emialStyle: CSSProperties = {
  fontWeight: '600',
};
