import emailjs from "emailjs-com";

export const sendEmail = (form) => {
  return emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};