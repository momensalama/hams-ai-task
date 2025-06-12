# Sales Dashboard

A modern, responsive sales dashboard built with Next.js, Tailwind CSS, and Recharts. This project demonstrates the implementation of a clean and intuitive user interface for displaying sales data and analytics.

## Features

- 🔐 Login page with modern UI (mock authentication)
- 📊 Interactive dashboard with real-time data visualization
- 📈 Monthly revenue chart using Recharts
- 📋 Top 5 products performance table
- 💰 Total sales overview with growth indicators
- 📝 Recent transactions table with status indicators
- 📱 Fully responsive design
- ⚡ Server-side rendering (SSR) enabled
- 🎨 Modern UI with Tailwind CSS
- 🔍 TypeScript for type safety

## Live Demo

[View Live Demo](https://sales-dashboard-demo.vercel.app)

> Note: The demo uses mock data and doesn't include actual authentication.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework with SSR
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Recharts](https://recharts.org/) - Composable charting library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vercel](https://vercel.com) - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/momensalama/sales-dashboard-task.git
cd sales-dashboard-task
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
sales-dashboard/
├── app/
│   ├── components/
│   │   ├── RevenueChart.tsx
│   │   ├── SalesOverview.tsx
│   │   ├── TopProducts.tsx
│   │   └── RecentTransactions.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── dashboard/
│   │   └── page.tsx
│   └── page.tsx
├── public/
├── package.json
└── README.md
```

## Features in Detail

### Login Page

- Clean and modern authentication UI
- Form validation
- Loading state handling
- Responsive design

### Dashboard

- Server-side rendered for optimal performance
- Real-time data visualization
- Interactive charts with tooltips
- Responsive tables with sorting capabilities
- Status indicators for transactions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/en-US/)
