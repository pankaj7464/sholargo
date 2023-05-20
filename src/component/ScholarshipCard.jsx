import React from 'react';
import '../css/scholarship-card.css';
import image1 from "../images/black-male-student-working-library-e1627688198213-768x432.jpeg"
import image2 from "../images/grad-school-scholarships-e1629235467815.jpeg"
import image3 from "../images/high-school-junior-scholarships.jpg"
import image4 from "../images/high-school-senior-student-on-laptop.jpeg"
import image5 from "../images/scholarships-for-college-students.jpg"
import image6 from "../images/woman-holding-scholarship-winnings-768x512.jpeg"


const ScholarshipCard = () => {
    const scholarships = [
        {
          category: 'Scholarships for High School Juniors',
          totalValue: '$740,950+ total value',
          scholarshipsCount: '88 scholarships still accepting applications',
          topScholarships: 'Top 148 Scholarships for High School Juniors in May 2023',
          photo: image1
        },
        {
          category: 'Scholarships for High School Seniors',
          totalValue: '$77,789,130+ total value',
          scholarshipsCount: '780 scholarships still accepting applications',
          topScholarships: 'Top 719 Scholarships for High School Seniors in May 2023',
          photo: image2
        },
        {
          category: 'Scholarships for Women',
          totalValue: '$199,000+ total value',
          scholarshipsCount: '64 scholarships still accepting applications',
          topScholarships: 'Top 181 Scholarships for Women in May 2023',
          photo: image3
        },
        {
          category: 'Scholarships for Black Students',
          totalValue: '$437,000+ total value',
          scholarshipsCount: '86 scholarships still accepting applications',
          topScholarships: 'Top 116 Scholarships for Black Students in May 2023',
          photo: image4
        },
        {
          category: 'Scholarships for Graduate Students',
          totalValue: '$15,287,820+ total value',
          scholarshipsCount: '941 scholarships still accepting applications',
          topScholarships: 'Top 903 Scholarships for Graduate Students in May 2023',
          photo: image5
        },
        {
          category: 'Scholarships for College Students',
          totalValue: '$3,807,855+ total value',
          scholarshipsCount: '1649 scholarships still accepting applications',
          topScholarships: 'Top 60+ Scholarships for College Students in May 2023',
          photo: image6
        }
      ];
      

    return (
        <>
            {
                scholarships.map(item => {
                    return <div className="scholarship-card">
                        <div className="category-column">
                            <h1>{item.category}</h1>
                        </div>
                        <div className="info-column">
                            <p>{item.totalValue}</p>
                            <p>{item.scholarshipsCount}</p>
                        </div>
                        <div className="photo-column">
                            {item.photo && <img src={item.photo} alt="Scholarship" />}
                        </div>
                    </div>
                })
            }

        </>
    );
};

export default ScholarshipCard;
