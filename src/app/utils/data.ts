import flag1 from '../../../public/flag1.png';
import flag2 from '../../../public/flag2.png';
import flag3 from '../../../public/flag3.png';
import flag4 from '../../../public/flag4.png';
import flag5 from '../../../public/flag5.png';
import flag6 from '../../../public/flag6.png';
import flag7 from '../../../public/flag7.png';
import flag8 from '../../../public/flag8.png';
import flag9 from '../../../public/flag9.png';
import flag10 from '../../../public/flag10.png';
import flag11 from '../../../public/flag11.png';
import flag12 from '../../../public/flag12.png';
import flag13 from '../../../public/flag13.png';
import flag14 from '../../../public/flag14.png';
import flag15 from '../../../public/flag15.png';
import flag16 from '../../../public/flag16.png';
import flag17 from '../../../public/flag17.png';
import flag18 from '../../../public/flag18.png';
import flag19 from '../../../public/flag19.png';
import flag20 from '../../../public/flag20.png';
import flag21 from '../../../public/flag21.png';
import flag22 from '../../../public/flag22.png';
import flag23 from '../../../public/flag23.png';
import flag24 from '../../../public/flag24.png';
import flag25 from '../../../public/flag25.png';
import flag26 from '../../../public/flag26.png';
import flag27 from '../../../public/flag27.png';
import flag28 from '../../../public/flag28.png';
import flag29 from '../../../public/flag29.png';
import flag30 from '../../../public/flag30.png';
import flag31 from '../../../public/flag31.png';
import flag32 from '../../../public/flag32.png';
import u1 from '../../../public/u1.png';
import u2 from '../../../public/u2.png';
import u3 from '../../../public/u3.png';
import u4 from '../../../public/u4.png';
import u5 from '../../../public/u5.png';
import u6 from '../../../public/u6.png';
import u7 from '../../../public/u7.png';
import u8 from '../../../public/u8.png';
import u9 from '../../../public/u9.png';
import u10 from '../../../public/u10.png';
import u11 from '../../../public/u11.png';
import u12 from '../../../public/u12.png';
import u13 from '../../../public/u13.png';
import u14 from '../../../public/u14.svg';
import u15 from '../../../public/u15.png';
import u16 from '../../../public/u16.png';
import u17 from '../../../public/u17.png';
import u18 from '../../../public/u18.png';
import u19 from '../../../public/u19.png';
import u20 from '../../../public/u20.svg';
import logo1 from '../../../public/logo1.png';
import logo2 from '../../../public/logo2.png';
import logo3 from '../../../public/logo3.png';
import logo4 from '../../../public/logo4.png';
import logo5 from '../../../public/logo5.png';
import udetails1 from '../../../public/udetails1.png';
import udetails2 from '../../../public/udetails2.png';
import udetails3 from '../../../public/udetails3.png';
import udetails4 from '../../../public/udetails4.png';
import udetails5 from '../../../public/udetails5.png';
import udetails6 from '../../../public/udetails6.png';
import udetails7 from '../../../public/udetails7.png';
import udetails8 from '../../../public/udetails8.png';
import udetails9 from '../../../public/udetails9.png';
import udetails10 from '../../../public/udetails10.png';
import udetails11 from '../../../public/udetails11.png';
import udetails12 from '../../../public/udetails12.png';
import udetails13 from '../../../public/udetails13.png';
import udetails14 from '../../../public/udetails14.png';
import udetails15 from '../../../public/udetails15.png';
import udetails16 from '../../../public/udetails16.png';
import udetails17 from '../../../public/udetails17.png';
import udetails18 from '../../../public/udetails18.png';
import udetails19 from '../../../public/udetails19.png';
import udetails20 from '../../../public/udetails20.png';
import offer1 from "../../../public/offer1.png"
import offer2 from "../../../public/offer2.png"
import offer3 from "../../../public/offer3.png"
import offer4 from "../../../public/offer4.png"
import offer5 from "../../../public/offer5.png"
import hover1 from "../../../public/hover1.png"
import hover2 from "../../../public/hover2.png"
import hover3 from "../../../public/hover3.png"
import hover4 from "../../../public/hover4.png"
import hover5 from "../../../public/hover5.png"
import { StaticImageData } from 'next/image';

export const flags = [
  { id: 1, name: "Australia", image: flag1 },
  { id: 2, name: "Canada", image: flag2 },
  { id: 3, name: "UAE", image: flag3 },
  { id: 4, name: "Germany", image: flag4 },
  { id: 5, name: "Ireland", image: flag5 },
  { id: 6, name: "New Zealand", image: flag6 },
  { id: 7, name: "Singapore", image: flag7 },
  { id: 8, name: "Switzerland", image: flag8 },
  { id: 9, name: "United Kingdom", image: flag9 },
  { id: 10, name: "United States", image: flag10 },
  { id: 11, name: "Italy", image: flag11 },
  { id: 12, name: "France", image: flag12 },
  { id: 13, name: "Sweden", image: flag13 },
  { id: 14, name: "Spain", image: flag14 },
  { id: 15, name: "Austria", image: flag15 },
  { id: 16, name: "Denmark", image: flag16 },
  { id: 17, name: "Finland", image: flag17 },
  { id: 18, name: "Hungary", image: flag18 },
  { id: 19, name: "India", image: flag19 },
  { id: 20, name: "Cyprus", image: flag20 },
  { id: 21, name: "Poland", image: flag21 },
  { id: 22, name: "Czech Republic", image: flag22 },
  { id: 23, name: "Malaysia", image: flag23 },
  { id: 24, name: "Colombia", image: flag24 },
  { id: 25, name: "Japan", image: flag25 },
  { id: 26, name: "Vietnam", image: flag26 },
  { id: 27, name: "Malta", image: flag27 },
  { id: 28, name: "China", image: flag28 },
  { id: 29, name: "Belgium", image: flag29 },
  { id: 30, name: "Russia", image: flag30 },
  { id: 31, name: "South Korea", image: flag31 },
  { id: 32, name: "Georgia", image: flag32 },
];

