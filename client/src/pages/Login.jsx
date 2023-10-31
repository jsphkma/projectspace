import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='wrapper'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <button type="submit">Login</button>
        <button type="forgot">Forgot Password</button>
      </form>
    </div>
  );
};

export default LoginPage;