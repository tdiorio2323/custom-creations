# Custom Creations

This is a Next.js project for a business called "Custom Creations", which provides auto body repair, ceramic coating, and PPF services in Staten Island, NY.

## Technologies

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** Custom components built with React.
*   **Testing:** [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (version specified in `.nvmrc`)
*   [pnpm](https://pnpm.io/)

### Installation

1.  Install dependencies:
    ```bash
    pnpm install
    ```

2.  Set up environment variables:
    *   Copy `.env.example` to `.env.local` and fill in the required values.

### Running the Development Server

```bash
pnpm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Configuration

*   **Business Information:** Update the business name, phone number, email, address, and social media links in `lib/seo.ts`.
*   **Images:** Add portfolio images to the `public/images/portfolio` directory.
*   **SEO:** The main layout for the site is in `app/(site)/layout.tsx`. This file includes the main schema.org markup for the business.

## Building and Deployment

### Building

To create a production-ready build, run:

```bash
pnpm run build
```

### Deployment

The project is set up for deployment on [Vercel](https://vercel.com/). Connect the repository to a Vercel project, set the environment variables, and deploy.

## Testing

### Unit and Integration Tests

To run the tests, use:

```bash
pnpm test
```

To run tests in CI mode:

```bash
pnpm test:ci
```

## Project Structure

*   `app/`: Contains the application's pages and layouts. The main site layout is in `app/(site)/layout.tsx`.
*   `app/api/`: Contains the API routes for the application. For example, `app/api/contact/route.ts` handles the contact form submission, and `app/api/estimate/route.ts` handles the estimate form submission.
*   `components/`: Contains reusable React components.
*   `content/`: Contains content for the site, such as FAQs and testimonials.
*   `lib/`: Contains utility functions, schemas, and hooks. The `lib/seo.ts` file is particularly important for configuring the site's identity.
*   `public/`: Contains static assets, such as images and fonts.
*   `scripts/`: Contains various scripts for tasks like image compression and sitemap generation.
*   `styles/`: Contains global styles.

## Development Conventions

*   **Styling:** Use Tailwind CSS for styling.
*   **Components:** Create reusable components in the `components/` directory.
*   **Testing:** Write tests for new components and features.