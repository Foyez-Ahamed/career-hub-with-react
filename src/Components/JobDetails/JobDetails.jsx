import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == idInt);
    const {job_description, logo, job_title, company_name, remote_or_onsite, location, salary, job_responsibility, contact_information} = job || {};
    // console.log(job);
    // console.log(jobs,id);
    const handleJobApplied = () =>  {
        saveJobApplication(idInt);
        toast("You have applied successfully!")
    };


    return (
        <>

        <section>
            <div className="flex justify-center items-center"><h1>Job details</h1></div>

            <div className=" flex justify-between mt-16">
                <div className="flex-1 gap-6">
                    <h1>Job description : {job_description}</h1>
                    <p>Job responsibility : {job_responsibility}</p>
                </div>


                <div>

                <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <h2 className="card-title">Job Details</h2>
                <p>Salary : {salary}</p>
                <p>Job Title : {job_title}</p>
                <p>Phone : {contact_information.phone}</p>
                <p>Email : {contact_information.email}</p>
                <p>Address : {contact_information.address}</p>
                <div className="w-full justify-center">
                <button onClick={handleJobApplied} className="btn btn-primary w-full text-white
                
                
                ">Apply Now</button>
               </div>
               </div>
               </div>

                </div>
            </div>
            <ToastContainer />
        </section>
            
        </>
    );
};

export default JobDetails;