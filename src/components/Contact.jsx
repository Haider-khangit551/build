import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5ed907de-6b4d-4135-a56d-2193ade7c5c2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success('From Submitted Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            alert(data.message);
            toast.error(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setResult("");
        }
    };

    return (
        <div className='text-center overflow-x-hidden p-6 py-20 mt-[-50px] lg:px-32 w-full overflow-hidden' id='contact'>
            <h1 className='text-3xl md:text-4xl text-blue-900 mb-8'>Contact US</h1>
            <p className='text-center mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Togeather.</p>


            <form onSubmit={onSubmit} className='max-w-2xl mx-auto pt-3'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input
                            className='w-full border border-gray-500 rounded py-3 px-4 mt-2 outline-none'
                            name='name'
                            type="text"
                            placeholder='Enter Your Good Name'
                            required
                        />
                    </div>

                    <div className='w-full md:w-1/2 text-left md:pl-4 mt-6 md:mt-0'>
                        Your Email
                        <input
                            className='w-full border border-gray-500 rounded py-3 px-4 mt-2 outline-none'
                            name='email'
                            type="email"
                            placeholder='Enter Your E-mail'
                            required
                        />
                    </div>


                    <div className='w-full mt-6 text-left'>
                        Your Phone Number
                        <input
                            className='w-full border border-gray-500 rounded py-3 px-4 mt-2 outline-none'
                            name='number'
                            type="number"
                            placeholder='Enter Your Phone no.'
                            required
                        />
                    </div>
                </div>

                <div className='my-6 text-left'>
                    Message
                    <textarea
                        className='w-full border border-gray-500 rounded py-3 px-4 mt-2 h-48 resize-none outline-none'
                        name="message"
                        placeholder='Write Your Query.'
                        required>
                    </textarea>
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>
            </form>


        </div>
    )
}

export default Contact
