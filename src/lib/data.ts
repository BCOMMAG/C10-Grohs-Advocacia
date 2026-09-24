export interface PracticeArea {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: string;
}

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: "rescisao" | "jornada_vinculo" | "acidente_inss" | "geral";
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const OFFICE_INFO = {
  name: "Grohs Sociedade de Advogados",
  shortName: "Grohs Advocacia",
  lawyerName: "João Rodrigo Pimentel Grohs",
  oab: "Inscrição Regular OAB/PR",
  tagline: "Advocacia Trabalhista Exercida com Rigor Técnico, Especialização e Ampla Experiência",
  address: "Av. Desembargador Hugo Simas, 1120 - Sl 207 - Bom Retiro, Curitiba - PR, 80520-250",
  addressShort: "Bom Retiro, Curitiba - PR",
  cityState: "Curitiba - PR",
  phone: "(41) 3040-8725",
  whatsappNumber: "5541988370246",
  whatsappFormatted: "(41) 98837-0246",
  whatsappUrl: "https://wa.me/5541988370246?text=Ol%C3%A1%2C%20Dr.%20Jo%C3%A3o%20Rodrigo.%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  mapsDirectionsUrl: "https://maps.google.com/?q=Av.+Desembargador+Hugo+Simas,+1120+-+Sl+207+-+Bom+Retiro,+Curitiba+-+PR,+80520-250",
  email: "grohs@grohs.adv.br",
  experienceYears: "13 anos",
  workingHours: {
    weekdays: "Segunda a Sexta: 09:00 às 12:00 | 13:30 às 18:00",
    weekends: "Sábado e Domingo: Fechado",
  },
  social: {
    instagram: "https://www.instagram.com/grohsadvocacia/",
    linkedin: "https://www.linkedin.com/in/joao-rodrigo-pimentel-grohs-861a244b/",
  },
  pillars: {
    mission: "Prover representação e consultoria jurídica de alto padrão na seara trabalhista, pautada no rigor dogmático, ética inabalável e busca incessante pela justiça nas relações laborais.",
    vision: "Ser referência contínua em advocacia trabalhista pela profundidade técnica, atendimento exclusivo e resolutividade estratégica em causas de alta complexidade.",
    values: [
      "Rigor Técnico e Especialização Constante",
      "Ética e Transparência Estrita",
      "Comprometimento Incansável com a Justiça do Trabalho",
    ],
  },
  metrics: [
    { value: "13+", label: "Anos de sólida trajetória na advocacia privada" },
    { value: "100%", label: "Atendimento direto com advogado titular especializado" },
    { value: "Rigor", label: "Padrão de excelência processual e técnica" },
    { value: "Ética", label: "Conformidade integral ao CFOAB e sigilo profissional" },
  ],
};

