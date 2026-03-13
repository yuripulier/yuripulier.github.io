import { ResumeData } from "./types";

export const RESUME_DATA: Record<'en' | 'pt', ResumeData> = {
  en: {
    name: "Yuri Pulier",
    title: "DATA SCIENTIST SPECIALIST </> AI ENGINEER",
    location: "Vitoria, ES - Brazil",
    email: "yuricelestepulier@gmail.com",
    linkedin: "linkedin.com/in/yuri-celeste-pulier",
    github: "github.com/yuripulier",
    profileImage: "/linkedin.png",
    cvLink: "/cv-yuri-pulier.pdf",
    objective: "Data Scientist since 2021 with a focus on supply chain and experience in delivery and demand forecasting using artificial neural networks, geoprocessing optimization such as route minimization and area segmentation, inventory and catalog improvement using NLP, deep learning, Generative AI developing AI Agents, time series and churn analysis projects using SQL and interactive dashboards.",
    experiences: [
      {
        company: "Atvos",
        role: "Data Science Specialist",
        period: "2025 - current",
        location: "Brazil",
        description: [
          "KPIs Atvos: Creation of an AI agent responsible for researching and analyzing the company’s KPI data. The orchestrating agent is composed of two sub-agents: Data Finder and Data Analyst.",
          "The agent was developed using Google ADK and deployed on Agent Engine within the Google Cloud Platform."
        ]
      },
      {
        company: "Accenture",
        role: "Senior Data Scientist / Analyst",
        period: "2021 - 2025",
        location: "Brazil",
        description: [
          "Mining Company: Development of models to predict better inputs for capacity simulators using Monte Carlo Simulation, reducing the impacts of corrective maintenance and supporting planning.",
          "Iron and Steel Company: Improving inventory management and catalog creation using Deep Learning (BERT and Transformers), NLP and Data Analysis.",
          "Financial Market: Optimizing generative models using OpenAI to create customized chats for investment and financial markets.",
          "Agricultural Trading Company: Supply Chain freight price forecast based on economic indices using Pycaret and Prophet.",
          "Telecommunications Company: Mathematical modeling to optimize network densification using Python, IBM CPLEX, Geopandas and QGIS.",
          "Mining Company: Development of intercontinental predictive models (Machine Learning and DeepETA) in Azure ML to optimize fleet speed and ETA accuracy.",
        ]
      },
      {
        company: "Federal University of Espirito Santo",
        role: "AI Researcher",
        period: "2021 - 2022",
        location: "São Mateus, ES",
        description: [
          "Health Research: Investigate breast cancer segmentation methods and recognition using Generative Adversarial Network (GAN) and Variational Autoencoder (VAE)."
        ]
      },
      {
        company: "Vale",
        role: "Computer Technician",
        period: "2016",
        location: "Vitória, ES",
        description: [
          "Organizing and managing maintenance orders for railway sections using SAP ERP and performing data validation in Excel."
        ]
      }
    ],
    education: [
      {
        institution: "Federal Institute of Espírito Santo",
        degree: "M. Sc. Applied Computing",
        period: "2026 - current",
        location: "Serra, ES"
      },
      {
        institution: "Federal University of Espírito Santo",
        degree: "B. Sc. Computer Engineering",
        period: "2017 - 2022",
        location: "São Mateus, ES",
        details: "Bachelor Thesis: Identification of breast cancer from x-ray images using Generative Adversarial Networks and Convolutional Neural Networks."
      },
      {
        institution: "Federal Institute of Espírito Santo",
        degree: "Computer Technician",
        period: "2014 - 2015",
        location: "Serra, ES"
      }
    ],
    skills: {
      soft: ["Teamwork", "Problem solving", "Responsible", "Adaptability", "Collaboration", "Flexibility", "Innovation", "Active communication"],
      technical: ["Data analysis", "Databases", "Data cleaning", "Feature engineering", "Machine learning", "Deep learning", "DevOps", "MLOps", "Generative AI", "Computer vision", "Storytelling", "Geoprocessing", "Optimization", "Statistics"],
      languages: ["Python", "R", "SQL", "C", "Java"],
      tools: ["Google Cloud Platform", "Azure", "AWS", "Git", "Numpy", "Pandas", "Geopandas", "Tensorflow", "PyTorch", "Scikit-learn", "PySpark", "IBM CPLEX", "PowerBI", "Google ADK"]
    }
  },
  pt: {
    name: "Yuri Pulier",
    title: "DATA SCIENTIST SPECIALIST </> AI ENGINEER",
    location: "Vitória, ES - Brasil",
    email: "yuricelestepulier@gmail.com",
    linkedin: "linkedin.com/in/yuri-celeste-pulier",
    github: "github.com/yuripulier",
    profileImage: "/linkedin.png",
    cvLink: "/cv-yuri-pulier.pdf",
    objective: "Cientista de Dados desde 2021 com foco em supply chain e experiência em previsão de entrega e demanda usando redes neurais artificiais, otimização de geoprocessamento como minimização de rotas e segmentação de áreas, melhoria de inventário e catálogo usando NLP, deep learning, IA Generativa desenvolvendo Agentes de IA, projetos de séries temporais e análise de churn usando SQL e dashboards interativos.",
    experiences: [
      {
        company: "Atvos",
        role: "Especialista em Ciência de Dados",
        period: "2025 - atual",
        location: "Brasil",
        description: [
          "KPIs Atvos: Criação de um agente de IA responsável por pesquisar e analisar os dados de KPI da empresa. O agente orquestrador é composto por dois sub-agentes: Data Finder e Data Analyst.",
          "O agente foi desenvolvido usando Google ADK e implantado no Agent Engine dentro da Google Cloud Platform."
        ]
      },
      {
        company: "Accenture",
        role: "Cientista de Dados Sênior / Analista",
        period: "2021 - 2025",
        location: "Brasil",
        description: [
          "Empresa de Mineração: Desenvolvimento de modelos para prever melhores entradas para simuladores de capacidade usando Simulação de Monte Carlo, reduzindo os impactos da manutenção corretiva e apoiando o planejamento.",
          "Empresa de Ferro e Aço: Melhoria da gestão de inventário e criação de catálogos usando Deep Learning (BERT e Transformers), NLP e Análise de Dados.",
          "Mercado Financeiro: Otimização de modelos generativos usando OpenAI para criar chats personalizados para as áreas de investimento e mercado financeiro.",
          "Empresa de Comércio Agrícola: Previsão de preço de frete na cadeia de suprimentos baseada em índices econômicos usando Pycaret e Prophet.",
          "Empresa de Telecomunicações: Modelagem matemática para otimizar a densificação da rede usando Python, IBM CPLEX, Geopandas e QGIS.",
          "Empresa de Mineração: Desenvolvimento de modelos preditivos intercontinentais (Machine Learning e DeepETA) no Azure ML para otimizar a velocidade da frota e a precisão do ETA.",
        ]
      },
      {
        company: "Universidade Federal do Espírito Santo",
        role: "Pesquisador de IA na Graduação",
        period: "2021 - 2022",
        location: "São Mateus, ES",
        description: [
          "Pesquisa em Saúde: Investigar métodos de segmentação de câncer de mama e reconhecimento entre classificações malignas e benignas usando Generative Adversarial Network (GAN) e Variational Autoencoder (VAE)."
        ]
      },
      {
        company: "Vale",
        role: "Técnico em Informática",
        period: "2016",
        location: "Vitória, ES",
        description: [
          "Organização e gestão de ordens de manutenção para seções ferroviárias usando SAP ERP e realização de validação de dados no Excel."
        ]
      }
    ],
    education: [
      {
        institution: "Instituto Federal do Espírito Santo",
        degree: "Mestrado em Computação Aplicada",
        period: "2026 - atual",
        location: "Serra, ES"
      },
      {
        institution: "Universidade Federal do Espírito Santo",
        degree: "Bacharelado em Engenharia de Computação",
        period: "2017 - 2022",
        location: "São Mateus, ES",
        details: "Tese de Bacharelado: Identificação de câncer de mama a partir de imagens de raio-x usando Redes Adversárias Generativas e Redes Neurais Convolucionais."
      },
      {
        institution: "Instituto Federal do Espírito Santo",
        degree: "Técnico em Informática",
        period: "2014 - 2015",
        location: "Serra, ES"
      }
    ],
    skills: {
      soft: ["Trabalho em equipe", "Resolução de problemas", "Responsabilidade", "Adaptabilidade", "Colaboração", "Flexibilidade", "Inovação", "Comunicação ativa"],
      technical: ["Análise de dados", "Bancos de dados", "Limpeza de dados", "Engenharia de atributos", "Machine learning", "Deep learning", "DevOps", "MLOps", "IA Generativa", "Visão computacional", "Storytelling", "Geoprocessamento", "Otimização", "Estatística"],
      languages: ["Python", "R", "SQL", "C", "Java"],
      tools: ["Google Cloud Platform", "Azure", "AWS", "Git", "Numpy", "Pandas", "Geopandas", "Tensorflow", "PyTorch", "Scikit-learn", "PySpark", "IBM CPLEX", "PowerBI", "Google ADK"]
    }
  }
};

