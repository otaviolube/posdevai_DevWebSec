# Desenvolvimento Web Seguro

**Prof. Dr. Jefferson O. Andrade**  
**Pós-graduação em Desenvolvimento de Aplicações Inteligentes**  
**Desenvolvimento Web Seguro — Trabalho 03**

**Nome:** Otávio Lube dos Santos  
**Matrícula:** 20231DEVAI0157  

---

## **Título do Projeto**
📌 Estudo Dirigido: Injeção de SQL (SQLi)  

---

## **Objetivo**
🎯 Capacitar os alunos a compreender os diferentes tipos de injeção de SQL, os riscos associados e as técnicas de prevenção, além de aplicar boas práticas de segurança em aplicações web.

---

## **Roteiro da Apresentação**

### **Slide 1: Título**
- **Título:** Estudo Dirigido: Injeção de SQL (SQLi)  
- **Subtítulo:** Principais Tipos, Riscos e Técnicas de Prevenção  
- **Imagem de fundo sugestiva:** 💻 Uma tela de terminal com consultas SQL ou ícone de banco de dados.

---

### **Slide 2: Introdução**
- **Título:** O que é Injeção de SQL?  
- **Texto:**  
  - 🛡️ Ataque que explora falhas em consultas SQL para manipular ou acessar dados não autorizados.  
  - 🚨 Uma das vulnerabilidades mais críticas e exploradas em aplicações web.  
- **Link:** [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection).  

---

### **Slide 3: Tipos de Injeção de SQL**
- **Título:** Principais Tipos de SQL Injection  
- **Texto em bullet points:**  
  - 🗂️ **Union-based SQLi:** Combina resultados de múltiplas consultas.  
  - ❌ **Error-based SQLi:** Exposição de erros no banco de dados.  
  - 🔍 **Boolean-based SQLi:** Explora respostas booleanas (verdadeiro/falso).  
  - ⏳ **Time-based SQLi:** Mede tempo de resposta para inferir resultados.  
- **Imagem:** Representação visual de uma consulta SQL manipulada.

---

### **Slide 4: Exemplos de Ataques SQLi**
- **Título:** Como os Ataques SQLi Funcionam?  
- **Texto:**  
  - Exemplos de entradas maliciosas:  
    ```sql
    ' OR '1'='1'; --
    ```  
  - **Consequências:**  
    - 🛠️ Exfiltração de dados sensíveis.  
    - 💥 Manipulação ou exclusão de dados no banco.  
  - **Imagem:** Fluxograma simples mostrando entrada de dados inseguros e impacto no banco de dados.

---

### **Slide 5: Técnicas de Prevenção de SQLi**
- **Título:** Técnicas de Prevenção Contra SQL Injection  
- **Texto em bullet points:**  
  - 🔐 **Prepared Statements:** Utilização de consultas preparadas para separar dados de comandos SQL.  
  - 🛡️ **Object-Relational Mappers (ORMs):** Ferramentas que abstraem e protegem operações no banco de dados.  
  - ✅ **Validação e Sanitização de Entradas:** Garantir que os dados de entrada estão dentro de padrões esperados.  
  - 🚫 **Mínimos Privilégios no Banco de Dados:** Restringir permissões de usuários para evitar danos em caso de ataque.  
- **Imagem:** Escudo ou proteção envolvendo um banco de dados.

---

