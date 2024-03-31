import nodemailer from 'nodemailer';

export default async function handler(req, res){
    if (req.method !== 'POST'){
        res.status(405).json({error: 'Method Not Allowed'});
        return;
    }

    const {name, email, message} = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.MAIL_USER,
            replyTo: email,
            subject: `Contact Form Submission - ${name}`,
            text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            message: 'Email Sent'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed To Send Email'
        });
    }
}