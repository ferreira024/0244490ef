# SGO PVZ — V10 Meteorologia Fix

Correção da integração IPMA MF2.

- Remove a dependência de `fetch(GetCapabilities)`, que podia ser bloqueada por CORS.
- As imagens WMS são pedidas diretamente pelo Leaflet.
- Produtos IPMA MF2 usados: temperatura AROME 2 m, vento 10 m, rajada 10 m, humidade relativa 2 m, precipitação e FWI.
- Mostra a hora de validade pedida e o ciclo AROME de referência (00/12 UTC).
- Não apresenta uma falsa “última atualização”: o ciclo é identificado explicitamente.
- Mantém uma única camada meteorológica ativa de cada vez.
- Cache da PWA alterada para `sgo-v10-meteo-fix`.
