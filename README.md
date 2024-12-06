# BinanceBot

O projeto implementa um bot de grid trading bastante sofisticado para o mercado de criptomoedas, utilizando a Binance como exchange. Ele combina diversas estratégias e funcionalidades, incluindo:

- Análise técnica: Emprega o RSI (Índice de Força Relativa) para identificar condições de sobrecompra e sobrevenda, sinalizando momentos para comprar ou vender.
- Grid trading: Cria uma grade de ordens de compra e venda em torno de um preço base, permitindo aproveitar a volatilidade do mercado.
- Gerenciamento de ordens: Rastrea o status das ordens, calcula lucros e perdas, e executa vendas quando as condições de venda são atingidas.
- Notificações: Envia notificações via Telegram para informar sobre eventos importantes, como compras, vendas e lucros.
- Persistência de dados: Armazena dados importantes, como histórico de ordens, configurações e balanços, em um arquivo JSON para manter o estado do bot entre as execuções.
- Flexibilidade: Permite configurar diversos parâmetros, como espaçamento do grid, limites de stop-loss e take-profit, e outras opções de personalização.

## Como Executar o Código

Para executar este código, você precisará:

### Pré-requisitos:

- Node.js e npm (ou yarn) instalados: Certifique-se de ter o Node.js e o gerenciador de pacotes npm (ou yarn) instalados em seu sistema.
- Conta na Binance: Crie uma conta na Binance e gere as chaves API necessárias para o bot.
- Bot do Telegram e token: Crie um bot no Telegram e obtenha o token de acesso para as notificações.
- Ambiente de desenvolvimento: Um editor de código como Visual Studio Code ou qualquer outro de sua preferência.

### Configuração do ambiente:

- Criar um arquivo .env: Crie um arquivo .env na raiz do seu projeto e adicione as seguintes variáveis de ambiente:
  BINANCE_API_KEY=sua_chave_api
  BINANCE_API_SECRET=sua_chave_secreta
  TELEGRAM_BOT_TOKEN=seu_token_do_telegram
  NOTIFY_TELEGRAM_ON=buy,sell,withdraw # Quais eventos notificar

- Instalar as dependências: Execute o comando npm install (ou yarn) na linha de comando para instalar as dependências listadas no arquivo package.json.

### Executar o script:

- Terminal: Abra um terminal na pasta do seu projeto e execute o seguinte comando, substituindo os valores entre colchetes pelas informações corretas:
  Bash
  node bot.js [MARKET1] [MARKET2] [BUY_ORDER_AMOUNT]

- MARKET1: Símbolo da primeira moeda do par (e.g., BTC)
- MARKET2: Símbolo da segunda moeda do par (e.g., USDT)
- BUY_ORDER_AMOUNT: Quantidade de MARKET2 a ser usada em cada ordem de compra

### Parâmetros Adicionais

O script possui outros parâmetros configuráveis através das variáveis de ambiente e argumentos da linha de comando. Consulte o código para obter uma lista completa.

### Considerações Importantes

- Riscos: O trading de criptomoedas envolve riscos significativos. Certifique-se de entender completamente o funcionamento do bot e os riscos envolvidos antes de utilizá-lo com fundos reais.
- Testes: É altamente recomendado testar o bot em um ambiente de simulação antes de utilizá-lo em uma conta real.
- Manutenção: Monitore o funcionamento do bot regularmente e faça ajustes conforme necessário.
- Melhorias: O código pode ser personalizado e aprimorado com novas funcionalidades, como o uso de outras estratégias de trading, a adição de mais indicadores técnicos e a implementação de mecanismos de stop-loss mais sofisticados.

### Explicações Adicionais

Se você tiver dúvidas sobre alguma parte específica do código, sinta-se à vontade para perguntar. Posso fornecer explicações mais detalhadas sobre:

- Estratégias de trading: RSI, grid trading, stop-loss, take-profit
- Biblioteca Binance API: Como interagir com a API da Binance para executar ordens e obter informações de mercado
- Gerenciamento de dados: Como o código armazena e recupera dados usando o node-storage
- Notificações Telegram: Como configurar e personalizar as notificações
- Outras funcionalidades: Qualquer outra parte do código que você não entender
  Lembre-se: Este é apenas um exemplo de um bot de grid trading. Existem diversas outras abordagens e estratégias que podem ser implementadas. A escolha da estratégia mais adequada dependerá dos seus objetivos e tolerância ao risco.
