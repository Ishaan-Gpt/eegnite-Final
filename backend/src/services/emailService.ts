import { Resend } from 'resend';
import { ContactSubmission, NewsletterSignup } from '../types';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export class EmailService {
  private fromEmail: string;
  private adminEmail: string;

  constructor() {
    this.fromEmail = process.env.FROM_EMAIL || 'noreply@eegnite.com';
    this.adminEmail = process.env.ADMIN_EMAIL || 'admin@eegnite.com';
  }

  // Contact form notification to admin
  async sendContactNotification(submission: ContactSubmission): Promise<boolean> {
    try {
      const template = this.createContactNotificationTemplate(submission);
      
      await resend.emails.send({
        from: this.fromEmail,
        to: this.adminEmail,
        subject: template.subject,
        html: template.html,
        text: template.text,
        replyTo: submission.email,
      });

      console.log(`Contact notification sent for ${submission.email}`);
      return true;
    } catch (error) {
      console.error('Failed to send contact notification:', error);
      return false;
    }
  }

  // Welcome email to contact form submitter
  async sendContactConfirmation(submission: ContactSubmission): Promise<boolean> {
    try {
      const template = this.createContactConfirmationTemplate(submission);
      
      await resend.emails.send({
        from: this.fromEmail,
        to: submission.email,
        subject: template.subject,
        html: template.html,
        text: template.text,
      });

      console.log(`Contact confirmation sent to ${submission.email}`);
      return true;
    } catch (error) {
      console.error('Failed to send contact confirmation:', error);
      return false;
    }
  }

  // Newsletter welcome email
  async sendNewsletterWelcome(signup: NewsletterSignup): Promise<boolean> {
    try {
      const template = this.createNewsletterWelcomeTemplate(signup);
      
      await resend.emails.send({
        from: this.fromEmail,
        to: signup.email,
        subject: template.subject,
        html: template.html,
        text: template.text,
      });

      console.log(`Newsletter welcome sent to ${signup.email}`);
      return true;
    } catch (error) {
      console.error('Failed to send newsletter welcome:', error);
      return false;
    }
  }

  // Newsletter broadcast
  async sendNewsletterBroadcast(subscribers: NewsletterSignup[], subject: string, content: string): Promise<{ success: number; failed: number }> {
    let success = 0;
    let failed = 0;

    for (const subscriber of subscribers) {
      try {
        const template = this.createNewsletterBroadcastTemplate(subscriber, subject, content);
        
        await resend.emails.send({
          from: this.fromEmail,
          to: subscriber.email,
          subject: template.subject,
          html: template.html,
          text: template.text,
        });

        success++;
      } catch (error) {
        console.error(`Failed to send newsletter to ${subscriber.email}:`, error);
        failed++;
      }
    }

    console.log(`Newsletter broadcast completed: ${success} successful, ${failed} failed`);
    return { success, failed };
  }

  private createContactNotificationTemplate(submission: ContactSubmission): EmailTemplate {
    const subject = `New Contact Form Submission - ${submission.firstName} ${submission.lastName}`;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Contact Information</h3>
              <p><strong>Name:</strong> ${submission.firstName} ${submission.lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${submission.email}">${submission.email}</a></p>
              <p><strong>Company:</strong> ${submission.company || 'Not provided'}</p>
              <p><strong>Website:</strong> ${submission.website || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Project Details</h3>
              <p><strong>Service:</strong> ${submission.service}</p>
              <p><strong>Budget:</strong> ${submission.budget}</p>
              <p><strong>Newsletter Signup:</strong> ${submission.newsletter ? 'Yes' : 'No'}</p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Message</h3>
              <p style="white-space: pre-wrap;">${submission.message}</p>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        </body>
      </html>
    `;

    const text = `
New Contact Form Submission

Contact Information:
Name: ${submission.firstName} ${submission.lastName}
Email: ${submission.email}
Company: ${submission.company || 'Not provided'}
Website: ${submission.website || 'Not provided'}
Phone: ${submission.phone || 'Not provided'}

Project Details:
Service: ${submission.service}
Budget: ${submission.budget}
Newsletter Signup: ${submission.newsletter ? 'Yes' : 'No'}

Message:
${submission.message}

Submitted on: ${new Date().toLocaleString()}
    `;

    return { subject, html, text };
  }

  private createContactConfirmationTemplate(submission: ContactSubmission): EmailTemplate {
    const subject = `Thank you for contacting Eegnite Flow Growth Craft`;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Thank you for contacting us</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
            
            <p>Dear ${submission.firstName},</p>
            
            <p>Thank you for contacting Eegnite Flow Growth Craft. We've received your inquiry and our team will review it carefully.</p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>What happens next?</h3>
              <ul>
                <li>We'll review your project requirements within 24 hours</li>
                <li>Our team will prepare a customized proposal</li>
                <li>We'll schedule a consultation call to discuss your goals</li>
                <li>You'll receive our strategic recommendations</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our resources:</p>
            <ul>
              <li><a href="https://eegnite.com/resources">Free Growth Resources</a></li>
              <li><a href="https://eegnite.com/case-studies">Case Studies</a></li>
              <li><a href="https://eegnite.com/tools">Interactive Tools</a></li>
            </ul>
            
            <p>If you have any urgent questions, please don't hesitate to reply to this email.</p>
            
            <p>Best regards,<br>
            The Eegnite Team</p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #666; font-size: 12px;">
              This email was sent in response to your contact form submission. 
              If you didn't submit this form, please ignore this email.
            </p>
          </div>
        </body>
      </html>
    `;

    const text = `
Thank you for reaching out!

Dear ${submission.firstName},

Thank you for contacting Eegnite Flow Growth Craft. We've received your inquiry and our team will review it carefully.

What happens next?
- We'll review your project requirements within 24 hours
- Our team will prepare a customized proposal
- We'll schedule a consultation call to discuss your goals
- You'll receive our strategic recommendations

In the meantime, feel free to explore our resources:
- Free Growth Resources: https://eegnite.com/resources
- Case Studies: https://eegnite.com/case-studies
- Interactive Tools: https://eegnite.com/tools

If you have any urgent questions, please don't hesitate to reply to this email.

Best regards,
The Eegnite Team

---
This email was sent in response to your contact form submission. 
If you didn't submit this form, please ignore this email.
    `;

    return { subject, html, text };
  }

  private createNewsletterWelcomeTemplate(signup: NewsletterSignup): EmailTemplate {
    const subject = `Welcome to Eegnite Flow Growth Craft Newsletter!`;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to our newsletter</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb;">Welcome to the Growth Community! 🚀</h2>
            
            <p>Hi ${signup.firstName || 'there'},</p>
            
            <p>Thank you for subscribing to the Eegnite Flow Growth Craft newsletter! You're now part of an exclusive community of growth-minded professionals.</p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>What you'll receive:</h3>
              <ul>
                <li>Weekly growth strategies and insights</li>
                <li>Exclusive case studies and success stories</li>
                <li>Latest marketing trends and tools</li>
                <li>Early access to our resources and tools</li>
                <li>Special offers and discounts</li>
              </ul>
            </div>
            
            <p>Your first newsletter will arrive in the next few days. In the meantime, check out our latest resources:</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://eegnite.com/resources" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Explore Free Resources
              </a>
            </div>
            
            <p>If you have any questions or suggestions, just reply to this email!</p>
            
            <p>Happy growing!<br>
            The Eegnite Team</p>
          </div>
        </body>
      </html>
    `;

    const text = `
Welcome to the Growth Community! 🚀

Hi ${signup.firstName || 'there'},

Thank you for subscribing to the Eegnite Flow Growth Craft newsletter! You're now part of an exclusive community of growth-minded professionals.

What you'll receive:
- Weekly growth strategies and insights
- Exclusive case studies and success stories
- Latest marketing trends and tools
- Early access to our resources and tools
- Special offers and discounts

Your first newsletter will arrive in the next few days. In the meantime, check out our latest resources: https://eegnite.com/resources

If you have any questions or suggestions, just reply to this email!

Happy growing!
The Eegnite Team
    `;

    return { subject, html, text };
  }

  private createNewsletterBroadcastTemplate(subscriber: NewsletterSignup, subject: string, content: string): EmailTemplate {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${subject}</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0;">Eegnite Flow</h1>
              <p style="color: #666; margin: 5px 0;">Growth Craft Newsletter</p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              ${content}
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <div style="text-align: center; color: #666; font-size: 12px;">
              <p>You're receiving this email because you subscribed to our newsletter.</p>
              <p>
                <a href="[UNSUBSCRIBE_URL]">Unsubscribe</a> | 
                <a href="[PREFERENCES_URL]">Update Preferences</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
Eegnite Flow Growth Craft Newsletter

${content}

---
You're receiving this email because you subscribed to our newsletter.
To unsubscribe, visit: [UNSUBSCRIBE_URL]
To update preferences, visit: [PREFERENCES_URL]
    `;

    return { subject, html, text };
  }
}

export const emailService = new EmailService(); 