export const UI_TEXT = {
  en: {
    home: "Home",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    talk: "Let's talk?",
    talkDesc: "I'm always open to new opportunities and partnerships in Data Science and AI projects.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "How can I help?",
    sendBtn: "Send Message",
    footerRights: "All rights reserved.",
    heroGreeting: "Hello, I'm",
    heroBtnPrimary: "Let's Talk",
    heroBtnSecondary: "View Experience",
    recentExp: "Recent Experience",
    currentEdu: "Current Education",
    viewDetails: "View details",
    mySkills: "My Skills",
    skillsDesc: "Set of technical and interpersonal skills developed over years of experience in complex AI and Engineering projects.",
    softSkills: "Soft Skills",
    languages: "Languages",
    tools: "Tools",
    technical: "Technical",
    expTitle: "Professional Experience",
    expDesc: "Professional trajectory focused on solving real problems through data and artificial intelligence.",
    eduTitle: "Academic Background",
    eduDesc: "Solid theoretical foundation in Engineering and Applied Computing.",
    contactTitle: "Contact",
    contactDesc: "Feel free to get in touch through any of the channels below.",
    downloadCV: "Download CV"
  },
  pt: {
    home: "Início",
    experience: "Experiência",
    education: "Educação",
    contact: "Contato",
    talk: "Vamos conversar?",
    talkDesc: "Estou sempre aberto a novas oportunidades e parcerias em projetos de Ciência de Dados e IA.",
    nameLabel: "Nome",
    namePlaceholder: "Seu nome",
    emailLabel: "E-mail",
    emailPlaceholder: "seu@email.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Como posso ajudar?",
    sendBtn: "Enviar Mensagem",
    footerRights: "Todos os direitos reservados.",
    heroGreeting: "Olá, eu sou o",
    heroBtnPrimary: "Vamos Conversar",
    heroBtnSecondary: "Ver Experiências",
    recentExp: "Experiência Recente",
    currentEdu: "Educação Atual",
    viewDetails: "Ver detalhes",
    mySkills: "Minhas Skills",
    skillsDesc: "Conjunto de habilidades técnicas e interpessoais desenvolvidas ao longo de anos de experiência em projetos complexos de IA e Engenharia.",
    softSkills: "Soft Skills",
    languages: "Linguagens",
    tools: "Ferramentas",
    technical: "Técnicas",
    expTitle: "Experiências Profissionais",
    expDesc: "Trajetória profissional focada em resolver problemas reais através de dados e inteligência artificial.",
    eduTitle: "Formação Acadêmica",
    eduDesc: "Base teórica sólida em Engenharia e Computação Aplicada.",
    contactTitle: "Contato",
    contactDesc: "Sinta-se à vontade para entrar em contato através de qualquer um dos canais abaixo.",
    downloadCV: "Baixar CV"
  }
};

