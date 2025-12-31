import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend('re_ckdw2NjR_GqA69Z7EtRAFzvQphHCbXG23');

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { type, data } = body;

        if (type === 'contact') {
            // Contact form submission email
            const { name, company, email, phone, budget, website, howDidYouFind, interests } = data;

            const emailHtml = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #FF6105 0%, #FF8040 100%); padding: 30px; border-radius: 15px 15px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">🚀 New Contact Form Submission</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">EEGNITE Website</p>
                    </div>
                    
                    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 15px 15px;">
                        <h2 style="color: #333; border-bottom: 2px solid #FF6105; padding-bottom: 10px;">Contact Details</h2>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666; width: 140px;">Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${name || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Company</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${company || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}" style="color: #FF6105;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Phone</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;"><a href="tel:${phone}" style="color: #FF6105;">${phone}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Budget</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${budget || 'Not specified'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Website</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${website ? `<a href="${website}" style="color: #FF6105;">${website}</a>` : 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Found Us Via</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${howDidYouFind || 'Not specified'}</td>
                            </tr>
                        </table>
                        
                        ${interests && interests.length > 0 ? `
                            <h3 style="color: #333; margin-top: 25px;">Areas of Interest</h3>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${interests.map((i: string) => `<span style="background: #FF6105; color: white; padding: 6px 14px; border-radius: 20px; font-size: 13px;">${i}</span>`).join('')}
                            </div>
                        ` : ''}
                        
                        <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 10px; border-left: 4px solid #FF6105;">
                            <p style="margin: 0; color: #666; font-size: 14px;">
                                <strong>Quick Actions:</strong><br>
                                <a href="mailto:${email}" style="color: #FF6105;">Reply to ${name || 'Lead'}</a> | 
                                <a href="tel:${phone}" style="color: #FF6105;">Call Now</a>
                            </p>
                        </div>
                    </div>
                    
                    <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
                        Sent from EEGNITE Website Contact Form
                    </p>
                </div>
            `;

            await resend.emails.send({
                from: 'EEGNITE Website <onboarding@resend.dev>',
                to: 'anish@eegnite.com',
                subject: `🚀 New Contact: ${name || email} - ${company || 'Individual'}`,
                html: emailHtml,
            });

        } else if (type === 'newsletter') {
            // Newsletter signup email
            const { email: subscriberEmail } = data;

            const emailHtml = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #FF6105 0%, #FF8040 100%); padding: 30px; border-radius: 15px 15px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">📧 New Newsletter Subscriber</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">EEGNITE Website</p>
                    </div>
                    
                    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 15px 15px; text-align: center;">
                        <div style="background: white; padding: 25px; border-radius: 10px; display: inline-block;">
                            <p style="color: #666; margin: 0 0 10px; font-size: 14px;">New subscriber email:</p>
                            <p style="color: #FF6105; font-size: 20px; font-weight: bold; margin: 0;">
                                <a href="mailto:${subscriberEmail}" style="color: #FF6105; text-decoration: none;">${subscriberEmail}</a>
                            </p>
                        </div>
                        
                        <p style="color: #999; font-size: 14px; margin-top: 20px;">
                            Add this subscriber to your email marketing list.
                        </p>
                    </div>
                    
                    <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
                        Sent from EEGNITE Website Newsletter Form
                    </p>
                </div>
            `;

            await resend.emails.send({
                from: 'EEGNITE Website <onboarding@resend.dev>',
                to: 'anish@eegnite.com',
                subject: `📧 New Newsletter Subscriber: ${subscriberEmail}`,
                html: emailHtml,
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
