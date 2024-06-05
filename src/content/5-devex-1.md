---
title: "O que é Developer Experience e como chegamos até aqui?"
date: "2024-06-05"
draft: false
path: "/blog/devex-1/"
---

Como vimos no post anterior (que você pode conferir [aqui](https://giovane.boaviagemribeiro.com/blog/relatorio-devex-2024/)), percebemos que a experiência do desenvolvedor de software, ou _DevEx_, é algo que começa a ter um impacto relevante na produtividade das empresas, e um tópico que ganha mais e mais relevância ao longo do tempo. Hoje, com a enxurrada de responsabilidades que os desenvolvedores possuem nas organizações fica cada vez mais claro que não podemos lidar com os devs da mesma forma que lidávamos no passado, ou corremos o risco das empresas enfrentarem sérios problemas no futuro. Porém, para entendermos melhor o que é esse tal de DevEx e como implantá-lo da melhor forma em nossas organizações, é necessário sabermos a origem dessa "experiência desenvolvedora" e como chegamos no termo complexo que temos hoje. Comecemos pelo começo. Este artigo é uma adaptação deste excelente texto[1] e tentei complementá-lo com insights do relatório da Harness e meus próprios pensamentos. Vamos lá!

## Pré-2000: A idade da pedra

Aqui, temos um contexto histórico interessante: internet se consolidando, bolhas tech sendo formadas (e estouradas), um grande _hype_ em torno do desenvolvimento de software, e nós, desenvolvedores, no nosso cantinho um pouco alheios ao _boom_ de negócios que se formavam e mais preocupados em terminar o software (com ciclos de release durando meses ou até mesmo anos), não nos preocupando com clientes, marketing, experência do usuário e outras "coisas menores". Nesta era pré-cloud, o que reinava aqui era o desenvolvimento em cascata, o que significava uma separação clara e sequencial das etapas de desenvolvimento de modo que equipes distintas (e incomunicáveis em certo ponto) gerenciavam etapas muito específicas e próprias. Uma equipe não sabia ao certo o que a outra fazia e cada etapa só se preocupava com ela mesma (atribuições entre parenteses não participam ativamente de nenhuma etapa prática/operacional):

* Design: (Arquitetos e gerentes de projeto)
* Build: Devs e QAs
* Ship/Run: Equipes tradicionais de operações e sysadmins

Nesta era, como o dev só se preocupava com o software em si, seu nível de stress era considerado "tranquilo", e suas responsabilidades eram bem restritas.

## 2000: Desenvolvimento ágil

A primeira década do novo milênio trouxe o desenvolvimento ágil, o que fez com que o desenvolvimento em cascata sofresse uma pequena mudança. As etapas de design e build se fundiram e agora, desenvolvedores e QAs convivem com POs, SMs, ou seja, a área de negócio. Temos uma melhora significativa no ciclo de release, que agora pode levar semanas ou meses, e ainda temos uma melhoria na experiência do usuário, uma vez que devido a aproximação das áreas de desenvolvimento e negócio, os devs passaram a entender melhor as necessidades dos usuários (atribuições entre parenteses não participam ativamente de nenhuma etapa prática/operacional):


* Design/Build: (POs, SMs, arquitetos), devs e QAs
* Ship/Run: Equipes tradicionais de operações e sysadmins

Nesta era, apesar das áreas de negócio e desenvolvimento estarem unidas, ainda temos um nível de responsabilidade restrito dos desenvolvedores. Neste ponto, o nível de stress é considerado "baixo".

## 2010: DevOps

Agora o calo começou a apertar. Aqui temos a grande revolução causada pelo DevOps. Nas organizações, o desenvolvedor se transformou em elemento central do processo de desenvolvimento de software, já que agora ele é responsável também pela entrega do software. QAs e devs se misturam cada vez mais, já que agora, QAs precisam desenvolver testes cada vez mais automatizados e alinhados ao ciclo de desenvolvimento. Em uma era onde arquiteturas cloud estão cada vez mais consolidadas, a equipe de operações, antes isolada começa a se unir parcialmente a equipe de desenvolvimento. O software evolui cada vez mais rápido, com ciclos de entrega cada vez menores (durando no máximo dias), com releases orientadas a features/bugs únicas e não a um conjunto de features/bugs, como feito anteriormente (atribuições entre parenteses não participam ativamente de nenhuma etapa prática/operacional):

* Design/Build/Ship: (POs, SMs, arquitetos), desenvolvedores fullstack (Desenvolvem software (frontend e backend), testes automáticos, pipelines CI/CD).
* Run: SRE + Engenheiros cloud

Nesta era, os desenvolvedores recebem mais responsabilidades, sendo responsáveis pela construção e entrega de software. Prazos cada vez mais apertados forçam os devs a lidarem com pressões maiores. O nível de stress já aumenta consideravelmente.

## 2020: Times de produto

Finalmente, chegamos no tempo atual (ou pelo menos, até a década onde este artigo foi publicado). Aqui, vemos uma mudança de paradigma: as empresas agora não lidam mais com software como um produto por si só, mas sim como plataformas onde produtos são oferecidos. Nestes cenários, temos equipes inteiras dedicadas a manutenção destas plataformas, enquanto que outros times constroem produtos que utilizam estas plataformas. Um exemplo clássico são empresas que trabalham com Big Data, onde plataformas fornecem o acesso aos dados, que são utilizados das mais diversas formas pelos produtos comercializados. Devido a esta mudança, as topologias de equipes mudaram radicalmente [2]. Se as estruturas de times mudaram, adicionando principalmente dinamismo, os papéis de cada integrante do time também mudaram e com isso, mais responsabilidades [3][4].

Como esperado, agora desenvolvedores acumulam responsabilidades gigantescas e o seu nível de stress aumentou a níveis estratosféricos. Times orientados a produtos demandam muito dos times de plataformas, com prazos cada vez mais curtos (devido a rapidez dos negócios) e praticamente inviabilizando ações manuais de longo prazo. 

## E agora?

E aqui chegamos no cenário mais caótico possível para quem desenvolve software E aqui, entenda: desenvolvedor como um todo, tanto para código da aplicação quanto para testes, infraestrutura, etc. O cenário é caótico porque agora um desenvolvedor precisa entender o contexto do seu software a nível técnico, de negócio e de custo (infraestrutura, escalabilidade, performance).

Diante disso, existem alguns caminhos. O mais natural deles seria aplicar uma cultura DevOps que não sobrecarregue demais os desenvolvedores, ao mesmo tempo que consiga prover um nível de agilidade nos processos que atenda as necessidades dos times de produto e também de plataforma. Precisamos eliminar os principais entraves que impedem os desenvolvedores de focarem mais na aplicação, automatizando ao máximo as etapas do processo de desenvolvimento, tornando assim o processo como um "[caminho](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/) dourado". Como vimos no post [anterior](https://giovane.boaviagemribeiro.com/blog/relatorio-devex-2024/), devemos prover um processo que não possua etapas que "atrapalhem" o fluxo natural de desenvolvimento (uma quantidade grande de softwares para etapas diferentes do fluxo, por exemplo). Assim, teríamos uma experiência de desenvolvimento (ou DevEx) cada vez melhor. 

Mas, como fazer isso? É aí que entra um termo que exploraremos melhor nos próximos artigos: Engenharia de Plataforma. 

### Referências

* [1] [https://medium.com/agorapulse-stories/platform-engineering-part-1-why-the-evolution-of-developer-cognitive-load-9f36f5cc2888](https://medium.com/agorapulse-stories/platform-engineering-part-1-why-the-evolution-of-developer-cognitive-load-9f36f5cc2888)
* [2] [https://web.devopstopologies.com/](https://web.devopstopologies.com/)
* [3] [https://medium.com/@hello_9187/infrastructure-as-code-needs-a-rethink-201c6875522c](https://medium.com/@hello_9187/infrastructure-as-code-needs-a-rethink-201c6875522c)
* [4] [https://amzn.to/4c2VGIG](https://amzn.to/4c2VGIG)