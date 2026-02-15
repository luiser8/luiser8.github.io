document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM
  const elements = {
    menuToggle: document.getElementById("menu-toggle"),
    nav: document.querySelector(".nav"),
    themeToggle: document.getElementById("theme-toggle"),
    themeIcon: document.querySelector(".theme-icon"),
    languageToggle: document.getElementById("language-toggle"),
    languageText: document.querySelector(".language-text"),
    year: document.getElementById("year"),
  };
  // Manejo del menú móvil
  if (elements.menuToggle && elements.nav) {
    elements.menuToggle.addEventListener("click", () => {
      elements.nav.classList.toggle("is-open");
    });
    // Cerrar menú al hacer clic en enlaces
    elements.nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        elements.nav.classList.remove("is-open");
      });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", (event) => {
      if (
        elements.nav.classList.contains("is-open") &&
        !elements.nav.contains(event.target) &&
        !elements.menuToggle.contains(event.target)
      ) {
        elements.nav.classList.remove("is-open");
      }
    });
  }

  // Actualizar año en el footer
  elements.year.textContent = new Date().getFullYear();

  // Manejo del tema
  const themeManager = {
    applyTheme(theme) {
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme);
      elements.themeIcon.textContent = theme === "dark" ? "☾" : "☼";
      localStorage.setItem("theme", theme);
    },

    toggleTheme() {
      const isDark = document.body.classList.contains("dark");
      this.applyTheme(isDark ? "light" : "dark");
    },

    loadTheme() {
      const savedTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (savedTheme) {
        this.applyTheme(savedTheme);
      } else if (systemPrefersDark) {
        this.applyTheme("dark");
      } else {
        this.applyTheme("light");
      }
    },
  };

  elements.themeToggle.addEventListener("click", () =>
    themeManager.toggleTheme(),
  );
  themeManager.loadTheme();

  // Escuchar cambios en la preferencia del sistema
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        themeManager.applyTheme(e.matches ? "dark" : "light");
      }
    });

  // Manejo de idiomas
  const languageManager = {
    currentLang: "es",
    translations: {
      es: {
        // Navegación
        experience: "Experiencia",
        projects: "Proyectos",
        education: "Educación",
        cv: "CV",

        // Titulo
        "title.name": "Luis Eduardo Rondón | Desarrollador Senior",

        // Sección Intro
        "intro.name": "Luis Eduardo Rondón",
        "intro.title": "Hola, soy Luis Eduardo Rondón",
        "intro.subtitle":
          "Desarrollador de Software con 7+ años de experiencia, especializado en arquitecturas backend con C#/.NET y Node.js/NestJS. Experto en diseñar soluciones escalables (APIs, microservicios, monolíticos) y en implementar frontends robustos para productos completos.",
        "intro.stacks":
          "Apasionado por la excelencia técnica, la mentoría y la colaboración en equipos de alto rendimiento.",

        // Sección Experiencia - Redacción Senior
        "experience.title": "Experiencia",

        // LiveLify
        "experience.live.title": "LiveLify / Método Libre",
        "experience.live.role": "Desarrollador Full Stack - Freelance",
        "experience.live.date": "Junio 2025 – Enero 2026",
        "experience.live.from": "Santiago, Chile",
        "experience.live.work1.desc":
          "Diseñé y desarrollé el API REST principal para un sistema de gestión de metas personales. Apliqué principios de Domain-Driven Design y el patrón Hexagonal con NestJS para crear un núcleo de negocio desacoplado, mantenible y listo para escalar, utilizando PostgreSQL y Prisma ORM.",
        "experience.live.work2.desc":
          "Diseñé y construí la aplicación frontend en React con TailwindCSS, tomando decisiones de arquitectura de estado y componentes que permiten una experiencia de usuario fluida. La lógica de negocio se mantuvo en el backend para facilitar el desarrollo futuro de una app móvil.",
        "experience.live.work3.desc":
          "Lideré el desarrollo del landing page para ventas, priorizando la optimización de conversiones y un rendimiento web excepcional. Implementé buenas prácticas de SEO y diseño responsivo con React y TailwindCSS.",
        "experience.live.work4.desc":
          "Definí y configuré la estrategia completa de despliegue e infraestructura en Google Cloud Platform (GCP). Automatizé la creación de entornos, gestioné dominios y establecí pipelines para garantizar entregas consistentes y confiables.",

        // ACL - ACHS
        "experience.acl.title": "ACL - ACHS",
        "experience.acl.role": "Desarrollador Full Stack",
        "experience.acl.date": "Octubre 2021 – Marzo 2025",
        "experience.acl.from": "Santiago, Chile",
        "experience.acl.work1.desc":
          "Lideré la evolución y optimización de una plataforma crítica de agendamiento médico, utilizada por más de 1,000 empresas y 5,000 usuarios. Mi principal logro fue dirigir la migración completa de .NET Core 3.1 a .NET 8, mejorando significativamente el rendimiento y reduciendo la deuda técnica. Establecí pipelines de CI/CD con Azure DevOps y Docker.",
        "experience.acl.work2.desc":
          "Contribuí al diseño e implementación del sistema unificado de identidad (ACHS Virtual) basado en una arquitectura de microservicios BFF (Backend For Frontend). Fui responsable de desarrollar servicios seguros con TypeScript y NestJS que centralizaron la autenticación y autorización para toda la organización.",
        "experience.acl.work3.desc":
          "Como parte del equipo de mantención, diagnosticé y resolví problemas complejos en diversas aplicaciones corporativas. Realicé optimizaciones profundas en consultas SQL para SQL Server y refactoricé módulos legacy, mejorando la estabilidad y tiempo de respuesta de los sistemas.",
        "experience.acl.work4.desc":
          "Establecí y hice cumplir altos estándares de calidad. Implementé análisis de código estático con SonarQube, diseñé estrategias de pruebas unitarias e integración, y realicé revisiones de código enfocadas en seguridad y rendimiento, elevando la robustez general del software entregado.",

        // Politécnico Santiago Mariño
        "experience.psm.title":
          "Instituto Universitario Politécnico Santiago Mariño",
        "experience.psm.role": "Desarrollador Full Stack - Freelance",
        "experience.psm.date": "Noviembre 2022 – Actualidad",
        "experience.psm.from": "Barcelona, Venezuela",
        "experience.psm.work1.desc":
          "Diseñé y desarrollé la arquitectura de la nueva web unificada de la universidad. Implementé un sistema de gestión de contenido interno que permite a cada extensión administrar su información de forma autónoma, utilizando React y TailwindCSS para una experiencia de edición ágil.",
        "experience.psm.work2.desc":
          "Concebí y construí una suite administrativa local para gestión financiera y académica. La solución, desarrollada en C# .NET Framework con frontend en React y SQL Server, automatiza procesos críticos como inscripciones, control de caja y asignación de cuotas.",
        "experience.psm.work3.desc":
          "Actúo como DBA y administrador de sistemas, optimizando procesos en SQL Server y gestionando la infraestructura local (Active Directory, Proxy, File Server). Proporciono soporte técnico especializado y garantizo la alta disponibilidad de los servicios.",
        "experience.psm.work4.desc":
          "Desarrollé una aplicación monolítica en .NET MVC para consulta académica, resolviendo la necesidad de los estudiantes de acceder a notas, horarios e historiales de manera rápida y confiable en la red local.",

        // Boitas.com
        "experience.boitas.title": "Boitas.com",
        "experience.boitas.role": "Desarrollador Full Stack",
        "experience.boitas.date": "Mayo 2021 – Octubre 2021",
        "experience.boitas.from": "Ciudad de México, México",
        "experience.boitas.work1.desc":
          "Desarrollé funcionalidades clave para la plataforma de e-commerce y reservas, integrando Elasticsearch para optimizar las búsquedas en grandes volúmenes de datos. La stack tecnológica incluyó Node.js, MongoDB, GraphQL y Vue.js.",
        "experience.boitas.work2.desc":
          "Construí el panel de administración (back-office) que permite gestionar órdenes, reservas y configuraciones del sistema. Mi enfoque estuvo en crear una interfaz intuitiva y APIs eficientes para operaciones masivas.",
        "experience.boitas.work3.desc":
          "Identifiqué y resolví un cuello de botella crítico en el servicio de notificaciones por email. Propuse y ejecuté una solución basada en colas de mensajería e integración con SendGrid, lo que incrementó radicalmente la confiabilidad y eficiencia de los envíos automatizados.",

        // Camin Global
        "experience.camin.title": "Camin Global",
        "experience.camin.role": "Desarrollador Frontend - Freelance",
        "experience.camin.date": "Enero 2021 – Marzo 2022",
        "experience.camin.from": "Lechería, Venezuela",
        "experience.camin.work1.desc":
          "Lideré el desarrollo frontend del sitio web oficial de MRW desde el diseño hasta la implementación. Construí una aplicación con Vue.js y Nuxt.js centrada en la experiencia de usuario para el rastreo de envíos y la presentación de servicios.",
        "experience.camin.work2.desc":
          "Realicé una optimización integral del rendimiento web, aplicando técnicas avanzadas de compresión de imágenes y minificación de recursos. Además, reestructuré la integración con APIs de rastreo para mejorar la eficiencia de las consultas.",
        "experience.camin.work3.desc":
          "Gestioné el despliegue completo de la solución en un entorno GoDaddy. Configuré el servidor, desplegué la base de datos MySQL y la aplicación frontend, asegurando una puesta en producción estable y funcional.",

        // Avior Airlines
        "experience.avior.title": "Avior Airlines",
        "experience.avior.role": "Desarrollador Full Stack",
        "experience.avior.date": "Noviembre 2017 – Julio 2022",
        "experience.avior.from": "Barcelona, Venezuela",
        "experience.avior.work1.desc":
          "Fui responsable clave del desarrollo del sistema de reservas y compra de boletos en la web oficial. Diseñé y construí las APIs de integración con el GDS Sabre y desarrollé por completo el módulo de reembolsos, un componente crítico y sensible del negocio. Tecnologías: C#, .NET Framework, SQL Server, React.",
        "experience.avior.work2.desc":
          "Configuré y aseguré la infraestructura inicial de desarrollo en AWS EC2 con Ubuntu Server, estableciendo servidores HTTPS/FTP y definiendo los protocolos de acceso y seguridad para el equipo.",
        "experience.avior.work3.desc":
          "Desarrollé de forma integral la aplicación móvil 'Avior Calificaciones' con Ionic, permitiendo a los pasajeros evaluar el servicio y proporcionando a la aerolínea retroalimentación valiosa en tiempo real.",
        "experience.avior.work4.desc":
          "Concebí y desarrollé un dashboard ejecutivo en .NET MVC y SQL Server para la presidencia de la aerolínea. Esta herramienta de Business Intelligence consolidaba reportes de todos los departamentos, facilitando la visualización de KPIs y la toma de decisiones estratégicas.",
        "experience.avior.work5.desc":
          "Participé en la capacitación y planificación técnica para la integración con la API de Sabre, un proveedor global de distribución aérea. Este conocimiento fue fundamental para garantizar la comunicación en tiempo real de disponibilidad de vuelos y check-in web.",

        // SmartWork
        "experience.smartWork.title": "SmartWork",
        "experience.smartWork.role": "Desarrollador Full Stack",
        "experience.smartWork.date": "Abril 2020 – Enero 2021",
        "experience.smartWork.from": "Quito, Ecuador",
        "experience.smartWork.work1.desc":
          "Diseñé y desarrollé la API REST central para la gestión de adquisiciones, locales y herramientas de clientes, utilizando C#, .NET Framework y SQL Server, con un enfoque en la claridad de los contratos y la eficiencia de las operaciones.",
        "experience.smartWork.work2.desc":
          "Construí una plataforma web de back-office robusta para la administración centralizada de usuarios, locales y catálogos. La arquitectura separó claramente las responsabilidades entre el backend .NET y el frontend en React.",
        "experience.smartWork.work3.desc":
          "Desarrollé una aplicación móvil con React Native para operaciones logísticas y de ventas en campo. La app centralizó el acceso a datos, herramientas y recursos críticos, mejorando la productividad del personal móvil.",

        // Satelca
        "experience.satelca.title": "Satélites y Telecomunicaciones (Satelca)",
        "experience.satelca.role": "Desarrollador Backend",
        "experience.satelca.date": "Mayo 2017 – Noviembre 2017",
        "experience.satelca.from": "Lechería, Venezuela",
        "experience.satelca.work1.desc":
          "Investigué, desarrollé y homologé librerías en C# para la comunicación con dispositivos GPS GSM (Digitel). Esta solución técnica permitió a la empresa ofrecer un servicio de localización vehicular confiable y escalable.",
        "experience.satelca.work2.desc":
          "Realicé el diseño inicial y la planificación técnica para una aplicación administrativa de facturación y cobranza. Senté las bases para un sistema interno que automatizaría procesos financieros clave.",

        // Profesor
        "experience.profesor.title": "Profesor de Programación",
        "experience.profesor.role":
          "Instructor de PHP, JavaScript, CSS y React",
        "experience.profesor.date": "Febrero 2020 – Diciembre 2022",
        "experience.profesor.from": "Puerto La Cruz, Venezuela",
        "experience.profesor.work1.desc":
          "Diseñé el currículo e impartí cursos que equiparon a los estudiantes con una comprensión sólida del desarrollo web full-stack, desde los fundamentos de backend con PHP hasta la construcción de interfaces modernas con React.",

        // Soporte IT
        "experience.soporte.title":
          "Instituto Universitario de Tecnología Antonio José de Sucre",
        "experience.soporte.role":
          "Jefe de Soporte IT / Arquitecto de Sistemas",
        "experience.soporte.date": "Marzo 2008 – Mayo 2017",
        "experience.soporte.from": "Puerto La Cruz, Venezuela",
        "experience.soporte.work1.desc":
          "Gestioné y ejecuté el soporte técnico integral a usuarios, equipos, laboratorios y servidores en múltiples sedes. Implementé estrategias de mantenimiento preventivo y correctivo que redujeron los tiempos de inactividad.",
        "experience.soporte.work2.desc":
          "Ascendí a liderar el área de soporte, brindando asistencia de nivel avanzado para aplicaciones administrativas y académicas. Capacité al personal en la administración de servidores con Active Directory en Windows Server, mejorando las capacidades internas del departamento.",

        // --- ESPAÑOL (es) ---
        "projects.title": "Proyectos",

        "projects.glucose.title": "Aplicación de Seguimiento de Glucosa",
        "projects.glucose.role": "Proyecto Personal",
        "projects.glucose.date": "Diciembre 2024 - Actualidad",
        "experience.glucose.from": "Barcelona, Venezuela",
        "projects.glucose.desc1":
          "Diseñé y desarrolle un sistema completo para el manejo de diabetes. El núcleo es una API en Python Flask que procesa y almacena mediciones en PostgreSQL, generando gráficos interactivos para análisis de tendencias a lo largo del tiempo (días, semanas, meses).",
        "projects.glucose.desc2":
          "Desarrollando un módulo para registrar eventos contextuales como comidas (con conteo de carbohidratos), ejercicio y medicación, permitiendo correlacionarlos con los niveles de glucosa para un manejo más informado.",
        "projects.glucose.desc3":
          "Implementando un sistema de alertas personalizables donde los usuarios definen umbrales. En caso de niveles críticos, el sistema envía notificaciones automáticas a familiares o cuidadores designados, añadiendo una capa de seguridad proactiva.",
        "projects.glucose.desc4":
          "Diseñando un generador de informes periódicos (diarios, semanales, mensuales) que resume métricas clave como promedios y 'tiempo en rango', facilitando el seguimiento personal y la comunicación con profesionales de la salud.",
        "projects.glucose.desc5":
          "Stack tecnológico: Python Flask para la API, PostgreSQL para la base de datos, y planeando el desarrollo frontend/móvil con React Native para una experiencia de usuario accesible.",

        "projects.biblioteca.title": "Aplicación de Biblioteca Virtual",
        "projects.biblioteca.role": "Proyecto Cliente",
        "projects.biblioteca.date": "Febrero 2025 - Actualidad",
        "experience.biblioteca.from": "Barcelona, Venezuela",
        "projects.biblioteca.desc1":
          "Diseñando un sistema de permisos granulares con roles diferenciados (Estudiante, Profesor, Investigador, Bibliotecario, Administrador) para controlar el acceso a materiales, funcionalidades del backoffice y acciones específicas como préstamos extendidos.",
        "projects.biblioteca.desc2":
          "Implementando un sistema completo de préstamo y reserva para materiales digitales y físicos, con gestión de fechas de vencimiento y la posibilidad de reservar items no disponibles.",
        "projects.biblioteca.desc3":
          "Desarrollando un visor web integrado para tesis, informes y libros digitales, permitiendo la lectura directa en el navegador sin necesidad de descarga, lo que mejora la seguridad y la experiencia de usuario.",
        "projects.biblioteca.desc4":
          "Construyendo un módulo de backoffice robusto para que el personal bibliotecario pueda cargar materiales (individualmente o en lotes), editar metadatos completos (resúmenes, palabras clave, ISBN) y gestionar versiones y formatos.",
        "projects.biblioteca.desc5":
          "Stack tecnológico: .NET MVC (monolito) aplicando principios de arquitectura hexagonal para un dominio de negocio desacoplado y mantenible, con SQL Server como base de datos.",

        "projects.psm.title":
          "Sitio Web Instituto Universitario Politécnico Santiago Mariño",
        "projects.psm.role": "Proyecto Cliente",
        "projects.psm.link": "Visitar proyecto",
        "projects.psm.date": "Marzo 2024 - Actualidad",
        "experience.psm.from": "Barcelona, Venezuela",
        "projects.psm.desc1":
          "Lideré el desarrollo de la web oficial unificada de la universidad, consolidando la presencia de todas sus extensiones en un solo portal. Implementé un sistema de gestión de contenido interno que permite a cada sección editar y visualizar su información de forma autónoma, manteniendo una identidad visual coherente.",
        "projects.psm.desc2":
          "El sitio funciona como una herramienta central de marketing digital y atracción de nuevos estudiantes, con un diseño moderno y atractivo optimizado para campañas publicitarias y la promoción de los logros institucionales.",
        "projects.psm.desc3":
          "Prioricé una experiencia de usuario móvil-first, diseñando funcionalidades clave como mapas del campus y sistemas de notificaciones para un acceso rápido y sencillo desde dispositivos móviles.",
        "projects.psm.desc4":
          "Stack tecnológico: React y TailwindCSS para un desarrollo frontend eficiente y un diseño responsivo de alta calidad.",

        "projects.camin.title": "Sitio Web MRW",
        "projects.camin.role": "Proyecto Cliente",
        "projects.camin.link": "Visitar proyecto",
        "projects.camin.date": "Enero 2021 – Marzo 2022",
        "experience.camin.from": "Lechería, Venezuela",
        "projects.camin.desc1":
          "Responsable del desarrollo completo del sitio web oficial de MRW, desde el diseño inicial hasta la implementación final, modernizando la presencia digital de la marca con una plataforma funcional y atractiva para sus clientes.",
        "projects.camin.desc2":
          "Implementé una herramienta robusta de rastreo de envíos nacionales que permite a los usuarios realizar un seguimiento en tiempo real de sus paquetes, ofreciendo transparencia y control.",
        "projects.camin.desc3":
          "Desarrollé una sección dedicada a presentar de manera gráfica e intuitiva todos los servicios de MRW, facilitando que los clientes comprendan las diferentes opciones de envío y logística disponibles.",
        "projects.camin.desc4":
          "Realicé una optimización integral del rendimiento, aplicando técnicas avanzadas de compresión de imágenes y reducción del tamaño de archivos, lo que resultó en una mejora sustancial de la velocidad de carga del sitio web.",
        "projects.camin.desc5":
          "Stack tecnológico: Vue.js y Nuxt.js para el frontend, asegurando una SPA (Single Page Application) moderna y performante.",

        "projects.avior.title": "Sitio Web Avior Airlines",
        "projects.avior.role": "Proyecto Cliente",
        "projects.avior.link": "Visitar proyecto",
        "projects.avior.date": "Noviembre 2017 – Julio 2022",
        "experience.avior.from": "Barcelona, Venezuela",
        "projects.avior.desc1":
          "Parte fundamental del equipo de desarrollo del sitio web oficial para reserva y compra de boletos. Integré un motor de búsqueda y sistema de pago eficiente, asegurando una experiencia de usuario fluida y segura.",
        "projects.avior.desc2":
          "Diseñé y construí múltiples APIs para gestionar las solicitudes con el proveedor global SABRE, garantizando un procesamiento de datos preciso y en tiempo real para disponibilidad de vuelos y precios.",
        "projects.avior.desc3":
          "Fui el desarrollador principal del servicio completo de reembolso de boletos, implementando la lógica de negocio para procesar solicitudes e integrando con los sistemas financieros de la aerolínea.",
        "projects.avior.desc4":
          "Stack tecnológico: Backend en C# y .NET Framework, frontend en React, con SQL Server como base de datos para un sistema robusto y escalable.",

        // Sección Educación (sin cambios, solo se incluyen para completitud)
        "education.title": "Educación",
        "education.subtitle1":
          "Instituto Universitario de Tecnología Antonio José de Sucre",
        "education.desc1": "Técnico Superior Universitario en Informática",
        "education.site1": "Puerto La Cruz, Venezuela",
        "education.date1": "Marzo 2010 - Agosto 2015",
        "education.subtitle2": "ACL Academy",
        "education.desc2": "Azure DevOps - Certificado Nro 11097",
        "education.site2": "Santiago, Chile",
        "education.date2": "9 horas - Agosto 2022",
        "education.subtitle3": "Achievement",
        "education.desc3":
          "Desarrollador Microsoft SharePoint - Certificado Nro X19-56829",
        "education.site3": "Barcelona, Venezuela",
        "education.date3": "40 horas - Junio 2018",
        "education.subtitle4": "CeaSoft",
        "education.desc4": "Fundamentos de Scrum",
        "education.site4": "Caracas, Venezuela",
        "education.date4": "8 horas - Mayo 2018",
        "education.subtitle5": "Avior Airlines",
        "education.desc5":
          "Sistema de Gestión de Seguridad Operacional (S.M.S) - Certificado Nro 19687",
        "education.site5": "Barcelona, Venezuela",
        "education.date5": "8 horas - Julio 2018",
        "education.subtitle6": "Sabre Travel Network",
        "education.desc6":
          "Workshop Sabre Travel Network - Certificado Nro 15989",
        "education.site6": "Bogotá, Colombia",
        "education.date6": "48 horas - Septiembre 2019",

        // Footer
        "footer.rights": "Luis Eduardo Rondón. Todos los derechos reservados.",
      },
      en: {
        // Navigation
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        cv: "CV",

        // Title
        "title.name": "Luis Eduardo Rondón | Senior Developer",

        // Intro Section
        "intro.name": "Luis Eduardo Rondón",
        "intro.title": "Hello, I'm Luis Eduardo Rondón",
        "intro.subtitle":
          "Software Developer with 7+ years of experience, specializing in backend architectures with C#/.NET and Node.js/NestJS. Expert in designing scalable solutions (APIs, microservices, monolithic) and implementing robust frontends for complete products.",
        "intro.stacks":
          "Passionate about technical excellence, mentoring, and collaboration in high-performance teams.",

        // Experience Section - Senior Wording
        "experience.title": "Experience",

        // LiveLify
        "experience.live.title": "LiveLify / Free Method",
        "experience.live.role": "Full Stack Developer - Freelance",
        "experience.live.date": "June 2025 – January 2026",
        "experience.live.from": "Santiago, Chile",
        "experience.live.work1.desc":
          "I designed and developed the main REST API for a personal goal management system. I applied Domain-Driven Design principles and the Hexagonal pattern with NestJS to create a decoupled, maintainable, and scalable business core, using PostgreSQL and Prisma ORM.",
        "experience.live.work2.desc":
          "Designed and built the frontend application in React with TailwindCSS, making state and component architecture decisions that enable a fluid user experience. Business logic was kept in the backend to facilitate future mobile app development.",
        "experience.live.work3.desc":
          "Led the development of the sales landing page, prioritizing conversion optimization and exceptional web performance. Implemented SEO best practices and responsive design with React and TailwindCSS.",
        "experience.live.work4.desc":
          "Defined and configured the complete deployment and infrastructure strategy on Google Cloud Platform (GCP). Automated environment creation, managed domains, and established pipelines to ensure consistent and reliable deliveries.",

        // ACL - ACHS
        "experience.acl.title": "ACL - ACHS",
        "experience.acl.role": "Full Stack Developer",
        "experience.acl.date": "October 2021 – March 2025",
        "experience.acl.from": "Santiago, Chile",
        "experience.acl.work1.desc":
          "Led the evolution and optimization of a critical medical scheduling platform, used by over 1,000 companies and 5,000 users. My main achievement was directing the complete migration from .NET Core 3.1 to .NET 8, significantly improving performance and reducing technical debt. Established CI/CD pipelines with Azure DevOps and Docker.",
        "experience.acl.work2.desc":
          "Contributed to the design and implementation of the unified identity system (ACHS Virtual) based on a BFF (Backend For Frontend) microservices architecture. I was responsible for developing secure services with TypeScript and NestJS that centralized authentication and authorization for the entire organization.",
        "experience.acl.work3.desc":
          "As part of the maintenance team, I diagnosed and resolved complex issues in various corporate applications. Performed deep optimizations on SQL queries for SQL Server and refactored legacy modules, improving system stability and response times.",
        "experience.acl.work4.desc":
          "Established and enforced high code quality standards. Implemented static code analysis with SonarQube, designed unit and integration testing strategies, and conducted code reviews focused on security and performance, elevating the overall robustness of delivered software.",

        // Politécnico Santiago Mariño
        "experience.psm.title":
          "Santiago Mariño Polytechnic University Institute",
        "experience.psm.role": "Full Stack Developer - Freelance",
        "experience.psm.date": "November 2022 – Present",
        "experience.psm.from": "Barcelona, Venezuela",
        "experience.psm.work1.desc":
          "Designed and developed the architecture for the university's new unified website. Implemented an internal content management system that allows each campus to manage its information autonomously, using React and TailwindCSS for an agile editing experience.",
        "experience.psm.work2.desc":
          "Conceived and built a local administrative suite for financial and academic management. The solution, developed in C# .NET Framework with a React frontend and SQL Server, automates critical processes such as enrollments, cash control, and fee assignment.",
        "experience.psm.work3.desc":
          "Act as a DBA and systems administrator, optimizing processes in SQL Server and managing on-premise infrastructure (Active Directory, Proxy, File Server). Provide specialized technical support and ensure high service availability.",
        "experience.psm.work4.desc":
          "Developed a monolithic .NET MVC application for academic queries, solving students' need to access grades, schedules, and records quickly and reliably on the local network.",

        // Boitas.com
        "experience.boitas.title": "Boitas.com",
        "experience.boitas.role": "Full Stack Developer",
        "experience.boitas.date": "May 2021 – October 2021",
        "experience.boitas.from": "Mexico City, Mexico",
        "experience.boitas.work1.desc":
          "Developed key features for the e-commerce and booking platform, integrating Elasticsearch to optimize searches across large data volumes. The tech stack included Node.js, MongoDB, GraphQL, and Vue.js.",
        "experience.boitas.work2.desc":
          "Built the administration panel (back-office) that manages orders, reservations, and system configurations. My focus was on creating an intuitive interface and efficient APIs for massive operations.",
        "experience.boitas.work3.desc":
          "Identified and resolved a critical bottleneck in the email notification service. Proposed and executed a solution based on message queues and SendGrid integration, which radically increased the reliability and efficiency of automated sending.",

        // Camin Global
        "experience.camin.title": "Camin Global",
        "experience.camin.role": "Frontend Developer - Freelance",
        "experience.camin.date": "January 2021 – March 2022",
        "experience.camin.from": "Lecheria, Venezuela",
        "experience.camin.work1.desc":
          "Led the frontend development of the official MRW website from design to implementation. Built an application with Vue.js and Nuxt.js focused on the user experience for shipment tracking and service presentation.",
        "experience.camin.work2.desc":
          "Performed comprehensive web performance optimization, applying advanced image compression and resource minification techniques. Additionally, restructured integration with tracking APIs to improve query efficiency.",
        "experience.camin.work3.desc":
          "Managed the complete deployment of the solution on a GoDaddy environment. Configured the server, deployed the MySQL database and frontend application, ensuring a stable and functional production rollout.",

        // Avior Airlines
        "experience.avior.title": "Avior Airlines",
        "experience.avior.role": "Full Stack Developer",
        "experience.avior.date": "November 2017 – July 2022",
        "experience.avior.from": "Barcelona, Venezuela",
        "experience.avior.work1.desc":
          "Was a key responsible developer for the booking and ticket purchase system on the official website. Designed and built the integration APIs with the Sabre GDS and fully developed the refunds module, a critical and business-sensitive component. Technologies: C#, .NET Framework, SQL Server, React.",
        "experience.avior.work2.desc":
          "Configured and secured the initial development infrastructure on AWS EC2 with Ubuntu Server, establishing HTTPS/FTP servers and defining access and security protocols for the team.",
        "experience.avior.work3.desc":
          "Fully developed the 'Avior Ratings' mobile app with Ionic, allowing passengers to evaluate service and providing the airline with valuable real-time feedback.",
        "experience.avior.work4.desc":
          "Conceived and developed an executive dashboard in .NET MVC and SQL Server for the airline's presidency. This Business Intelligence tool consolidated reports from all departments, facilitating the visualization of KPIs and strategic decision-making.",
        "experience.avior.work5.desc":
          "Participated in training and technical planning for integration with the Sabre API, a global air distribution provider. This knowledge was key to ensuring real-time communication of flight availability and web check-in.",

        // SmartWork
        "experience.smartWork.title": "SmartWork",
        "experience.smartWork.role": "Full Stack Developer",
        "experience.smartWork.date": "April 2020 – January 2021",
        "experience.smartWork.from": "Quito, Ecuador",
        "experience.smartWork.work1.desc":
          "Designed and developed the central REST API for managing client acquisitions, locations, and tools, using C#, .NET Framework, and SQL Server, with a focus on clear contracts and operational efficiency.",
        "experience.smartWork.work2.desc":
          "Built a robust back-office web platform for centralized user, location, and catalog management. The architecture clearly separated responsibilities between the .NET backend and React frontend.",
        "experience.smartWork.work3.desc":
          "Developed a mobile app with React Native for field logistics and sales operations. The app centralized access to critical data, tools, and resources, improving mobile staff productivity.",

        // Satelca
        "experience.satelca.title":
          "Satellites and Telecommunications (Satelca)",
        "experience.satelca.role": "Backend Developer",
        "experience.satelca.date": "May 2017 – November 2017",
        "experience.satelca.from": "Lecheria, Venezuela",
        "experience.satelca.work1.desc":
          "Researched, developed, and homologated libraries in C# for communication with GSM GPS devices (Digitel). This technical solution allowed the company to offer a reliable and scalable vehicle location service.",
        "experience.satelca.work2.desc":
          "Performed the initial design and technical planning for a billing and collections administrative application. Laid the groundwork for an internal system that would automate key financial processes.",

        // Profesor
        "experience.profesor.title": "Programming Teacher",
        "experience.profesor.role": "PHP, JavaScript, CSS and React Instructor",
        "experience.profesor.date": "February 2020 – December 2022",
        "experience.profesor.from": "Puerto La Cruz, Venezuela",
        "experience.profesor.work1.desc":
          "Designed the curriculum and taught courses that equipped students with a solid understanding of full-stack web development, from backend fundamentals with PHP to building modern interfaces with React.",

        // Soporte IT
        "experience.soporte.title":
          "Antonio José de Sucre University Institute of Technology",
        "experience.soporte.role": "IT Support Lead / Systems Architect",
        "experience.soporte.date": "March 2008 – May 2017",
        "experience.soporte.from": "Puerto La Cruz, Venezuela",
        "experience.soporte.work1.desc":
          "Managed and executed comprehensive technical support for users, equipment, labs, and servers across multiple campuses. Implemented preventive and corrective maintenance strategies that reduced downtime.",
        "experience.soporte.work2.desc":
          "Promoted to lead the support area, providing advanced-level assistance for administrative and academic applications. Trained staff in administering servers with Active Directory on Windows Server, improving the department's internal capabilities.",

        // --- INGLÉS (en) ---
        "projects.title": "Projects",

        "projects.glucose.title": "Glucose Tracking Application",
        "projects.glucose.role": "Personal Project",
        "projects.glucose.date": "December 2024 - Present",
        "experience.glucose.from": "Barcelona, Venezuela",
        "projects.glucose.desc1":
          "I designed and developed a complete system for diabetes management. The core is a Python Flask API that processes and stores measurements in PostgreSQL, generating interactive graphs for trend analysis over time (days, weeks, months).",
        "projects.glucose.desc2":
          "Developing a module to log contextual events such as meals (with carb counting), exercise, and medication, allowing correlation with glucose levels for more informed management.",
        "projects.glucose.desc3":
          "Implementing a customizable alert system where users define thresholds. In case of critical levels, the system sends automatic notifications to designated family members or caregivers, adding a layer of proactive safety.",
        "projects.glucose.desc4":
          "Designing a periodic report generator (daily, weekly, monthly) that summarizes key metrics like averages and 'time in range', facilitating personal tracking and communication with healthcare professionals.",
        "projects.glucose.desc5":
          "Tech stack: Python Flask for the API, PostgreSQL for the database, and planning frontend/mobile development with React Native for an accessible user experience.",

        "projects.biblioteca.title": "Virtual Library Application",
        "projects.biblioteca.role": "Client Project",
        "projects.biblioteca.date": "February 2025 - Present",
        "experience.biblioteca.from": "Barcelona, Venezuela",
        "projects.biblioteca.desc1":
          "Designing a granular permissions system with differentiated roles (Student, Professor, Researcher, Librarian, Administrator) to control access to materials, backoffice functionalities, and specific actions like extended loans.",
        "projects.biblioteca.desc2":
          "Implementing a complete loan and reservation system for digital and physical materials, with due date management and the ability to reserve unavailable items.",
        "projects.biblioteca.desc3":
          "Developing an integrated web viewer for theses, reports, and digital books, allowing direct reading in the browser without download, improving security and user experience.",
        "projects.biblioteca.desc4":
          "Building a robust backoffice module for library staff to upload materials (individually or in batches), edit complete metadata (abstracts, keywords, ISBN), and manage versions and formats.",
        "projects.biblioteca.desc5":
          "Tech stack: .NET MVC (monolith) applying hexagonal architecture principles for a decoupled and maintainable business domain, with SQL Server as the database.",

        "projects.psm.title":
          "Website of the Santiago Mariño Polytechnic University Institute",
        "projects.psm.role": "Client Project",
        "projects.psm.link": "Visit project",
        "projects.psm.date": "March 2024 - Present",
        "experience.psm.from": "Barcelona, Venezuela",
        "projects.psm.desc1":
          "Led the development of the university's unified official website, consolidating the presence of all its campuses into a single portal. Implemented an internal content management system allowing each section to autonomously edit and view its information while maintaining a coherent visual identity.",
        "projects.psm.desc2":
          "The site functions as a central digital marketing tool and attraction for new students, with a modern and attractive design optimized for advertising campaigns and promotion of institutional achievements.",
        "projects.psm.desc3":
          "Prioritized a mobile-first user experience, designing key features like campus maps and notification systems for quick and easy access from mobile devices.",
        "projects.psm.desc4":
          "Tech stack: React and TailwindCSS for efficient frontend development and high-quality responsive design.",

        "projects.camin.title": "MRW Website",
        "projects.camin.role": "Client Project",
        "projects.camin.link": "Visit project",
        "projects.camin.date": "January 2021 – March 2022",
        "experience.camin.from": "Lecheria, Venezuela",
        "projects.camin.desc1":
          "Responsible for the complete development of MRW's official website, from initial design to final implementation, modernizing the brand's digital presence with a functional and attractive platform for its customers.",
        "projects.camin.desc2":
          "Implemented a robust domestic shipment tracking tool that allows users to track their packages in real-time, offering transparency and control.",
        "projects.camin.desc3":
          "Developed a dedicated section to graphically and intuitively present all of MRW's services, making it easier for customers to understand the different shipping and logistics options available.",
        "projects.camin.desc4":
          "Performed comprehensive performance optimization, applying advanced image compression and file size reduction techniques, resulting in a substantial improvement in website loading speed.",
        "projects.camin.desc5":
          "Tech stack: Vue.js and Nuxt.js for the frontend, ensuring a modern and performant SPA (Single Page Application).",

        "projects.avior.title": "Avior Airlines Website",
        "projects.avior.role": "Client Project",
        "projects.avior.link": "Visit project",
        "projects.avior.date": "November 2017 – July 2022",
        "experience.avior.from": "Barcelona, Venezuela",
        "projects.avior.desc1":
          "Core member of the development team for the official booking and ticket purchase website. Integrated an efficient search engine and payment system, ensuring a fluid and secure user experience.",
        "projects.avior.desc2":
          "Designed and built multiple APIs to manage requests with the global provider SABRE, guaranteeing accurate and real-time data processing for flight availability and pricing.",
        "projects.avior.desc3":
          "Was the lead developer for the complete ticket refund service, implementing the business logic to process requests and integrating with the airline's financial systems.",
        "projects.avior.desc4":
          "Tech stack: Backend in C# and .NET Framework, frontend in React, with SQL Server as the database for a robust and scalable system.",

        // Education Section
        "education.title": "Education",
        "education.subtitle1":
          "Antonio José de Sucre University Institute of Technology",
        "education.desc1": "University Technician in Information Technology",
        "education.site1": "Puerto La Cruz, Venezuela",
        "education.date1": "March 2010 - August 2015",
        "education.subtitle2": "ACL Academy",
        "education.desc2": "Azure DevOps - Certificate No. 11097",
        "education.site2": "Santiago, Chile",
        "education.date2": "9 hours - August 2022",
        "education.subtitle3": "Achievement",
        "education.desc3":
          "Microsoft SharePoint Developer - Certificate No. X19-56829",
        "education.site3": "Barcelona, Venezuela",
        "education.date3": "40 hours - June 2018",
        "education.subtitle4": "CeaSoft",
        "education.desc4": "Scrum Fundamentals",
        "education.site4": "Caracas, Venezuela",
        "education.date4": "8 hours - May 2018",
        "education.subtitle5": "Avior Airlines",
        "education.desc5":
          "Safety Management System (SMS) - Certificate No. 19687",
        "education.site5": "Barcelona, Venezuela",
        "education.date5": "8 hours - July 2018",
        "education.subtitle6": "Sabre Travel Network",
        "education.desc6":
          "Sabre Travel Network Workshop - Certificate No. 15989",
        "education.site6": "Bogotá, Colombia",
        "education.date6": "48 hours - September 2019",

        // Footer
        "footer.rights": "Luis Eduardo Rondón. All rights reserved.",
      },
    },

    updateTexts() {
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        const translation = this.translations[this.currentLang][key];

        if (translation !== undefined) {
          if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            element.placeholder = translation;
          } else if (element.hasAttribute("data-i18n-html")) {
            element.innerHTML = translation;
          } else {
            element.textContent = translation;
          }
        }
      });
    },

    toggleLanguage() {
      this.currentLang = this.currentLang === "es" ? "en" : "es";
      elements.languageText.textContent =
        this.currentLang === "es" ? "EN" : "ES";
      localStorage.setItem("language", this.currentLang);
      this.updateTexts();
    },

    loadLanguage() {
      const savedLang =
        localStorage.getItem("language") || navigator.language.slice(0, 2);
      this.currentLang = ["es", "en"].includes(savedLang) ? savedLang : "es";
      elements.languageText.textContent =
        this.currentLang === "es" ? "EN" : "ES";
      this.updateTexts();
    },
  };

  elements.languageToggle.addEventListener("click", () =>
    languageManager.toggleLanguage(),
  );
  languageManager.loadLanguage();

  // Manejo de secciones activas
  const sectionManager = {
    highlightActiveSection() {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav a");

      if (window.scrollY < 100) {
        navLinks.forEach((link) => link.classList.remove("active"));
        return;
      }

      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.nav a[href="#${sectionId}"]`,
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },

    setupLogoClick() {
      const logo = document.querySelector(".logo");
      if (logo) {
        logo.addEventListener("click", (e) => {
          e.preventDefault();
          document
            .querySelectorAll(".nav a")
            .forEach((link) => link.classList.remove("active"));
          window.scrollTo({ top: 0, behavior: "smooth" });
          history.replaceState(null, "", window.location.pathname);
        });
      }
    },
  };

  window.addEventListener("scroll", () =>
    sectionManager.highlightActiveSection(),
  );
  sectionManager.highlightActiveSection();
  sectionManager.setupLogoClick();
});
