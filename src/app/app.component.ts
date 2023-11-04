import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeUser: number = -1;

  users = [
    {
      firstName: 'Sarah',
      lastName: 'Webster',
      imageSrc:
        'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1581449787543-SGM7VQG68H3UOJXLUJTU/los+angeles+business+commercial+headshot.jpg',
      job: 'Frontend Developer',
      address: {
        city: 'New York',
        country: 'USA',
      },
      experience: [
        {
          company: 'WebTech',
          job: 'Frontend Engineer',
          period: '2017-2022',
        },
        {
          company: 'DesignHub',
          job: 'UI Designer',
          period: '2015-2017',
        },
        {
          company: 'TechSolutions',
          job: 'Frontend Developer',
          period: '2023-Present',
        },
      ],
      skills: ['HTML', 'CSS', 'JavaScript'],
      studies: [
        {
          university: 'New York University',
          period: '2013-2017',
          domain: 'Web Development',
        },
        {
          school: 'Public High School',
          period: '2009-2013',
          domain: 'High School Diploma',
        },
        {
          college: 'New York Community College',
          period: '2007-2009',
          domain: 'General Studies',
        },
      ],
    },
    {
      firstName: 'Michael',
      lastName: 'Webster',
      imageSrc:
        'https://www.headshotlondon.co.uk/wp-content/uploads/2050/01/headshot_london_corporate_21.jpg',
      job: 'Backend Developer',
      address: {
        city: 'San Francisco',
        country: 'USA',
      },
      experience: [
        {
          company: 'CodeCraft',
          job: 'Backend Engineer',
          period: '2016-2021',
        },
        {
          company: 'DataWiz',
          job: 'Database Administrator',
          period: '2014-2016',
        },
        {
          company: 'TechSolutions',
          job: 'Backend Developer',
          period: '2023-Present',
        },
      ],
      skills: ['Node.js', 'SQL', 'API Development'],
      studies: [
        {
          university: 'Stanford University',
          period: '2012-2016',
          domain: 'Computer Science',
        },
        {
          school: 'San Francisco High School',
          period: '2008-2012',
          domain: 'High School Diploma',
        },
        {
          college: 'San Francisco State University',
          period: '2006-2008',
          domain: 'General Studies',
        },
      ],
    },
    {
      firstName: 'Emily',
      lastName: 'Jones',
      imageSrc:
        'https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-What-to-wear-for-womens-corporate-headshot-1.jpg',
      job: 'Full Stack Developer',
      address: {
        city: 'London',
        country: 'UK',
      },
      experience: [
        {
          company: 'WebSolutions',
          job: 'Full Stack Engineer',
          period: '2017-2022',
        },
        {
          company: 'TechTeam',
          job: 'Web Developer',
          period: '2015-2017',
        },
        {
          company: 'TechSolutions',
          job: 'Full Stack Developer',
          period: '2023-Present',
        },
      ],
      skills: ['React', 'Node.js', 'MongoDB'],
      studies: [
        {
          university: 'University of London',
          period: '2013-2017',
          domain: 'Web Development',
        },
        {
          school: 'London High School',
          period: '2009-2013',
          domain: 'High School Diploma',
        },
        {
          college: 'London College',
          period: '2007-2009',
          domain: 'General Studies',
        },
      ],
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      imageSrc:
        'https://img.freepik.com/premium-photo/handsome-young-adult-caucasian-blond-man-about-30-years-oldfolding-armshands-wearing-white-shirt-glasses-standing-by-stone-wallbusinessman-startupper-portrait-concept_383342-643.jpg?w=2000',
      job: 'Data Analyst',
      address: {
        city: 'Chicago',
        country: 'USA',
      },
      experience: [
        {
          company: 'DataTech',
          job: 'Data Analyst',
          period: '2018-2022',
        },
        {
          company: 'Data Insights',
          job: 'Data Scientist',
          period: '2015-2018',
        },
        {
          company: 'DataWizards',
          job: 'Senior Data Analyst',
          period: '2023-Present',
        },
      ],
      skills: ['Data Analysis', 'Python', 'SQL'],
      studies: [
        {
          university: 'University of Chicago',
          period: '2011-2015',
          domain: 'Data Science',
        },
        {
          school: 'Chicago High School',
          period: '2007-2011',
          domain: 'High School Diploma',
        },
        {
          college: 'Chicago College',
          period: '2005-2007',
          domain: 'General Studies',
        },
      ],
    },
    {
      firstName: 'Amanda',
      lastName: 'Smith',
      imageSrc:
        'https://images.squarespace-cdn.com/content/v1/5dc5af1ad55ff401764113e5/1632108134781-YS4PJAOF16Y50S8C98IW/DSC_2676_HR_.jpg?format=750w',
      job: 'Product Manager',
      address: {
        city: 'Seattle',
        country: 'USA',
      },
      experience: [
        {
          company: 'Product Innovations',
          job: 'Product Manager',
          period: '2017-2022',
        },
        {
          company: 'TechStart',
          job: 'Project Manager',
          period: '2015-2017',
        },
        {
          company: 'InnoTech',
          job: 'Senior Product Manager',
          period: '2023-Present',
        },
      ],
      skills: ['Product Management', 'Agile Methodology', 'Market Analysis'],
      studies: [
        {
          university: 'University of Washington',
          period: '2013-2017',
          domain: 'Business Administration',
        },
        {
          school: 'Seattle High School',
          period: '2009-2013',
          domain: 'High School Diploma',
        },
        {
          college: 'Seattle College',
          period: '2007-2009',
          domain: 'General Studies',
        },
      ],
    },
    {
      firstName: 'Sophie',
      lastName: 'Miller',
      imageSrc:
        'https://sha.cornell.edu/wp-content/uploads/sites/4/2020/12/web-Sonia-Cheng-CEO-Rosewood-Hotel-Group.jpg',
      job: 'Marketing Specialist',
      address: {
        city: 'Sydney',
        country: 'Australia',
      },
      experience: [
        {
          company: 'MarketPro',
          job: 'Marketing Specialist',
          period: '2016-2022',
        },
        {
          company: 'DigitalBoost',
          job: 'Digital Marketing Manager',
          period: '2014-2016',
        },
        {
          company: 'Sydney Media Group',
          job: 'Senior Marketing Specialist',
          period: '2023-Present',
        },
      ],
      skills: ['Digital Marketing', 'Social Media Marketing', 'SEO'],
      studies: [
        {
          university: 'University of Sydney',
          period: '2012-2016',
          domain: 'Marketing and Communication',
        },
        {
          school: 'Sydney High School',
          period: '2008-2012',
          domain: 'High School Diploma',
        },
        {
          college: 'Sydney College of Marketing',
          period: '2006-2008',
          domain: 'General Studies',
        },
      ],
    },
    {
      firstName: 'Mark',
      lastName: 'Johnson',
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4e4Y9ghgCQ_JLfHrjNkZBbP20loPPTzWNTA&usqp=CAU',
      job: 'Software Engineer',
      address: {
        city: 'Toronto',
        country: 'Canada',
      },
      experience: [
        {
          company: 'TechSolutions Canada',
          job: 'Software Engineer',
          period: '2017-2022',
        },
        {
          company: 'Canadian Innovations',
          job: 'Software Developer',
          period: '2015-2017',
        },
        {
          company: 'MapleTech',
          job: 'Senior Software Engineer',
          period: '2023-Present',
        },
      ],
      skills: ['Java', 'C++', 'Software Development'],
      studies: [
        {
          university: 'University of Toronto',
          period: '2013-2017',
          domain: 'Computer Science',
        },
        {
          school: 'Toronto High School',
          period: '2009-2013',
          domain: 'High School Diploma',
        },
        {
          college: 'Toronto College of Technology',
          period: '2007-2009',
          domain: 'General Studies',
        },
      ],
    },
    {
      firstName: 'Megan',
      lastName: 'Adams',
      imageSrc:
        'https://www.dodgeandcox.com/content/dam/dc/us/en/images/widescreen/profile/keiko_horkan_5662d_800x450.jpg/_jcr_content/renditions/Desktop.jpeg',
      job: 'UX Designer',
      address: {
        city: 'Paris',
        country: 'France',
      },
      experience: [
        {
          company: 'DesignCraft',
          job: 'UX Designer',
          period: '2018-2022',
        },
        {
          company: 'UX Innovations',
          job: 'User Experience Analyst',
          period: '2016-2018',
        },
        {
          company: 'ParisTech Solutions',
          job: 'Senior UX Designer',
          period: '2023-Present',
        },
      ],
      skills: [
        'User Research',
        'Wireframing, Prototyping',
        'Usability Testing',
      ],
      studies: [
        {
          university: 'Paris Design School',
          period: '2012-2016',
          domain: 'User Experience Design',
        },
        {
          school: 'Paris High School',
          period: '2008-2012',
          domain: 'High School Diploma',
        },
        {
          college: 'Paris College of Art',
          period: '2006-2008',
          domain: 'General Studies',
        },
      ],
    },
    {
      firstName: 'Kevin',
      lastName: 'Brown',
      imageSrc:
        'https://media.istockphoto.com/id/831902158/photo/confidence-got-him-to-the-top.jpg?s=612x612&w=0&k=20&c=NPUySFpIi4KQtcBRKeLQLObP5TYaViw9WhHb9NwJbVw=',
      job: 'Project Manager',
      address: {
        city: 'Toronto',
        country: 'Canada',
      },
      experience: [
        {
          company: 'ProjectPro',
          job: 'Project Manager',
          period: '2016-2022',
        },
        {
          company: 'TechProjects',
          job: 'Technical Project Manager',
          period: '2014-2016',
        },
        {
          company: 'Maple Projects',
          job: 'Senior Project Manager',
          period: '2023-Present',
        },
      ],
      skills: [
        'Project Management',
        'Agile Methodology',
        'Stakeholder Communication',
      ],
      studies: [
        {
          university: 'University of Toronto',
          period: '2012-2016',
          domain: 'Business Administration',
        },
        {
          school: 'Toronto High School',
          period: '2008-2012',
          domain: 'High School Diploma',
        },
        {
          college: 'Toronto College of Technology',
          period: '2006-2008',
          domain: 'General Studies',
        },
      ],
    },
    {
      firstName: 'Laura',
      lastName: 'Clark',
      imageSrc:
        'https://capitalregionchamber.com/wp-content/uploads/2016/08/Myers-Molly-1.jpg',
      job: 'Graphic Designer',
      address: {
        city: 'Berlin',
        country: 'Germany',
      },
      experience: [
        {
          company: 'DesignCrafters',
          job: 'Graphic Designer',
          period: '2017-2022',
        },
        {
          company: 'ArtisticSolutions Germany',
          job: 'Visual Designer',
          period: '2015-2017',
        },
        {
          company: 'Berlin Art Studios',
          job: 'Senior Graphic Designer',
          period: '2023-Present',
        },
      ],
      skills: ['Adobe Creative Suite', 'Illustration', 'Layout Design'],
      studies: [
        {
          university: 'Berlin School of Design',
          period: '2013-2017',
          domain: 'Graphic Design',
        },
        {
          school: 'Berlin High School',
          period: '2009-2013',
          domain: 'High School Diploma',
        },
        {
          college: 'Berlin College of Art',
          period: '2007-2009',
          domain: 'General Studies',
        },
      ],
    },
  ];

  selectActiveUser(indexOfActiveUser: number) {
    this.activeUser = indexOfActiveUser;
  }
}
