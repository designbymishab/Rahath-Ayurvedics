import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// You will need to add RESEND_API_KEY to your .env.local file
// Get your free API key at https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, name, phone, concern, message } = body;

        let emailContent = '';
        let subject = '';

        if (type === 'callback') {
            subject = 'New Call Back Request - Rahath Ayurvedic';
            emailContent = `
                <h2>New Call Back Request</h2>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p>Received on: ${new Date().toLocaleString()}</p>
            `;
        } else {
            subject = `New Enquiry from ${name}`;
            emailContent = `
                <h2>New Website Enquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Concern:</strong> ${concern}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p>Received on: ${new Date().toLocaleString()}</p>
            `;
        }

        const data = await resend.emails.send({
            from: 'Rahath Ayurvedic <onboarding@resend.dev>',
            to: ['rahathayurvedic@gmail.com'],
            subject: subject,
            html: emailContent,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}
