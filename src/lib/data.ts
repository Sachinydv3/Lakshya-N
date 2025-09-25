import { BookOpen, Briefcase, Calculator, FlaskConical, LucideIcon, Award, Star, CheckCircle, Download, FileText, GitCompare } from "lucide-react";

export interface Course {
    name: string;
    description: string;
    icon: LucideIcon;
    careerPaths: string[];
    higherStudies: string[];
    govtExams: string[];
}

export const courses: Course[] = [
  {
    name: 'Bachelor of Arts (B.A.)',
    description: 'Explores humanities, social sciences, and liberal arts, fostering critical thinking and communication skills.',
    icon: BookOpen,
    careerPaths: ['Journalist', 'Content Writer', 'Social Worker', 'Marketing Manager', 'Public Relations Specialist'],
    higherStudies: ['Master of Arts (M.A.)', 'Master of Business Administration (MBA)', 'Bachelor of Education (B.Ed)'],
    govtExams: ['UPSC Civil Services', 'State Public Service Commission (PSC)', 'SSC CGL'],
  },
  {
    name: 'Bachelor of Science (B.Sc.)',
    description: 'Focuses on scientific principles and research, developing analytical and problem-solving abilities.',
    icon: FlaskConical,
    careerPaths: ['Research Scientist', 'Data Analyst', 'Lab Technician', 'Pharmaceutical Sales', 'Environmental Consultant'],
    higherStudies: ['Master of Science (M.Sc.)', 'Ph.D.', 'MCA'],
    govtExams: ['ISRO/DRDO Scientist', 'Forest Service Exam', 'Geologist Exam'],
  },
  {
    name: 'Bachelor of Commerce (B.Com.)',
    description: 'Covers accounting, finance, and business principles, preparing for careers in the corporate world.',
    icon: Calculator,
    careerPaths: ['Chartered Accountant (CA)', 'Financial Analyst', 'Bank PO', 'Tax Consultant', 'Auditor'],
    higherStudies: ['Master of Commerce (M.Com.)', 'MBA (Finance)', 'Certified Financial Analyst (CFA)'],
    govtExams: ['RBI Grade B', 'SEBI Grade A', 'IBPS PO'],
  },
  {
    name: 'Bachelor of Business Administration (BBA)',
    description: 'Provides a broad understanding of business management and organizational functions.',
    icon: Briefcase,
    careerPaths: ['HR Manager', 'Operations Manager', 'Sales Executive', 'Entrepreneur', 'Business Development Manager'],
    higherStudies: ['Master of Business Administration (MBA)', 'Post Graduate Diploma in Management (PGDM)'],
    govtExams: ['UPSC', 'Bank PO', 'SSC'],
  }
];

export interface College {
    id: number;
    name: string;
    city: string;
    state: string;
    rating: number;
    reviews: number;
    ranking: string;
    approvals: string[];
    description: string;
    programs: { name: string; fee: string }[];
    facilities: string[];
    image: string;
    featured?: boolean;
}

