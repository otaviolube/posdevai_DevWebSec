import React, { useState } from 'react';

    const Register = () => {
      const [email, setEmail] = useState('');
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, name, password }),
        });

        if (response.ok) {
          alert('Cadastro bem-sucedido! Você pode fazer login agora.');
        } else {
          alert('Falha no cadastro. Tente novamente.');
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Cadastrar</button>
        </form>
      );
    };

    export default Register;
