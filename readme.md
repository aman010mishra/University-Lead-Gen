# University Landing Pages Platform
# LINK: https://university-lead-gen.onrender.com

## Overview

This is a multi-university landing page platform designed to showcase private universities in India. The application generates conversion-optimized landing pages for different educational institutions, each with its own branding, course information, placement statistics, and lead generation forms. Built with a modern full-stack architecture, it features dynamic content management, theming capabilities, and responsive design following educational platform best practices.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React with TypeScript**: Component-based UI using functional components and hooks
- **Vite**: Development server and build tool for fast hot module replacement
- **Wouter**: Lightweight client-side routing library for page navigation
- **TanStack Query (React Query)**: Server state management with automatic caching and background refetching

**UI Component System**
- **shadcn/ui**: Accessible component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Inter Font**: Modern typography system for headings and body text
- **Class Variance Authority (CVA)**: Type-safe component variant management

The frontend follows a theme-based approach where each university can have different color schemes (blue/green) while maintaining consistent spacing and layout patterns defined in the design guidelines.

**State Management Pattern**
- Server state managed through React Query with configurable cache invalidation
- Form state handled by React Hook Form with Zod validation
- UI state (modals, dropdowns) managed locally with React hooks

### Backend Architecture

**Server Framework**
- **Express.js**: REST API server with middleware-based request handling
- **TypeScript**: Type-safe backend development with shared types
- **Custom Vite Integration**: Development middleware for HMR during development, static serving in production

**API Design**
- RESTful endpoints following resource-based naming
- JSON request/response format
- Centralized error handling with appropriate HTTP status codes
- Request logging middleware for API monitoring

**Data Layer Pattern**
- **Storage Interface (IStorage)**: Abstraction layer separating business logic from data access
- Currently implemented with in-memory data store using hardcoded university objects
- Designed to easily swap to database-backed implementation
- Shared TypeScript types between frontend and backend via `/shared` directory

**Database Schema (Drizzle ORM)**
- **Leads Table**: Stores form submissions with validation
  - Full contact information (name, email, phone)
  - Course interest and intake year preferences
  - Consent tracking and university attribution
- PostgreSQL dialect configured via Drizzle Kit
- Schema defined with Drizzle Zod for runtime validation

The application is structured to use Drizzle ORM but currently operates without an active database connection. The schema is defined and ready for PostgreSQL provisioning.

### Key Architectural Decisions

**Monorepo Structure**
- `/client`: React frontend application
- `/server`: Express backend API
- `/shared`: Common TypeScript types and schemas
- Single build process produces both static assets and server bundle

**Type Safety Strategy**
- Shared schema definitions using Drizzle Zod
- Type inference from schemas eliminates duplication
- Path aliases (@/, @shared, @assets) for clean imports
- Strict TypeScript compilation settings

**Form Validation Architecture**
- **Zod Schemas**: Single source of truth for validation rules
- **React Hook Form**: Client-side form state and validation
- **Server-side Validation**: Re-validates using same Zod schemas
- Indian state dropdown and phone number validation patterns

**Responsive Design System**
- Mobile-first approach with Tailwind breakpoints (md, lg)
- Consistent spacing scale (4, 6, 8, 12, 16, 20)
- Custom elevation utilities (hover-elevate, active-elevate-2)
- Adaptive typography with fluid type scales

**Content Management Pattern**
- University data stored as typed objects in server/storage.ts
- Each university has complete configuration including:
  - Branding (name, logo, theme colors)
  - Statistics (placement rate, average package)
  - Courses with fee structures
  - Placement data with top recruiters
  - Facility information with images
  - Contact details and accreditations

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Unstyled, accessible component primitives (dialogs, dropdowns, forms)
- **Lucide React**: Icon library with consistent design language
- **Embla Carousel**: Touch-enabled carousel component

### Database & ORM
- **Drizzle ORM**: Type-safe SQL query builder and schema management
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

The application expects a `DATABASE_URL` environment variable for PostgreSQL connection, though the current implementation uses in-memory storage as a fallback pattern.

### Form Handling Stack
- **React Hook Form**: Performant form state management
- **@hookform/resolvers**: Bridge between React Hook Form and Zod
- **Zod**: Schema validation library with TypeScript inference

### Utility Libraries
- **clsx + tailwind-merge**: Conditional CSS class composition
- **date-fns**: Date formatting and manipulation
- **nanoid**: Unique ID generation for records

### Asset Management
Generated images stored in `/attached_assets/generated_images/` directory and served through Vite's static file handling. Images include hero banners, facility photos, and university-specific visuals.
