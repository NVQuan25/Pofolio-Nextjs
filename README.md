# Devfolio

Devfolio is a portfolio website built using Next.js, Tailwind CSS, and Framer Motion. It allows developers to showcase their projects, skills, and blogs in a visually appealing manner.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contact Form Email (Resend)](#contact-form-email-resend)
- [Animations](#animations)
- [Components](#components)
- [Types](#types)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design using Tailwind CSS
- Smooth animations with Framer Motion
- Dark mode support
- Modular and reusable components
- Easy to customize
- Integrated contact form with Resend email API ✅

## Installation

To get started with Devfolio, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/devfolio.git
   cd devfolio
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Start the production server:**
   ```bash
   npm start
   ```

## Usage

The Devfolio project is structured to be intuitive and easy to navigate.
You can customize components, update project and skill data, and style the UI to match your personal branding.

## Contact Form Email (Resend)

This project uses [Resend](https://resend.com) to send emails from the contact form to your real inbox.

### Setup Instructions

1. **Install the Resend SDK:**

   ```bash
   npm install resend
   ```

2. **Create a Resend account:**
   - Sign up at [https://resend.com](https://resend.com)
   - Generate an API key from the dashboard
   - Use `onboarding@resend.dev` as the sender address for development

3. **Create the API route:**

   If you're using the App Router, create this file:

   ```typescript
   // filepath: src/app/api/contact/route.ts
   import { NextResponse } from "next/server";
   import { Resend } from "resend";

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request: Request) {
     try {
       const { name, email, message } = await request.json();

       await resend.emails.send({
         from: "Portfolio Contact <onboarding@resend.dev>",
         to: "vq.2509.2003@gmail.com",
         subject: `New message from ${name}`,
         html: `
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>
         `,
       });

       return NextResponse.json(
         { message: "Message sent successfully" },
         { status: 200 }
       );
     } catch (error: any) {
       return NextResponse.json(
         { message: "Failed to send message", error: error.message },
         { status: 500 }
       );
     }
   }
   ```

4. **Add your Resend API key to `.env.local`:**

   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

5. **Restart your development server:**
   ```bash
   npm run dev
   ```

Now, your contact form will send emails directly to: `vq.2509.2003@gmail.com`

## Animations

Devfolio uses Framer Motion for smooth component animations and page transitions.

## Components

All components are located in the `components/` directory and are fully reusable and customizable.

## Types

Type definitions can be found in `types/` for projects, skills, animations, and contact form data.

## Contributing

Contributions are welcome! Please fork this repository and open a pull request to suggest changes.

## License

This project is licensed under the MIT License.
