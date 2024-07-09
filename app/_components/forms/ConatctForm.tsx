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
  message: string;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Molimo vas unesite ime i prezime'),
    email: yup
      .string()
      .email('Unesite validan email')
      .required('Molimo vas unesite email'),
    message: yup.string().required('Molimo vas unesite poruku'),
  })
  .required();

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ConatctForm = () => {
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
    const { name, email, message } = data;
    const templateParams = {
      name: name,
      email: email,
      message: message,
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
        toast.success('Uspešno ste poslali poruku!');
      },
      (error) => {
        toast.error('Došlo je do greške prilikom slanja poruke');
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(SubmitData)}
      className="flex flex-col md:w-[540px] w-full gap-2"
      noValidate
    >
      <div>
        <label htmlFor="name" className="text-white">
          Ime i prezime:
        </label>
        <input
          {...register('name', { required: true })}
          type="text"
          name="name"
          id="name"
          className={clsx(
            'w-full mt-1 rounded-[4px] px-[10px] py-2  focus:outline-none treansition-colors',
            errors.name ? 'bg-red-200' : 'bg-white'
          )}
          placeholder="Ime i prezime"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-white">
          E-mail:
        </label>
        <input
          {...register('email', { required: true })}
          type="text"
          name="email"
          id="email"
          className={clsx(
            'w-full mt-1 rounded-[4px] px-[10px] py-2  focus:outline-none treansition-colors',
            errors.email ? 'bg-red-200' : 'bg-white'
          )}
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-white">
          Poruka:
        </label>
        <textarea
          {...register('message', { required: true })}
          rows={3}
          name="message"
          id="message"
          className={clsx(
            'w-full mt-1 rounded-[4px] px-[10px] py-2  focus:outline-none treansition-colors',
            errors.message ? 'bg-red-200' : 'bg-white'
          )}
          placeholder="Poruka"
        />
      </div>
      <button
        type="submit"
        className="bg-btn-primary hover:bg-btn-primary-hover font-semibold transition-colors text-white rounded-[4px] px-[10px] py-2 mt-8 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <BiLoaderCircle className="animate-spin inline-block mr-2 text-xl text-white" />
        ) : (
          'Pošalji poruku'
        )}
      </button>
    </form>
  );
};

export default ConatctForm;
