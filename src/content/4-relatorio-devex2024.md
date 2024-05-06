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

## Ecossistema de desenvolvimento

O relatório mostra que a grande quantidade de ferramentas utilizadas pelos desenvolvedores para compor o ecossistema de desenvolvimento (14, em média) pode prejudicar bastante a produtividade. A dificuldade aumenta quando é necessário adicionar novas ferramentas ao processo já existente, seja em termos de configuração, ou integração com ferramentas já presentes. Além disso, uma quantidade grande de ferramentas utilizadas no processo de desenvolvimento pode gerar uma grande quantidade de gargalos burocráticos, além de trocas de contexto que afetam ainda mais a produtividade, gerando overloads cognitivos. A tendência é que ferramentas isoladas sejam convertidas em plataformas fortemente integradas, e que atendam com mais facilidade as necessidades das empresas. Somente a consolidação das ferramentas do processo de desenvolvimento podem aumentar a produtividade dos desenvolvedores em aproximadamente 53%, de acordo com o relatório da Harness.

## Dificuldades e riscos durante os processos de release de software

Mais da metade das das empresas (60%) ainda lançam software em uma frequência mensal ou trimestral. Dentre as principais razões, apontadas pelos entrevistados, para este fato estão a lentidão dos procedimentos de deploy para ambientes produtivos, testes end-to-end lentos ou ineficientes, e code reviews muito longos. Como exemplo, 67% dos devs assumem que seus processos de code review duram em média 1 semana. Todo este tempo para code reviews possui uma consequencia grave, que afeta diretamente a resposta a incidentes. A situação se agrava quando mudanças no software ocasionam falhas em produção, o que faz com que o software estabilize em um tempo muito maior. O relatório inclusive propõe uma métrica que avalia o impacto destes ajustes que ocasionam falhas (_Change Failure Rate_, ou CFR). A conclusão, é que a produtividade do time pode aumentar em até 60% se tivermos CFRs baixos.

Além disso, outro problema que afeta diretamente os processos de desenvolvimento de software são as falhas de _deployment_. Sobre este tema, 42% dos desenvolvedores dizem que não conseguem realizar deploys sem risco de falhas. Dentre as razões para estas falhas, o relatório aponta principalmente as tarefas que não necessariamente são relacionadas com desenvolvimento de software. São tarefas repetitivas, manuais, com baixo valor e que consomem uma quantidade significativa de tempo (_Developer Toil_). Quanto mais experiente o desenvolvedor, menos ele quer se preocupar com estas tarefas e mais em gerar valor para o software. Outro dado preocupante é que 67% dos desenvolvedores executam rollbacks manuais. Além de serem mais demorados, rollbacks manuais adicionam o componente humano no processo, o que aumenta o risco de falhas operacionais. Rollbacks automáticos são preferíveis nestes cenários.

## Taxa de falhas de mudança (CFRs) e DevSecOPS

Requisitos de segurança (AppSec) são extremamente importantes para o software, e deve estar presentes nos processos de desenvolvimento. Porém, para 59% dos desenvolvedores, estes requisitos de segurança limitam a capacidade de deploys frequentes de código. Muitas vezes, devido ao fato de que os processos de validação e revisão voltados a segurança contribuem de maneira significativa para o tempo de lançamento do software. Colocando uma lente de aumento no processo e focando especificamente em DevOPS, a segurança é um dos primeiros pilares a serem sacrificados em prol de entregas mais rápidas e do próprio negócio. Uma prova desta afirmação é que 40% dos desenvolvedores entrevistados admitem que suas empresas não aplicam boas práticas de DevSecOPS em seus processos, e 42% dos devs participantes da pesquisa não possuem políticas robustas de IAM. Outro dado preocupante apontado na pesquisa é que 95% dos incidentes de segurança são duplicados, o que mostra que além de buscarmos um equilíbrio entre as práticas de DevSecOPS e agilidade nos processos de entrega de software, devemos melhorar a triagem dos incidentes de segurança para que menos duplicidades sejam apontadas.

## Saúde mental dos desenvolvedores

A saúde mental dos desenvolvedores também foi abordada nesta pesquisa, algo que, confesso, achei uma sacada muito interessante. Primeiro porque o relatório faz uma associação interessante entre erros no processo de desenvolvimento com aumento de stress e pressão em cima dos desenvolvedores, o que contribui bastante para seu desligamento das empresas. Não ter tempo suficiente para aprendizado e desenvolvimento (45%), trocas constantes de contexto de atividades (97%), além de longas horas gastas em análise de incidentes foram os fatores mais citados pelos desenvolvedores. 

A maioria dos executivos de TI que responderam a pesquisa (71%) afirmam que o tempo de onboarding de novos colaboradores em média é de 2 meses, o que torna o processo de reposição de colaboradores ainda mais complicado. Empresas com rotatividade alta de funcionários sofrem com níveis de produtividade baixos, simplesmente porque seus novos colaboradores demoram muito para estarem "prontos". Isso somado as altas cargas de stress, processos com etapas manuais e repetitivas com altos níveis de falha e as já citadas trocas de contexto corroboram para que 52% dos desenvolvedores citarem burnout como a principal razão para seus pares buscarem novas oportunidades em outras empresas.

## Conclusão

Como pudemos observar, o relatório Harness sobre Developer Experience em 2024 é um retrato bem completo e interessante sobre a realidade das empresas em termos de processos e desenvolvimento de software, fornecendo bons insights e norteando ações que podemos aplicar em nossas organizações para melhorar cada vez os processos de desenvolvimento e principalmente a experiência dos desenvolvedores.