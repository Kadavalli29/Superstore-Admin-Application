# SuperStore Admin Dashboard

A modern, feature-rich admin dashboard built with Next.js 14 for superstore management. This professional dashboard includes 7+ modules with beautiful UI/UX design.

## 🚀 Features

### 📊 Modules Included

1. **Dashboard** - Overview with key metrics and statistics
2. **Sales Analytics** - Detailed sales tracking and profit analysis
3. **Inventory Management** - Stock monitoring and low stock alerts
4. **Product Management** - Complete product catalog with filtering
5. **Order Management** - Track online and in-store orders
6. **Employee Management** - Workforce tracking and performance metrics
7. **Advanced Analytics** - AI-powered insights and predictions

### ✨ Key Highlights

- 🎨 Modern, attractive UI with gradient effects and animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔐 Admin login authentication
- 📈 Real-time statistics and charts
- 🎯 Interactive data visualizations
- ⚡ Fast performance with Next.js 14
- 🎭 Beautiful animations and transitions
- 🌈 Professional color scheme with glassmorphism

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Fonts:** Rajdhani + Outfit (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 18 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

### Step 1: Navigate to Project Directory

Open VS Code and open the integrated terminal (`` Ctrl + ` `` or View → Terminal)

```bash
cd superstore-admin-dashboard
```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install:
- Next.js
- React & React DOM
- Tailwind CSS
- TypeScript
- And other dependencies

### Step 3: Run Development Server

Start the development server:

```bash
npm run dev
```

### Step 4: Open in Browser

The application will be running at:
```
http://localhost:3000
```

Open this URL in your browser to see the dashboard.

## 🔑 Login Credentials

Use these credentials to access the dashboard:

- **Username:** `admin`
- **Password:** `superstore2024`

## 📁 Project Structure

```
superstore-admin-dashboard/
├── app/
│   ├── dashboard/         # Dashboard page
│   ├── sales/            # Sales analytics page
│   ├── inventory/        # Inventory management page
│   ├── products/         # Product management page
│   ├── orders/           # Order management page
│   ├── employees/        # Employee management page
│   ├── analytics/        # Advanced analytics page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Login page
├── components/
│   └── Sidebar.tsx       # Sidebar navigation
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## 🎨 Available Pages

1. **/** - Login page with authentication
2. **/dashboard** - Main dashboard with overview
3. **/sales** - Sales analytics and profit tracking
4. **/inventory** - Inventory management with alerts
5. **/products** - Product catalog management
6. **/orders** - Order tracking and management
7. **/employees** - Employee directory and performance
8. **/analytics** - Advanced analytics and predictions

## 💡 Features by Module

### Dashboard
- Today's sales summary
- Total orders count
- Active products
- Low stock alerts
- Recent orders list
- Top selling products
- Quick action buttons

### Sales Analytics
- Daily/weekly/monthly sales
- Sales by category
- Profit margin analysis
- Peak business hours
- Revenue trends

### Inventory Management
- Total inventory value
- Low stock alerts
- Stock by category
- Recent activity log
- Reorder recommendations

### Products
- Product listing with search
- Category filtering
- Stock status tracking
- Best sellers section
- Product ratings
- Price management

### Orders
- Order status tracking
- Online vs in-store orders
- Payment status
- Order timeline
- Cancellation rate
- Export functionality

### Employees
- Employee directory
- Department distribution
- Salary overview
- Performance tracking
- Top performers
- Leave management

### Analytics
- Revenue growth trends
- Customer insights
- AI-powered predictions
- Category performance
- Peak hours heatmap
- Sales forecasting

## 🎯 Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #0F172A;
  --secondary: #3B82F6;
  --accent: #F59E0B;
  /* ... more colors */
}
```

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add `page.tsx` file
3. Import Sidebar component
4. Add route to Sidebar navigation in `components/Sidebar.tsx`

### Modifying Data

All data is currently mock data stored in each page component. To connect to a real backend:

1. Replace the mock data arrays with API calls
2. Use `fetch` or libraries like `axios`
3. Add loading states
4. Handle errors appropriately

## 🚀 Building for Production

To create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### Module Not Found

If you get module errors, try:

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### TypeScript Errors

If you encounter TypeScript errors:

```bash
npm run build
```

This will show detailed error messages.

## 📝 Future Enhancements

- Real-time notifications
- Data export (Excel/PDF)
- Advanced filtering options
- Multi-language support
- Dark/Light theme toggle
- Mobile app version
- Real backend integration
- User roles and permissions

## 🤝 Support

For any issues or questions:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+
4. Clear browser cache and restart server

## 📄 License

This project is created for educational and demonstration purposes.

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Developed with ❤️ for your internship project**

Happy Coding! 🚀
