"use client";
import ky from 'ky';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string
    email: string
    phone?: string
    message: string
}
function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setSubmitting(true);
        const dataPost = { ...data };
        if (dataPost.phone === "") {
            delete dataPost.phone;
        }
        const res = await ky.post("https://vernanbackend.ezlab.in/api/contact-us/", { json: dataPost });
        if (res.status === 200 || res.status == 201) {
            setSubmitted(true);
        }
        setSubmitting(false);
    };

    return (
        <div className="h-dvh flex flex-col sm:flex-row snap-start justify-center gap-2 sm:gap-5 md:gap-10 md:justify-around items-center px-4 md:px-0">
            <div className="hidden sm:block sm:w-2/6 lg:w-1/3">Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away. Let’s catch up over coffee. Great stories always begin with a good conversation</div>
            <div className="sm:w-2/6 lg:w-1/3 flex flex-col gap-3 md:gap-11">
                <div className="font-halant flex flex-col gap-2">
                    <p className="text-center text-2xl md:text-4xl">Join the Story</p>
                    <p className="text-center text-lg md:text-2xl">Ready to bring your vision to life? Let’s talk.</p>
                </div>
                <div className="w-full font-instrument text-sm flex flex-col gap-2 md:gap-4">
                    {submitted && <p className='bg-green-100 p-2 text-green-500 flex gap-1 justify-center items-center'>
                        <Check size={20} /> Your form has been submitted
                    </p>}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-5">

                        {/* INPUT NAME */}
                        <div className="w-full flex flex-col gap-1">
                            <input className="p-2 bg-white rounded-sm w-full" placeholder="Your name"
                                {...register("name", { required: "* Name is required" })} />
                            {errors.name && <p className="text-red-600 pl-2">{errors.name ? errors.name.message : "* This field is required"}</p>}
                        </div>

                        {/* INPUT EMAIL */}
                        <div className="w-full flex flex-col gap-1">
                            <input className="p-2 bg-white rounded-sm w-full" placeholder="Your email" {
                                ...register("email", {
                                    required: "* Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "* Please enter a valid email address",
                                    },
                                })} />
                            {errors.email && <p className="text-red-600 pl-2">{errors.email ? errors.email.message : "* This field is required"}</p>}
                        </div>
                        {/* INPUT PHONE */}
                        <div className="w-full flex flex-col gap-1">
                            <input className="p-2 bg-white rounded-sm w-full" placeholder="phone number (optional)"
                                {...register("phone", {
                                    minLength: {
                                        value: 10,
                                        message: "* Please enter a valid phone number"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "* Please enter a valid phone number"
                                    }
                                })} />
                            {errors.phone && <p className="text-red-600 pl-2">{errors.phone ? errors.phone.message : "* This field is required"}</p>}
                        </div>
                        {/* INPUT MESSAGE */}
                        <div className="w-full flex flex-col gap-1">
                            <textarea rows={4} className="p-2 bg-white rounded-sm w-full" placeholder="Your message"
                                {...register("message", { required: "* Message is required" })} />
                            {errors.message && <p className="text-red-600 pl-2">{errors.message ? errors.message.message : "* This field is required"}</p>}
                        </div>
                        {/* INPUT SUBMIT BUTTON */}
                        <div className="flex justify-center">
                            <input type="submit" value={submitting ? "Submitting..." : "Submit"} disabled={submitting} className={`border rounded-3xl py-2 px-4 text-white ${submitting ? "bg-[#873216]" : "bg-[#F15D2B]"}`}></input>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center text-orange-600 font-semibold">
                    varnanfilms.co.in │
                    +91 98736 84567
                </div>
            </div>
        </div>
    )
}

export default Contact
