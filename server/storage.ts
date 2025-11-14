import { type University, type Lead, type InsertLead } from "@shared/schema";
import { randomUUID } from "crypto";

// Image paths (served by Vite)
const universityAHero = "/attached_assets/generated_images/University_A_Hero_Campus_89ca9331.png";
const universityBHero = "/attached_assets/generated_images/University_B_Hero_Campus_467b9881.png";
const libraryImg = "/attached_assets/generated_images/Library_Facility_02c79b21.png";
const computerLabImg = "/attached_assets/generated_images/Computer_Lab_Facility_b10e3454.png";
const sportsComplexImg = "/attached_assets/generated_images/Sports_Complex_Facility_96c4530e.png";
const hostelImg = "/attached_assets/generated_images/Hostel_Facility_66255712.png";
const auditoriumImg = "/attached_assets/generated_images/Auditorium_Facility_70aaa716.png";
const cafeteriaImg = "/attached_assets/generated_images/Cafeteria_Facility_e621c7e0.png";

export interface IStorage {
  getUniversityById(id: string): Promise<University | undefined>;
  getAllUniversities(): Promise<University[]>;
  createLead(lead: InsertLead): Promise<Lead>;
  getAllLeads(): Promise<Lead[]>;
}

const universityData: Record<string, University> = {
  "a": {
    id: "a",
    name: "Apex Institute of Technology",
    shortName: "AIT",
    tagline: "Engineering Excellence for Tomorrow's Leaders",
    description: "Apex Institute of Technology is a premier private university dedicated to fostering innovation, excellence, and leadership in engineering and technology education. With state-of-the-art facilities, world-class faculty, and strong industry partnerships, we prepare students for successful careers in the global technology landscape.",
    heroImage: universityAHero,
    logo: "",
    theme: "blue",
    stats: {
      placementRate: "95%",
      recruiters: "50+",
      accreditation: "NAAC A+",
      avgPackage: "₹12 LPA",
    },
    courses: [
      {
        id: "cse",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        description: "Comprehensive program covering software engineering, AI, machine learning, and cloud computing with hands-on projects.",
        icon: "laptop",
        totalFees: "₹8,00,000",
        perSemester: "₹1,00,000",
        eligibility: "10+2 with 60% in PCM",
      },
      {
        id: "ece",
        name: "B.Tech Electronics",
        duration: "4 Years",
        description: "Focus on VLSI design, embedded systems, IoT, and communication technologies with industry-standard labs.",
        icon: "laptop",
        totalFees: "₹7,50,000",
        perSemester: "₹93,750",
        eligibility: "10+2 with 60% in PCM",
      },
      {
        id: "mech",
        name: "B.Tech Mechanical",
        duration: "4 Years",
        description: "Advanced curriculum in robotics, automation, CAD/CAM, and sustainable manufacturing processes.",
        icon: "briefcase",
        totalFees: "₹7,00,000",
        perSemester: "₹87,500",
        eligibility: "10+2 with 60% in PCM",
      },
      {
        id: "civil",
        name: "B.Tech Civil Engineering",
        duration: "4 Years",
        description: "Modern approach to infrastructure development, smart cities, and sustainable construction practices.",
        icon: "building",
        totalFees: "₹6,50,000",
        perSemester: "₹81,250",
        eligibility: "10+2 with 60% in PCM",
      },
      {
        id: "mtech-cse",
        name: "M.Tech Computer Science",
        duration: "2 Years",
        description: "Advanced specializations in AI, cybersecurity, data science, and cloud architecture.",
        icon: "laptop",
        totalFees: "₹4,00,000",
        perSemester: "₹1,00,000",
        eligibility: "B.Tech/BE with 60%",
      },
      {
        id: "mba-tech",
        name: "MBA (Tech Management)",
        duration: "2 Years",
        description: "Unique blend of technology and business management for aspiring tech entrepreneurs and leaders.",
        icon: "briefcase",
        totalFees: "₹5,00,000",
        perSemester: "₹1,25,000",
        eligibility: "Graduation with 50%",
      },
    ],
    placements: {
      highlights: [
        "Strong partnerships with 50+ leading technology companies",
        "Dedicated placement cell with year-round training and preparation",
        "100% placement assistance for all eligible students",
        "International placement opportunities with global tech giants",
      ],
      topRecruiters: [
        "TCS", "Infosys", "Wipro", "Cognizant", "HCL", "Tech Mahindra",
        "Amazon", "Microsoft", "Google", "IBM", "Accenture", "Capgemini",
      ],
      averagePackage: "₹12 LPA",
      highestPackage: "₹42 LPA",
      placementPercentage: "95%",
    },
    facilities: [
      {
        id: "library",
        name: "Central Library",
        description: "Modern library with 50,000+ books, e-journals, and digital resources with comfortable reading spaces.",
        image: libraryImg,
      },
      {
        id: "computer-lab",
        name: "Computer Labs",
        description: "State-of-the-art labs with latest hardware and software for programming, AI, and research projects.",
        image: computerLabImg,
      },
      {
        id: "sports",
        name: "Sports Complex",
        description: "World-class indoor and outdoor sports facilities including basketball, cricket, and fitness center.",
        image: sportsComplexImg,
      },
      {
        id: "hostel",
        name: "Student Hostels",
        description: "Comfortable accommodation with modern amenities, WiFi, and 24/7 security for safe campus living.",
        image: hostelImg,
      },
      {
        id: "auditorium",
        name: "Auditorium",
        description: "Spacious 500-seater auditorium with advanced audio-visual systems for events and seminars.",
        image: auditoriumImg,
      },
      {
        id: "cafeteria",
        name: "Cafeteria",
        description: "Hygienic food court offering diverse cuisine options with comfortable dining spaces for students.",
        image: cafeteriaImg,
      },
    ],
    contact: {
      address: "Plot No. 123, Knowledge Park",
      city: "Bangalore",
      state: "Karnataka",
      phone: "+91 80 1234 5678",
      email: "admissions@ait.edu.in",
    },
    accreditations: ["NAAC A+ Grade", "AICTE Approved", "NBA Accredited"],
  },
  "b": {
    id: "b",
    name: "BrightPath University",
    shortName: "BPU",
    tagline: "Shaping Future Business Leaders & Innovators",
    description: "BrightPath University is a distinguished private institution offering world-class education in business, management, liberal arts, and sciences. We combine academic rigor with practical experience, preparing students to excel in dynamic global careers through innovative pedagogy and industry exposure.",
    heroImage: universityBHero,
    logo: "",
    theme: "green",
    stats: {
      placementRate: "92%",
      recruiters: "60+",
      accreditation: "NAAC A++",
      avgPackage: "₹10 LPA",
    },
    courses: [
      {
        id: "mba",
        name: "MBA (Master of Business Admin)",
        duration: "2 Years",
        description: "Comprehensive business program with specializations in Finance, Marketing, HR, and Operations Management.",
        icon: "briefcase",
        totalFees: "₹6,00,000",
        perSemester: "₹1,50,000",
        eligibility: "Graduation with 50%",
      },
      {
        id: "bba",
        name: "BBA (Bachelor of Business)",
        duration: "3 Years",
        description: "Foundation program in business fundamentals with focus on entrepreneurship and leadership skills.",
        icon: "briefcase",
        totalFees: "₹4,50,000",
        perSemester: "₹75,000",
        eligibility: "10+2 with 50%",
      },
      {
        id: "bcom",
        name: "B.Com (Honors)",
        duration: "3 Years",
        description: "Specialized commerce program with accounting, taxation, finance, and business law expertise.",
        icon: "graduation-cap",
        totalFees: "₹3,00,000",
        perSemester: "₹50,000",
        eligibility: "10+2 with Commerce",
      },
      {
        id: "ba-eco",
        name: "BA Economics",
        duration: "3 Years",
        description: "In-depth study of economic theory, policy analysis, and quantitative methods for economic research.",
        icon: "graduation-cap",
        totalFees: "₹3,50,000",
        perSemester: "₹58,333",
        eligibility: "10+2 with 50%",
      },
      {
        id: "bsc-data",
        name: "B.Sc Data Science",
        duration: "3 Years",
        description: "Cutting-edge program in analytics, machine learning, and big data technologies with industry projects.",
        icon: "flask",
        totalFees: "₹5,00,000",
        perSemester: "₹83,333",
        eligibility: "10+2 with 60% in PCM",
      },
      {
        id: "bdes",
        name: "B.Des (Design)",
        duration: "4 Years",
        description: "Creative program covering UX/UI design, product design, and digital media with portfolio development.",
        icon: "palette",
        totalFees: "₹6,00,000",
        perSemester: "₹75,000",
        eligibility: "10+2 with Portfolio",
      },
    ],
    placements: {
      highlights: [
        "Strategic partnerships with 60+ Fortune 500 and startups",
        "Robust internship program ensuring real-world experience",
        "Alumni network spanning 25+ countries globally",
        "Career counseling and soft skills training throughout the program",
      ],
      topRecruiters: [
        "Deloitte", "EY", "PwC", "KPMG", "McKinsey", "BCG",
        "HDFC Bank", "ICICI", "Amazon", "Flipkart", "Paytm", "Zomato",
      ],
      averagePackage: "₹10 LPA",
      highestPackage: "₹35 LPA",
      placementPercentage: "92%",
    },
    facilities: [
      {
        id: "library",
        name: "Knowledge Center",
        description: "Extensive collection of business journals, case studies, and digital databases with collaborative study zones.",
        image: libraryImg,
      },
      {
        id: "computer-lab",
        name: "Innovation Lab",
        description: "Technology-enabled spaces with analytics software, design tools, and startup incubation support.",
        image: computerLabImg,
      },
      {
        id: "sports",
        name: "Recreation Center",
        description: "Comprehensive sports and wellness facilities promoting physical fitness and mental well-being.",
        image: sportsComplexImg,
      },
      {
        id: "hostel",
        name: "Campus Residences",
        description: "Premium student housing with modern amenities, study lounges, and vibrant community spaces.",
        image: hostelImg,
      },
      {
        id: "auditorium",
        name: "Conference Hall",
        description: "Professional event space hosting guest lectures, seminars, and corporate interactions regularly.",
        image: auditoriumImg,
      },
      {
        id: "cafeteria",
        name: "Campus Dining",
        description: "Multi-cuisine food court with healthy options, coffee shop, and comfortable social gathering areas.",
        image: cafeteriaImg,
      },
    ],
    contact: {
      address: "Sector 45, University Road",
      city: "Pune",
      state: "Maharashtra",
      phone: "+91 20 9876 5432",
      email: "admissions@brightpath.edu.in",
    },
    accreditations: ["NAAC A++ Grade", "UGC Approved", "AACSB Member"],
  },
};

export class MemStorage implements IStorage {
  private leads: Map<string, Lead>;

  constructor() {
    this.leads = new Map();
  }

  async getUniversityById(id: string): Promise<University | undefined> {
    return universityData[id];
  }

  async getAllUniversities(): Promise<University[]> {
    return Object.values(universityData);
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const lead: Lead = {
      ...insertLead,
      id,
      createdAt: new Date().toISOString(),
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getAllLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }
}

export const storage = new MemStorage();
