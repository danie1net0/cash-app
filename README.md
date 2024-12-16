# Cash App

## Ambiente de desenvolvimento

1. Clonar o repostitório:
    ```
   git clone git@github.com:danie1net0/cash-app.git && cd cash-app
   ```

2. Criar o arquivo `.env`:
    ```
   cp .env.example .env
   ```
   > Alterar a porta da aplicação e a url da API, se necessário
   
3. Cria o contêiner:
    ```
   docker compose up -d
   ```