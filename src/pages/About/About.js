import React from 'react';
import picture from '../../images/siam.jpg';

const About = () => {
    return (
        <div>
            <img height='400' className='w-25 mx-auto d-block mt-2 justify-content-center align-items-center' src={picture} alt="" />
            <h2 className='text-center fw-bold text-primary mt-2'>Ahatasam Siam</h2>
            <p className='text-center mt-2'>This is Ahatasam Siam who is a student of Daffodil International University, department of Computer Science and Engineering.Now I am also studying a web development course in Programming Hero.After finishing this course I try to get a remote job in a foreign country.Now this course is my main focus because in near future I will become a good web developer,earn money and contribute my family IN SHA ALLAH .</p>
        </div>
    );
};

export default About;