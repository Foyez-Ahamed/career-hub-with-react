import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../../Utility/localStorage/localStorage";
import JobApplied from "../../../Components/JobApplied/JobApplied";


const Applied = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        } 

        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }

        else if(filter === 'onsite'){
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsite);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobs, storedJobIds,jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    },[jobs])
    return (
        <div>

           <div className="flex justify-end">
           <details className="dropdown mb-32">
           <summary className="m-1 btn">Filtered Jobs</summary>
           <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
           <li onClick={() => handleFilter('all')}><a>All</a></li>
           <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
           <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
           </ul>
           </details>
           </div>

           <div>
            {
                displayJobs.map(appliedJob => <JobApplied key={appliedJob.id} appliedJob = {appliedJob}></JobApplied>)
            }
           </div>
        </div>
    );
};

export default Applied;