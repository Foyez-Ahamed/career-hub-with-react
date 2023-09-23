import banner from '../../assets/user.png';

const Banner = () => {
    return (
        <div>
            
            <section className="flex justify-between gap-6">
                {/* banner content */}
                <div className="flex-1 mt-10">
                    <h1 className='text-5xl font-bold mt-5'>One Step <br />Closer To Your <br /> Dream Job</h1>
                    <p className='mt-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn btn-primary mt-5'>Get Started</button>
                </div>

            {/* banner image */}
                <div className="flex-1">
                    <img src={banner} alt="" />
                </div>
            </section>

        </div>
    );
};

export default Banner;