export const LAWYER_PROFILE = {
  name: "João Rodrigo Pimentel Grohs",
  role: "Advogado Titular & Especialista Trabalhista",
  oab: "Inscrição Regular OAB/PR",
  specialties: "Especialista em Direito e Processo do Trabalho",
  photo: "/foto_perfil.jpeg",
  bio: "Grohs Advocacia Trabalhista é fruto do trabalho do advogado João Rodrigo Pimentel Grohs, cuja experiência na advocacia privada se iniciou em 2013. Por acreditar que os profissionais tendem a entregar melhores resultados quando são especializados na área que se propõem a trabalhar e pela vocação por matérias afetas ao Direito do Trabalho, a atuação do escritório está concentrada nessa disciplina.",
  academicSummary: [
    {
      institution: "EMATRA-IX (Escola da Magistratura do Trabalho da 9ª Região)",
      course: "Curso de Preparação à Carreira da Magistratura do Trabalho",
      details: "Especialização e aprofundamento prático em Direito Material e Processual do Trabalho, concluído em 2021.",
    },
    {
      institution: "UniCuritiba (Centro Universitário Curitiba)",
      course: "Bacharelado em Direito",
      details: "Formação jurídica sólida e dogmática em uma das mais tradicionais faculdades de Direito do Paraná, concluída em 2012.",
    },
    {
      institution: "Advocacia Privada Especializada",
      course: "13 Anos de Experiência e Prática Forense",
      details: "Atuação constante em audiências, sustentações perante o TRT da 9ª Região e TST, elaboração de recursos e consultoria estratégica.",
    },
  ],
  quote: "Advocacia trabalhista exercida por profissionais com especialização e ampla experiência para um trabalho de excelência!",
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "rescisao-verbas",
    code: "01",
    title: "Rescisão Contratual & Verbas Rescisórias",
    subtitle: "Cálculo Rigoroso e Cobrança dos Direitos na Demissão",
    description: "Apuração minuciosa de haveres trabalhistas na demissão sem justa causa, pedido de demissão ou acordo mútuo, assegurando que o trabalhador não receba valores a menor nem renuncie a direitos adquiridos.",
    highlights: [
      "Conferência minuciosa de saldo salarial, aviso prévio proporcional e férias",
      "Liberação integral do saldo do FGTS e cobrança da multa rescisória de 40%",
      "Habilitação e liberação de guias para percepção de seguro-desemprego",
      "Aplicação de penalidades e multas por atraso na quitação (art. 477 da CLT)",
    ],
  },
  {
    id: "horas-extras-jornada",
    code: "02",
    title: "Horas Extras, Banco de Horas & Intervalos",
    subtitle: "Remuneração Justa por Todo o Tempo à Disposição",
    description: "Defesa dos trabalhadores submetidos a jornadas exaustivas, controle de ponto fraudulento, banco de horas irregular e supressão de intervalos intrajornada ou interjornada.",
    highlights: [
      "Cobrança de horas suplementares excedentes à 8ª diária e 44ª semanal",
      "Adicional noturno, cômputo da hora noturna reduzida e reflexos legais",
      "Indenização por intervalo intrajornada suprimido ou concedido parcialmente",
      "Descaracterização de acordos ilegais ou tácitos de compensação de jornada",
    ],
  },
  {
    id: "vinculo-clt-pejotizacao",
    code: "03",
    title: "Reconhecimento de Vínculo CLT & Falsa PJ",
    subtitle: "Combate à Pejotização e à Precarização do Trabalho",
    description: "Atuação enérgica para profissionais contratados sob regime de PJ (Pessoa Jurídica) ou sem assinatura de carteira que cumprem horário, ordens diretas e subordinação jurídica típica de empregado.",
    highlights: [
      "Declaração de nulidade de contratos simulados de prestação de serviços (art. 9º da CLT)",
      "Recuperação de FGTS não depositado, 13º salários, férias e adicionais",
      "Anotação obrigatória retroativa na Carteira de Trabalho e Previdência Social",
      "Recolhimento integral das contribuições previdenciárias do período laborado",
    ],
  },
  {
    id: "assedio-rescisao-indireta",
    code: "04",
    title: "Assédio Moral, Desvio de Função & Rescisão Indireta",
    subtitle: "Dignidade e Reparação no Ambiente de Trabalho",
    description: "Medidas jurídicas contra perseguições, metas abusivas, humilhações públicas, desvio ou acúmulo de função, culminando na rescisão indireta com quitação total de direitos.",
    highlights: [
      "Ajuizamento de Rescisão Indireta (art. 483 da CLT) com liberação de todas as verbas",
      "Reparação e indenização civil por danos morais e assédio moral",
      "Cobrança de diferenças salariais decorrentes de desvio e acúmulo funcional",
      "Proteção jurídica contra retaliações e demissões discriminatórias",
    ],
  },
  {
    id: "acidente-trabalho-doenca",
    code: "05",
    title: "Acidentes de Trabalho & Doenças Ocupacionais",
    subtitle: "Reparação Integral por Incapacidade e Danos Laborais",
    description: "Acompanhamento pericial e suporte integral para trabalhadores vitimados por acidentes na empresa ou em trajeto, bem como acometidos por doenças desencadeadas pelas condições da atividade profissional.",
    highlights: [
      "Estabilidade provisória de 12 meses após a cessação do benefício acidentário",
      "Indenizações por danos materiais, danos morais e reparação de danos estéticos",
      "Pensão mensal vitalícia correspondente à redução da capacidade laboral",
      "Acompanhamento técnico em perícias médicas na Justiça do Trabalho",
    ],
  },
  {
    id: "previdenciario-inss",
    code: "06",
    title: "Direito Previdenciário & Benefícios do INSS",
    subtitle: "Interseção Estratégica entre Trabalho e Seguridade Social",
    description: "Reconhecimento de tempos de contribuição especiais por insalubridade e periculosidade, concessão de aposentadorias e restabelecimento de benefícios por incapacidade junto ao INSS.",
    highlights: [
      "Aposentadoria especial por exposição a agentes insalubres e perigosos",
      "Benefício por incapacidade temporária (B91/B31) e permanente",
      "Conversão de auxílio comum em acidentário e averbação de sentenças trabalhistas",
      "Planejamento previdenciário e recursos contra indeferimentos administrativos",
    ],
  },
];

