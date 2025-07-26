# Multi-Step Sign In / Login Form

This project is a simple multi-step form built with HTML, CSS, and JavaScript. It features a sign-in form split into two steps and a separate login form, styled with a modern look using Google Fonts and CSS transitions.

## Features

- Multi-step sign-in form with required field validation before moving to the next step.
- Separate login form for existing users.
- Responsive and modern design with Poppins font and gradient backgrounds.
- Smooth transition between form steps.
- Form fields use HTML5 validation (`required` attributes).
- Custom styling for inputs, buttons, and error states.

## File Structure

- `index.html` - Main sign-in form with two-step process.
- `login.html` - Separate login form page.
- `style.css` - Styling for both forms, including animations and transitions.
- `script.js` - JavaScript logic to handle the multi-step navigation and form validation.

## How to Use

1. Open `index.html` in your browser to access the multi-step sign-in form.
2. Fill in the required fields in step 1 (name and surname).
3. Click the "submit" button to proceed to step 2 (email and password).
4. All fields are validated before allowing progression to the next step.
5. On step 2, fill out email and password then submit the form.
6. Alternatively, use the link to navigate to the login page (`login.html`).

## Validation

- All inputs use the `required` attribute for built-in HTML5 validation.
- The JavaScript checks validity before allowing the transition to step 2.

## Customization

- Fonts and colors can be customized by editing `style.css`.
- You can extend the form steps or add more validation logic in `script.js`.

## Dependencies

- Google Fonts: [Poppins](https://fonts.google.com/specimen/Poppins)

## Future Improvements

- Add animations for step transitions.
- Improve accessibility (ARIA roles, keyboard navigation).
- Implement server-side validation and form submission.
- Add password strength indicator.

---

Feel free to fork and customize this form to suit your needs!

---

## Author

Created by [gabriel08Mosc]

---