export const colleges: College[] = [
    {
        id: 1,
        name: 'City Govt. Degree College',
        city: 'Metropolis',
        state: 'State A',
        rating: 8.5,
        reviews: 215,
        ranking: '#15 in Metropolis',
        approvals: ['AICTE', 'UGC'],
        description: 'A premier institution known for its excellent faculty and state-of-the-art infrastructure in the heart of the city.',
        programs: [
            { name: 'B.Sc. (Physics)', fee: '₹25,000' },
            { name: 'B.A. (History)', fee: '₹18,000' },
        ],
        facilities: ['Library', 'Hostel', 'Wi-Fi', 'Labs'],
        image: 'college-1',
        featured: true,
    },
    {
        id: 2,
        name: 'State Science & Arts College',
        city: 'Capital City',
        state: 'State B',
        rating: 9.1,
        reviews: 350,
        ranking: '#5 in State B for Arts',
        approvals: ['NAAC', 'UGC'],
        description: 'Renowned for its contribution to arts and science, with a legacy of producing top scholars.',
        programs: [
            { name: 'B.Sc. (Biology)', fee: '₹30,000' },
            { name: 'BBA', fee: '₹45,000' },
        ],
        facilities: ['Library', 'Wi-Fi', 'Sports Complex'],
        image: 'college-2'
    },
    {
        id: 3,
        name: 'Regional College of Commerce',
        city: 'Townsville',
        state: 'State C',
        rating: 8.2,
        reviews: 180,
        ranking: '#1 in Townsville for Commerce',
        approvals: ['UGC'],
        description: 'A leading college for commerce education, fostering future business leaders and entrepreneurs.',
        programs: [
            { name: 'B.Com. (Honours)', fee: '₹50,000' },
            { name: 'B.A. (Economics)', fee: '₹22,000' },
        ],
        facilities: ['Hostel', 'Library', 'Auditorium'],
        image: 'college-3'
    },
    {
        id: 4,
        name: 'District College for Women',
        city: 'Metropolis',
        state: 'State A',
        rating: 8.8,
        reviews: 150,
        ranking: '#20 in Metropolis',
        approvals: ['UGC'],
        description: 'Empowering women through quality education with a focus on holistic development.',
        programs: [
            { name: 'B.A. (Psychology)', fee: '₹20,000' },
            { name: 'B.Sc. (Home Science)', fee: '₹24,000' },
        ],
        facilities: ['Hostel', 'Library', 'Wi-Fi', 'Gym'],
        image: 'college-1'
    }
];


export interface TimelineEvent {
    date: string;
    title: string;
    description: string;
}

export const timelineEvents: TimelineEvent[] = [
    {
        date: '2024-09-01',
        title: 'State University Admissions Open',
        description: 'Online application portal for all state universities is now live for undergraduate programs.'
    },
    {
        date: '2024-09-20',
        title: 'National Scholarship Portal Opens',
        description: 'Apply for various government scholarships for post-matriculation studies.'
    },
    {
        date: '2024-10-15',
        title: 'State University Admission Deadline',
        description: 'Last day to submit your online applications for UG courses.'
    },
    {
        date: '2024-11-05',
        title: 'Common Entrance Test (CET)',
        description: 'State-level CET for admission into professional degree courses like BBA.'
    },
    {
        date: '2024-11-25',
        title: 'First Merit List Published',
        description: 'Check college websites for the first round of admission cut-offs and merit lists.'
    }
];

export interface StudyAbroadCountry {
  name: string;
  description: string;
  image: string;
  facts: {
    title: string;
    value: string;
  }[];
}

export const studyAbroadCountries: StudyAbroadCountry[] = [
  {
    name: 'USA',
    description: 'Home to Ivy League universities, offering diverse programs and a vibrant campus life.',
    image: 'country-usa',
    facts: [
      { title: 'Popular Courses', value: 'Computer Science, MBA, Engineering' },
      { title: 'Avg. Tuition Fee', value: '$25,000 - $55,000 / year' },
      { title: 'Top Exams', value: 'GRE, GMAT, TOEFL, IELTS' },
    ],
  },
  {
    name: 'United Kingdom',
    description: 'Renowned for its historic universities, quality research, and shorter course durations.',
    image: 'country-uk',
    facts: [
      { title: 'Popular Courses', value: 'Business, Law, Medicine, Arts' },
      { title: 'Avg. Tuition Fee', value: '£15,000 - £30,000 / year' },
      { title: 'Top Exams', value: 'IELTS, TOEFL' },
    ],
  },
  {
    name: 'Canada',
    description: 'Known for its high quality of life, affordable education, and welcoming immigration policies.',
    image: 'country-canada',
    facts: [
      { title: 'Popular Courses', value: 'IT, Business, Health Sciences' },
      { title: 'Avg. Tuition Fee', value: 'C$20,000 - C$40,000 / year' },
      { title: 'Top Exams', value: 'IELTS, TOEFL, PTE' },
    ],
  },
    {
    name: 'Australia',
    description: 'Offers a world-class education system with a focus on practical experience and research.',
    image: 'country-australia',
    facts: [
      { title: 'Popular Courses', value: 'IT, Engineering, Hospitality' },
      { title: 'Avg. Tuition Fee', value: 'A$25,000 - A$45,000 / year' },
      { title: 'Top Exams', value: 'IELTS, TOEFL, PTE' },
    ],
  },
];
