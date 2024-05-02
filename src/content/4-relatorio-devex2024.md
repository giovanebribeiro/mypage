---
title: "Relatório Harness sobre Developer Experience em 2024"
date: "2024-05-02"
draft: true
path: "/blog/relatorio-devex-2024/"
---

A [Harness](https://www.harness.io/), empresa focada em plataformas de entrega de software e em IA aplicada a DevOPS, lançou um relatório contendo os resultados de uma pesquisa focada na experência do desenvolvedor, ou DevEx. Neste relatório, nos são apresentados diversos insights e informações que nos ajudam a melhorar os processos de desenvolvimento de software. O relatório é extenso e pode ser conferido na íntegra [neste link](https://cd.harness.io/OTI0LUNRTy0yMjQAAAGS1E9ijia-RiGqGqnp0WYwv0U-py22SP9jckZ4hX5v5YLAPOPBSRKwnPqJuBuJDtHIcS5CWQc=). Foram 500 respostas computadas, numa pesquisa realizada em parceria com a [Wakefield Research](https://wakefieldresearch.com/).

O relatório apresenta números que orbitam em torno de 4 tópicos principais:

* Ecossistema de desenvolvimento
* Dificuldades e riscos durante os processos de release de software
* Taxa de falhas de mudança (CFRs) e DevSecOPS
* Saúde mental dos desenvolvedores

No primeiro tópico, o relatório mostra que a grande quantidade de ferramentas utilizadas 

* 500 desenvolvedores foram entrevistados, numa parceria com a Wakefiled research
* Desenvolvedores gerenciam (ou têm que lidar) com uma média de 14 ferramentas diferentes
  * workflow complexo
  * ecossistema fragmentado
  * cria funis de produtividade
  * 54% dos devs dizem demorar mais de uma semana para aprender novas ferramentas de devops
  * Onboarding de novas ferramentas ao processo já existente pode consumir até 100 dias de trabalho
    * alterações de automações, atualizações, plugins, integrações novas, scripts, etc.
  * 59% dos devs dizem que demoram uma semana ou mais para construir ferramentas internas
    * consequencia direta: adiciona pontos de falha no desenvolvimento
  * Múltiplas ferramentas também significa mudança de contexto (interfaces, fluxos, procedimentos internos de cada software) e isso atrapalha a produtividade (97% dos devs)
    * confusão -> overload cognitivo -> falta de consistência
* Uma plataforma unificada com todas as ferramentas de desenvolvimento que precisamos aumenta a produtividade dos desenvolvedores
* 62% dos clientes dessas ferramentas que são executivos de TI preferem comprar plataformas
* Consolidação de ferramentas significa um aumento de produtividade em torno de 53%
  
* 60% das organizações ainda lançam software em uma base mensal ou trimestral
  * Incompatível com as demandas de agilidade e respostas rápidas do mercado
  * 42% dos desenvolvedores acham que seus deploys para produção não são rápidos ou eficientes
  * 44% dos devs acham que que seus testes end-to-end não são rápidos ou eficientes
  * Code reviews muito longos também contribuem para estes intervalos muito longos entre deploys de produção.
  * 67% dos devs atestam que seus code reviews duram em média 1 semana
    * prejudica a resposta a incidentes
  * Reduced Change Failure Rates (CFR) resultaram em um aumento de produtividade de 60%
    * Métrica que avalia o quanto as mudanças do software resultaram em falhas em outras áreas

* 42% dos devs dizem que não podem lançar software em produção sem risco de falhas no processo.
  * Métrica relacionada a isso: CFR (Change Failure Rate)
  * 39% dos devs experimentam falhas em pelo menos metade do tempo
  * Developer Toil: Caracterizado por tarefas repetitivas, manuais e com baixo valor e que consomem uma quantidade significativa de tempo
    * Quanto mais experiente você é em desenvolvimento de software, mais você se preocupa menos com burocracias referentes ao desenvolvimento e mais em gerar valor com o seu software
    * 28% dos desenvolvedores dizem que levam pelo menos um dia para construir e testar artefatos
    * 67% dos devs atualmente executam rollbacks manuais
      * Rollbacks automáticos são preferíveis em detrimento dos manuais, pois entende-se que o componente humano no processo pode ocasionar falhas e riscos operacionais
  * 32% dos devs dizem que seus softwares possuem uma taxa baixa de cobertura de testes
  * 23% dos devs estão fazendo horas extras a uma quantidade equivalente a 10 dias no mês
  * Uma redução no Developer Toil resulta em um aumento de produtividade de 37% em média

* 59% dos desenvolvedores dizem que os requisitos de segurança (AppSec) limitam a capacidade de deploys frequentes de código.
  * Em relação a DevOPS, é fato que a segurança  é normalmente sacrificada em prol do negócio
  * 40% dos desenvolvedores admitem que suas empresas não aplicam boa políticas de segurança e governança no processo de CI/CD
  * 42% dos devs não possuem políticas robustas de gerenciamento de usuários (IAM)
  * A adoção de práticas de DevSecOPS para garantir aplicações cada vez mais seguras
  * 95% dos incidentes de segurança são duplicados (barulho)

* 52% dos devs citam burnout como uma razão dos seus pares buscarem outros empregos
  * 45% dos devs responderam que não possuem tempo suficiente para aprendizado e desenvolvimento
  * 71% dos executivos de TI que o tempo de onboarding de novos colaboradores é de pelo menos 2 meses
  * 97% dos devs afirmam trocar de contexto durante o dia
  * 100% dos executivos de TI admitem que se eles reduzissem o número de erros no processo de desenvolvimento aumentaria a retenção de colaboradores
  * 28.8k hrs gastas em análise de incidentes relacionados a código