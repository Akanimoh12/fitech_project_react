import { useState } from 'react';
import Footer from '../components/footer';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeToTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
        console.log(formData);
    };

    return (
        <div className='  ' >

            <div className="sm:block md:block lg:flex justify-center mb-10 h-[550px] ">
                
                <div className="lg:w-[30vw] py-[30px] ">
                    <form
                        id="userForm"
                        className="p-[50px] sm:text-center md:text-center lg:text-left"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <h2 className="sm:w-full md:text-center lg:text-left font-bold w-full text-[20px]">
                                Please fill in details!
                            </h2>
                           
                        </div>

                        <label htmlFor="firstName">Full Name:</label><br />
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="p-[7px] border-[1px] border-black w-full rounded-[10px] md:w-[300px]"
                        /><br /><br />

                        <label htmlFor="lastName">Address:</label><br />
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="p-[7px] border-[1px] border-black w-full rounded-[10px] md:w-[300px]"
                        /><br /><br />

                        <label htmlFor="email">Email:</label><br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="p-[7px] border-[1px] border-black w-full rounded-[10px] md:w-[300px]"
                        /><br /><br />

                        <label htmlFor="password">Password:</label><br />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="p-[7px] border-[1px] border-black w-full rounded-[10px] md:w-[300px]"
                        /><br /><br />

                        <div className="mb-[20px]">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                id="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                required
                                className="form-checkbox h-2 w-2"
                            />
                            <span className="ml-2">I agree to the terms & conditions</span>
                        </div>

                        <input
                            type="submit"
                            value="Sign Up Now!"
                            className=" bg-red-400 p-[9px] w-[50%] rounded-[10px] md:w-[300px] text-white"
                        />
                    </form>
                </div>

                <img src="https://www.pdinsurance.co.nz/wp-content/uploads/2022/06/img_62b978f6017ec.jpg" className='sm:w-[50%] w-[90%] m-auto mt-[100px] rounded ' />
            </div>
            
            <Footer  />
        </div>
        
    );
}

export default Contact;