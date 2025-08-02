import { ContactForm } from '@/components/ContactForm';
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | EEGNITE</title>
        <meta name="description" content="Get in touch with EEGNITE for your digital marketing and growth needs." />
        <meta property="og:title" content="Contact Us | EEGNITE" />
        <meta property="og:description" content="Get in touch with EEGNITE for your digital marketing and growth needs." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen pt-20">
        <ContactForm 
          heading="Let's Build Something Amazing Together"
          onSuccess={() => {
            console.log('Contact form submitted successfully!');
          }}
        />
      </div>
    </>
  );
};

export default Contact;