### **Slide 6: Explicação Detalhada dos Tipos de SQLi**
- **Título:** Tipos de SQL Injection: Explicação Detalhada  
- **Texto:**  
  - 🗂️ **Union-based SQLi:**  
    - Utiliza a cláusula `UNION` para combinar os resultados de diferentes consultas SQL.  
    - **Exemplo:**  
      ```sql
      ' UNION SELECT username, password FROM users; --
      ```  
    - Permite ao atacante acessar tabelas diferentes do banco de dados.  
  - ❌ **Error-based SQLi:**  
    - Explora mensagens de erro do banco para obter informações sobre a estrutura do banco de dados.  
    - **Exemplo:**  
      Entrada malformada que gera erros detalhados com nomes de tabelas ou colunas.  
  - 🔍 **Boolean-based SQLi:**  
    - Manipula consultas SQL que retornam verdadeiro/falso para inferir dados.  
    - **Exemplo:**  
      ```sql
      ' AND 1=1; -- (verdadeiro)  
      ' AND 1=2; -- (falso)
      ```  
  - ⏳ **Time-based SQLi:**  
    - Injeta comandos que forçam atrasos na execução, permitindo inferir informações com base no tempo de resposta.  
    - **Exemplo:**  
      ```sql
      ' OR IF(1=1, SLEEP(5), 0); --
      ```  
- **Imagem:** Gráficos ou exemplos visuais para cada tipo.

---

### **Slide 7: Benefícios do Uso de Prepared Statements**
- **Título:** Por que Usar Prepared Statements?  
- **Texto:**  
  - **O que são?**  
    - 🛡️ Consultas parametrizadas que separam o comando SQL dos dados do usuário.  
    - Evitam que entradas maliciosas sejam interpretadas como comandos SQL.  
  - **Benefícios:**  
    - ✅ Neutraliza injeções de SQL ao tratar entradas como simples dados.  
    - 🚀 Melhora o desempenho em consultas repetidas.  
  - **Exemplo:**  
    - **Sem Prepared Statements:**  
      ```sql
      "SELECT * FROM users WHERE username = '" + user_input + "';"
      ```  
    - **Com Prepared Statements:**  
      ```sql
      cursor.execute("SELECT * FROM users WHERE username = ?", (user_input,))
      ```  
  - **Ferramentas Suportadas:**  
    - Praticamente todos os frameworks modernos, como Flask, Django, Spring, etc.  
- **Imagem:** Representação de uma consulta segura.

---

### **Slide 8: Validação e Sanitização de Entradas**
- **Título:** Validação e Sanitização: Linhas de Defesa  
- **Texto:**  
  - ✅ **Validação:**  
    - Verificar se os dados de entrada estão no formato correto antes de serem usados.  
    - **Exemplo:** Garantir que um campo de email segue o formato `usuario@dominio.com`.  
  - 🛠️ **Sanitização:**  
    - Remover ou transformar caracteres potencialmente perigosos.  
    - **Exemplo:** Escapar aspas simples (`'`) e caracteres especiais que poderiam ser interpretados como comandos SQL.  
  - **Práticas Recomendadas:**  
    - Nunca confiar em entradas de usuários sem validação.  
    - Utilizar bibliotecas seguras para validação e sanitização, como `validator.js` ou funções nativas de frameworks.  
  - **Impacto:**  
    - Reduz significativamente o risco de injeções de SQL e outras vulnerabilidades de entrada.  
- **Imagem:** Um pipeline que demonstra o fluxo de validação e sanitização.

---

### **Slide 9: Fontes e Recursos**
- **Título:** Fontes para Aprendizado Adicional  
- **Texto:**  
  - 📘 [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)  
  - 📗 [PortSwigger SQL Injection](https://portswigger.net/web-security/sql-injection)  
- **Imagem:** Ícone de livros ou aprendizado.

---

### **Slide 10: Conclusão**
- **Título:** Conclusões e Boas Práticas  
- **Texto:**  
  - 🛡️ **SQLi:** Um risco crítico que pode ser prevenido com boas práticas.  
  - 🎓 **Educação:** A conscientização é o primeiro passo para proteger sistemas.  
  - 🚀 **Próximos Passos:** Revisar códigos e implementar ferramentas preventivas.  
- **Imagem:** Representação de segurança ou cadeado.

---


## 🎥 Link para o Vídeo
[![Assista ao vídeo](https://img.youtube.com/vi/g67UbixvGQI/0.jpg)](https://youtu.be/g67UbixvGQI)