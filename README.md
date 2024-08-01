
# Finance app

Aplicativo de controle de finanças permite aos usuários acompanhar suas finanças em tempo real e cadastrar novas transações com facilidade. Com uma interface intuitiva e várias maneiras de visualizar os dados, você pode gerenciar suas finanças de maneira eficiente e prática.


## Funcionalidades

### Login e Criação de Usuários

Sistema de login e registro utilizando Supabase para armazenar os dados dos usuários e garantir a segurança dos seus dados financeiros.

![Página de login](https://i.postimg.cc/9ff48kmf/Group-15.png)


### Visualizações de Dados

Página para visualização dos dados através de gráficos, permitindo escolher entre dados dos dias, semanas, meses ou anos anteriores.

![Home.png](https://i.postimg.cc/5N3K8H6M/Home.png)


### Transações por Dia

Página com calendário dinâmico apresentando as transações presentes no dia selecionado.

![Calendar.png](https://i.postimg.cc/RFBFtCP2/Calendar.png)


### Transações por Mês

Página com transações do usuário, podendo ser filtradas por despesas e entradas.

![Transactions.png](https://i.postimg.cc/g2ySqN4j/Transactions.png)


### Criação de Transações

Página para criação de novas transações, com um formulário simples e rápido.

![Create.png](https://i.postimg.cc/9Q7Mxgnd/Create.png)

### Perfil do Usuário

Página de perfil onde é possível editar as informações do usuário e alterar configurações do aplicativo.

![Profile.png](https://i.postimg.cc/vBzDr1SC/Profile.png)


## Stack utilizada

**Front-end:** 
    
- **React Native:** Framework para desenvolvimento de aplicativos móveis que permite criar aplicativos nativos para iOS e Android utilizando JavaScript e React.
- **NativeWind:**   Biblioteca para estilização de componentes no React Native, combinando o poder de Tailwind CSS com a simplicidade do estilo em linha.
- **Expo Router:**  Ferramenta de roteamento para aplicativos React Native desenvolvidos com Expo, que facilita a navegação e organização de páginas.


**Back-end:**

- **Typescript:**   Toda a aplicação foi desenvolvida utilizando TypeScript, permitindo detectar erros de tipo durante a fase de desenvolvimento, antes mesmo de executar o código. Isso reduz a quantidade de bugs e facilita a depuração.
- **Expo-crypto:**  Utilizado para criptografar as senhas dos usuários e armazená-las de forma segura no banco de dados.


**Back-end:**

- **Supabase:**     Banco de dados selecionado para armazenar os dados de cada usuário e todas as transações. As transações têm uma chave primária no user_id do usuário, garantindo que cada usuário possa acessar apenas as transações criadas por ele mesmo.


## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/joaoviictorss/finance-app.git
   cd nome-do-repositorio
   
2. **Instalar dependencias:**

    ```bash
    npm install

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npx expo start
