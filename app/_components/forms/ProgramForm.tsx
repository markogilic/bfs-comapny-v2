'use client';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { clsx } from 'clsx';
import { BiLoaderCircle } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useState } from 'react';

type FormValues = {
  name: string;
  email: string;
  phone: number;
  acceptTerms: boolean;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Ime i prezime je obavezno polje'),
    email: yup
      .string()
      .email('Unesite validan email')
      .required('Email adresa je obavezno polje'),

    phone: yup
      .number()
      .required('Telefon je obavezno polje')
      .typeError('Broj telefona ne može sadržati slova')
      .positive('Broj telefona ne može biti negativan')
      .integer('Broj telefona ne može sadržati decimalne brojeve'),
    acceptTerms: yup
      .boolean()
      .required()
      .oneOf([true], 'Morate oznaciti ovo polje'),
  })
  .required();

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_PROGRAM_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ProgramForm = ({ programName }: { programName: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const SubmitData = (data: FormValues) => {
    const { name, email, phone, acceptTerms } = data;
    if (!acceptTerms) return;
    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      kursName: programName,
    };
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS not configured');
      return;
    }
    setIsSubmitting(true);
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        console.log('Email sent successfully');
        setIsSubmitting(false);
        reset();
        toast.success('Uspešno ste poslali prijavu');
      },
      (error) => {
        toast.error('Doslo je do greske prilikom slanja poruke');
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(SubmitData)}
      className="flex flex-col md:w-[540px] w-full gap-2 mt-6"
      noValidate
    >
      <div>
        <label
          htmlFor="name"
          className={errors.name ? 'text-red-500' : 'text-black'}
        >
          Ime i prezime:
        </label>
        <input
          {...register('name', { required: true })}
          type="text"
          name="name"
          id="name"
          className={clsx(
            'w-full mt-1 rounded-[4px] px-[10px] py-2  focus:outline-none border-[1px] border-black bg-card-bg transition-all ',
            errors.name && 'border-red-500'
          )}
          placeholder="Ime i prezime"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label
          htmlFor="email"
          className={errors.email ? 'text-red-500' : 'text-black'}
        >
          E-mail:
        </label>
        <input
          {...register('email', { required: true })}
          type="text"
          name="email"
          id="email"
          className={clsx(
            'w-full mt-1 rounded-[4px] px-[10px] py-2  focus:outline-none border-[1px] border-black bg-card-bg',
            errors.email ? 'bg-red-200' : 'bg-white'
          )}
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label
          htmlFor="phone"
          className={errors.phone ? 'text-red-500' : 'text-black'}
        >
          Broj telefona:
        </label>
        <input
          {...register('phone', { required: true })}
          type="phone"
          name="phone"
          id="phone"
          className={clsx(
            'w-full mt-1 rounded-[4px] px-[10px] py-2  focus:outline-none treansition-colors border-[1px] border-black bg-card-bg',
            errors.phone && 'border-red-500'
          )}
          placeholder="062245xxxx"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      <div className="mt-6">
        <div className="flex justify-center items-center gap-4">
          <input
            {...register('acceptTerms', { required: true })}
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            className="myChekbox"
          />
          <label htmlFor="acceptTerms">
            Slažem se sa prikupljanjem i upravljanjem mojim ličnim podacima u
            skladu sa Politikom privatnosti
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-red-500">Morate prihvatiti uslove</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-btn-primary hover:bg-btn-primary-hover font-semibold transition-colors text-white rounded-[4px] px-[10px] py-2 mt-8 disabled:bg-gray-400 disabled:cursor-not-allowed uppercase disabled:hover:bg-gray-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <BiLoaderCircle className="animate-spin inline-block mr-2 text-xl text-white" />
        ) : (
          'Pošalji'
        )}
      </button>
    </form>
  );
};

export default ProgramForm;
