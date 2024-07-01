import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {

    const { register, handleSubmit, watch } = useForm();
    const [total, setTotal] = useState(0);
    const formValues = watch();

    useEffect(() => {

        const registrationFee = parseFloat(formValues.registrationFee) || 0;
        const sportFee = parseFloat(formValues.sportFee) || 0;
        const shuttleFee = parseFloat(formValues.shuttleFee) || 0;

        setTotal(registrationFee + sportFee + shuttleFee);

    }, [formValues]);

    const onSubmit = async (data) => {



        //   // Calculate the total directly from the form data
        //   const registrationFee = parseFloat(data.registrationFee) || 0;
        //   const sportFee = parseFloat(data.sportFee) || 0;
        //   const shuttleFee = parseFloat(data.shuttleFee) || 0;
        //   const total = registrationFee + sportFee + shuttleFee;




        console.log(total);
        console.log(data);
        const formItems = {
            name : data.name, department: data.department,
            registrationFee : data.registrationFee,
            sportFee  : data.sportFee,
            shuttleFee : data.shuttleFee,
            email : data.email,
            phone : data.phone,
            total, 
            // mobileNo : data.mobileNo,

        }

        // console.log(total);
        // const  formData = await axios.post('http://localhost:3000/form-data', formItems)
        // // console.log(formData.data);
        // .then(res => {
        //     window.location.replace(res.url)
        //     console.log(res.data);
        // })
        // // .catch(err => {
        // //     console.log(err);
        // // })



        const response = await axios.post('http://localhost:3000/form-data', formItems);
            console.log("Server Response:", response.data);

            if (response.data.url) {
                // Redirect to the payment gateway URL
                window.location.href = response.data.url;
            } else {
                console.error("No URL returned from the server");
            }


    }

    return (

        <div className="p-40">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-6'>



                <div className="flex">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">*Name </span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            // placeholder="Aminul Islam"
                            defaultValue="Aminul Islam"
                            className="input input-bordered w-full"
                        />
                    </label>


                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Department : </span>
                        </div>
                        <input
                            {...register("department", { required: true })}
                            type="text"
                            // placeholder="EEE"
                            defaultValue="Physics"
                            className="input input-bordered w-full"
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email : </span>
                        </div>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="abc@gmail.com"
                            defaultValue="abc@gmail.com"
                            className="input input-bordered w-full"
                        />
                    </label>

                </div>




                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">*Registration Fee</span>
                    </div>
                    <input
                        {...register("registrationFee", { required: true })}
                        type="number"
                        placeholder="e.g., 250 TK"
                        defaultValue="250"
                        className="input input-bordered w-full"
                    />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">*Sport Fee</span>
                    </div>
                    <input
                        {...register("sportFee", { required: true })}
                        type="number"
                        placeholder="e.g., 250 TK" defaultValue="250"
                        className="input input-bordered w-full"
                    />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">*Shuttle Fee</span>
                    </div>
                    <input
                        {...register("shuttleFee", { required: true })}
                        type="number"
                        placeholder="e.g., 250 TK" defaultValue="250"
                        className="input input-bordered w-full"
                    />
                </label>


                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">*Mobile No.</span>
                    </div>
                    <input
                        {...register("phone", { required: true })}
                        type="number"
                        placeholder="01761743556" defaultValue="01761743556"
                        className="input input-bordered w-full"
                    />
                </label>

                {/* <button type="button" className="btn bg-gray-600 text">TOTAL: {total} TK</button> <br /> */}

                <button type="submit" className='btn'>Pay: {total}</button>
            </div>
        </form>
        </div>

    );
};

export default Form;