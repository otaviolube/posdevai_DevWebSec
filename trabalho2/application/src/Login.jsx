import React, { useState } from 'react';

    const Login = ({ onLogin }) => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          onLogin();
          alert('Login bem-sucedido!');
        } else {
          alert('Falha no login. Verifique suas credenciais.');
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      );
    };

    export default Login;
