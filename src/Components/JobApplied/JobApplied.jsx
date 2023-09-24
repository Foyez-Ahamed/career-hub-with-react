

const JobApplied = ({appliedJob}) => {
    // console.log(appliedJob);
    const {job_description, logo, job_title, company_name, remote_or_onsite, location, salary, job_responsibility, contact_information} = appliedJob || {};
    return (
        <div>
            <section>
                <div className="flex gap-20">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h1>{job_title}</h1>
                        <p>{company_name}</p>
                        <button className="btn">{remote_or_onsite}</button>
                        <button className="btn">{remote_or_onsite}</button>
                        <p>{location}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobApplied;