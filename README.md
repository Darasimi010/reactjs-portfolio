# ReactJS Portfolio

This repository contains the source code for a personal portfolio, built using ReactJS.

## Overview

This portfolio showcases skills, projects, and experiences as a developer. It's designed to provide a clean and engaging interface for visitors to learn more about the work.

## Technologies Used

* **ReactJS:** The core library for building the user interface.
* **CSS:** For styling the application.
* **EmailJS:** For handling contact form submissions via email.
* **Git:** For version control.

## Features

* **Responsive Design:** Ensures the portfolio looks good on various devices.
* **Project Showcase:** Displays projects with descriptions and links.
* **Skills Section:** Details my technical proficiencies.
* **Contact Form:** Allows visitors to send an email directly through the site using EmailJS.
* **Theme Toggle:** Users can switch between light and dark modes

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Darasimi010/reactjs-portfolio.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd reactjs-portfolio
    ```

3.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```
4. **Configure EmailJS:**

    * Sign up at EmailJS and create a service, template, and public key.
    * Update the following fields in `Contact.jsx`:
        * service ID
        * template ID
        * public key
    * Ensure your template fields match the form input names (name, email, message).

5.  **Start the development server:**

    ```bash
    npm run dev
    ```

6.  Open your browser and navigate to `http://localhost:5173`.

## Deployment

This portfolio is deployed on Netlify. You can view it live at: https://reactportfolio-project.netlify.app/

## Author

* Darasimi010 - https://github.com/Darasimi010

## Note:

If you want to use the contact form, make sure to set up your EmailJS credentials as described above. The site also supports light/dark theme toggling for a personalized experience.
