import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [datalength, setDatalength] = useState(4);


    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    },[])

    return (
        <>

        <section className="mt-16">
            <div className="text-center">
            <h1 className="text-5xl font-bold">Featured Jobs</h1>
            <p className="mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center mt-16">
                {
                    jobs.slice(0, datalength).map(job => <Job key={job.id} job = {job}></Job>)
                }
            </div>
             
             <div className="mt-7 text-center">
             <div className= {datalength === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setDatalength(jobs.length)} className="btn btn-primary text-white">Show All</button>
             </div>
             </div>
        </section>
            
        </>
    );
};

export default FeaturedJobs;