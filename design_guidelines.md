# Design Guidelines: University Landing Pages

## Design Approach
**Reference-Based Approach** inspired by modern educational platforms and premium university websites. Drawing from: Coursera's clarity, edX's professional aesthetic, and top-tier university sites (MIT, Stanford) with a focus on trust-building and conversion optimization.

**Core Principles:**
- Academic credibility meets modern web aesthetics
- Trust-first design with clear social proof
- Conversion-optimized CTAs without feeling pushy
- Rich information architecture that doesn't overwhelm

---

## Layout System

**Spacing Framework:**
Use Tailwind units: **4, 6, 8, 12, 16, 20** for consistent vertical rhythm
- Section padding: `py-16 md:py-20 lg:py-24`
- Component spacing: `gap-8 md:gap-12`
- Container: `max-w-7xl mx-auto px-6`

**Page Structure (6-8 Sections per Landing Page):**
1. Hero Section (with university image/campus)
2. Quick Stats Bar (Rankings, Placements, Students)
3. About/Overview Section
4. Courses Section (grid layout)
5. Placements & Outcomes
6. Campus & Facilities
7. Lead Form Section
8. Footer with Quick Links

---

## Typography

**Font Families:**
- Headings: `Inter` (weights: 700, 800) - modern, authoritative
- Body: `Inter` (weights: 400, 500) - excellent readability
- Accent/Stats: `Inter` (weight: 600)

**Type Scale:**
- Hero Headline: `text-5xl md:text-6xl lg:text-7xl font-bold`
- Section Headers: `text-3xl md:text-4xl font-bold`
- Subsection Titles: `text-2xl md:text-3xl font-bold`
- Card Titles: `text-xl md:text-2xl font-semibold`
- Body Text: `text-base md:text-lg`
- Small Text: `text-sm`

---

## Component Library

### Hero Section
- Full-width hero with university campus image (high-quality, professional photography showing modern facilities or iconic campus view)
- Overlay gradient for text readability
- University logo (top-left or center)
- Hero headline emphasizing unique value proposition
- Subheadline with key differentiator (rankings, placements)
- Two primary CTAs with blurred backgrounds: "Apply Now" + "Download Brochure"
- Trust indicators below CTAs: accreditation badges, rankings, student count

### Stats Bar
Immediately after hero: 4-column grid (stacks on mobile)
- Each stat: Large number + descriptive label
- Icons from Heroicons for visual interest
- Examples: "95% Placement", "50+ Recruiters", "NAAC A+ Grade", "₹12L Average Package"

### Course Cards (Grid Layout)
- 3-column grid desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Each card: Course icon, Course name, Duration, Brief description, "View Details" CTA
- Hover state: subtle lift effect (`hover:shadow-xl transition-shadow`)

### Placements Section
- 2-column layout: Stats column + Recruiter logos grid
- Top recruiter company logos (grid of 8-12 logos)
- Placement highlights with percentages
- "Check Course-wise Fees" CTA button (opens modal)

### Facilities Section
- Image gallery or card grid showcasing: Library, Labs, Hostels, Sports, Cafeteria
- Each facility card with image thumbnail, title, brief description

### Lead Form Section
**Full-width section with 2-column layout:**
- Left column: Form context (headline, benefits of applying, response time)
- Right column: Form itself

**Form Fields (single column, full-width inputs):**
- Full Name: `type="text" required`
- Email: `type="email" required`
- Phone: `type="tel" pattern="[0-9]{10}" required` with "(10-digit India)" helper text
- State: Dropdown with Indian states
- Course Interested: Dropdown (populated from API)
- Intake Year: Dropdown (2024, 2025, 2026)
- Consent Checkbox: Clear label with privacy policy link
- Submit Button: Prominent, full-width on mobile

**Form Styling:**
- Input fields: `rounded-lg border-2 p-4 text-base`
- Labels: `text-sm font-medium mb-2`
- Success message: Green banner with checkmark icon
- Error message: Red banner with error icon
- Loading state: Disabled button with spinner

### Fee Modal
**Modal triggered by "Check Course-wise Fees" button:**
- Centered modal with backdrop blur
- Header: "Course-wise Fee Structure"
- Close button (X) top-right
- Table layout: Course Name | Duration | Total Fees | Per Semester
- Data fetched from JSON API
- Responsive: scrollable on mobile
- Footer: CTA to "Apply Now" or "Download Detailed Brochure"

### Footer
**Multi-column footer:**
- Column 1: University logo, brief tagline, social media icons
- Column 2: Quick Links (About, Courses, Admissions, Contact)
- Column 3: Contact Information (Address, Phone, Email)
- Column 4: Newsletter signup (optional)
- Bottom bar: Copyright, Privacy Policy, Terms

---

## Images

**Required Images:**
1. **Hero Image:** Modern campus building or iconic university landmark - wide-angle, professional photography, students in frame (subtle). Image should convey prestige and modernity. Dimensions: 1920x1080 minimum
2. **Facilities Images:** 5-6 images showing Library, Computer Labs, Sports Complex, Hostel, Auditorium. Square format (600x600) for uniformity
3. **Recruiter Logos:** 10-12 company logos in grayscale or branded colors. SVG format preferred
4. **Course Icons:** Use Heroicons for course categories (Academic Cap, Beaker, Computer, etc.)

---

## Responsive Behavior

**Breakpoints:**
- Mobile: 0-768px (single column, stacked components)
- Tablet: 768-1024px (2-column grids)
- Desktop: 1024px+ (full multi-column layouts)

**Mobile-Specific:**
- Hamburger menu for navigation
- Hero text size reduced, single CTA prioritized
- Stats bar: 2x2 grid instead of 4 columns
- Course cards: single column stack
- Form: full-width, larger touch targets
- Modal: full-screen on mobile

---

## Interactions & States

**Minimal Animation Philosophy:**
- Smooth page scroll behavior
- Card hover: subtle shadow elevation
- Button hover: slight brightness change
- Form focus: border highlight
- Modal: fade-in backdrop, slide-up content (300ms ease-out)
- NO scroll-triggered animations, parallax, or heavy effects

**Form Submission Flow:**
1. User fills form → clicks Submit
2. Button shows loading spinner, text changes to "Submitting..."
3. AJAX POST to Pipedream endpoint
4. On success: Green success banner appears, form resets
5. On error: Red error banner with retry option

---

## Critical Design Notes

- **Differentiate Two Universities:** Use different color schemes as brand identities (e.g., University A: blue tones, University B: green tones)
- **Trust Building:** Emphasize accreditation badges, placement statistics, alumni testimonials prominently
- **Conversion Focus:** CTAs should be visible in every major section without being aggressive
- **Information Hierarchy:** Most critical info (placements, courses, fees) in first 3 sections
- **Professional Photography:** Avoid stock photos; use realistic university imagery

This design creates authoritative, conversion-optimized university landing pages that balance comprehensive information with clean, modern aesthetics suitable for attracting prospective students.