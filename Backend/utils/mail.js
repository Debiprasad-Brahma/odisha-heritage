import Mailgen from "mailgen"
import nodemailer from "nodemailer"

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Odisha Heritage Explorer",
      link: "https://odishaheritage.com",
    },
  })

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
  const emailHtml = mailGenerator.generate(options.mailgenContent)

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  })

  //* From whom
  const mail = {
    from: "mail.odishaheritageexplorer@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  }

  try {
    await transporter.sendMail(mail)
  } catch (error) {
    console.error(
      "Email Service failed siliently. Make sure you have provided your MAILTRAP credentials in the .env file",
    )
    console.error(error)
  }
}

//* Email verification
const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! we'are excited to have you on board",
      action: {
        instruction: "To verify your email please click on the following button",
        button: {
          color: "#1aae5aff",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro: "Need help, or have question? just replay to this email, we would love to help",
    },
  }
}

//* Forgot password
const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of your account",
      action: {
        instruction: "To reset your password click on the following button or link",
        button: {
          color: "#c04dd7ff",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro: "Need help, or have question? just replay to this email, we would love to help",
    },
  }
}

export {emailVerificationMailgenContent, forgotPasswordMailgenContent, sendEmail}
