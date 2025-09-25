import { BookOpen, Briefcase, Calculator, FlaskConical, LucideIcon } from "lucide-react";

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
    programs: string[];
    facilities: string[];
    image: string;
}

export const colleges: College[] = [
    {
        id: 1,
        name: 'City Govt. Degree College',
        city: 'Metropolis',
        programs: ['B.A. (History, English)', 'B.Sc. (Physics, Chemistry)', 'B.Com.'],
        facilities: ['Library', 'Hostel', 'Wi-Fi'],
        image: 'college-1'
    },
    {
        id: 2,
        name: 'State Science & Arts College',
        city: 'Capital City',
        programs: ['B.A. (Sociology)', 'B.Sc. (Biology, Math)', 'BBA'],
        facilities: ['Library', 'Wi-Fi'],
        image: 'college-2'
    },
    {
        id: 3,
        name: 'Regional College of Commerce',
        city: 'Townsville',
        programs: ['B.Com. (Honours)', 'B.A. (Economics)', 'BBA'],
        facilities: ['Hostel', 'Library'],
        image: 'college-3'
    },
    {
        id: 4,
        name: 'District College for Women',
        city: 'Metropolis',
        programs: ['B.A. (Psychology)', 'B.Sc. (Home Science)'],
        facilities: ['Hostel', 'Library', 'Wi-Fi'],
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
