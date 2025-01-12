# Desenvolvimento Web Seguro

**Prof. Dr. Jefferson O. Andrade**  
**Pós-graduação em Desenvolvimento de Aplicações Inteligentes**  
**Consolidado dos Trabalhos da Disciplina**

**Nome:** Otávio Lube dos Santos  
**Matrícula:** 20231DEVAI0157  

---

## **Trabalho 01: Estudo Dirigido - Vulnerabilidades e Segurança**

### **Objetivo:**
🎯 Identificar vulnerabilidades comuns em aplicações web e propor soluções baseadas nas melhores práticas de segurança.

### **Pontos Abordados:**
- Análise de vulnerabilidades como força bruta e sequestro de sessão.
- Implementação de políticas de segurança como limitação de tentativas de login e proteção de cookies.
- Uso de hashing seguro para armazenamento de senhas.

---

## **Trabalho 02: Estudo Dirigido - SQL Injection (SQLi)**

### **Objetivo:**
🎯 Entender os diferentes tipos de injeção de SQL e as técnicas de prevenção para proteger aplicações web contra ataques SQLi.

### **Pontos Abordados:**
- Tipos de SQL Injection:
  - Union-based SQLi
  - Error-based SQLi
  - Boolean-based SQLi
  - Time-based SQLi
- Técnicas de prevenção:
  - **Prepared Statements**
  - Validação e sanitização de entradas
  - Uso de ORMs
  - Aplicação de privilégios mínimos no banco de dados.

---

## **Trabalho 03: Estudo Dirigido - Autenticação Multifator (MFA)**

### **Objetivo:**
🎯 Implementar e explorar as vantagens da autenticação multifator (MFA) e do controle baseado em papéis (RBAC) na segurança de aplicações web.

### **Pontos Abordados:**
- Criação de um sistema de MFA utilizando Node.js, Express, e Bootstrap.
- Implementação do controle de acesso baseado em papéis (RBAC).
- Explicação dos benefícios do MFA na proteção contra ataques de força bruta e comprometimento de credenciais.

---

## **Trabalho 04: Headers de Segurança e CSP**

### **Objetivo:**
🎯 Compreender e configurar os headers de segurança e a Política de Segurança de Conteúdo (CSP) para aumentar a proteção de aplicações web.

### **Pontos Abordados:**
- Configuração de headers de segurança como:
  - X-XSS-Protection
  - X-Frame-Options
  - Strict-Transport-Security (HSTS)
  - Referrer-Policy
  - Content-Security-Policy (CSP)
- Implementação de CSP para controle de recursos e prevenção de XSS.
- Ferramentas utilizadas:
  - **Google CSP Evaluator**
  - **Console do Navegador**

### **Exemplo de Configuração CSP:**
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; img-src 'self' https:; style-src 'self' 'unsafe-inline'; object-src 'none'; require-trusted-types-for 'script';">
```

---

## **Reflexões Finais:**
A disciplina proporcionou um aprendizado profundo sobre as principais vulnerabilidades de segurança em aplicações web e as soluções práticas para mitigá-las. Com foco em headers de segurança, SQLi, MFA e CSP, os trabalhos possibilitaram o desenvolvimento de habilidades cruciais para criar sistemas mais seguros e resilientes.

---

## **Recursos de Aprendizado:**
- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)  
- [MDN Web Docs - Content Security Policy](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CSP)  
- [Google CSP Evaluator](https://csp-evaluator.withgoogle.com/)  
- [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)  

---
