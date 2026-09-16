# SGO - PVZ v5

Visualizador operacional territorial.

## Alterações desta versão
- Hidrantes/marcos carregados como elementos vetoriais clicáveis.
- Reservatórios clicáveis.
- Identificação por clique das camadas dinâmicas do SIG municipal.
- Popups com atributos disponíveis nas camadas.
- Nova camada de Ocorrências ANEPC.
- A camada ANEPC é consultada a cada 1 segundo enquanto estiver ativa e houver ligação.
- Service Worker v5 com prioridade à rede para ocorrências, evitando apresentar cache antigo como informação atual.

Nota: atualizar a cada segundo significa consultar a fonte a cada segundo. A informação só muda quando a própria fonte ANEPC publicar uma alteração.