export const EDUCATIONAL_TOPICS: Article[] = [
  {
    id: "artigo-01",
    number: "01",
    title: "Pejotização e Vínculo Empregatício: Quando a Exigência de CNPJ é Nula?",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary: "Entenda os critérios de subordinação, habitualidade e pessoalidade que anulam contratos de prestação de serviços simulados.",
    content: [
      "A contratação de profissionais por meio de pessoa jurídica (a chamada 'pejotização') para o exercício de atividades com habitualidade, subordinação jurídica, pessoalidade e onerosidade é vedada pelo ordenamento jurídico brasileiro.",
      "O artigo 9º da Consolidação das Leis do Trabalho (CLT) determina expressamente a nulidade de pleno direito de todos os atos praticados com o objetivo de desvirtuar, impedir ou fraudar a aplicação dos preceitos nela contidos.",
      "Havendo a declaração judicial de vínculo de emprego, o trabalhador faz jus ao recebimento retroativo de todas as verbas celetistas, incluindo férias acrescidas de um terço, 13º salários, recolhimento do FGTS, aviso prévio e anotação formal na Carteira de Trabalho.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-02",
    number: "02",
    title: "Rescisão Indireta: O Que É e Quando o Empregado Pode 'Demitir a Empresa'?",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary: "Como a falta grave patronal permite a saída do trabalhador com o recebimento integral de todas as verbas rescisórias da dispensa sem justa causa.",
    content: [
      "A Rescisão Indireta do Contrato de Trabalho, disciplinada pelo artigo 483 da CLT, é o mecanismo pelo qual o empregado pode extinguir o vínculo em decorrência de falta grave cometida pelo empregador.",
      "Entre as hipóteses mais recorrentes na jurisprudência figuram: atraso reiterado de salários, não recolhimento contínuo do FGTS, exigência de serviços superiores às forças do trabalhador, rigor excessivo e assédio moral continuado.",
      "Reconhecida a rescisão indireta em juízo, o trabalhador tem assegurado o recebimento de todas as verbas rescisórias cabíveis na dispensa sem justa causa, incluindo aviso prévio indenizado, multa de 40% do FGTS e levantamento das guias de seguro-desemprego.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-03",
    number: "03",
    title: "Horas Extras e Intervalo Intrajornada: Regras Legais e Direitos do Trabalhador",
    category: "Direito do Trabalho",
    readTime: "3 min de leitura",
    summary: "Saiba como funciona a apuração da jornada extraordinária e o reflexo do trabalho suplementar no descanso e nas verbas contratuais.",
    content: [
      "A Constituição Federal fixa como padrão a duração do trabalho normal não superior a 8 horas diárias e 44 semanais. Todo o labor prestado além desses limites deve ser remunerado com o adicional constitucional mínimo de 50%, ou percentual superior previsto em acordo ou convenção coletiva.",
      "Para jornadas superiores a seis horas diárias, a concessão de intervalo para repouso e alimentação de no mínimo uma hora é obrigatória. A sua não concessão ou concessão parcial implica o pagamento de indenização do período suprimido com acréscimo de 50%.",
      "As horas extras habituais integram a remuneração do trabalhador e refletem diretamente no cálculo do descanso semanal remunerado (DSR), férias, 13º salário, aviso prévio e depósitos de FGTS.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-04",
    number: "04",
    title: "Acidente de Trabalho e Estabilidade Provisória de 12 Meses: Como Funciona?",
    category: "Direito Acidentário",
    readTime: "4 min de leitura",
    summary: "As condições legais para a garantia de emprego e a responsabilidade civil do empregador por danos decorrentes da atividade laboral.",
    content: [
      "O segurado que sofreu acidente do trabalho ou que foi acometido de doença ocupacional a ele equiparada tem garantida, pelo prazo mínimo de 12 meses, a manutenção do seu contrato de trabalho na empresa após a cessação do auxílio por incapacidade temporária acidentária concedido pelo INSS (artigo 118 da Lei 8.213/91).",
      "É dever da empresa emitir a Comunicação de Acidente de Trabalho (CAT) até o primeiro dia útil seguinte ao da ocorrência. Caso a empresa se omita, a formalização pode ser promovida pelo próprio empregado, médico assistente ou entidade sindical.",
      "Independentemente da estabilidade no emprego, caso seja comprovada a negligência da empresa quanto às normas de segurança e medicina do trabalho, é cabível ação indenizatória por danos materiais, morais e estéticos, além de pensão mensal correspondente ao grau de incapacidade.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-01",
    author: "Adri Fagundes",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Profissional extremamente competente, ético e atencioso. Demonstra profundo conhecimento em direito trabalhista e me passou muita segurança durante todo o processo. Recomendo de olhos fechados!",
    source: "Google Reviews",
  },
  {
    id: "rev-02",
    author: "Jaqueline Duarte",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Excelente advogado! Esclareceu todas as minhas dúvidas com clareza e paciência, sempre disponível para atender. Meu caso foi resolvido com agilidade e total transparência.",
    source: "Google Reviews",
  },
  {
    id: "rev-03",
    author: "Paola Doblinski",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Profissionalismo impecável! Atendimento humanizado e uma dedicação admirável com a causa. Me senti muito bem acolhida e representada. Gratidão pelo excelente trabalho!",
    source: "Google Reviews",
  },
  {
    id: "rev-04",
    author: "Natanael Ferreira",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Super recomendo o Dr. João Rodrigo. Muito atencioso, experiente e transparente em todas as etapas da ação trabalhista. Trabalho de altíssimo nível!",
    source: "Google Reviews",
  },
  {
    id: "rev-05",
    author: "Diovana Fernandes",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Atendimento de excelência do início ao fim. O Dr. João Rodrigo é pontual, detalhista e muito competente no que faz. Superou todas as minhas expectativas!",
    source: "Google Reviews",
  },
  {
    id: "rev-06",
    author: "Andressa Nogueira Santos",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Advogado dedicado, que se preocupa de verdade com o cliente e busca a melhor solução jurídica possível. Nota 10 pelo compromisso e seriedade!",
    source: "Google Reviews",
  },
  {
    id: "rev-07",
    author: "Marcio Valeriano",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Grande profissional! Tirou todas as minhas dúvidas desde o primeiro contato no escritório no Bom Retiro. O processo transcorreu exatamente como me explicou, com muita transparência.",
    source: "Google Reviews",
  },
  {
    id: "rev-08",
    author: "Alex Dutra",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Recomendo muito. O Dr. João Rodrigo possui muita bagagem e transmite tranquilidade. Foi direto ao ponto e conduziu tudo com maestria.",
    source: "Google Reviews",
  },
  {
    id: "rev-09",
    author: "Marcelo Furlan",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Excelente atendimento. Profissional com ética inquestionável e muita dedicação à causa do trabalhador. Muito satisfeito com a condução do meu processo.",
    source: "Google Reviews",
  },
  {
    id: "rev-10",
    author: "Robson Fogaça",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Profissionalismo e competência resumem o trabalho da Grohs Advocacia. Sempre recebi retorno rápido sobre o andamento do meu processo.",
    source: "Google Reviews",
  },
  {
    id: "rev-11",
    author: "Daniel Lamberti",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Doutor João Rodrigo é diferenciado! Honestidade, clareza e conhecimento profundo em direito trabalhista. Indico com certeza.",
    source: "Google Reviews",
  },
  {
    id: "rev-12",
    author: "Rauan Marcon",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Serviço impecável. Atendimento transparente, sempre esclarecendo o que era viável sem promessas vazias. Parabéns pelo profissionalismo!",
    source: "Google Reviews",
  },
  {
    id: "rev-13",
    author: "Daniela Simões",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Muito grata por todo o suporte e atenção prestados pelo Dr. João Rodrigo. Atendimento muito humano e resultado excelente!",
    source: "Google Reviews",
  },
  {
    id: "rev-14",
    author: "Jerome Kern",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Atendimento de primeira linha em Curitiba. O conhecimento técnico do Dr. João é evidente desde a primeira conversa. Recomendo a todos.",
    source: "Google Reviews",
  },
  {
    id: "rev-15",
    author: "Thiago Reichel",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Ótima experiência com o escritório. Processo conduzido com seriedade e clareza. Me manteve informado de cada decisão.",
    source: "Google Reviews",
  },
  {
    id: "rev-16",
    author: "Magna Antunes",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Super recomendo! Advogado atencioso, seguro e muito capacitado. Agradeço imensamente pelo empenho em meu caso.",
    source: "Google Reviews",
  },
  {
    id: "rev-17",
    author: "Everson Sitoni",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Profissional exemplar, muito sério e de confiança. Explicou cada detalhe das minhas verbas rescisórias com clareza impressionante.",
    source: "Google Reviews",
  },
  {
    id: "rev-18",
    author: "Joseane Rupel",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Excelente atendimento e assessoria. O Dr. João Rodrigo é muito dedicado e competente. Indico a todos que precisam de advogado trabalhista sério!",
    source: "Google Reviews",
  },
];

export const WORK_STEPS: Step[] = [
  {
    number: "01",
    title: "Análise Preliminar e Escuta Atenta",
    subtitle: "Compreensão aprofundada dos fatos e documentação",
    description: "Você detalha a rotina de trabalho e as irregularidades vivenciadas.",
  },
  {
    number: "02",
    title: "Diagnóstico Jurídico e Parecer Estratégico",
    subtitle: "Transparência total sobre a viabilidade e direitos",
    description: "Apresentamos um parecer sincero e fundamentado na jurisprudência do TRT-9 e TST, esclarecendo riscos, direitos consolidados e alternativas de atuação.",
  },
  {
    number: "03",
    title: "Elaboração Técnica e Atuação Combativa",
    subtitle: "Rigor processual e cálculos precisos",
    description: "Redação minuciosa de petições, acompanhamento de perícias técnicas e sustentação oral perante os tribunais com base na especialização acadêmica do titular.",
  },
  {
    number: "04",
    title: "Acompanhamento Contínuo e Direto",
    subtitle: "Informação clara em todas as fases processuais",
    description: "Cada movimentação processual relevante é comunicada de forma clara e acessível, com atendimento contínuo e sem intermediários até a conclusão do caso.",
  },
];

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "rescisao",
    label: "Rescisão & Verbas",
    iconName: "Briefcase",
    items: [
      {
        id: "faq-r1",
        question: "Fui dispensado sem justa causa. Quais verbas tenho direito de receber?",
        answer: "Na dispensa sem justa causa, o trabalhador tem direito a saldo de salário, aviso prévio (trabalhado ou indenizado e proporcional ao tempo de serviço), férias vencidas e proporcionais acrescidas de 1/3, 13º salário proporcional, saque do FGTS com acréscimo da multa de 40%, além do fornecimento de guias para o seguro-desemprego. O prazo legal para pagamento é de até 10 dias corridos após o término do contrato.",
      },
      {
        id: "faq-r2",
        question: "O que acontece se a empresa atrasar o pagamento da rescisão contratual?",
        answer: "Conforme o artigo 477, § 8º da CLT, o atraso injustificado no pagamento integral das verbas rescisórias gera a incidência de multa correspondente a um salário do próprio empregado, a ser paga diretamente em seu favor.",
      },
      {
        id: "faq-r3",
        question: "A empresa quer fazer um 'acordo' para eu devolver a multa dos 40% do FGTS. Isso é legal?",
        answer: "Não. A exigência ou coação para devolução da multa de 40% do FGTS é fraude trabalhista e conduta ilegal. A reforma trabalhista previu a extinção do contrato por mútuo acordo (art. 484-A da CLT) de forma legal, no qual a multa é reduzida para 20% e o trabalhador saca 80% do saldo de FGTS, sem qualquer devolução por fora.",
      },
    ],
  },
  {
    id: "jornada_vinculo",
    label: "Horas Extras & Pejotização",
    iconName: "Clock",
    items: [
      {
        id: "faq-j1",
        question: "Trabalho como PJ ou MEI, mas cumpro ordens, horário e rotina. Posso pedir os direitos da CLT?",
        answer: "Sim. No Direito do Trabalho vigora o princípio da Primazia da Realidade: o que vale é o que acontece no dia a dia, e não o papel assinado. Comprovada a subordinação, habitualidade, pessoalidade e remuneração, a contratação PJ é declarada nula (pejotização fraudulenta) e o vínculo empregatício em carteira é reconhecido com o pagamento de todo o passivo retroativo.",
      },
      {
        id: "faq-j2",
        question: "Como comprovar as horas extras se a empresa não deixava anotar o cartão ou alterava o ponto?",
        answer: "As horas extras podem ser comprovadas por diversos meios admitidos em direito: mensagens de WhatsApp fora do horário, trocas de e-mails profissionais com horários registrados, extratos de login e logout em sistemas corporativos, relatórios de rastreamento de veículos e prova testemunhal idônea.",
      },
      {
        id: "faq-j3",
        question: "Tenho quanto tempo para entrar com uma ação trabalhista após sair da empresa?",
        answer: "O trabalhador dispõe do prazo prescricional de até 2 (dois) anos após o término do vínculo para ajuizar a ação trabalhista, podendo cobrar os direitos relativos aos últimos 5 (cinco) anos contados a partir da data de ingresso da ação.",
      },
    ],
  },
  {
    id: "acidente_inss",
    label: "Acidente de Trabalho & INSS",
    iconName: "ShieldCheck",
    items: [
      {
        id: "faq-a1",
        question: "Sofri um acidente de trabalho ou fui acometido por doença profissional. Tenho estabilidade?",
        answer: "Sim. Caso o afastamento tenha sido superior a 15 dias e concedido o benefício acidentário (código B91) pelo INSS, o empregado tem direito à garantia provisória de emprego por no mínimo 12 meses após a alta médica previdenciária, não podendo ser demitido sem justa causa durante esse período.",
      },
      {
        id: "faq-a2",
        question: "Se a empresa não emitiu a CAT após o acidente, o que devo fazer?",
        answer: "A emissão da CAT é obrigação da empresa até o primeiro dia útil seguinte ao fato. Havendo recusa patronal, a CAT pode ser cadastrada e emitida pelo próprio empregado, por seu médico assistente ou pelo sindicato da categoria, viabilizando o enquadramento correto perante o INSS.",
      },
    ],
  },
  {
    id: "geral",
    label: "Atendimento & Honorários",
    iconName: "Scale",
    items: [
      {
        id: "faq-g1",
        question: "Como funciona a primeira conversa com o Dr. João Rodrigo Grohs?",
        answer: "A primeira análise é feita diretamente pelo titular do escritório, seja por atendimento online via WhatsApp ou agendada presencialmente em nosso endereço no bairro Bom Retiro, em Curitiba. Analisamos a documentação com rigor e discrição absoluta.",
      },
      {
        id: "faq-g2",
        question: "O escritório atende trabalhadores de outras cidades e regiões do Paraná?",
        answer: "Sim. Com a digitalização integral dos processos trabalhistas no sistema PJe dos Tribunais Regionais do Trabalho (TRT-9) e do TST, realizamos consultas, peticionamentos e até audiências telepresenciais com plena eficácia para clientes de toda a Região Metropolitana de Curitiba, interior do Paraná e outros Estados.",
      },
    ],
  },
];