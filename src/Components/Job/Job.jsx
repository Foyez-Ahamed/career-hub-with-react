

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, salary} = job || {};
    return (
        <div className="mt-10">
            
            <div className=" px-2 card-compact bg-base-100 shadow-xl">
            <figure className="ml-4"><img src={logo} alt="Shoes" /></figure>
           <div className="card-body">
           <h2 className="card-title">{job_title}</h2>
           <p>{company_name}</p>
           <div className="card-actions justify-start">
           <button className="btn btn-primary text-white">{remote_or_onsite}</button>
           <button className="btn btn-primary text-white">{remote_or_onsite}</button>
         </div>

          <div className="flex justify-evenly">
            <p>{location}</p>
            <p>{salary}</p>
          </div>

          <div>
            <button className="btn btn-primary text-white">View details</button>
          </div>
         </div>
         </div>



        </div>
    );
};

export default Job;