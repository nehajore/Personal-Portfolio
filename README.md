# Neha Sunil Jore - Personal Portfolio

A modern, responsive personal portfolio website built with React.js showcasing skills, projects, education, and certifications.

## Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Navigation**: Fixed navbar with smooth scrolling and mobile hamburger menu
- **Home Section**: Professional introduction with profile image
- **About Me**: Education timeline from 10th grade to degree
- **Skills**: Interactive skill cards with progress bars and icons
- **Projects**: Project showcase with GitHub and live demo links
- **Certifications**: Professional certifications display
- **Contact Form**: Functional contact form with validation

## Technologies Used

- React.js
- React Router DOM
- React Icons
- CSS3 with modern features (Grid, Flexbox, Gradients)
- Responsive Design

## Installation & Setup

1. **Clone or download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css
│   ├── Home.js & Home.css
│   ├── AboutMe.js & AboutMe.css
│   ├── Skills.js & Skills.css
│   ├── Projects.js & Projects.css
│   ├── Certifications.js & Certifications.css
│   └── Contact.js & Contact.css
├── App.js & App.css
├── index.js & index.css
└── package.json
```

## Customization

### Personal Information
- Update personal details in each component
- Replace placeholder image with actual profile photo
- Modify education details in `AboutMe.js`
- Update project links and descriptions in `Projects.js`
- Add/remove certifications in `Certifications.js`

### Styling
- Modify colors in CSS files (primary color: #4A90E2)
- Adjust spacing and layouts as needed
- Update fonts and typography

### Contact Form
- Integrate with email service (EmailJS, Formspree, etc.)
- Add form validation
- Customize form fields

## Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Neha Sunil Jore**
- Email: neha.jore@email.com
- LinkedIn: [linkedin.com/in/neha-jore](https://linkedin.com/in/neha-jore)
- GitHub: [github.com/neha-jore](https://github.com/neha-jore)
