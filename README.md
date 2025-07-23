# CIB - Campaign in a Box

A comprehensive Next.js platform for campaign management and organization with PostgreSQL database, Prisma ORM, NextAuth authentication, and a modular architecture.

## 🚀 Quick Deploy

Deploy this campaign management platform to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fustramooner%2Fcib&env=DATABASE_URL,NEXTAUTH_SECRET,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET&envDescription=Required%20environment%20variables%20for%20deployment&envLink=https%3A%2F%2Fgithub.com%2Fustramooner%2Fcib%23environment-variables&integration-ids=oac_neLUYBELgOFQO5zZvDeTKmkN)

> **✨ This deployment automatically provisions a PostgreSQL database via Neon and sets up all required environment variables during the deployment process.**

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Authentication**: NextAuth.js with multiple providers (Google, Email)
- **Database**: PostgreSQL with Prisma ORM
- **Docker**: Complete development environment with docker-compose
- **Modular Architecture**: Organized modules for different campaign functions
- **Responsive Design**: Clean, modern UI with mobile-first approach

## 📋 Modules

### Core Modules
- **Dashboard**: Central hub with statistics and quick actions
- **Volunteers**: Volunteer management and coordination
- **Admin**: System administration and user management
- **Data**: Data import/export and analytics
- **Tools**: Campaign tools and utilities
- **NationBuilder**: Integration with NationBuilder API
- **SysAdmin**: System monitoring and infrastructure management

## 🔧 Layout System

The project includes a comprehensive layout system with reusable components:

### Layout Components
- `BaseLayout`: Main layout wrapper with navigation, breadcrumbs, and flexible content areas
- `PageHeader`: Reusable page headers with titles, descriptions, and actions
- `Breadcrumbs`: Navigation breadcrumbs with home link
- `ContentSection`: Flexible content containers with optional titles and styling
- `GridLayout`: Responsive grid system for organizing content
- `Sidebar`: Flexible sidebar component for navigation and content
- `ModuleNavigation`: Main application navigation

### Usage Example
```tsx
import { BaseLayout } from '@/components/layout/BaseLayout'
import { ContentSection } from '@/components/layout/ContentSection'
import { GridLayout } from '@/components/layout/GridLayout'

export default function MyPage() {
  return (
    <BaseLayout
      title="Page Title"
      description="Page description"
      breadcrumbs={[{ name: 'Page', current: true }]}
      sidebar={<Sidebar items={sidebarItems} />}
    >
      <GridLayout columns={3} gap="md">
        <ContentSection title="Section 1">
          Content here
        </ContentSection>
      </GridLayout>
    </BaseLayout>
  )
}
```

## 🐳 Docker Setup

The project includes a complete docker-compose setup with:

- **PostgreSQL 15**: Main database
- **Prisma Studio**: Database management interface

### Quick Start with Docker

1. **Clone and setup**:
```bash
git clone <your-repo>
cd cib
cp .env.example .env.local
# Edit .env.local with your configuration
```

2. **Install dependencies**:
```bash
npm install --legacy-peer-deps
```

3. **Start services**:
```bash
npm run docker:up
```

4. **Start development server**:
```bash
npm run dev
```

### Available Services
- **Application**: http://localhost:3000
- **Prisma Studio**: run `npm run db:studio`
- **Database**: localhost:5432

## 🔐 Authentication

NextAuth.js is configured with:
- Google OAuth provider
- Email provider (magic links)
- JWT sessions
- PostgreSQL database with Prisma ORM

### Setup OAuth
1. Create Google OAuth credentials
2. Add to `.env.local`:
```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 📊 Database Schema

The PostgreSQL database includes tables for:
- `profiles`: User profiles with roles and authentication
- `campaigns`: Campaign management
- `volunteers`: Volunteer information and skills

## 🔧 Environment Variables

Key environment variables (see `.env.example`):

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/cib?schema=public"

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# External APIs
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NATIONBUILDER_SLUG=your_nation_slug
NATIONBUILDER_TOKEN=your_nationbuilder_token
```

### Deployment Configuration

When deploying to Vercel, the deployment process will:
1. **Automatically provision a PostgreSQL database** via Neon integration
2. **Set the `DATABASE_URL`** environment variable automatically
3. **Prompt you to configure** the remaining environment variables

#### Required Environment Variables
- `DATABASE_URL`: ✅ **Automatically set** by Neon integration
- `NEXTAUTH_SECRET`: A random secret for JWT encryption (generate with `openssl rand -base64 32`)

#### Required for Authentication
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret

#### Optional Integrations
- `NATIONBUILDER_SLUG`: Your NationBuilder nation slug
- `NATIONBUILDER_TOKEN`: NationBuilder API token

## 📝 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Docker commands
npm run docker:up    # Start all services
npm run docker:down  # Stop all services

# Database commands
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Create and run migrations
npm run db:studio    # Open Prisma Studio
```

### Project Structure

```
src/
├── app/
│   ├── (modules)/           # Module pages
│   │   ├── admin/
│   │   ├── volunteers/
│   │   ├── data/
│   │   ├── tools/
│   │   ├── sysadmin/
│   │   └── nationbuilder/
│   ├── api/auth/           # NextAuth API routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/             # Layout components
│   ├── dashboard/          # Dashboard components
│   └── providers/          # Context providers
└── lib/
    ├── auth/              # Authentication config
    └── prisma/            # Database schema and migrations
```

## 🎨 Styling

- **Tailwind CSS 4**: Modern utility-first CSS framework
- **Headless UI**: Unstyled, accessible UI components
- **Heroicons**: Beautiful SVG icons
- **Custom Components**: Consistent design system

## 🚦 Getting Started

1. **Environment Setup**:
   ```bash
   cp .env.example .env
   # Configure your environment variables
   ```

2. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start Development**:
   ```bash
   npm run docker:up  # Start backend services
   npm run dev        # Start Next.js dev server
   ```

4. **Access the Application**:
   - Main app: http://localhost:3000
   - Database admin: run `npm run db:studio`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for campaign organizations and political movements.
