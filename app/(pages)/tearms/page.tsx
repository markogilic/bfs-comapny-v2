import React from 'react';
import logoImage from '@/public/des/BFS-logo.svg';
import Image from 'next/image';
const TearmsOfServices = () => {
  return (
    <div className="mt-[61px]  md:py-[96px] flex flex-col gap-4 text-xl max-w-[768px] mx-auto">
      <div className="mb-10 flex justify-center items-center gap-4 ">
        <h1 className="text-4xl font-semibold text-center ">
          POLITIKA PRIVATNOSTI
        </h1>
        <Image src={logoImage} alt="logo image bfs Company" height={46} />
      </div>

      <p>
        BFS Company brine o zaštiti svih informacija i podataka koje sakuplja u
        skladu sa pozitivnim propisima Republike Srbije. BFS Company je svestan
        poverenja koje nam ukazujete time što nam poveravate Vaše lične podatke
        i dozvoljavate njihovu obradu. Ovom Politikom privatnosti upoznaćemo vas
        sa namenom i osnovom obrade ličnih podataka od strane BFS Company kao i
        Vašim pravima u toj oblasti.
      </p>
      <p>
        Rukovalac podacima o ličnosti koji se obrađuju u skladu sa ovom
        Politikom privatnosti je BFS Company. Lice za zaštitu podataka o
        ličnosti dostupno je na elektronskoj adresi{' '}
        <span className="text-btn-primary">office@bfscompany.rs</span>
      </p>
      <p>
        Korisnici sajta BFS Company se posredstvom ove stranice mogu informisati
        o svrsi obrade podataka, te nastavljanjem korišćenja sajta prihvataju da
        se prikupljene informacije i podaci koriste u skladu sa ovom Politikom
        privatnosti.
      </p>
      <p>
        BFS Company prikuplja samo neophodne podatke, a sve u svrhu pružanja
        usluge. Politika privatnosti daje više informacija o tome na koji način
        se može postupati sa prikupljenim podacima o Vama.
      </p>
      <p>
        Vaša poseta sajtu BFS Company daje nam prava za prikupljanje infomacija
        koje nam šaljete zavisno od forme koju popunjavate, a to su podaci koje
        uključuju ime, prezime, broj telefona, e-mail adresu, naziv firme, kao i
        druge informacije i podatke koje možete ostaviti na sajtu. Poslovanje
        kompanije BFS Company u odredjenom segmentu zavisi od korišćenja
        podataka o ličnosti. Ovo nam omogućava efikasnu interakciju sa našim
        klijentima, kontaktiranje u vezi usluga koje interesuje naše klijente i
        za koje su se prijavili, kao i obaveštavanje o novim uslugama.
      </p>
      <p>
        Sve prikupljene informacije koristimo u svrhu obrade Vašeg zahteva. Svi
        podaci su pod standardnom zaštitom od neovlašćenog pristupa. Od
        korisnika se može zatražiti naknadna provera podataka kako bi se zahtev
        upotpunio. U svakom trenutku korisnik može tražiti da se prikupljeni
        podaci izmene, ili u potpunosti izbrišu iz evidencije.
      </p>
      <p>
        BFS Company koristi sve podatke isključivo u svrhe kontaktiranja
        korisnika i održavanja kontakta dok god to želite, kao i slanja
        obaveštenja o novim programima. U svakom trenutku možete se odjaviti sa
        ove usluge slanjem zahteva na{' '}
        <span className="text-btn-primary">office@bfscomany.rs</span>. BFS
        Company nijednu informaciju ne razmenjuje sa trećim licima. Ukoliko bude
        potrebe za tim, to će biti učinjeno uz prethodnu saglasnost korisnika.
      </p>
      <p>
        Obradjujemo i održavamo podatke o ličnosti isključivo u legitimne
        poslovne svrhe i transparentni smo u smislu toga kada i kako
        prikupljamo, koristimo ili delimo podatke o ličnosti. Podatke o ličnosti
        obradjujemo samo u meri u kojoj je to neophodno za ostvarenje konkretne
        svrhe obrade i čuvamo ih samo onoliko dugo koliko je to zaista potrebno.
        Pri postizanju svojih poslovnih ciljeva, nastojimo da koristimo podatke
        o klijentima isključivo za dobrobit klijenata.
      </p>
      <p>
        BFS Company može povremeno objavljivati statističke podatke o sajtu, kao
        što je broj posetilaca sajta ili broj realizovanih programa preko sajta,
        ali bez objavljivanja bilo kakvih podataka o pojedincima.
      </p>
      <p>
        Politika privatnosti se može povremeno menjati, a svaka izmena je važeća
        nakon postavljanja na sajt. Iako ćemo Vas obavestiti o svim važnim
        promenama ove Politike pre nego što promene stupe na snagu,
        preporučujemo vam da periodično pregledate Politiku privatnosti.
        Korisnik koji nastavi da koristi sajt i usluge BFS Company nakon
        postavljanja nove verzije Politike na sajt, podrazumeva se da je istu
        prihvatio kao važeću. Ako imate bilo kakvih pitanja u vezi sa ovom
        Politikom privatnosti ili našim tretmanom informacija koje nam dajete,
        pišite nam putem e-pošte na{' '}
        <span className="text-btn-primary">office@bfscomany.rs</span>.
      </p>
    </div>
  );
};

export default TearmsOfServices;