export interface University {
  id: number;
  uniBanner: StaticImageData; 
  name: string;
  country: string;
  website: string;
  image: StaticImageData; 
  logo: StaticImageData; 
  acceptanceRate: string;
  totalInternationalStudents: string;
  placementRate: string;
  studentTeacherRatio: string;
  overview: string;
  employability: string;
  rankings: string;
  intakes: string;
  numericRanking:number;  established:number;
}

export const coreValues = [
    {
      id: 1,
      title: "Student-Centered",
      description: "Your goals are our priority. We provide individualized, attentive support throughout your journey."
    },
    {
      id: 2,
      title: "Accountability",
      description: "We take ownership of your success and treat your future with utmost seriousness."
    },
    {
      id: 3,
      title: "Trustworthy",
      description: "Our advice and actions are grounded in honesty, transparency, and reliability."
    },
    {
      id: 4,
      title: "Integrity",
      description: "We uphold the highest ethical standards in everything we do."
    },
    {
      id: 5,
      title: "Collaboration",
      description: "We work closely with students, families, and institutions for shared success."
    },
    {
      id: 6,
      title: "Driven to Deliver",
      description: "We are proactive, solution-focused, and committed to achieving the best results for you."
    }
];
export const universityData:University[] = [
  {
    "id": 1,
     numericRanking:1 ,
     established: 1949,
    "uniBanner": udetails1,
    "name": "The University of New South Wales",
    "country": "Australia",
    "website": "www.unsw.edu.au",
    "image": u1,
    "logo": logo1,
    "acceptanceRate": "30%",
    "totalInternationalStudents": "7700",
    "placementRate": "93%",
    "studentTeacherRatio": "16:116:1",
    "overview": "The University of New South Wales (UNSW) stands as one of the world’s leading institutions, acclaimed for its excellence in both teaching and research. Located across vibrant campuses in Kensington and Paddington in Sydney, as well as in Canberra, </br> </br> UNSW is a preferred destination for over 16,000 international students. UNSW offers a wealth of interdisciplinary study options, with programs led by globally recognized scholars and seasoned industry professionals. This ensures a practical, career-focused education that equips students with the skills needed for real-world success. </br> </br> Employable University for five consecutive years. Its strong ties with industry and commitment to student development further enhance career readiness.</br> </br> UNSW graduates consistently earn some of the highest median salaries among the prestigious Group of Eight universities in Australia. The University also champions innovation and entrepreneurship, boasting the highest number of startups launched through research and technology developed on campus.",
    "employability": "Employable University for five consecutive years. Its strong ties with industry and commitment to student development further enhance career readiness. UNSW graduates consistently earn some of the highest median salaries among the prestigious Group of Eight universities in Australia. The University also champions innovation and entrepreneurship, boasting the highest number of startups launched through research and technology developed on campus.",
    "rankings": "The University of New South Wales (UNSW) is recognized as one of the top-ranking universities both nationally and globally. Its strong performance is reflected in the QS World University Rankings, where it consistently achieves high positions across various categories. UNSW stands out particularly in subject-specific rankings and areas such as sustainability, highlighting its academic excellence and global impact.",
    "intakes": "September. These intakes provide students with flexibility to begin their studies, with major intakes through February, May, and September and preparations. Each term is a full academic session, allowing students to support services, regardless of when they start."
    
  },
  {
    "id": 2,
     numericRanking: 45,
          established: 1985,

    "uniBanner": udetails2,
    "name": "Monash University",
    "country": "Australia",
    "website": "www.monash.edu",
    "image": u2,
    "logo": logo1,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "Founded in 1958, Monash University is one of Victoria’s leading public research institutions and a proud member of Australia’s prestigious Group of Eight. With over 86,000 students, 17,000 staff, and more than 500,000 alumni, it spans multiple campuses across Australia and international centres in Malaysia, India, China, and Italy.</br> </br> Monash University is a globally recognized, research-intensive institution committed to excellence across education, sustainability, and innovation. With top-tier rankings, industry-linked research, and a broad international presence, it provides international students with diverse pathways, strong academic programs, and scholarship opportunities.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "Monash University is ranked among the top universities in the world. In the QS World University Rankings 2026, it holds the 36th position globally and is ranked 5th in Australia. It consistently performs well across various global ranking systems, including Times Higher Education, where it is placed 58th worldwide and 2nd in Australia. </br> </br> The university is also known for its subject-specific excellence, with Pharmacy & Pharmacology ranked 4th globally. Monash appears in the top 100 across several subjects and maintains strong positions in sustainability and academic reputation rankings.", // Add from image/data
    "intakes": "-Monash University offers two main intakes each year at its Australian campuses—Semester 1 in March and Semester 2 in July. These are the primary entry points for most undergraduate and postgraduate programs. Some courses may also offer a limited November intake, usually for bridging or intensive programs. At Monash University Malaysia, there are three intakes: February, July, and October, though the October intake is only available for selected programs. For students entering through Monash College or the Monash University Foundation Year (MUFY), intakes typically occur in February, June, and October, depending on the program. It's important to apply early, as application deadlines for Semester 1 usually fall around November of the previous year, while Semester 2 applications close by May or June." // Add from image/data
  },
  {
    "id": 3,
     numericRanking: 65,
        established: 1975,
    "uniBanner": udetails3,
    "name": "Johns Hopkins University",
    "country": "USA",
    "website": "www.jhu.edu",
    "image": u3,
    "logo": logo2,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "Johns Hopkins University (JHU), established in 1876 and named after philanthropist Johns Hopkins, is America’s first research university and a globally respected institution. Built on a mission to advance knowledge through research and innovation, JHU has led numerous groundbreaking discoveries that have significantly impacted industries and enhanced lives for over 140 years.JHU has a strong academic presence with nine campuses spread across three continents, including key locations in Maryland, Washington, D.C., Italy, China, and Singapore. Its four campuses in Baltimore—Homewood, East Baltimore, the Peabody Institute, and Montgomery County—serve as vibrant centers of education and research. Emphasizing experiential learning, about 80% of undergraduate students engage in at least one.</br> </br> research project during their studies. The university enrolls over 30,000 full- and part-time students who pursue more than 400 programs across a wide range of fields.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "Johns Hopkins University consistently ranks as one of the world’s leading institutions on prestigious platforms like the QS World University Rankings and Times Higher Education Rankings. It is recognized as one of the top research universities in the United States due to its significant investment in research. </br> </br> The university performs exceptionally well in QS Subject and Sustainability Rankings, showcasing its strong academic reputation and impactful research contributions. JHU has earned an overall score above 80, with outstanding marks exceeding 90 in important areas such as Faculty-Student Ratio, International Research Network, and International Student Ratio.", // Add from image/data
    "intakes": "Johns Hopkins University in the USA provides several intake periods for international students throughout the year.</br> </br> <b>Note:</b> For those interested in pursuing a Master’s degree in Engineering, specific intake details are available, as KC Overseas mainly supports applications for Master’s level Engineering programs." // Add from image/data
  },
  {
    "id": 4,
     numericRanking: 15,
        established: 1914,
    "uniBanner": udetails4,
    "name": "University of Arizona",
    "country": "USA",
    "website": "www.arizona.edu",
    "image": u4,
    "logo": logo2,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "The University of Arizona (UArizona), established in 1885, boasts a rich legacy of academic excellence and innovation. Founded 27 years before Arizona attained statehood, the University’s first building, Old Main, was completed in 1890. Today, UArizona is ranked among the top 1% of universities both in the United States and globally.Through its Near You Network (NYN), the University offers flexible learning options at multiple locations, including Chandler, Douglas, Gilbert, Nogales, and Yuma. As a leading research institution, it ranks within the top 4% of all research universities in the U.S., with numerous research centers and institutes driving forward innovation.The University embraces diversity, with 49% of its student body coming from various backgrounds, creating an inclusive and welcoming campus.   </br> </br> environment. Students can select from more than 150 majors across different colleges and schools, ranging from the Eller College of Management to Arizona’s only College of Medicine, all supported by dedicated faculty. ", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "The University of Arizona is widely regarded as one of the leading public universities in the United States. It is particularly distinguished for its excellence in Water Resources, Astronomy, and Space Sciences, where it has made notable advances in research and innovation. </br> </br> Additionally, the University is recognized for its exceptional health services and ranks among the top institutions globally in Physical Sciences. In the QS rankings, it has earned an impressive score exceeding 90 for its International Research Network, underscoring its strong collaborations with research partners around the world.", // Add from image/data
    "intakes": "The University of Arizona offers a Fall intake for international students with important deadlines outlined on its official website. Applications typically open on August 1, with the deadline for submission by May 1 of the following year. Housing applications become available around mid-August, while the I-20 request deadline is usually set for early July. The Fall semester generally begins in late August." // Add from image/data
  },
  {
    "id": 5,
     numericRanking: 17,
        established: 1985,
    "uniBanner": udetails5,
    "name": "INTI International University & Colleges",
    "country": "Malaysia",
    "website": "www.newinti.edu",
    "image": u5,
    "logo": logo2,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "INTI International University & Colleges is one of Malaysia’s premier private higher education institutions, established in 1986. It operates multiple campuses across Malaysia, including Nilai (its main campus), Subang, Penang, and Sabah. Known for its strong global partnerships and focus on employability, INTI offers a wide range of academic programs at foundation, diploma, undergraduate, and postgraduate levels.</br> </br> INTI emphasizes a global learning environment, with students from over 55 countries and collaborations with top universities in the UK, USA, Australia, and more. The institution has also gained international recognition, featuring in the QS World University Rankings and achieving notable progress in indicators such as international student ratio, employer reputation, and faculty-student ratio.</br> </br> With a commitment to innovation, academic excellence, and industry-aligned education, INTI provides students with access to global curriculum, real-world projects, and career-focused training, making it a popular choice among both local and international students.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "INTI International University & Colleges has shown remarkable progress in global and regional university rankings in recent years. In the QS World University Rankings, INTI made its debut in 2024 at position 556 globally. It quickly climbed to rank 516 in 2025 and earned the prestigious QS Rising Star Award, becoming the only Malaysian institution and one of just six worldwide to receive this recognition. By 2026, INTI advanced further to rank 509 globally, placing it among the top 50 universities for international student engagement. Regionally, INTI holds a strong position as well, ranking around 170 in Asia according to the QS Asia Rankings 2025. Nationally, based on EduRank 2025, it is placed 27th among Malaysian universities.", // Add from image/data
    "intakes": "INTI International University & Colleges offers multiple intakes throughout the academic year, providing flexibility for international students to begin their studies at a time that best suits their academic plans. The main intakes are typically in January, May, and August, covering a wide range of undergraduate and postgraduate programs. Some programs may also offer additional intakes in March, June, or October, depending on the course structure and availability. Students are encouraged to check the specific intake dates for their chosen program to ensure timely application and enrollment." // Add from image/data
  },
  {
    "id": 6,
     numericRanking: 56,
        established: 1985,
    "uniBanner": udetails6,
    "name": "UCSI University & Colleges",
    "country": "Malaysia",
    "website": "www.ucsiuniversity.edu.my",
    "image": u6,
    "logo": logo2,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "UCSI University, established in 1986 as one of Malaysia’s earliest private higher education institutions, serves over 12,000 students from more than 110 countries across its campuses in Kuala Lumpur, Sarawak (Kuching), and Springhill (Seremban/Port Dickson).</br> </br> The university offers more than 150 undergraduate and postgraduate programs spanning fields such as Medicine, Engineering, Business, Hospitality, Music, Architecture, and Applied Sciences. </br> </br> Its faculty comprises industry-experienced academics with international exposure, fostering a culture of praxis-based learning and strong industry engagement", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "UCSI University has been ranked within the world’s top 1% of universities for several consecutive years. It climbed to #269 in the QS World University Rankings 2026, after previously ranking 265th in 2025 and 300th in 2024.</br> </br> UCSI also received the QS Recognition for Improvement Award in 2023, being the only global university to earn this title after jumping 63 spots to enter the top 300", // Add from image/data
    "intakes": "UCSI University runs multiple intake periods to accommodate diverse academic programs. Foundation, diploma, undergraduate, and postgraduate coursework programs at the Kuala Lumpur campus typically start in February, May, and September, with orientation occurring shortly before the commencement dates.</br> </br> Specific professional programs such as the Bachelor of Nursing, Optometry, Pharmacy, and various diploma specializations may follow alternative intake cycles, including January, July, or October, depending on program requirements and capacity" // Add from image/data
  },
  {
    "id": 7,
     numericRanking: 45,   established: 2006,

    "uniBanner": udetails7,
    "name": "University of Bristol",
    "country": "United Kingdom",
    "website": "www.bristol.ac.uk",
    "image": u7,
    "logo": logo3,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "Founded in 1876, the University of Bristol is a prominent member of the UK’s prestigious Russell Group, renowned for its rigorous academic environment and leading-edge research Reddit+3Reddit+3Reddit+3. Located within the city centre rather than on a single enclosed campus, its buildings are integrated across Bristol—forming a vibrant university precinct amidst the urban landscape.</br> </br> The university serves approximately 30,000 students, including a substantial international cohort (~33%) drawn from over 150 different countries, creating a diverse and globally-minded learning community", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "In the QS World University Rankings 2026, Bristol climbed to 51st globally, marking a three-place improvement from the previous year, and ranked 8th in the UK.</br> </br> In the QS Sustainability Rankings 2026, the university was placed 12th globally, a testament to its robust commitment to environmental and social research impact. The Times Higher Education (THE) World Rankings 2025 positioned Bristol at 78th globally and 9th in the UK. Academic Ranking of World Universities (ShanghaiRanking) 2024, Bristol was placed 97th internationally and 8th within the UK", // Add from image/data
    "intakes": "Bristol operates on a two-term (Teaching Block) structure, aligning with the broader UK academic calendar. The Autumn (Michaelmas) term begins in mid-September, followed by the Spring term starting in January. For the 2025/26 cycle, Welcome Week is scheduled from 15 to 19 September 2025, with the first teaching block running 22 September–12 December, and the second block starting 19 January–24 April 2026. </br> </br> Undergraduate entry is via UCAS: applications can be submitted from early September, with the equal consideration deadline on 31 January, and a final closing date of 30 June for most programs. Courses such as Medicine, Dentistry, and Veterinary Science have an earlier UCAS deadline of 15 October." // Add from image/data
  },
  {
    "id": 8,
     numericRanking: 16,
     established: 2012,
    "uniBanner": udetails8,
    "name": "Durham University",
    "country": "United Kingdom",
    "website": "www.durham.ac.uk",
    "image": u8,
    "logo": logo3,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "Durham University, established in 1832, is one of the oldest and most prestigious universities in the UK. Located in the historic city of Durham, it is a member of the Russell Group and is known for its collegiate system, academic excellence, and strong focus on research. The university provides a wide range of undergraduate and postgraduate programs across various disciplines, including arts, humanities, sciences, and social sciences, attracting students from over 150 countries.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "Durham consistently ranks among the top universities globally. In the QS World University Rankings 2026, it is placed within the top 100, ranked 94th.worldwide, and it has been ranked among the top 5 universities in the UK in several national league tables such as the Complete University Guide and The Times Good University Guide. Additionally, Durham excels in subject rankings, with over 20 subjects in the global top 100, including Archaeology, Theology, and Classics placed in the top 10.", // Add from image/data
    "intakes": "Durham University follows the traditional UK academic calendar, with three main terms: Michaelmas (October to December), Epiphany (January to March), and Easter (April to June). The main intake for both undergraduate and postgraduate students is in late September or early October.</br> </br> Undergraduate applications are made via UCAS, with key deadlines in January and June, while postgraduate applications are typically accepted until July for courses starting in autumn." // Add from image/data
  },
  {
    "id": 9,
     numericRanking: 200,
     established: 2024,
    "uniBanner": udetails9,
    "name": "The University of Auckland",
    "country": "New Zealand",
    "website": "www.auckland.ac.nz",
    "image": u9,
    "logo": logo1,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "The University of Auckland is New Zealand’s largest and most comprehensive university, established in 1883. It offers a wide range of programs across disciplines including arts, business, engineering, law, medicine, and science. Renowned for its strong research focus and global partnerships, the university attracts students from over 120 countries, creating a diverse and dynamic learning environment.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "The University of Auckland consistently ranks among the top 100 universities globally in major international rankings such as the QS World University Rankings and Times Higher Education. It is recognized as New Zealand’s highest-ranked university and performs strongly in research impact, academic reputation, and employer reputation.Regionally, it is considered one of the leading institutions in the Asia-Pacific region.", // Add from image/data
    "intakes": "The University of Auckland offers multiple intakes throughout the year to provide flexibility for both undergraduate and postgraduate students. The main intake, Semester One, begins in early March, with applications typically closing in December of the previous year. Semester Two starts in July, with deadlines usually in early July, offering students an alternative start time. Additionally, there is a Late Year Term from December to February designed for students who want to accelerate their studies or catch up on credits.</br> </br> Foundation programs through the University of Auckland International College also have multiple intakes across the year, including accelerated and standard programs starting in February, July, September, and October. Postgraduate application deadlines vary by program, so prospective students are encouraged to check specific course requirements and deadlines to plan accordingly." // Add from image/data
  },
  {
    "id": 10,
     numericRanking: 19,
     established: 2016,
    "uniBanner": udetails10,
    "name": "Lincoln University",
    "country": "New Zealand",
    "website": "www.lincoln.ac.nz",
    "image": u10,
    "logo": logo1,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "Lincoln University, established in 1878 and located in Lincoln, Canterbury, New Zealand, is the country's only specialist land-based university. It offers a diverse range of undergraduate and postgraduate programs focusing on agriculture, environmental science, agribusiness, landscape architecture, and tourism.</br> </br> The university emphasizes practical learning and sustainability, providing students with hands-on experience in its own research farms and close ties to industry and government partners. With a student population of approximately 3,000, Lincoln University fosters a close-knit academic community.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "Lincoln University is consistently recognized for its excellence in land-based education and research. It ranks in the top 150 globally for agriculture and forestry and holds a QS Five Stars rating. In the 2024 QS World University Rankings, Lincoln University was placed in the top 25% of universities worldwide. Additionally, it is ranked 94th in the UI GreenMetric World University Rankings, highlighting its commitment to sustainability.", // Add from image/data
    "intakes": "Lincoln University offers multiple intakes throughout the year to accommodate different student needs. The main intake, Semester One, begins in early March and is the primary start for most programs. Semester Two starts in July, providing an alternative entry point for students who require additional preparation time or who wish to start mid-year. Additionally, there is a Late Year Term from December to February designed for students who want to accelerate their studies or catch up on credits." // Add from image/data
  },
  {
    "id": 11,
     numericRanking: 13,
     established: 2006,
    "uniBanner": udetails11,
    "name": "TUM Asia",
    "country": "Singapore",
    "website": "www.tum-asia.edu.sg",
    "image": u11,
    "logo": logo4,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "TUM Asia, the Asian campus of Germany’s Technical University of Munich (TUM), was established in 2002 as the first-ever German-Asian university partnership. Located in Singapore, it offers master's and bachelor's degree programs in collaboration with top local institutions such as the National University of Singapore (NUS), Nanyang Technological University (NTU), and the Singapore Institute of Technology (SIT). </br> </br> TUM Asia's programs are taught in English by professors and industry experts from Germany and Singapore, blending academic rigor with real-world relevance.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "While TUM Asia does not appear in global university rankings like QS or THE, it benefits from TUM's strong reputation as Germany’s #1 university. TUM is recognized as one of the three elite universities by the German government and has received an Excellence Award.</br> </br> TUM Asia is also recognized by Singapore’s Ministry of Education as an Institute of Higher Learning and is regularly audited by the Council of Private Education.", // Add from image/data
    "intakes": "Bachelor's programs at TUM Asia, conducted in collaboration with SIT, typically have an application window from January to March each year." // Add from image/data
  },
  {
    "id": 12,
     numericRanking: 15,
     established: 2020,
    "uniBanner": udetails12,
    "name": "Embry-Riddle Aeronautical University",
    "country": "Singapore",
    "website": "www.erau.edu",
    "image": u12,
    "logo": logo4,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "Embry‑Riddle Aeronautical University (ERAU), founded in 1926, is a specialized private institution and the largest accredited university system focused solely on aviation and aerospace education. With main residential campuses in Daytona Beach, Florida and Prescott, Arizona, plus online and global branch campuses (including Singapore), it enrolls nearly 31,000 students across undergraduate and graduate programs.</br> </br> ERAU is renowned worldwide for degrees in aeronautical science, aerospace engineering, aviation business, and cybersecurity, and operates industry-aligned research facilities such as the Aerospace Research and Technology Park adjacent to the Daytona Beach campus", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "ERAU consistently ranks as a national leader in aviation and aerospace education and STEM fields. In the U.S. News & World Report 2024–25 rankings, its Daytona Beach campus is ranked #5 among Regional Universities in the South.</br> </br> ERAU also holds strong reputational standing within aerospace industries, serving as a recognized feeder school to organizations like NASA, Boeing, and SpaceX", // Add from image/data
    "intakes": "Embry‑Riddle operates on a semester calendar and offers several intakes annually for international and domestic students. Major entry points include Fall (August–December) with a priority application deadline of May 1, Spring (January–May) with a October 1 deadline, and Summer terms A and B (May–June and June–August), both with March 1 deadlines for summer admission.</br> </br> International applicants are advised to submit their applications at least 90 days before the intended term start to ensure timely processing and housing placement" // Add from image/data
  },
  {
    "id": 13,
     numericRanking: 36,
       established: 2020,
    "uniBanner": udetails13,
    "name": "University of Melbourne",
    "country": "Australia",
    "website": "www.unimelb.edu.au",
    "image": u13,
    "logo": logo1,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "The University of Melbourne is one of Australia’s oldest and most prestigious universities, established in 1853. Located in the heart of Melbourne, Victoria, it is a member of the Group of Eight, an alliance of leading Australian research universities. The university is widely recognized for its academic excellence, world-class research, and innovative teaching methods. It offers a diverse range of undergraduate and postgraduate programs across faculties such as Arts, Business and Economics, Education, Engineering, Law, Medicine, Science, and more. With a vibrant campus life and a strong emphasis on student experience, the University of Melbourne attracts a large international student population and maintains global partnerships to support research collaboration and student mobility.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "The University of Melbourne is Australia’s premier research institution, established in 1853 and a founding member of the prestigious Group of Eight. With a vibrant international campus of over 53,000 students—including around 45% from overseas—it delivers world-class programs across faculties such as Arts, Law, Medicine, Engineering, Business, and Data Science. </br> </br> In the QS World University Rankings 2026, Melbourne placed 19th globally, maintaining its position as the top university in Australia with an overall score of 90.8/100, excelling in academic reputation (99.7) and employer reputation (98.3)", // Add from image/data
    "intakes": "The University of Melbourne offers two primary intakes for international students: Semester 1, beginning in February/March, and Semester 2, starting in July. Semester 1 is the main intake, with most undergraduate and postgraduate programs open for admission during this period. Application deadlines for Semester 1 typically fall around October 31 for undergraduate programs and August 31 for postgraduate coursework in the preceding year. Semester 2 offers a mid-year entry option for a select number of programs, with deadlines usually around March 31 for undergraduates and January 31 for postgraduate coursework." // Add from image/data
  },
  {
    "id": 14,
     numericRanking: 12,
       established: 2025,
    "uniBanner": udetails14,
    "name": "The University of Queensland",
    "country": "Australia",
    "website": "www.uq.edu.au",
    "image": u14,
    "logo": logo1,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "The University of Queensland (UQ), established in 1909, is one of Australia’s oldest and most prestigious public research universities. Located primarily in Brisbane, Queensland, UQ has built a global reputation for academic excellence, cutting-edge research, and innovation. The university operates across multiple campuses, including St Lucia, Gatton, and Herston, and offers a broad range of undergraduate, postgraduate, and doctoral programs across disciplines such as science, business, engineering, humanities, medicine, and agriculture. UQ is a founding member of the Group of Eight (Go8) – a coalition of leading Australian universities – and is recognized for its strong industry links, entrepreneurial support, and high-impact research that addresses global challenges. With a diverse student population and world-class facilities, UQ remains committed to nurturing future leaders and advancing global knowledge.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "The University of Queensland (UQ), founded in 1909 in Brisbane, continues to hold a strong position among Australia’s leading institutions and is consistently ranked within the top 50 globally. In the 2026 QS World University Rankings, UQ sits at #42 globally and 6th nationally, and in the 2025 Times Higher Education Rankings it is placed #77 in the world and 5th in Australia. Q achieved an aggregate ranking of #53 in 2024, across QS, THE, and ARWU metrics, placing it 4th within Australia", // Add from image/data
    "intakes": "The University of Queensland offers two primary intakes for international students: Semester 1 (February–March) and Semester 2 (July–August). For Semester 1, 2026, the application deadline is November 30, 2025, while for Semester 2, 2025, the deadline is May 31, 2025 . Postgraduate coursework programs typically have application deadlines of January 31 for Semester 1 and June 30 for Semester 2 .</br> </br> UQ also offers a Summer Semester (December–February) for certain programs, with applications generally closing by October 31 ." // Add from image/data
  },
  {
    "id": 15,
     numericRanking: 7,
       established:1935,
    "uniBanner": udetails15,
    "name": "University of Vermont",
    "country": "USA",
    "website": "www.uvm.edu",
    "image": u15,
    "logo": logo2,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "The University of Vermont (UVM), established in 1791, is a public land-grant research university located in Burlington, Vermont. As the oldest university in Vermont and the fifth-oldest in New England, UVM offers a rich academic tradition combined with a commitment to sustainability and community engagement. The university comprises nine schools and colleges, offering over 100 undergraduate majors and more than 100 graduate programs. UVM is classified as an R1: Doctoral Universities—Very high research activity institution, highlighting its significant research contributions. The university's mission emphasizes preparing students to be accountable leaders dedicated to global community, effective problem-solving, and ethical conduct.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "n the 2025 edition of U.S. News & World Report, UVM is ranked #121 among National Universities in the United States . Internationally, the university holds the #544 position in the Best Global Universities rankings, with notable subject-specific rankings including #368 in Biology and Biochemistry, #161 in Ecology, and #299 in Psychiatry/Psychology.Additionally, UVM is recognized for its commitment to sustainability, ranking #8 among the Top 50 Green Colleges by Princeton Review in 2025 .", // Add from image/data
    "intakes": "The University of Vermont operates on a semester system with two main intakes for both undergraduate and graduate students. The primary intake is the Fall semester, starting in August, with application deadlines typically falling between January and March. A secondary intake is available for the Spring semester, beginning in January, where applications generally close around October." // Add from image/data
  },
  {
    "id": 16,
     numericRanking: 3,
       established: 1949,
    "uniBanner": udetails16,
    "name": "Drexel University",
    "country": "USA",
    "website": "www.drexel.edu",
    "image": u16,
    "logo": logo2,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "Drexel University is a private research institution located in Philadelphia, Pennsylvania, founded in 1891 by financier and philanthropist Anthony J. Drexel. Recognized as a global R1-level research university, Drexel is renowned for its distinctive cooperative education (co-op) program, which integrates academic study with paid, full-time employment in fields related to students' academic interests. This program spans over 75 disciplines and is one of the largest of its kind in the nation. In addition to its main campus in University City, Drexel operates campuses in West Philadelphia, Malvern, and Washington, D.C., and offers a robust online education platform. The university serves approximately 24,205 students, including 15,346 undergraduates and 8,859 graduate students.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "Drexel University holds a solid reputation both nationally and globally. According to the 2025 Times Higher Education World University Rankings, it is ranked within the 351–400 range worldwide. In U.S. News & World Report, Drexel is placed at #428 among Best Global Universities and boasts strong graduate program rankings, with engineering ranked #75 and law also at #75, including specialties like Trial Advocacy in the top 10. Additionally, Drexel ranks #296 in the Webometrics global rankings and #150 nationally according to Niche, excelling in areas such as Culinary Arts and Nursing.", // Add from image/data
    "intakes": "Drexel operates on a quarter-based academic calendar with four intakes each year: Fall (September), Winter (January), Spring (March), and Summer (June).</br> </br> Application deadlines vary by program and intake, so prospective students should check Drexel’s admissions pages for specific deadlines relevant to their course of interest to ensure timely application submission." // Add from image/data
  },
  {
    "id": 17,
     numericRanking: 5,
       established: 1953,
    "uniBanner": udetails17,
    "name": "Singapore Management University",
    "country": "Singapore",
    "website": "www.smu.edu.sg",
    "image": u17,
    "logo": logo4,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "Singapore Management University (SMU), founded in 2000, is a dynamic and autonomous institution located in the heart of Singapore. It offers a broad range of undergraduate and postgraduate programs across eight specialized schools, including business, law, economics, computing, and social sciences. SMU is distinguished by its interactive and collaborative learning approach, small class sizes, and strong emphasis on real-world applications and industry engagement. The university’s vibrant city campus fosters close ties with government and business sectors, providing students with valuable networking and internship opportunities. Notably, SMU’s Lee Kong Chian School of Business has earned triple accreditation (AACSB, EQUIS, and AMBA), underscoring its commitment to academic excellence and global standards.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "Singapore Management University (SMU) has demonstrated notable progress in global rankings. In the 2026 QS World University Rankings, SMU advanced to 511th place, a significant improvement from its previous ranking of 585th in 2025.</br> </br> In subject-specific rankings, SMU's Lee Kong Chian School of Business has achieved remarkable positions. The Master of Science in Wealth Management program was ranked first in Asia and second globally in the 2025 QS Masters in Finance Rankings.  Additionally, the SMU MBA program ranked 5th in Asia and 41st globally in the same year. These rankings underscore SMU's commitment to academic excellence and its growing reputation in the global educational landscape.", // Add from image/data
    "intakes": "Singapore Management University (SMU) offers multiple intakes to accommodate the needs of its diverse student body. For postgraduate programs such as the Master of IT in Business (MITB), there are two main intakes: one in August, with applications typically closing in June, and another in January, with deadlines around October. Other graduate programs also follow similar timelines, with application deadlines varying between June for the August intake and November for the January intake.</br> </br> Undergraduate applications generally open in mid-October and close by mid-March. Prospective students are advised to consult the specific program pages for precise application deadlines and requirements to ensure timely submission." // Add from image/data
  },
  {
    "id": 18,
     numericRanking: 10,
       established: 1920,
    "uniBanner": udetails18,
    "name": "National University of Singapore",
    "country": "Singapore",
    "website": "www.nus.edu.sg",
    "image": u18,
    "logo": logo4,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "The National University of Singapore (NUS) is Singapore’s oldest and most prestigious university, established in 1905. Renowned for its rigorous academic programs and high-quality research, NUS offers a global approach to education, research, and entrepreneurship, with a focus on Asian perspectives and expertise. The university comprises 16 faculties and schools across three campuses, serving a diverse student body of over 40,000 individuals from more than 100 countries. NUS is also recognized for its NUS Overseas Colleges program, which operates in over 15 cities worldwide, providing students with unique opportunities for global exposure and entrepreneurial experience.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "In the 2025 QS World University Rankings, NUS retained its position as the highest-ranked Asian university, securing the 8th spot globally.  Additionally, NUS is ranked 3rd in Asia according to the QS Asia University Rankings 2025.  In the 2025 Times Higher Education World University Rankings, NUS achieved its highest global position to date, ranking 17th worldwide and 3rd in Asia.", // Add from image/data
    "intakes": "NUS offers multiple intakes for its undergraduate and graduate programs. Undergraduate applications typically open in mid-October and close by mid-March. Graduate program application deadlines vary by program, with some closing in June for the August intake and in November for the January intake. Prospective students are advised to consult the specific program pages for precise application deadlines and requirements to ensure timely submission.</br> </br>  NUS's commitment to academic excellence, global engagement, and research innovation solidifies its position as a leading institution in Asia and the world." // Add from image/data
  },
  {
    "id": 19,
      established: 1955,
     numericRanking: 18,
    "uniBanner": udetails19,
    "name": "McGill University",
    "country": "Canada",
    "website": "www.mcgill.ca",
    "image": u19,
    "logo": logo5,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "McGill University, established in 1821, is a prestigious public institution located in Montreal, Quebec, Canada. Renowned for its rigorous academic programs and research excellence, McGill offers degrees in over 300 fields of study across various disciplines. The university comprises six primary faculties: Arts, Science, Medicine, Education, Engineering, and Management. With an enrollment of more than 39,000 students, McGill attracts a diverse student body, including a significant proportion of international students .", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "McGill University is ranked 27th globally in the 2026 QS World University Rankings and is recognized as Canada’s top university. It ranks highly across. </br> </br> numerous disciplines such as psychology, medical and health sciences, law, education, life sciences, social sciences, engineering, computer science, physical sciences, and business and economics. The Schulich School of Music is also internationally acclaimed, ranking within the top 20 worldwide.", // Add from image/data
    "intakes": "McGill University offers multiple intakes for undergraduate and graduate programs. Undergraduate applications typically open in mid-October and close by mid-March. Graduate program deadlines vary by course, with common deadlines in June for the August intake and November for the January intake.</br> </br> Applicants are encouraged to check individual program requirements to meet the specific deadlines." // Add from image/data
  },
  {
    "id": 20,
     numericRanking: 15,
       established: 2013,
    "uniBanner": udetails20,
    "name": "York University",
    "country": "Canada",
    "website": "www.yorku.ca",
    "image": u20,
    "logo": logo5,
    "acceptanceRate": "30%", // Add from image/data
    "totalInternationalStudents": "7700", // Add from image/data
    "placementRate": "93%", // Add from image/data
    "studentTeacherRatio": "16:1", // Add from image/data
    "overview": "York University, located in Toronto, Canada, is one of the country’s leading comprehensive universities known for its strong commitment to research, innovation, and social justice. Established in 1959, it offers a wide range of undergraduate and graduate programs across various faculties including liberal arts, business, law, science, health, and engineering. York emphasizes interdisciplinary learning and community engagement, serving a diverse student body of over 55,000 students from around the world. The university is also recognized for its vibrant campus life and extensive support services that foster student success.", // Add from image/data
    "employability": "", // Add from image/data
    "rankings": "As of 2025, York University is ranked 333rd globally and 14th in Canada in the QS World University Rankings. The university has demonstrated significant improvement, rising 29 spots from the previous year. In the QS World University Rankings by Subject 2025, York excels in over 15 disciplines, placing in the top 10 in Canada. Notably, it ranks 4th in Canada for Geography, 6th for Arts and Humanities, and 8th for Social Sciences and Management. Additionally, York University holds a top 40 position globally in the 2025 Times Higher Education (THE) Impact Rankings, reflecting its commitment to advancing the United Nations Sustainable Development Goals.", // Add from image/data
    "intakes": "York University offers multiple intakes for its undergraduate programs throughout the year. The main intake is in the fall semester, starting in September, with applications accepted until the program reaches capacity, though for guaranteed consideration, applicants are advised to apply by mid-January. There are also winter and summer intakes in January and May respectively, with application deadlines in November and April.Certain programs, such as Nursing and Social Work, have earlier specific deadlines that applicants must meet. For graduate programs, intake periods and deadlines vary by course, so prospective students should refer to individual program details to ensure timely application submission." // Add from image/data
  }
];

export  const offers = [
        {
            pic: offer1,
            hoverPic: hover1,
            title: "University & Course Selection",
            desc: "Tailored guidance based on your academic background, career goals, and interests."
        },
        {
            pic: offer2,
            hoverPic: hover2,
            title: "Application Assistance",
            desc: "Complete support in preparing and submitting applications to universities."
        },
        {
            pic: offer3,
            hoverPic: hover3,
            title: "Visa Processing",
            desc: "Expert help with student visa documentation, submissions, and follow-ups."
        },
        {
            pic: offer4,
            hoverPic: hover4,
            title: "Scholarship Advice & Financial Planning",
            desc: "Information on available scholarships and budgeting for study abroad."
        },
        {
            pic: offer5,
            hoverPic: hover5,
            title: "Pre-Departure Support",
            desc: "Guidance on travel, cultural adaptation, and settling into student life in Australia."
        },
    ]