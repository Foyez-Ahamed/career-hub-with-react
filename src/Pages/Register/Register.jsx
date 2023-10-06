import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {


    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {

        e.preventDefault();

        const form = new FormData(e.currentTarget);
        
        const email = form.get('email')
        const password = form.get('password')


        createUser(email, password)
        .then((result) => {
            console.log(result.user);
            alert('user created successfully')
        })
        .catch(error => {
            console.log(error.message);
        })
    }



    return (
        <div>

<div className="flex justify-center items-center">

<div className="shadow-lg p-10 rounded-lg">

<div>
<h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">Register Please</h1>
</div>

{/* form start*/}

<form onSubmit={handleRegister}>

<div className="relative">

<label htmlFor="name">Name</label> <br /> 
<input type= "Text"
 placeholder="enter your name..." name="name" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[400px] max-w-xs" /> <br />

 <label htmlFor="photoURL">Photo URL</label> <br /> 
<input type= "text"
 placeholder="Photo URL..." name="photoURL" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[400px] max-w-xs" /> <br />    

<label htmlFor="email">Email address</label> <br /> 
<input type= "email"
 placeholder="enter your email..." name="email" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[400px] max-w-xs" /> <br />

<label htmlFor="password">Password</label> <br />
<input type = "password" placeholder="enter your password" required name="password" className="mt-4 input bg-[#F3F3F3] w-[400px] max-w-xs"/>
 <br />

 <input type="checkbox" name="terms" id="terms" className="mt-5" />
 <label htmlFor="terms" className="ml-2">Accepted our <a href="" className="text-[#403F3F]">terms and conditions</a></label> <br />

 {/* button  */}
<input type="submit" value= "Register" className=" btn w-[400px] mt-5 font-bold bg-[#403F3F] text-white max-w-xs hover:bg-gray-600" />
</div>

</form>
{/* form end */}

{/* others content show here please */}
<div className="mt-5">
    <p> Already have an account ? <Link to='/login' className="text-bold text-[#F75B5F] text-md uppercase underline">Login</Link></p>
</div>

</div>
</div>
            
        </div>
    );
};

export default Register;