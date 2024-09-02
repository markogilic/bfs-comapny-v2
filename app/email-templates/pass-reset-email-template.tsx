import {
  Button,
  Html,
  Body,
  Img,
  Section,
  Text,
  Link,
  Tailwind,
} from '@react-email/components';
import { CSSProperties } from 'react';

interface PassresetEmailTemplateProps {
  urlLink: string;
  userName: string;
}

export default function PassResetEmailTemplate({
  urlLink,
  userName,
}: PassresetEmailTemplateProps) {
  const baseUrlImage = process.env.BASE_URL;

  return (
    <Html>
      <Body style={bodyStyle}>
        <Section style={sectionStyle}>
          <Img
            src="https://i.postimg.cc/65ZLHBq1/pass-reset.png"
            alt="reset_pass_image"
            width={125}
            height={125}
            style={logo}
          />
          <Text style={heading}>Resetovanje Vaše Šifre</Text>
          <Text style={userText}>Poštovani/a: {userName} </Text>
          <Text style={infoText}>
            Primili smo zahtev za resetovanje vaše šifre za pristup vašem
            nalogu. Ako ste vi podneli ovaj zahtev, molimo vas da kliknete na
            donji link kako biste postavili novu šifru:
          </Text>
          <Link style={link} href={urlLink}>
            Link za resetovanje šifre
          </Link>
          <Text style={infoText}>
            Ovaj link će biti aktivan narednih 24 sata. Ako niste zatražili
            resetovanje šifre, molimo vas da ignorišete ovaj email. Vaš nalog će
            ostati siguran.
          </Text>
          <Text style={infoText}>
            Ukoliko imate bilo kakvih pitanja ili poteškoća, slobodno nas
            kontaktirajte na <span>info.bfscompany@gmail.com</span>
          </Text>
          <Text style={userText}>Hvala vam što koristite naše usluge.</Text>
          <Img
            src="https://lh3.googleusercontent.com/a/ACg8ocKxNC1SQ7KviK9MB6XW6I1V5N9WeChm6-EUQSlpP4DZGGPmirg=s288-c-no"
            width="96"
            height="96"
            alt="bfs comapny logo"
            style={logo}
          />
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
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.1)',
};

const logo: CSSProperties = {
  margin: '0 auto',
  display: 'block',
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
