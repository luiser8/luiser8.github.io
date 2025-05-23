document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      // Opcional: Cambiar el icono de hamburguesa a una "X"
      // menuToggle.classList.toggle('is-active');
    });

    // Opcional: Cerrar el menú al hacer clic en un enlace (si son anclas)
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        // Opcional: Restablecer el icono si lo cambiaste
        // menuToggle.classList.remove('is-active');
      });
    });
  }

  // Actualizar año en el footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Cambio de tema
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");

  // Función para aplicar tema
  function applyTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    // Mantén tus íconos originales para el tema
    themeIcon.textContent = theme === "dark" ? "☾" : "☼";
    localStorage.setItem("theme", theme);
  }

  // Cambiar tema al hacer click
  themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.contains("dark");
    applyTheme(isDark ? "light" : "dark");
  });

  // Cargar tema guardado o preferencia del sistema
  function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme) {
      applyTheme(savedTheme);
    } else if (systemPrefersDark) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }
  }

  loadTheme();

  // Escuchar cambios en la preferencia del sistema
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });

  // Cambio de idioma
  const languageToggle = document.getElementById("language-toggle");
  const languageText = languageToggle.querySelector(".language-text");
  let currentLang = "es";

  // Traducciones - Objeto actualizado sin las claves de Content Creator
  const translations = {
    es: {
      // Navegación
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Educación",
      cv: "CV",

      // Sección Intro
      "intro.name": "Luis Eduardo Rondón",
      "intro.title": "Hola, soy Luis Eduardo Rondón",
      "intro.subtitle":
        "Desarrollador con 7 años de experiencia, especialista principal en C# .NET.",
      "intro.stacks":
        "Domino stacks como Node.js, Nest, React, JavaScript y TypeScript. Cuento con experiencia en diversas bases de datos (SQL/NoSQL), Cloud (Azure), DevOps (Docker, Git, CI/CD) y sistemas Linux. También me desempeño como Mentor.",
      "intro.contact": "¡Estoy listo para conectar y colaborar!",
      "hero.button": "Contáctame", // Esta clave parece no usarse en el HTML actual

      // Sección Sobre mí (About) - Claves y textos actualizados
      "about.title": "Sobre mí", // Mantienes esta clave
      // Nuevo párrafo introductorio
      "about.introText":
        "Más de 7 años de experiencia como desarrollador en distintos stacks. Trabajando con equipos de producto enfocados en el cliente final así como equipos de plataforma.",
      "about.backendTitle": "Desarrollador Web", // Título punto 1
      // Texto punto 1
      "about.backendText":
        "Desarrollador con experiencia en la construcción de APIS, Aplicaciones Monolitos y en interfaces gráficas, impulsando la eficiencia y escalabilidad en sistemas complejos para soportar millones de usuarios.",
      "about.crossfunctionalTitle": "Colaborador Multifuncional", // Título punto 2
      // Texto punto 2
      "about.crossfunctionalText":
        "Con experiencia en frontend, backend, y equipos SRE, disfruto colaborando con equipos cross-functional para dar vida a ideas innovadoras.",
      "about.valueDrivenTitle": "Soluciones Orientadas al Valor", // Título punto 3
      "about.valueDrivenText":
        "Me apasiona trabajar en equipos de producto y plataforma, creando soluciones digitales que entregan valor e impactan a los usuarios finales.",
      "about.valueMentorText":
        "Ayudo a futuros profesionales en fase de crecimiento y recién graduados, ademas poder proporcionarles la orientación y las herramientas necesarias para acelerar tu desarrollo e impulsando su crecimiento integral.",
      "about.valueMentorTitle": "Acelerando el Potencial",

      // Sección Experiencia
      "experience.title": "Experiencia",
      // Claves para ACL
      "experience.acl.title": "ACL - ACHS",
      "experience.acl.role": "Desarrollador Full Stack", // Asigna el rol correcto
      "experience.acl.date": "Ocubre 2021 – Marzo 2025", // <<< Añadida clave de fecha
      "experience.acl.work1.desc":
        "Participé en el desarrollo de una aplicación para agendamiento de citas médicas, generando calidad de servicio a distintos usuarios, pacientes y responsables de cada empresa afiliada, una plataforma web con más de 1 mil empresas asociadas y más de 5 mil usuarios, implementando nuevos requerimientos y mejorando la eficiencia del sistema, utilizando despliegues continuos con el uso de Azure DevOps CI/CD Y Docker, además realicé una actualización de .NET Core 3.1 a .NET 8.",
      "experience.acl.work2.desc":
        "También estuve en el equipo de desarrollo de un sistema integrado único (ACHS Virtual) para ofrecer sesiones, recursos y roles para todas las aplicaciones de ACHS, dando cabida a la centralización de la sesión de cada uno de los usuarios dentro de la organización. Utilizando arquitectura de Micro Servicios BFF y demás tecnologías como Azure DevOps CI/CD, TypeScript Nest, SQL Server y React.",
      "experience.acl.work3.desc":
        "También estuve en el equipo de desarrollo llamado (ACHS Mantención) para generar mantenimientos de distintas aplicaciones de toda la empresa ACHS. Utilizando tecnologías como Azure DevOps CI/CD, TypeScript Nest, SQL Server y React.",
      "experience.acl.work4.desc":
        "Es importante destacar que, en los 3 proyectos, implementamos un enfoque integral que incluyó análisis de ciberseguridad y rendimiento en cada funcionalidad desarrollada. Realicé optimizaciones específicas en consultas y métodos complejos para asegurar su eficiencia. Adicionalmente, garantizamos la calidad del código mediante revisiones exhaustivas con SonarQube. Este proceso riguroso nos permitió crear software de alta calidad e integrando Test Unitarios y te Integración para obtener una alta calidad de código.",

      // Claves para PSM
      "experience.psm.title":
        "Instituto Universitario Politécnico Santiago Mariño",
      "experience.psm.role": "Desarrollador Full Stack - Freelance", // Assign the correct role
      "experience.psm.date": "Noviembre 2022 – Actualidad", // <<< Added date key
      "experience.psm.work1.desc":
        "Desarrollo de la web oficial de la Universidad, siendo esta version una unificación de todas las extensiones dentro del país, ademas de construir un backoffice para la administración del contenido web de cada una de las extensiones de la Institución Educativa que estan dentro de la web construida. Utilizando tecnologías C#, .NET, MongoDB y React.",
      "experience.psm.work2.desc":
        "Desarrollo de una aplicación local para la gestión de caja y reportes de cierres de caja, ademas poder visualizar los estudiantes inscritos, poder inscribirlos, asignar cuotas, todo un conjunto de herramientas para la administración de la institución. Utilizando tecnologías como C#, .NET Framework, SQL Server y React.",

      // Claves para Boitas
      "experience.boitas.title": "Boitas.com",
      "experience.boitas.role": "Desarrollador Full Stack", // Assign the correct role
      "experience.boitas.date": "Mayo 2021 – Octubre 2021", // <<< Added date key
      "experience.boitas.work1.desc":
        "Participé en el desarrollo de una aplicación web integrada (Web Boitas.com) para la realización de compras online, reservas y pagos. Utilizando tecnologías como elastic search para optimizar las grandes busquedas y tecnologias de desarrollo como Nodejs, MongoDB, graphQL y Vue.js.",
      "experience.boitas.work2.desc":
        "Desarrollo del back-office (Web Boitas.com) para administrar las compras online, reservas, sesiones y pagos. Pudiendo configurar todas las opciones dentro de la aplicación web, utilizando tecnologías como Nodejs, MongoDB, graphQL y Vue.js.",
      "experience.boitas.work3.desc":
        "También realicé optimizaciones clave en servicios existentes. Un ejemplo destacado fue la mejora en los envíos de Emails: implementé una cola y utilicé Sendgrid, optimizando significativamente los envíos automatizados para aumentar la eficiencia y la fiabilidad del proceso, según lo requerido por negocio.",

      // Claves para Camin
      "experience.camin.title": "Camin Global",
      "experience.camin.role": "Desarrollador Frontend - Freelance", // Assign the correct role
      "experience.camin.date": "Enero 2021 – Marzo 2022", // <<< Added date key
      "experience.camin.work1.desc":
        "Desarrollo completo, desde el diseño hasta la implementación del sitio web oficial de MRW, las caracteristicas de este sitio es inicialmente para mostrar el seguimiento de envíos Nacionales, ademas de mostrar de manera gráfica todo lo referente a MRW y su servicios. Utilizamos tecnologías como Vue.js y Nuxt.js.",
      "experience.camin.work2.desc":
        "Optimización de imágenes y reducción del tamaño de archivos para mejorar la velocidad de carga del sitio web, ademas de cambiar la dirección del API que esta encargado de buscar los elementos del rastreo de los envios.",
      "experience.camin.work3.desc":
        "También estuve apoyando en el despliegue del sitio web completo con el proveedor de servicios GoDaddy, donde realize la instalación del servidor y la instalación tanto del backend(lo desarrollo otro desarrollador), motor de base de datos MySQL y frontend que habia realizado.",

      // Claves para Avior
      "experience.avior.title": "Avior Airlines",
      "experience.avior.role": "Desarrollador Full Stack", // Assign the correct role
      "experience.avior.date": "Noviembre 2017 – Julio 2022", // <<< Added date key
      "experience.avior.work1.desc":
        "Participé en el desarrollo la web oficial de Avior Airlines, para la reserva y compra de boletos, ademas de construir APIS para todo el tratamiento de estas solicitudes con el proveedor SABRE, tambien desarrolle complementamente el servicio de reembolso de boletos. Utilizando tecnologías C#, .NET Framework, SQL Server y React de parte del frontend.",
      "experience.avior.work2.desc":
        "Desarrolle complementamente aplicación móvil Avior Calificaciones de Avior Airlines, para las calificaciones de los vuelos, por parte de los usuarios, asi poder ver y evaluar la satisfaccion del servicio prestado por la Aerolínea. Utilizando tecnologías Ionic.",
      "experience.avior.work3.desc":
        "Desarrolle conjuntamente una aplicación gráfica para la presidencia de la aerolinea Avior Airlines, para la gestión de reportes por todos los departamentos, esto para ayudarle a visualizar al presidente ejecutivo como van las operaciones al momento, así poder tomar decisiones informadas y mejorar el servicio prestado por la Aerolínea. Utilizando tecnologías .NET Framework MVC y SQL Server.",
      "experience.avior.work4.desc":
        "En conjunto con el equipo realizamos una capacitación con el proveedor Internacional Sabre para la implementacion del API de servicios aéreos, con esto brindar al sitio web una comunicación efectiva al momento de tener datos en tiempo real con la estación de servicio, vuelos y web check in.",

      // Claves para SmartWork
      "experience.smartWork.title": "SmartWork",
      "experience.smartWork.role": "Desarrollador Full Stack", // Assign the correct role
      "experience.smartWork.date": "Abril 2020 – Enero 2021", // <<< Added date key
      "experience.smartWork.work1.desc":
        "Desarrolle un API Rest para administrar las adquisiciones de cada uno de los clientes, negocios, este API Rest era para realizar todas las asignaciones de locales y herramientas. Utilizando tecnologías C#, .NET Framework, SQL Server.",
      "experience.smartWork.work2.desc":
        "Desarrollé una aplicación web de back-office robusta, diseñada para la gestión centralizada de usuarios, locales y el catálogo de productos asociado a cada establecimiento. Esta plataforma facilita la administración eficiente de estos recursos operativos clave. Fue construida utilizando un stack tecnológico que incluye C# y .NET Framework para el backend, SQL Server como base de datos, y React para el frontend.",
      "experience.smartWork.work3.desc":
        "Desarrollé una aplicación móvil clave para la operación logística, ventas. Su propósito principal es centralizar y proporcionar acceso instantáneo a los datos, herramientas, información, recursos esenciales que los usuarios, personal de campo, gerentes necesitan tener directamente en sus dispositivos. Fue construida utilizando la tecnología React Native.",

      // Claves para Satelca
      "experience.satelca.title": "Satélites y Telecomunicaciones (Satelca)",
      "experience.satelca.role": "Desarrollador Backend", // Assign the correct role
      "experience.satelca.date": "Mayo 2017 – Noviembre 2017", // <<< Added date key
      "experience.satelca.work1.desc":
        "Desarrollo de librerias para la utilización de comunicaciones GPS con dispositivos importados, esto para dar servicios de ubicación vehicular, y poder ser distribuidos en los vechiculos como servicio de la empresa, con esto se logro homologar estos dispositivos pudiendo obtener su mayor provecho y rendimiento. Utilizando tecnologías con telefonia GSM (Digitel), C# y SQL Server.",
      "experience.satelca.work2.desc":
        "Desarrollo y planificación inicial de una aplicación administrativa para la gestión de cobranza y facturación de manera local de uso interno de la empresa, contando con la infraestructura adecuada para su implementacion desde cero. Utilizando tecnologías C#, .NET Framework, SQL Server.",

      // Claves para Profesor
      "experience.profesor.title": "Profesor de programación en Programate",
      "experience.profesor.role": "Profesor de PHP, JavaScript, CSS y React", // Assign the correct role
      "experience.profesor.date": "Febrero 2020 – Diciembre 2022", // <<< Added date key
      "experience.profesor.work1.desc":
        "Como instructor, desarrollé e impartí cursos básicos e intermedios sobre PHP, JavaScript, CSS y React. Mi objetivo era equipar a los estudiantes con una sólida comprensión de la programación backend (PHP) y la capacidad de construir aplicaciones web utilizando este conjunto de tecnologías.",

      // Claves para Soporte
      "experience.soporte.title":
        "Instituto Universitario de Tecnología Antonio José de Sucre",
      "experience.soporte.role": "Soporte Tecnico IT", // Assign the correct role
      "experience.soporte.date": "Marzo 2008 – Mayo 2017", // <<< Added date key
      "experience.soporte.work1.desc":
        "Técnico en Soporte IT, asistencia tecnica local y otra sede cercanaras a los usuarios, equipos, laboratorios de computación, redes y servidores, ademas de realizar mantenimiento preventivo y correctivo de equipos, redes y servidores.",
      "experience.soporte.work2.desc":
        "Ademas en una etapa avanzada pase a ser jefe de Soporte IT, estuve brindando soporte a Aplicaciones administrativas y Academicas de manera local y a otras sedes, extensiones regionales, ademas de dictar unas capacitaciones a nivel de servidores con active Directory en Windows Server 2012R2.",

      // Sección Proyectos
      "projects.title": "Proyectos",
      // Claves para proyectos con fechas (ejemplo)
      "projects.glucose.title": "Aplicación seguimiento de glucosa",
      "projects.glucose.desc1":
        "Visualización gráfica y análisis de tendencias: Permite a los usuarios ver sus niveles de glucosa en gráficos interactivos, identificando patrones y tendencias a lo largo del tiempo (días, semanas, meses) para una mejor comprensión de su manejo.",
      "projects.glucose.desc2":
        "Registro de eventos relacionados: Facilita el registro de factores clave como comidas (con carbohidratos si se desea), ejercicio, medicación y otros eventos para contextualizar las mediciones de glucosa.",
      "projects.glucose.desc3":
        "Alertas personalizables y notificaciones a contactos: Permite a los usuarios definir umbrales de alerta específicos y configurar el envío de notificaciones importantes (como niveles extremos) a familiares o cuidadores designados.",
      "projects.glucose.desc4":
        "Generación de informes y resúmenes de datos: Capacidad de generar informes periódicos (diarios, semanales, mensuales) con resúmenes de las mediciones, promedios y tiempo en rango, útiles para el seguimiento personal o para compartir con profesionales de la salud.",
      "projects.glucose.desc5":
        "Funcionalidad offline limitada: La aplicación permitirá a los usuarios visualizar datos recientes y registrar eventos (como comidas o ejercicio) incluso cuando no tengan conexión a internet. Los datos se sincronizarán automáticamente con la plataforma central una vez que se restablezca la conectividad.",
      "projects.glucose.desc6":
        "Notificaciones push integradas: Además de los correos electrónicos y SMS, la aplicación móvil enviará notificaciones push directamente al dispositivo del usuario para alertas importantes (niveles fuera de rango, recordatorios, etc.), ofreciendo una forma más inmediata y discreta de recibir información.",
      "projects.glucose.desc7":
        "Las tecnologías utilizadas para este proyecto incluyen Python Flask API, con desarrollo futuro en React Native para la aplicación móvil y PostgreSQL.",
      "projects.glucose.date": "Diciembre 2024 - Actualidad",

      "projects.biblioteca.title": "Aplicación biblioteca virtual",
      "projects.biblioteca.desc1":
        "Gestión granular de usuarios y roles: Implementar diferentes niveles de permisos y roles (por ejemplo, Estudiante, Profesor, Investigador, Bibliotecario, Administrador) para controlar el acceso a ciertos materiales, funcionalidades de backoffice y tipos de acciones (como solicitar préstamos extendidos, descargar ciertos documentos, etc.).",
      "projects.biblioteca.desc2":
        "Sistema de préstamo y reserva de materiales: No solo acceso, sino también un sistema para gestionar el préstamo (digital o físico) de materiales con fechas de vencimiento, y la posibilidad de reservar materiales que estén actualmente prestados.",
      "projects.biblioteca.desc3":
        "Visualización integrada de documentos digitales: Para tesis, informes y ciertos libros digitales, la aplicación puede incluir un visor web que permita a los usuarios leer el contenido directamente en el navegador sin necesidad de descargarlo siempre, mejorando la seguridad y la experiencia de lectura rápida.",
      "projects.biblioteca.desc4":
        "Clasificación temática y navegación por colecciones: Organizar los materiales no solo por búsqueda, sino también permitiendo navegar por categorías temáticas, departamentos académicos, tipos de material (tesis, informes, libros, revistas), o colecciones especiales definidas por la institución.",
      "projects.biblioteca.desc5":
        "Perfil de usuario con historial y favoritos: Cada usuario puede tener un perfil donde vea su historial de lectura/préstamo, guarde materiales en una lista de favoritos para acceso rápido y reciba recomendaciones personalizadas.",
      "projects.biblioteca.desc6":
        "Módulo de carga y gestión de contenido (Backoffice): Herramientas robustas en el backoffice para que el personal de la biblioteca pueda cargar nuevos materiales fácilmente (individualmente o en lotes), editar metadatos completos (resúmenes, palabras clave, ISBN, etc.), gestionar versiones y formatos.",
      "projects.biblioteca.desc7":
        "Estadísticas y reportes de uso (Backoffice): Proveer al personal de la biblioteca con dashboards y reportes sobre el uso de la plataforma: materiales más consultados/prestados, usuarios más activos, estadísticas por departamento, tipos de material, etc., para ayudar en la gestión y adquisición de recursos.",
      "projects.biblioteca.desc8":
        "Integración potencial con el sistema de gestión académica de la institución: Sincronizar datos de usuarios (estudiantes, personal) directamente desde la base de datos central de la institución para simplificar el proceso de alta y gestión de usuarios de la biblioteca.",
      "projects.biblioteca.desc9":
        "Las tecnologías utilizadas para este proyecto incluyen .NET y React para el frontend, base de datos con SQL Server y Redis.",
      "projects.biblioteca.date": "Febrero 2025 - Actualidad",

      // Sección Educación
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
      // Navegación
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      cv: "CV",

      // Sección Intro
      "intro.name": "Luis Eduardo Rondón",
      "intro.title": "Hello, I'm Luis Eduardo Rondón",
      "intro.subtitle":
        "Developer with 7 years of experience, main specialist in C# .NET.",
      "intro.stacks":
        "I'm proficient in stacks such as Node.js, Nest, React, JavaScript, and TypeScript. I have experience with various databases (SQL/NoSQL), Cloud (Azure), DevOps (Docker, Git, CI/CD), and Linux systems. I also serve as a Mentor.",
      "intro.contact": "I'm ready to connect and collaborate!",
      "hero.button": "Contact me", // Esta clave parece no usarse en el HTML actual

      // Sección About me (About) - Claves y textos actualizados
      "about.title": "About me", // Mantienes esta clave
      // Nuevo párrafo introductorio
      "about.introText":
        "Over 7 years of experience as a developer across various stacks. Working with end-customer-focused product teams as well as platform teams.",
      "about.backendTitle": "Web Developer", // Título punto 1
      // Texto punto 1
      "about.backendText":
        "Developer with experience building APIs, Monolith Applications, and graphical interfaces, driving efficiency and scalability in complex systems to support millions of users.",
      "about.crossfunctionalTitle": "Cross-functional Collaborator", // Título punto 2
      // Texto punto 2
      "about.crossfunctionalText":
        "With experience in frontend, backend, and SRE teams, I enjoy collaborating with cross-functional teams to bring innovative ideas to life.",
      "about.valueDrivenTitle": "Value-Driven Solutions", // Título punto 3
      // Texto punto 3
      "about.valueDrivenText":
        "I am passionate about working in product and platform teams, creating digital solutions that deliver value and impact end users.",
      "about.valueMentorText":
        "I help emerging professionals and recent graduates, and I can also provide them with the guidance and tools they need to accelerate their development and boost their overall growth.",
      "about.valueMentorTitle": "Accelerating Potential",

      // Section Experience
      "experience.title": "Experience",
      // Keys for ACL
      "experience.acl.title": "ACL - ACHS",
      "experience.acl.role": "Full Stack Developer",
      "experience.acl.date": "October 2021 – March 2025",
      "experience.acl.work1.desc":
        "Participated in the development of a medical appointment scheduling application, providing service quality to various users, patients, and representatives of each affiliated company. This was a web platform with over 1,000 associated companies and over 5,000 users. I implemented new requirements and improved system efficiency, utilizing continuous deployments with Azure DevOps CI/CD and Docker. Additionally, I performed an upgrade from .NET Core 3.1 to .NET 8.",
      "experience.acl.work2.desc":
        "I was also part of the development team for a single integrated system (ACHS Virtual) to provide sessions, resources, and roles for all ACHS applications, allowing for centralized session management for each user within the organization. This system utilized BFF Microservices architecture and other technologies such as Azure DevOps CI/CD, TypeScript Nest, SQL Server, and React.",
      "experience.acl.work3.desc":
        "Also worked on the development team called (ACHS Maintenance) to perform maintenance for various applications across the entire ACHS company. Utilized technologies such as Azure DevOps CI/CD, TypeScript Nest, SQL Server, and React.",
      "experience.acl.work4.desc":
        "It's important to note that, in all three projects, we implemented a comprehensive approach that included cybersecurity and performance analysis for each feature developed. I performed specific optimizations on complex queries and methods to ensure their efficiency. Additionally, we guaranteed code quality through exhaustive reviews using SonarQube. This rigorous process allowed us to create high-quality software and integrate unit and integration testing to achieve high code quality.",

      // Keys for PSM
      "experience.psm.title":
        "Santiago Mariño Polytechnic University Institute",
      "experience.psm.role": "Full Stack Developer - Freelance", // Assign the correct role
      "experience.psm.date": "November 2022 – Present", // <<< Added date key
      "experience.psm.work1.desc":
        "Development of the official University website, this version serving as a unification of all extensions within the country. Additionally, built a backoffice for administering the web content of each educational institution extension included within the constructed website. Utilizing technologies such as C#, .NET, MongoDB, and React.",
      "experience.psm.work2.desc":
        "Development of a local application for cash management and cash closing reports. Also included features to view enrolled students, enroll them, and assign fees – a comprehensive set of tools for institutional administration. Utilizing technologies such as C#, .NET Framework, SQL Server, and React.",

      // Keys for Boitas
      "experience.boitas.title": "Boitas.com",
      "experience.boitas.role": "Full Stack Developer", // Assign the correct role
      "experience.boitas.date": "May 2021 – October 2021", // <<< Added date key
      "experience.boitas.work1.desc":
        "Participated in the development of an integrated web application (Web Boitas.com) for online purchases, reservations, and payments. Utilized technologies like Elasticsearch to optimize large searches and development technologies such as Node.js, MongoDB, GraphQL, and Vue.js.",
      "experience.boitas.work2.desc":
        "Development of the back-office (Web Boitas.com) to manage online purchases, reservations, sessions, and payments. This allowed configuring all options within the web application, utilizing technologies such as Node.js, MongoDB, GraphQL, and Vue.js.",
      "experience.boitas.work3.desc":
        "I also made key optimizations to existing services. A notable example was the improvement in email sending: I implemented a queue and used Sendgrid, significantly streamlining automated sending to increase the efficiency and reliability of the process, as required by the business.",

      // Keys for Camin
      "experience.camin.title": "Camin Global",
      "experience.camin.role": "Frontend Developer - Freelance", // Assign the correct role
      "experience.camin.date": "January 2021 – March 2022", // <<< Added date key
      "experience.camin.work1.desc":
        "Complete development, from design to implementation, of the official MRW website. Key features of this site include tracking national shipments, and visually showcasing everything related to MRW and its services. Utilized technologies such as Vue.js and Nuxt.js.",
      "experience.camin.work2.desc":
        "Optimized images and reduced file sizes to improve website loading speed. Additionally, changed the API address responsible for fetching shipment tracking details.",
      "experience.camin.work3.desc":
        "I was also supporting the deployment of the complete website with the service provider GoDaddy, where I performed the server installation and the installation of both the backend (developed by another developer), MySQL database engine and frontend that I had made.",

      // Keys for Avior
      "experience.avior.title": "Avior Airlines",
      "experience.avior.role": "Full Stack Developer", // Assign the correct role
      "experience.avior.date": "November 2017 – July 2022", // <<< Added date key
      "experience.avior.work1.desc":
        "I participated in the development of Avior Airlines' official website for ticket reservations and purchases. I also built APIs for processing these requests with the provider SABRE. I also developed the ticket refund service. I used C#, .NET Framework, SQL Server, and React technologies for the frontend.",
      "experience.avior.work2.desc":
        "I also developed the Avior Airlines mobile app, Avior Ratings, for user flight ratings, allowing users to view and evaluate satisfaction with the airline's service. Using Ionic technology.",
      "experience.avior.work3.desc":
        "I jointly developed a graphical application for the Avior Airlines management team to manage reports across all departments. This helped the CEO visualize current operations, enabling him to make informed decisions and improve the airline's service. Using .NET Framework MVC and SQL Server technologies.",
      "experience.avior.work4.desc":
        "Together with the team, we conducted training with the provider Sabre International for the implementation of the air services API, providing the website with effective communication by having real-time data with the service station, flights, and web check-in.",

      // Keys for SmartWork
      "experience.smartWork.title": "SmartWork",
      "experience.smartWork.role": "Full Stack Developer", // Assign the correct role
      "experience.smartWork.date": "April 2020 – January 2021", // <<< Added date key
      "experience.smartWork.work1.desc":
        "I developed a REST API to manage the acquisitions of each client and business. This REST API was used to perform all the allocations of locations and tools. Using C#, .NET Framework, and SQL Server technologies.",
      "experience.smartWork.work2.desc":
        "I developed a robust back-office web application designed for the centralized management of users, locations, and the product catalog associated with each establishment. This platform facilitates the efficient management of these key operational resources. It was built using a technology stack that includes C# and .NET Framework for the backend, SQL Server as the database, and React for the frontend.",
      "experience.smartWork.work3.desc":
        "I developed a key mobile app for logistics and sales operations. Its main purpose is to centralize and provide instant access to the data, tools, information, and essential resources that users, field staff, and managers need, directly on their devices. It was built using React Native technology.",

      // Keys for Satelca
      "experience.satelca.title": "Satellites and Telecommunications (Satelca)",
      "experience.satelca.role": "Backend Developer", // Assign the correct role
      "experience.satelca.date": "May 2017 – November 2017", // <<< Added date key
      "experience.satelca.work1.desc":
        "Developed libraries for utilizing GPS communications with imported devices to provide vehicle location services, distributed in vehicles as a company service. This successfully homologated these devices, maximizing their benefit and performance. Utilized technologies including GSM telephony (Digitel), C#, and SQL Server.",
      "experience.satelca.work2.desc":
        "Developed and performed initial planning for a local administrative application for internal company use, managing collections and billing. This involved setting up the adequate infrastructure for its implementation from scratch. Utilizing technologies such as C#, .NET Framework, and SQL Server.",

      // Keys for Profesor
      "experience.profesor.title": "Programming teacher at Programate",
      "experience.profesor.role": "PHP, JavaScript, CSS and React Teacher", // Assign the correct role
      "experience.profesor.date": "February 2020 – December 2022", // <<< Added date key
      "experience.profesor.work1.desc":
        "As an instructor, I developed and taught basic and intermediate courses on PHP, JavaScript, CSS, and React. My goal was to equip students with a solid understanding of backend programming (PHP) and the ability to build web applications using this set of technologies.",

      // Keys for Soporte
      "experience.soporte.title":
        "Antonio José de Sucre University Institute of Technology",
      "experience.soporte.role": "IT Technical Support", // Assign the correct role
      "experience.soporte.date": "March 2008 – May 2017", // <<< Added date key
      "experience.soporte.work1.desc":
        "IT Support Technician, providing technical assistance locally and to nearby branches for users, equipment, computer labs, networks, and servers. Also performed preventive and corrective maintenance on equipment, networks, and servers.",
      "experience.soporte.work2.desc":
        "Furthermore, in an advanced stage, I became IT Support Lead, providing support for administrative and academic applications both locally and to other branches/regional extensions. Additionally, I conducted training sessions on servers with Active Directory in Windows Server 2012R2.",

      // Projects section
      "projects.title": "Projects",
      // Claves para proyectos con fechas (ejemplo)
      "projects.glucose.title": "Glucose tracking application",
      "projects.glucose.desc1":
        "Graphical visualization and trend analysis: Allows users to view their glucose levels in interactive graphs, identifying patterns and trends over time (days, weeks, months) for a better understanding of their management.",
      "projects.glucose.desc2":
        "Related event logging: Facilitates the recording of key factors such as meals (with carbohydrates if desired), exercise, medication, and other events to contextualize glucose measurements.",
      "projects.glucose.desc3":
        "Customizable alerts and contact notifications: Allows users to define specific alert thresholds and configure the sending of important notifications (such as extreme levels) to designated family members or caregivers.",
      "projects.glucose.desc4":
        "Data report and summary generation: Ability to generate periodic reports (daily, weekly, monthly) with summaries of measurements, averages, and time in range, useful for personal tracking or sharing with healthcare professionals.",
      "projects.glucose.desc5":
        "Limited offline functionality: The application will allow users to view recent data and log events (such as meals or exercise) even without an internet connection. Data will automatically sync with the central platform once connectivity is restored.",
      "projects.glucose.desc6":
        "Integrated push notifications: In addition to emails and SMS, the mobile application will send push notifications directly to the user's device for important alerts (out-of-range levels, reminders, etc.), offering a more immediate and discreet way to receive information.",
      "projects.glucose.desc7":
        "Technologies used for this project include Python Flask API, with future development in React Native for the mobile app and PostgreSQL.",
      "projects.glucose.date": "December 2024 - Present",

      "projects.biblioteca.title": "Virtual library application",
      "projects.biblioteca.desc1":
        "Granular user and role management: Implement different permission and role levels (e.g., Student, Professor, Researcher, Librarian, Administrator) to control access to certain materials, backoffice functionalities, and action types (like requesting extended loans, downloading specific documents, etc.).",
      "projects.biblioteca.desc2":
        "Material loan and reservation system: Not just access, but also a system to manage the loan (digital or physical) of materials with due dates, and the possibility to reserve materials that are currently on loan.",
      "projects.biblioteca.desc3":
        "Integrated digital document viewer: For theses, reports, and certain digital books, the application can include a web viewer allowing users to read content directly in the browser without always needing to download it, improving security and quick reading experience.",
      "projects.biblioteca.desc4":
        "Thematic classification and collection Browse: Organize materials not only by search but also allowing navigation by thematic categories, academic departments, material types (theses, reports, books, journals), or special collections defined by the institution.",
      "projects.biblioteca.desc5":
        "User profile with history and favorites: Each user can have a profile where they view their reading/loan history, save materials to a favorites list for quick access, and receive personalized recommendations.",
      "projects.biblioteca.desc6":
        "Content upload and management module (Backoffice): Robust tools in the backoffice for library staff to easily upload new materials (individually or in batches), edit complete metadata (abstracts, keywords, ISBN, etc.), manage versions and formats.",
      "projects.biblioteca.desc7":
        "Usage statistics and reports (Backoffice): Provide library staff with dashboards and reports on platform usage: most consulted/loaned materials, most active users, statistics by department, material types, etc., to aid in resource management and acquisition.",
      "projects.biblioteca.desc8":
        "Potential integration with the institution's academic management system: Synchronize user data (students, staff) directly from the institution's central database to simplify the library user registration and management process.",
      "projects.biblioteca.desc9":
        "Technologies used for this project include .NET and React for the frontend, and a database with SQL Server and Redis.",
      "projects.biblioteca.date": "February 2025 - Present",

      // Section education
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
  };

  // Función para actualizar textos
  function updateTexts() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = translations[currentLang][key];

      // Asegurarse de que la traducción existe antes de aplicarla
      if (translation !== undefined) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translation;
        } else if (element.hasAttribute("data-i18n-html")) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      } else {
        // Opcional: Puedes añadir un log para ver qué claves faltan
        // console.warn(`Translation missing for key: ${key} in language: ${currentLang}`);
        // Si la traducción falta, puedes dejar el contenido actual (si lo hay)
        // o establecerlo a una cadena vacía si prefieres
        // element.textContent = '';
      }
    });
  }

  // Cambiar idioma al hacer click
  languageToggle.addEventListener("click", function () {
    currentLang = currentLang === "es" ? "en" : "es";
    languageText.textContent = currentLang === "es" ? "EN" : "ES";
    localStorage.setItem("language", currentLang);
    updateTexts();
  });

  // Cargar idioma guardado
  function loadLanguage() {
    const savedLang =
      localStorage.getItem("language") || navigator.language.slice(0, 2);
    currentLang = ["es", "en"].includes(savedLang) ? savedLang : "es";
    languageText.textContent = currentLang === "es" ? "EN" : "ES";
    updateTexts();
  }

  loadLanguage();

  function highlightActiveSection() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav a");

    // Si estamos en la parte superior de la página, quitar todas las clases 'active'
    if (window.scrollY < 100) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      return;
    }

    // Obtener la posición actual del scroll
    const scrollPosition = window.scrollY + 100; // Ajuste para activar antes

    // Iterar sobre cada sección
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      // Verificar si la sección está en la vista
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Quitar la clase 'active' de todos los enlaces
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // Añadir la clase 'active' al enlace correspondiente
        const activeLink = document.querySelector(
          `.nav a[href="#${sectionId}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }

  // Escuchar el evento scroll
  window.addEventListener("scroll", highlightActiveSection);

  // Resetear al hacer clic en el logo
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault();

      // Quitar todas las clases 'active'
      const navLinks = document.querySelectorAll(".nav a");
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Scroll suave al inicio
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Ejecutar al cargar la página para resaltar la sección inicial
  highlightActiveSection();

  // Escuchar el evento scroll
  window.addEventListener("scroll", highlightActiveSection);

  const logoLink = document.querySelector(".logo");

  if (logoLink) {
    logoLink.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      history.replaceState(null, "", window.location.pathname);
    });
  }
});
