import React from 'react';
import { ButtonPrimary } from './PrimaryButton';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
        const navigate = useNavigate();
        const handleUser = event => {
                event.preventDefault();
                const form = event.target;
                const name = form.name.value;
                const email = form.email.value;
                const phone = form.phone.value;
                const address = form.address.value;
                const subject = form.subject.value;
                const catagory = form.catagory.value;
                const description = form.description.value;
                
                navigate('/');
                
                
                
                const user ={name, email, phone, address, subject, catagory, description};
                alert('Form submitted successfully');
                console.log(typeof(user));
        fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                        'content-type': 'application/json'
                },
                body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
                console.log(data);
                
                
                
        })
        .catch(error => {
                console.log('Fetch error', error);
                
        })
                
        }
        
        return (
                <div className='max-w-screen-2xl  mx-auto  drop-shadow-lg'>
                        <h1 className='text-2xl font-semibold mt-24'>
                        Please take your time and fill the form below. All information you share will be private and only Project Manager can access it.
                        </h1>
                   <form onSubmit={handleUser} className='my-12 bg-gray-200   h-[900px]'>
                   <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center '>
                   <input  type="text" name='name' placeholder="Name" className=" required input input-bordered lg:w-full w-4/5 rounded-md max-w-lg mt-12"
                    />
                    <input type="email" name='email' placeholder="Email" className="input input-bordered lg:w-full w-4/5 rounded-md max-w-lg mt-12"
                    />
                    <input  type="number" name='phone' placeholder="Phone Number" className="input input-bordered lg:w-full w-4/5 rounded-md max-w-lg mt-12"
                    />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered lg:w-full w-4/5 rounded-md max-w-lg mt-12"
                    />
                   </div>

                   

                   <div className='grid  justify-items-center mt-12'>
                   <input type="text" name='subject' placeholder="Subject (Project requirements)" className="input  input-bordered lg:w-full w-4/5 rounded-md lg:max-w-2lg  "
                    /> <br />
                   <select name='catagory' className="input mb-8 input-bordered lg:w-full w-4/5  rounded-md max-w-2lg">
            <option value="" disabled selected>
              Select Category
            </option>
            <option  value="Category1">IoT</option>
            <option  value="Category2">Web App</option>
            <option  value="Category3">Mobile App</option>
          </select>
                    <input type="text" name='description' placeholder="Describe your project in words" className="input input-bordered lg:w-full w-4/5 h-[200px] rounded-md max-w-2lg"
                    />
                    <div className='mt-12'>
                    <ButtonPrimary title='Submit' ></ButtonPrimary>
                    </div>
                   </div>
                        </form>     
                </div>
        );
};

export default Form;