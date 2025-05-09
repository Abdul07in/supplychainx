import { useState } from 'react';

function App() {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center display-4'>Welcome to SupplyChainX</h1>
        <div className='row'>
          <form className='col-md-4 offset-md-4'>
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
      </div>
    </>
  );
}

export default App;
