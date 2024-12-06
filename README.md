# BinanceBot

O projeto implementa um bot de grid trading bastante sofisticado para o mercado de criptomoedas, utilizando a Binance como exchange. Ele combina diversas estratégias e funcionalidades, incluindo:

- <strong>Análise técnica:</strong> Emprega o RSI (Índice de Força Relativa) para identificar condições de sobrecompra e sobrevenda, sinalizando momentos para comprar ou vender.
- <strong>Grid trading:</strong> Cria uma grade de ordens de compra e venda em torno de um preço base, permitindo aproveitar a volatilidade do mercado.
- <strong>Gerenciamento de ordens:</strong> Rastrea o status das ordens, calcula lucros e perdas, e executa vendas quando as condições de venda são atingidas.
- <strong>Notificações:</strong> Envia notificações via Telegram para informar sobre eventos importantes, como compras, vendas e lucros.
- <strong>Persistência de dados:</strong> Armazena dados importantes, como histórico de ordens, configurações e balanços, em um arquivo JSON para manter o estado do bot entre as execuções.
- <strong>Flexibilidade:</strong> Permite configurar diversos parâmetros, como espaçamento do grid, limites de stop-loss e take-profit, e outras opções de personalização.
  </br></br>

## Base do Projeto

Este projeto foi inspirado no código-fonte de **[MetaDapp](https://github.com/meta-dapp)**. Acrescentei a integração com indicadores técnicos (como RSI), consumindo dados da biblioteca <strong>Technical Indicators</strong>, e adicionei outras funcionalidades para tornar o bot mais robusto e personalizado.

Dessa forma, reconheço a importância do MetaDapp como base para este projeto e me posiciono como autor das modificações e extensões feitas.
</br></br>

## Como Executar o Código

Para executar este código, você precisará:

### Pré-requisitos:

- <strong>Node.js e npm (ou yarn) instalados:</strong> Certifique-se de ter o Node.js e o gerenciador de pacotes npm (ou yarn) instalados em seu sistema.
- <strong>Conta na Binance:</strong> Crie uma conta na Binance e gere as chaves API necessárias para o bot.
- <strong>Bot do Telegram e token:</strong> Crie um bot no Telegram e obtenha o token de acesso para as notificações.
- <strong>Ambiente de desenvolvimento:</strong> Um editor de código como Visual Studio Code ou qualquer outro de sua preferência.

### Configuração do ambiente:

- <strong>Criar um arquivo .env:</strong> Crie um arquivo .env na raiz do seu projeto e adicione as seguintes variáveis de ambiente:

  ```bash
  BINANCE_API_KEY=sua_chave_api
  BINANCE_API_SECRET=sua_chave_secreta
  TELEGRAM_BOT_ID=seu_id_para_bot
  TELEGRAM_CHAT_ID=seu_id_para_chat
  NOTIFY_TELEGRAM_ON=buy,sell,withdraw
  ```

- <strong>Instalar as dependências:</strong> Execute o comando npm install (ou yarn) na linha de comando para instalar as dependências listadas no arquivo package.json.

### Executar o script:

- <strong>Terminal:</strong> Abra um terminal na pasta do seu projeto e execute o seguinte comando, substituindo os valores entre colchetes pelas informações corretas:
  Bash
  node bot.js [MARKET1] [MARKET2] [BUY_ORDER_AMOUNT]

- MARKET1: Símbolo da primeira moeda do par (e.g., BTC)
- MARKET2: Símbolo da segunda moeda do par (e.g., USDT)
- BUY_ORDER_AMOUNT: Quantidade de MARKET2 a ser usada em cada ordem de compra

### Parâmetros Adicionais

O script possui outros parâmetros configuráveis através das variáveis de ambiente e argumentos da linha de comando. Consulte o código para obter uma lista completa.

### Considerações Importantes

- <strong>Riscos:</strong> O trading de criptomoedas envolve riscos significativos. Certifique-se de entender completamente o funcionamento do bot e os riscos envolvidos antes de utilizá-lo com fundos reais.
- <strong>Testes:</strong> É altamente recomendado testar o bot em um ambiente de simulação antes de utilizá-lo em uma conta real.
- <strong>Manutenção:</strong> Monitore o funcionamento do bot regularmente e faça ajustes conforme necessário.
- <strong>Melhorias:</strong> O código pode ser personalizado e aprimorado com novas funcionalidades, como o uso de outras estratégias de trading, a adição de mais indicadores técnicos e a implementação de mecanismos de stop-loss mais sofisticados.

### Explicações Adicionais

Se você tiver dúvidas sobre alguma parte específica do código, sinta-se à vontade para perguntar. Posso fornecer explicações mais detalhadas sobre:

- <strong>Estratégias de trading: RSI, grid trading, stop-loss, take-profit
- <strong>Biblioteca Binance API: Como interagir com a API da Binance para executar ordens e obter informações de mercado
- <strong>Gerenciamento de dados:</strong> Como o código armazena e recupera dados usando o node-storage
- <strong>Notificações Telegram:</strong> Como configurar e personalizar as notificações
- <strong>Outras funcionalidades:</strong> Qualquer outra parte do código que você não entender
  <strong>Lembre-se:</strong> Este é apenas um exemplo de um bot de grid trading. Existem diversas outras abordagens e estratégias que podem ser implementadas. A escolha da estratégia mais adequada dependerá dos seus objetivos e tolerância ao risco.
