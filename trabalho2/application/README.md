# 📚 Projeto de Autenticação Multifator (MFA)

**Prof. Dr. Jefferson O. Andrade**  
**Pós-graduação em Desenvolvimento de Aplicações Inteligentes**  
**Desenvolvimento Web Seguro — Trabalho 02**

**Nome:** Otávio Lube dos Santos  
**Matrícula:** 20231DEVAI0157  

---

## 🌟 Sobre o Projeto

Este projeto implementa um sistema de **Autenticação Multifator (MFA)** em uma aplicação web, com o objetivo de demonstrar a importância desse recurso na segurança de aplicações. Ele foi desenvolvido utilizando **Node.js**, **Express**, e um frontend moderno com **Bootstrap**, **HTML**, **CSS** e **JavaScript**.

A autenticação multifator adiciona uma camada extra de segurança ao exigir que os usuários forneçam mais de uma forma de verificação para acessar a aplicação, protegendo contra ameaças como ataques de força bruta e roubo de credenciais.

---

## 🚀 Funcionalidades

- **🌐 Landing Page**: Página inicial explicando a importância do MFA e seus benefícios.
- **🔐 Login e Cadastro**: Sistema seguro para registro e autenticação de usuários.
- **🛡 OWASP Top 10**: Uma seção informativa que destaca vulnerabilidades comuns e como o MFA pode mitigá-las.
- **⚙️ Gerenciamento de Sessão**: Proteção contra ataques de sequestro de sessão (_session hijacking_).
- **🔒 MFA (Autenticação Multifator)**: Implementação de uma camada extra de autenticação para maior segurança.
- **👥 RBAC (Role-Based Access Control)**: Controle de acesso baseado em papéis, permitindo diferentes permissões para usuários e administradores.

---

## 🛠 Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express
  - Prisma ORM para gerenciamento de banco de dados
- **Frontend**:
  - HTML5, CSS3 e JavaScript
  - Bootstrap
- **Banco de Dados**:
  - SQLite (ou adaptável para outro SGBD, como PostgreSQL)

---

## 📦 Instalação e Configuração

Siga os passos abaixo para executar o projeto em sua máquina:

### 1️⃣ Clone o repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

### 2️⃣ Instale as dependências
Certifique-se de que você possui o **Node.js** instalado:
```bash
npm install
```

### 3️⃣ Configure o banco de dados
Realize as migrações para configurar o esquema do banco:
```bash
npm run db:migrate
```

### 4️⃣ Inicie o servidor
Execute o servidor de desenvolvimento:
```bash
npm start
```

### 5️⃣ Acesse a aplicação
Abra seu navegador e acesse:
```
http://localhost:8000/
```

---

## 📖 Estrutura do Projeto

```plaintext
├── src/
│   ├── controllers/    # Lógica dos controladores
│   ├── models/         # Modelos de dados do Prisma
│   ├── routes/         # Rotas da aplicação
│   ├── views/          # Arquivos HTML e componentes do frontend
├── public/             # Arquivos estáticos (CSS, JS, imagens)
├── prisma/             # Configuração e migrações do banco de dados
├── app.js              # Ponto de entrada do servidor
├── package.json        # Dependências e scripts
```

---

## 🔒 Segurança no Projeto

Este projeto segue boas práticas de segurança:
- Senhas são armazenadas utilizando **hashing seguro** com `bcrypt`.
- Sessões são protegidas com cookies marcados como **HttpOnly** e **Secure**.
- Tentativas de login são limitadas para evitar ataques de força bruta.
- MFA adicionado como uma camada extra de autenticação.
- RBAC implementado para restringir acesso com base em papéis de usuário.

---

## 📧 Contato

Para mais informações ou dúvidas, entre em contato:  
- **Professor:** Prof. Dr. Jefferson O. Andrade  
- **Autor:** Otávio Lube dos Santos  
- **Matrícula:** 20231DEVAI0157  

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

🎉 **Obrigado por visitar o projeto!**  
Contribuições e feedbacks são bem-vindos. 💬
