import { Alert, AlertTitle, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
// import NumericInput from 'react-numeric-input';
const Register = () => {
  //const { firebase } = useAuth();
  const { getEmailSignUp, name, email, photoID, accountType, phone, password, retypePassword, getName, getEmail, getPassword, getPhone, getPhotoID, getReTypePassword, getaccountType, idNumber, getIdNumber, getVerifyEmail, getUpdateProfile, error, success, setError, setSuccess, setIsLoading } = useAuth();
  // const [loginData, setLoginData] = useState({});
  const handleEmailRegister = (e) => {
    // const field = e.target.name;
    // const value = e.target.value;
    // console.log(field, value);
    // const newLoginData = { ...loginData };
    // newLoginData[field] = value;
    // setLoginData(newLoginData);
    const information = { name, email, idNumber, password, photoID, accountType, phone };
    console.log(information);
    e.preventDefault();

    if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
      setError('Name cannot contain number!');
      setSuccess('');
      return;
    }
    if (accountType === 'NonFaculty' && accountType === 'Helping') {
      if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        setError('Invalid Email!');
        setSuccess('');
        return;
      }
    }

    if (accountType === 'Student') {
      if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@northsouth.edu$/.test(email)) {
        setError(' Email must have northsouth.edu');
        setSuccess('');
        return;
      }
    }
    if (accountType === 'Faculty') {
      if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@northsouth.edu$/.test(email)) {
        setError(' Email must have northsouth.edu');
        setSuccess('');
        return;
      }
    }
    if (accountType === 'Employee') {
      if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@northsouth.edu$/.test(email)) {
        setError(' Email must have northsouth.edu');
        setSuccess('');
        return;
      }
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)) {
      setError('Password must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number!');
      setSuccess('');
      return;
    }
    if (password !== retypePassword) {
      setError('Password must match with Retype Password');
      setSuccess('');
      return;
    }
    getEmailSignUp()
      .then(result => {

        console.log(result.user);
        handleUpdateProfile();
        setSuccess('Signed-Up successfully!');
        setTimeout(() => {
          handleVerifyEmail();
        }, 3000)
        setError('');
        // if (success) {
        //   const user = { information };
        //   fetch('http://localhost:5000/users', {
        //     method: 'POST',
        //     headers: {
        //       'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        //   })
        //     .then()
        // }


      })
      .catch(err => {
        setError(err.code);
        setSuccess('');
      })
      .finally(() => setIsLoading(false));
  }

  const handleVerifyEmail = () => {
    getVerifyEmail()
      .then(() => {
        setSuccess('Verification message sent to your email!');
      })
  }
  const handleUpdateProfile = () => {
    getUpdateProfile();
  }
  const objectPrint = () => {
    console.log();
  }
  //   const saveUser = (email, displayName) => {
  //     const user = { email, displayName };
  //     fetch('http://localhost:5000/users', {
  //         method: 'POST',
  //         headers: {
  //             'content-type': 'application/json'
  //         },
  //         body: JSON.stringify(user)
  //     })
  //         .then()
  // }
  return (
    <div className="my-5">
      <h2 className="mb-2"><i className="fas fa-sign-up-alt"></i> Please Sign Up</h2>
      <div className="shadow px-2 col-md-6 mx-auto p-5 rounded-3">
        {
          success &&
          <Alert severity="success" className="mb-2 fw-bold">
            <AlertTitle>Success</AlertTitle>
            {success}
          </Alert>
        }
        {
          error &&
          <Alert severity="error" className="mb-2 fw-bold">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        }
        <form onSubmit={handleEmailRegister} className="col-md-8 d-flex flex-column gap-4 mx-auto mb-4" action="">
          <input type="text" onBlur={getName} className="form-control" id="fullName" placeholder="Full Name" required />
          {/* <input type="tel" onBlur={getIdNumber} className="form-control" id="idNumber" placeholder="Id Number" maxLength="12" pattern="[0-9]" required /> */}
          <input type="tel" onBlur={getIdNumber} className="form-control" id="idNumber" placeholder="Id Number" maxLength="12" required />
          <input type="tel" onBlur={getPhone} className="form-control" id="phone" placeholder="Phone Number" maxLength="11" required />
          <input type="email" onBlur={getEmail} className="form-control" id="email" placeholder="Email" required />
          <select className="form-select-lg mb-3" aria-label=".form-select-lg example" onBlur={getaccountType} id="accountType" required>
            <option value="select">select a option</option>
            <option value="Faculty">Faculty</option>
            <option value="NonFaculty">Non Faculty staff</option>
            <option value="Student">Student</option>
            <option value="Helping"> Helping (gaurds, cleaners)</option>
            <option value="Employee"> Employee</option>
          </select>
          <input type="file" onBlur={getPhotoID} className="form-control" id="idCard" placeholder="ID card upload" required />
          <input type="password" onBlur={getPassword} className="form-control" placeholder="Password" required id="password" />
          <input type="password" onBlur={getReTypePassword} className="form-control" placeholder="Retype-Password" required id="retypePassword" />
          <Button type="submit" variant="contained" onClick={objectPrint}><i className="fas fa-user-plus me-2"></i> Register</Button>
        </form>
        <Link to='/login'>Already Registered? Sign In now!</Link>
      </div>
    </div>
  );
};

export default Register;