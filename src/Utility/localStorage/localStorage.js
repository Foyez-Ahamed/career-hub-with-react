// for get items //
const getStoredJobApplication = () => {
    const storedApplication = localStorage.getItem('job-applications');
    if(storedApplication){
        return JSON.parse(storedApplication);
    } 
    return [];
}

// for set items //
const saveJobApplication = (id) => {
    const storedApplications = getStoredJobApplication();
    const exists = storedApplications.find(jobId => jobId == id);
    if(!exists){
        storedApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedApplications));
    }

}

export {getStoredJobApplication, saveJobApplication};