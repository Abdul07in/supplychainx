import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

function App() {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username: userName,
      password: password,
    };
    toast.loading('Loading...');
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/login',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toast.dismiss();
      if (response.status === 200) {
        toast.success('Login successful');
        console.log(response.data);
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      toast.dismiss();
      toast.error('An error occurred');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center display-4'>Welcome to SupplyChainX</h1>
        <div className='row'>
          <form className='col-md-4 offset-md-4' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                type='text'
                className='form-control'
                id='username'
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
        <Toaster
          position='top-right'
          reverseOrder={true}
          toastOptions={{ duration: 2500 }}
        />
      </div>
    </>
  );
}

export default App;
