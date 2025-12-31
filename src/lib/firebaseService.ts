import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Types for form submissions
export interface ContactFormData {
    name: string;
    company: string;
    email: string;
    phone: string;
    budget: string;
    website: string;
    howDidYouFind: string;
    interests: string[];
}

export interface NewsletterData {
    email: string;
}

// Send email notification
async function sendEmailNotification(type: 'contact' | 'newsletter', data: ContactFormData | NewsletterData) {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type, data }),
        });

        if (!response.ok) {
            console.error('Email notification failed');
        }
    } catch (error) {
        console.error('Failed to send email notification:', error);
        // Don't throw - email failure shouldn't break form submission
    }
}

// Submit contact form to Firestore
export const submitContactForm = async (formData: ContactFormData) => {
    try {
        const docRef = await addDoc(collection(db, 'contact_submissions'), {
            ...formData,
            createdAt: serverTimestamp(),
            status: 'new',
            source: 'website_contact_form'
        });
        console.log('Contact form submitted with ID:', docRef.id);

        // Send email notification (non-blocking)
        sendEmailNotification('contact', formData);

        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
};

// Submit newsletter signup to Firestore
export const submitNewsletter = async (data: NewsletterData) => {
    try {
        const docRef = await addDoc(collection(db, 'newsletter_signups'), {
            ...data,
            createdAt: serverTimestamp(),
            status: 'active',
            source: 'website_footer'
        });
        console.log('Newsletter signup submitted with ID:', docRef.id);

        // Send email notification (non-blocking)
        sendEmailNotification('newsletter', data);

        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Error submitting newsletter:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
};
