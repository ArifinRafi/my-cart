import React from 'react';
import { ProfileCard } from '../components/TeamCard';
import Arifin from '../assets/Arifin.jpg'
import Sihab from '../assets/sihab.jpg'
import Ratul from '../assets/ratul.jpg'
import Ahnaf from '../assets/ahnaf.jpg'
import Mahbub from '../assets/mahbub.jpg'
import Amanto from '../assets/amanto.jpg'

const About = () => {
  const members = [
    { img:Arifin, name:'Arifin Rafi', position: 'Chief Executive Officer' },
    { img:Sihab, name: 'Sihab Sahriar', position: 'Chief Technology Officer' },
    { img:Mahbub, name: 'Mahbub Ul Haque', position: 'Chief Operating Officer' },
    { img:Ratul,name: 'Ratul Hasan', position: 'Chief Product Officer' },
    {img:Ahnaf, name: 'Ahnaf Akib', position: 'Accounts and Finance Executive' },
  ];
  const details=
    `At Roboway, we envision a future where automation and technology 
    seamlessly integrate into every aspect of life, empowering individuals 
    and businesses to achieve more with less effort. We aspire to be at 
    the forefront of this transformation, leading the way in the 
    development of innovative solutions that revolutionize industries, 
    enhance convenience, and promote sustainability. our mission is to create 
    innovative automated solutions that simplify 
    and enhance the lives of individuals and 
    businesses. We believe in harnessing the 
    power of automation to make everyday tasks 
    more efficient, cost-effective, and 
    environmentally friendly.
    `;
  ;

  return (
    
    <div className='my-32 max-w-screen-2xl mx-auto'>
      <div>
        <section className='grid justify-items-center'>
          <h1 className='text-2xl font-bold'>About</h1>
          <div className='bg-white my-12 text-2xl rounded-xl max-h-lg p-10'>
            {details}
          </div>
        </section>
      </div>

      <section className='grid justify-items-center'>
      <h1 className='text-2xl my-12  font-bold'>Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
        {members.map((member, index) => (
          <div key={index}>
            <ProfileCard img={member.img} name={member.name} position={member.position} />
          </div>
        ))}
      </div>

      </section>
      
    </div>
  );
};

export default About;
