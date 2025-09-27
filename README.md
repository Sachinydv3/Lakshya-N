# LAKSHYA N   One-Stop Personalized Career & Education Advisor


To get started, take a look at src/app/page.tsx.

## 🖼️ Screenshots

| Dashboard | Page of career  & course Explorer |
| :---: | :---: |
| *This is dashbord of lakshya N* | *Suggest Path of your future* |
|![Deepak Image](./docs/Reference_Image/Image1.jpeg) | ![Deepak Image](./docs/Reference_Image/Image2.jpeg)  |

| Chat bot for careear guideance | College suggestion based on your intrest |
| :---: | :---: |
| ![Deepak Image](./docs/Reference_Image/image5.jpeg)  | ![Deepak Image](./docs/Reference_Image/Image4.jpeg) |

## ✨ Key Features of the Platform

- **•	Aptitude & Interest Assessments
The app will offer interest and aptitude quizzes developed in collaboration with educators and psychologists. These assessments uncover each student’s strengths, learningpreferences, and motivations, generating personalized stream and subject recommendations (e.g., Arts, Commerce, Science, Vocational).

- **•	Course-to-Career Path Mapping
Interactive visual charts will map each major degree (e.g., B.A., B.Sc., B.Com., BBA) to potential career outcomes, including government jobs, private sector roles, entrepreneurship, and higher studies. This “roadmap” approach will make post-college trajectories visible and relatable for students and parents, reducing fear and uncertainty.

- **•	Nearby College Directory
A geolocation-based guide will list government colleges in and around the student’s locality, with details such as available courses, eligibility criteria, medium of instruction, facilities, and recent cut-offs. This removes ambiguity about local options and encourages students to consider accessible, affordable institutions.

- **	•	Timeline Tracker
A built-in calendar and notification tool will alert students of key dates for admissions, entrance exams, scholarship applications, and counseling sessions. This timely information prevents missed opportunities and last-minute rushes.

- **	•	Personalized Guidance & Recommendation Engine
User profiles will store academic backgrounds, interests, and goals, continuously updating recommendations as new information emerges. The AI-driven system will propose relevant courses, scholarships, colleges, and career materials, adapting to each student’s evolving needs.

- **	•	Access to Open Educational Resources
Integrated modules offering free e-books, study materials, and skill-building content aligned with chosen subjects will help bridge academic gaps and prepare students for entrance exams or coursework.

## 🏛️ System Architecture

- ** 1.⁠ ⁠User Interface Layer
	**•	React / React Native App:
Students access the platform via a mobile or web app built using React or React Native, ensuring a responsive and intuitive user experience.
- ** 2.⁠ ⁠API Layer
	**•	GraphQL API (Apollo):
Serves as the interface between frontend clients and backend services, delivering targeted data queries with efficiency and flexibility.
  -•	API Gateway (NGINX/Kong):
Acts as a secure router and traffic manager controlling API requests, providing authentication, load balancing, and logging.
-  ** 3.⁠ ⁠Backend Services Layer
  - •	Conversational AI Service (Python/FastAPI):
Orchestrates interactions such as quiz administration, handling user inputs, and processing AI-generated advice.
  - •	Large Language Models (LLM - Gemini/GPT-4 with RAG):
Power intelligent, context-aware guidance and content generation through advanced AI models using Retrieval-Augmented Generation.
- **4.⁠ ⁠Data Layer
  -**•	Feature Store (Feast):
Manages and serves features such as user assessment data and preferences for AI model consumption and personalized recommendations.
  -**•	Knowledge Graph (Neo4j):
Stores relational information about courses, careers, colleges, timelines, and eligibility, enabling complex queries to map pathways and options.
  -**•	Relational Database (PostgreSQL):
Persistent storage for user profiles, college directories, quiz results, and app configuration.
- ** 5.⁠ ⁠Messaging and Analytics Layer
  -•	Apache Kafka (Message Bus):
Facilitates real-time event streaming for activities like quiz completions and notifications, enabling analytics and monitoring to improve user engagement and system performance.
Data Flow and Integration
  -**•	Users interact with the app, which sends requests via the GraphQL API.
  -**•	The API Gateway routes these requests to the backend FastAPI service, which coordinates data retrieval from PostgreSQL and Neo4j, and invokes LLM services for conversational assistance and personalized recommendations.
  -**•	User feature data is managed by Feast, supporting AI-driven decisions.
  -**•	Kafka streams events and usage data for monitoring and feedback loops that refine the platform continuously.
