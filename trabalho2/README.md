# Desenvolvimento Web Seguro

**Prof. Dr. Jefferson O. Andrade**  
**Pós-graduação em Desenvolvimento de Aplicações Inteligentes**  
**Desenvolvimento Web Seguro — Trabalho 02**

**Nome:** Otávio Lube dos Santos  
**Matrícula:** 20231DEVAI0157  

---

## 🔗 Repositório do Projeto

O código-fonte deste projeto está disponível no repositório abaixo:  
[GitHub - posdevai_DevWebSec](https://github.com/otaviolube/posdevai_DevWebSec)

---

## 🛠️ Análise de Vulnerabilidades

### 🚨 Vulnerabilidade 1: Falta de Limitação de Tentativas de Login
- **Descrição**: A aplicação não possui um mecanismo de limitação de tentativas de login. Isso permite que um atacante utilize um robô para realizar ataques de força bruta, testando múltiplas combinações de nomes de usuários e senhas.
- **Impacto**:
  - **Quebra de Senhas**: Mesmo com senhas armazenadas com hashing, um grande número de tentativas pode eventualmente comprometer senhas fracas.
  - **Ataques de Negação de Serviço (DoS)**: Pode sobrecarregar o servidor devido ao alto volume de requisições.
- **Solução**:
  - Implementar uma política de limitação de tentativas de login (ex.: bloquear o IP por 15 minutos após 5 tentativas falhas consecutivas).
  - Utilizar bibliotecas como `Flask-Limiter` para gerenciar o limite de requisições.

---

### 🚨 Vulnerabilidade 2: Sessão do Usuário Exposta
- **Descrição**: O cookie de sessão do usuário pode ser facilmente copiado e reutilizado em outro dispositivo sem a necessidade de autenticação adicional. Isso ocorre porque o cookie não é renovado ou possui proteção adequada.
- **Impacto**:
  - Permite que qualquer pessoa com acesso ao cookie obtenha controle sobre a conta do usuário.
  - Pode levar a ataques de **sequestro de sessão** (_session hijacking_).
- **Solução**:
  - Habilitar o uso de cookies seguros (`Secure` e `HttpOnly`).
  - Implementar **renovação de tokens** ou inclusão de **tokens baseados em IP** para verificar a legitimidade da sessão.
  - Utilizar uma biblioteca como `Flask-Session` para gerenciamento seguro de sessões.

---

## 🧠 Respostas às Questões da Parte 1

### 1.1.1 Identificação de Vulnerabilidades
1. **Armazenamento de Senhas**:
   - As senhas não são armazenadas em texto plano. O sistema utiliza hashing para proteger as senhas. Contudo, é importante garantir o uso de um algoritmo de hashing robusto e atualizado, como `pbkdf2:sha256` ou `bcrypt`.
2. **Rotas e Controle de Acesso**:
   - Não existem verificações claras para rotas protegidas. Qualquer usuário autenticado pode potencialmente acessar áreas sensíveis da aplicação.

### 1.1.2 Correção das Vulnerabilidades
1. **Hashing Seguro de Senhas**:
   - Embora o sistema já utilize hashing, é importante revisar a configuração do algoritmo para garantir parâmetros seguros, como um número adequado de iterações.
   - Exemplo de implementação segura:
     ```python
     from werkzeug.security import generate_password_hash, check_password_hash

     # Hashing
     hashed_password = generate_password_hash('senha123', method='pbkdf2:sha256', salt_length=16)

     # Verificação
     is_valid = check_password_hash(hashed_password, 'senha123')
     ```
2. **Melhoria no Controle de Acesso**:
   - Adicionar restrições às rotas sensíveis:
     ```python
     @app.route('/admin')
     @login_required
     @role_required('admin')
     def admin_page():
         return "Acesso permitido apenas para administradores."
     ```

---

## 🛡️ Sugestões Adicionais

### 🔒 Implementação de MFA (Autenticação Multifator)
- Adicionar uma segunda camada de autenticação, como um código enviado por e-mail ou gerado por aplicativos como Google Authenticator.

### 🌐 HTTPS Obrigatório
- Certifique-se de que todas as comunicações entre cliente e servidor sejam feitas via HTTPS, para proteger dados sensíveis em trânsito.

---

**📅 Data de Entrega:** 15/05/2024  
**🕒 Status:** Em andamento
