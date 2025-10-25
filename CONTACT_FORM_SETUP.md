# Contact Form Setup Guide

## Current Status
The contact form is now set up to send emails using EmailJS, but you need to configure it with your email service.

## What happens when someone fills the form:
- **Before**: Messages only showed an alert and went nowhere
- **Now**: Messages will be sent directly to your email address

## Setup Instructions:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy your Template ID** (you'll need this)

### 4. Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key**

### 5. Update Your Code
In `src/components/Contact.js`, replace these lines:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
```

### 6. Update Email Address
Change this line to your actual email:
```javascript
to_email: 'neha.jore@email.com' // Your email address
```

## Alternative: Simple Formspree Setup
If EmailJS seems complex, you can use Formspree instead:

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up and create a new form
3. Get your form endpoint URL
4. Replace the handleSubmit function with:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('YOUR_FORMSPREE_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Features Added:
- ✅ Real email sending capability
- ✅ Loading state ("Sending..." button)
- ✅ Success/error messages
- ✅ Form validation
- ✅ Disabled form during submission
- ✅ Professional status messages

## Testing:
1. Fill out the form with test data
2. Submit the form
3. Check your email inbox
4. You should receive the message!

The form will now actually send messages to your email instead of just showing an alert!
