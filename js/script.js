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

        // Sección Intro
        "intro.name": "Luis Eduardo Rondón",
        "intro.title": "Hola, soy Luis Eduardo Rondón",
        "intro.subtitle":
          "Desarrollador de Software con 7+ años de experiencia, especializado en backend. Experto tanto en C#/.NET (aplicaciones de escritorio, monolíticos, APIs) como en Node.js/NestJS (APIs y microservicios), con habilidades frontend para soluciones completas.",
        "intro.stacks":
          "Apasionado por el desarrollo, la mentoría y el trabajo en equipos de alto rendimiento. ¡Estoy listo para conectar y colaborar!",
        "hero.button": "Contáctame", // Esta clave parece no usarse en el HTML actual

        // Sección Experiencia
        "experience.title": "Experiencia",
        // Claves para LIVELIFY
        "experience.live.title": "LiveLify / Método Libre",
        "experience.live.role": "Desarrollador Full Stack - Freelance", // Assign the correct role
        "experience.live.date": "Junio 2025 – Enero 2026", // <<< Added date key
        "experience.live.from": "Santiago, Chile",
        "experience.live.work1.desc":
          "Desarrollo de un API Rest enfocado en establecer metas y logros personales por alcanzar de manera específica y apuntando a solo 6 áreas de la vida(Desarrollo personal, Actvidad profesional, Alimentación y salud, Dinero y finanzas, Familia y amigos, Amor y pareja) más importantes según clientes encuestados para construir este proyecto bastante peculiar e interesante, dándole al usuario final un seguimiento de sus metas por alcanzar, creando proyectos personales y así poder visualizar sus avances de manera gráfica. Construido con Nodejs con el Framework NestJS, Docker, PostgreSQL y Prisma como ORM. Ademas siguiendo ademas buenas practicas utilizando arquitectura hexagonal.",
        "experience.live.work2.desc":
          "Desarrollo además del API ya mencionado también desarrollé la Aplicación Frontend de manera fluida y organizada aportando además lógica de negocio en el API así permitiendo que a futuro se tenga que desarrollar una App Móvil. Este desarrollo se utilizó React y TailwindCSS.",
        "experience.live.work3.desc":
          "Desarrollo y maquetación del landing page para las ventas de dicho servicio al cliente, un sitio web sencillo con la información acerca del servicio ofrecido, precios, planes y formas de como usarlo. Construido con React y TailwindCSS.",
        "experience.live.work4.desc":
          "También estuve a cargo de la configuración y construcción de los parámetros para el despliegue a distintos ambientes usando Google Cloud Services y configuración de los dominios.",

        // Claves para ACL
        "experience.acl.title": "ACL - ACHS",
        "experience.acl.role": "Desarrollador Full Stack", // Asigna el rol correcto
        "experience.acl.date": "Ocubre 2021 – Marzo 2025", // <<< Añadida clave de fecha
        "experience.acl.from": "Santiago, Chile",
        "experience.acl.work1.desc":
          "Participé en el desarrollo de una aplicación para agendamiento de citas médicas, generando calidad de servicio a distintos usuarios, pacientes y responsables de cada empresa afiliada, una plataforma web con más de 1 mil empresas asociadas y más de 5 mil usuarios, implementando nuevos requerimientos y mejorando la eficiencia del sistema, utilizando despliegues continuos con el uso de Azure DevOps CI/CD Y Docker, además realicé una actualización de .NET Core 3.1 a .NET 8.",
        "experience.acl.work2.desc":
          "También estuve en el equipo de desarrollo de un sistema integrado único (ACHS Virtual) para ofrecer sesiones, recursos y roles para todas las aplicaciones de ACHS, dando cabida a la centralización de la sesión de cada uno de los usuarios dentro de la organización. Utilizando arquitectura de Micro Servicios BFF y demás tecnologías como Azure DevOps CI/CD, TypeScript NestJS, SQL Server y React.",
        "experience.acl.work3.desc":
          "También estuve en el equipo de desarrollo llamado (ACHS Mantención) para generar mantenimientos de distintas aplicaciones de toda la empresa ACHS. Utilizando tecnologías como Azure DevOps CI/CD, TypeScript NestJS, SQL Server y React.",
        "experience.acl.work4.desc":
          "Es importante destacar que, en los 3 proyectos, implementamos un enfoque integral que incluyó análisis de ciberseguridad y rendimiento en cada funcionalidad desarrollada. Realicé optimizaciones específicas en consultas y métodos complejos para asegurar su eficiencia. Adicionalmente, garantizamos la calidad del código mediante revisiones exhaustivas con SonarQube. Este proceso riguroso nos permitió crear software de alta calidad e integrando Test Unitarios y te Integración para obtener una alta calidad de código.",

        // Claves para PSM
        "experience.psm.title":
          "Instituto Universitario Politécnico Santiago Mariño",
        "experience.psm.role": "Técnico IT y Desarrollador - Freelance", // Assign the correct role
        "experience.psm.date": "Noviembre 2022 – Actualidad", // <<< Added date key
        "experience.psm.from": "Barcelona, Venezuela",
        "experience.psm.work1.desc":
          "Desarrollo de la web oficial de la Universidad, siendo esta versión una unificación de todas las extensiones dentro del país, además cuenta con una data interna de cada sección de la página, para facilitar la edición y visualización del contenido web de cada una de las extensiones de la Institución Educativa que están dentro de la web construida. Utilizando tecnologías como React y TailwindCSS.",
        "experience.psm.work2.desc":
          "Desarrollo de una aplicación local para la gestión de caja y reportes de cierres de caja, además poder visualizar los estudiantes inscritos, poder inscribirlos, asignar cuotas, todo un conjunto de herramientas para la administración de la institución. Utilizando tecnologías como C#, .NET Framework, SQL Server y React.",
        "experience.psm.work3.desc":
          "Servicio Tecnico IT en las instalaciones, en cuales desempeño las funciones de DBA SQL Server, me encargo de optimizar ciertos procesos en los datos, ademas de prestar asistencia tecnica en los servidores locales de Active Directory, Proxy y File Server.",
        "experience.psm.work4.desc":
          "Desarrollo de una aplicación de tipo monolito en modo local para consulta de notas e historial académico, cortes academicos, horarios, esto para ayudar a la población estudiantil a administrar sus datos académicos. Utilizando tecnologías como C#, MVC, .NET Framework, SQL Server.",

        // Claves para Boitas
        "experience.boitas.title": "Boitas.com",
        "experience.boitas.role": "Desarrollador Full Stack", // Assign the correct role
        "experience.boitas.date": "Mayo 2021 – Octubre 2021", // <<< Added date key
        "experience.boitas.from": "Cuidad de México, México",
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
        "experience.camin.from": "Lecheria, Venezuela",
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
        "experience.avior.from": "Barcelona, Venezuela",
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
        "experience.smartWork.from": "Quito, Ecuador",
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
        "experience.satelca.from": "Lecheria, Venezuela",
        "experience.satelca.work1.desc":
          "Desarrollo de librerias para la utilización de comunicaciones GPS con dispositivos importados, esto para dar servicios de ubicación vehicular, y poder ser distribuidos en los vechiculos como servicio de la empresa, con esto se logro homologar estos dispositivos pudiendo obtener su mayor provecho y rendimiento. Utilizando tecnologías con telefonia GSM (Digitel), C# y SQL Server.",
        "experience.satelca.work2.desc":
          "Desarrollo y planificación inicial de una aplicación administrativa para la gestión de cobranza y facturación de manera local de uso interno de la empresa, contando con la infraestructura adecuada para su implementacion desde cero. Utilizando tecnologías C#, .NET Framework, SQL Server.",

        // Claves para Profesor
        "experience.profesor.title": "Profesor de programación en Programate",
        "experience.profesor.role": "Profesor de PHP, JavaScript, CSS y React", // Assign the correct role
        "experience.profesor.date": "Febrero 2020 – Diciembre 2022", // <<< Added date key
        "experience.profesor.from": "Puerto La Cruz, Venezuela",
        "experience.profesor.work1.desc":
          "Como instructor, desarrollé e impartí cursos básicos e intermedios sobre PHP, JavaScript, CSS y React. Mi objetivo era equipar a los estudiantes con una sólida comprensión de la programación backend (PHP) y la capacidad de construir aplicaciones web utilizando este conjunto de tecnologías.",

        // Claves para Soporte
        "experience.soporte.title":
          "Instituto Universitario de Tecnología Antonio José de Sucre",
        "experience.soporte.role": "Jefe de Soporte IT / Técnico de Sistemas", // Assign the correct role
        "experience.soporte.date": "Marzo 2008 – Mayo 2017", // <<< Added date key
        "experience.soporte.from": "Puerto La Cruz, Venezuela",
        "experience.soporte.work1.desc":
          "Técnico en Soporte IT, asistencia tecnica local y otra sede cercanaras a los usuarios, equipos, laboratorios de computación, redes y servidores, ademas de realizar mantenimiento preventivo y correctivo de equipos, redes y servidores.",
        "experience.soporte.work2.desc":
          "Ademas en una etapa avanzada pase a ser jefe de Soporte IT, estuve brindando soporte a Aplicaciones administrativas y Academicas de manera local y a otras sedes, extensiones regionales, ademas de dictar unas capacitaciones a nivel de servidores con active Directory en Windows Server 2012R2.",

        // Sección Proyectos
        "projects.title": "Proyectos",
        // Claves para proyectos con fechas (ejemplo)

        "projects.glucose.title": "Aplicación seguimiento de glucosa",
        "projects.glucose.role": "Proyecto personal",
        "projects.glucose.desc1":
          "Visualización gráfica y análisis de tendencias: Permite a los usuarios ver sus niveles de glucosa en gráficos interactivos, identificando patrones y tendencias a lo largo del tiempo (días, semanas, meses) para una mejor comprensión de su manejo.",
        "projects.glucose.desc2":
          "Registro de eventos relacionados: Facilita el registro de factores clave como comidas (con carbohidratos si se desea), ejercicio, medicación y otros eventos para contextualizar las mediciones de glucosa.",
        "projects.glucose.desc3":
          "Alertas personalizables y notificaciones a contactos: Permite a los usuarios definir umbrales de alerta específicos y configurar el envío de notificaciones importantes (como niveles extremos) a familiares o cuidadores designados.",
        "projects.glucose.desc4":
          "Generación de informes y resúmenes de datos: Capacidad de generar informes periódicos (diarios, semanales, mensuales) con resúmenes de las mediciones, promedios y tiempo en rango, útiles para el seguimiento personal o para compartir con profesionales de la salud.",
        "projects.glucose.desc5":
          "Las tecnologías utilizadas para este proyecto incluyen Python Flask API, con desarrollo futuro en React Native para la aplicación móvil y PostgreSQL.",
        "projects.glucose.date": "Diciembre 2024 - Actualidad",
        "experience.glucose.from": "Barcelona, Venezuela",

        "projects.biblioteca.title": "Aplicación biblioteca virtual",
        "projects.biblioteca.role": "Proyecto cliente",
        "projects.biblioteca.desc1":
          "Gestión granular de usuarios y roles: Implementar diferentes niveles de permisos y roles (por ejemplo, Estudiante, Profesor, Investigador, Bibliotecario, Administrador) para controlar el acceso a ciertos materiales, funcionalidades de backoffice y tipos de acciones (como solicitar préstamos extendidos, descargar ciertos documentos, etc.).",
        "projects.biblioteca.desc2":
          "Sistema de préstamo y reserva de materiales: No solo acceso, sino también un sistema para gestionar el préstamo (digital o físico) de materiales con fechas de vencimiento, y la posibilidad de reservar materiales que estén actualmente prestados.",
        "projects.biblioteca.desc3":
          "Visualización integrada de documentos digitales: Para tesis, informes y ciertos libros digitales, la aplicación puede incluir un visor web que permita a los usuarios leer el contenido directamente en el navegador sin necesidad de descargarlo siempre, mejorando la seguridad y la experiencia de lectura rápida.",
        "projects.biblioteca.desc4":
          "Módulo de carga y gestión de contenido (Backoffice): Herramientas robustas en el backoffice para que el personal de la biblioteca pueda cargar nuevos materiales fácilmente (individualmente o en lotes), editar metadatos completos (resúmenes, palabras clave, ISBN, etc.), gestionar versiones y formatos.",
        "projects.biblioteca.desc5":
          "Las tecnologías utilizadas para este proyecto incluyen .NET MVC o monolito como tambien se le suele conocer, tambien siguiendo ademas buenas practicas utilizando arquitectura hexagonal, base de datos con SQL Server.",
        "projects.biblioteca.date": "Febrero 2025 - Actualidad",
        "experience.biblioteca.from": "Barcelona, Venezuela",

        "projects.psm.title":
          "Sitio web Instituto Universitario Politécnico Santiago Mariño",
        "projects.psm.role": "Proyecto cliente",
        "projects.psm.link": "Visitar proyecto",
        "projects.psm.desc1":
          "Unificación y Gestión de Contenido Centralizado: Unifica todas las extensiones en una sola web. Permite a cada sección editar su propio contenido de forma autónoma, garantizando una identidad visual coherente en todo el portal.",
        "projects.psm.desc2":
          "Web de Marca y Atracción Digital: El sitio web es una herramienta de marketing enfocada en atraer a nuevos estudiantes. El diseño es atractivo y moderno, optimizado para campañas de publicidad digital y la promoción de los logros de la universidad.",
        "projects.psm.desc3":
          "Portal con Enfoque Móvil: Prioriza la experiencia del usuario en dispositivos móviles. Las funciones clave, como mapas del campus y notificaciones, están diseñadas para un acceso rápido y sencillo desde un teléfono o tableta.",
        "projects.psm.desc4":
          "Las tecnologías utilizadas para este proyecto incluyen React y TailwindCSS.",
        "projects.psm.date": "Marzo 2024 - Actualidad",
        "experience.psm.from": "Caracas, Venezuela",

        "projects.camin.title": "Sitio web MRW",
        "projects.camin.role": "Proyecto cliente",
        "projects.camin.link": "Visitar proyecto",
        "projects.camin.desc1":
          "Desarrollo del Sitio Web: Este proyecto consistió en la creación integral del sitio web oficial de MRW, cubriendo todas las etapas desde el diseño inicial hasta la implementación final. El objetivo principal fue modernizar la presencia digital de la marca, ofreciendo una plataforma funcional y atractiva para sus clientes.",
        "projects.camin.desc2":
          "Rastreo de Envíos Nacionales: Una herramienta robusta que permite a los usuarios dar seguimiento en tiempo real a sus paquetes y envíos dentro del territorio nacional, ofreciendo transparencia y control.",
        "projects.camin.desc3":
          "Presentación de Servicios: Se diseñó una sección dedicada a mostrar de manera gráfica e intuitiva todos los servicios de MRW, facilitando a los clientes la comprensión de las diferentes opciones de envío y logística disponibles.",
        "projects.camin.desc4":
          "Optimización de Imágenes y Archivos: Se implementaron técnicas avanzadas para reducir el tamaño de las imágenes y otros archivos, lo que resultó en una mejora sustancial en la velocidad de carga del sitio web.",
        "projects.camin.desc5":
          "Las tecnologías utilizadas para este proyecto incluyen Vue.js y Nuxt.js.",
        "projects.camin.date": "Enero 2021 – Marzo 2022",
        "experience.camin.from": "Lecheria, Venezuela",

        "projects.avior.title": "Sitio web Avior Airlines",
        "projects.avior.role": "Proyecto cliente",
        "projects.avior.link": "Visitar proyecto",
        "projects.avior.desc1":
          "Desarrollo del Sitio Web: Este proyecto web de Avior Airlines, centrándose en la reserva y compra de boletos. Esto incluyó la integración de un motor de búsqueda y un sistema de pago eficiente, asegurando una experiencia de usuario fluida y segura.",
        "projects.avior.desc2":
          "Integración y construcción de APIs con SABRE: Construimos múltiples APIs para gestionar las solicitudes de reserva y compra de boletos. Estas APIs se comunicaban directamente con el proveedor SABRE, lo que garantizó un procesamiento de datos preciso y en tiempo real.",
        "projects.avior.desc3":
          "Desarrollo del servicio de reembolso de boletos: Diseñé y desarrollé completamente el servicio de reembolso de boletos. Esto implicó la creación de la lógica de negocio para procesar las solicitudes de manera eficiente, así como la integración con los sistemas financieros de la aerolínea para asegurar una gestión correcta de los reembolsos.",
        "projects.avior.desc4":
          "Las tecnologías utilizadas para este proyecto incluyen C#, .NET Framework, SQL Server y React.",
        "projects.avior.date": "Noviembre 2017 – Julio 2022",
        "experience.avior.from": "Barcelona, Venezuela",

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
          "Software Developer with 7+ years of experience, specializing in backend. Expert in both C#/.NET (desktop applications, monoliths, APIs) and Node.js/NestJS (APIs and microservices), with frontend skills for complete solutions.",
        "intro.stacks":
          "Passionate about development, mentorship, and working in high-performance teams. I'm ready to connect and collaborate!",
        "hero.button": "Contact me", // Esta clave parece no usarse en el HTML actual

        // Section Experience
        "experience.title": "Experience",

        // Keys for LIVELIFY
        "experience.live.title": "LiveLify / Free Method",
        "experience.live.role": "Full Stack Developer - Freelance",
        "experience.live.date": "June 2025 – January 2026",
        "experience.live.from": "Santiago, Chile",
        "experience.live.work1.desc":
          "Development of a REST API focused on setting specific personal goals and achievements, targeting only six areas of life (Personal Development, Professional Activity, Nutrition and Health, Money and Finances, Family and Friends, Love and Relationships) deemed most important by surveyed clients. This unique and interesting project allows end users to track their goals, create personal projects, and visualize their progress graphically. Built with Node.js using the NestJS framework, Docker, PostgreSQL, and Prisma as the ORM, it also adheres to best practices and utilizes a hexagonal architecture.",
        "experience.live.work2.desc":
          "In addition to the aforementioned API, I also developed the Frontend Application in a fluid and organized manner, contributing business logic to the API to allow for future development of a Mobile App. This development used React and TailwindCSS.",
        "experience.live.work3.desc":
          "Development and layout of the landing page for the sales of this customer service. A simple website with information about the offered service, pricing, plans, and instructions on how to use it. Built with React and TailwindCSS.",
        "experience.live.work4.desc":
          "I was also responsible for the configuration and setup of parameters for deployment to different environments using Google Cloud Services and domain configuration",

        // Keys for ACL
        "experience.acl.title": "ACL - ACHS",
        "experience.acl.role": "Full Stack Developer",
        "experience.acl.date": "October 2021 – March 2025",
        "experience.acl.from": "Santiago, Chile",
        "experience.acl.work1.desc":
          "Participated in the development of a medical appointment scheduling application, providing service quality to various users, patients, and representatives of each affiliated company. This was a web platform with over 1,000 associated companies and over 5,000 users. I implemented new requirements and improved system efficiency, utilizing continuous deployments with Azure DevOps CI/CD and Docker. Additionally, I performed an upgrade from .NET Core 3.1 to .NET 8.",
        "experience.acl.work2.desc":
          "I was also part of the development team for a single integrated system (ACHS Virtual) to provide sessions, resources, and roles for all ACHS applications, allowing for centralized session management for each user within the organization. This system utilized BFF Microservices architecture and other technologies such as Azure DevOps CI/CD, TypeScript NestJS, SQL Server, and React.",
        "experience.acl.work3.desc":
          "Also worked on the development team called (ACHS Maintenance) to perform maintenance for various applications across the entire ACHS company. Utilized technologies such as Azure DevOps CI/CD, TypeScript NestJS, SQL Server, and React.",
        "experience.acl.work4.desc":
          "It's important to note that, in all three projects, we implemented a comprehensive approach that included cybersecurity and performance analysis for each feature developed. I performed specific optimizations on complex queries and methods to ensure their efficiency. Additionally, we guaranteed code quality through exhaustive reviews using SonarQube. This rigorous process allowed us to create high-quality software and integrate unit and integration testing to achieve high code quality.",

        // Keys for PSM
        "experience.psm.title":
          "Santiago Mariño Polytechnic University Institute",
        "experience.psm.role": "IT Technician and Developer - Freelance", // Assign the correct role
        "experience.psm.date": "November 2022 – Present", // <<< Added date key
        "experience.psm.from": "Barcelona, Venezuela",
        "experience.psm.work1.desc":
          "Development of the University's official website. This version unifies all extensions across the country. It also includes internal data for each section of the page to facilitate editing and viewing web content for each of the educational institution's extensions within the website. Technologies such as React and TailwindCSS were used.",
        "experience.psm.work2.desc":
          "Development of a local application for cash management and cash closing reports. Also included features to view enrolled students, enroll them, and assign fees – a comprehensive set of tools for institutional administration. Utilizing technologies such as C#, .NET Framework, SQL Server, and React.",
        "experience.psm.work3.desc":
          "On-site IT Technical Service, where I perform the functions of SQL Server DBA, I am in charge of optimizing certain data processes, in addition to providing technical assistance on local Active Directory, Proxy and File Server servers.",
        "experience.psm.work4.desc":
          "Development of a local, monolithic application for reviewing grades and academic history, academic breaks, and schedules, to help students manage their academic data. Using technologies such as C#, MVC, .NET Framework, and SQL Server.",

        // Keys for Boitas
        "experience.boitas.title": "Boitas.com",
        "experience.boitas.role": "Full Stack Developer", // Assign the correct role
        "experience.boitas.date": "May 2021 – October 2021", // <<< Added date key
        "experience.boitas.from": "Mexico City, Mexico",
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
        "experience.camin.from": "Lecheria, Venezuela",
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
        "experience.avior.from": "Barcelona, Venezuela",
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
        "experience.smartWork.from": "Quito, Ecuador",
        "experience.smartWork.work1.desc":
          "I developed a REST API to manage the acquisitions of each client and business. This REST API was used to perform all the allocations of locations and tools. Using C#, .NET Framework, and SQL Server technologies.",
        "experience.smartWork.work2.desc":
          "I developed a robust back-office web application designed for the centralized management of users, locations, and the product catalog associated with each establishment. This platform facilitates the efficient management of these key operational resources. It was built using a technology stack that includes C# and .NET Framework for the backend, SQL Server as the database, and React for the frontend.",
        "experience.smartWork.work3.desc":
          "I developed a key mobile app for logistics and sales operations. Its main purpose is to centralize and provide instant access to the data, tools, information, and essential resources that users, field staff, and managers need, directly on their devices. It was built using React Native technology.",

        // Keys for Satelca
        "experience.satelca.title":
          "Satellites and Telecommunications (Satelca)",
        "experience.satelca.role": "Backend Developer", // Assign the correct role
        "experience.satelca.date": "May 2017 – November 2017", // <<< Added date key
        "experience.satelca.from": "Lecheria, Venezuela",
        "experience.satelca.work1.desc":
          "Developed libraries for utilizing GPS communications with imported devices to provide vehicle location services, distributed in vehicles as a company service. This successfully homologated these devices, maximizing their benefit and performance. Utilized technologies including GSM telephony (Digitel), C#, and SQL Server.",
        "experience.satelca.work2.desc":
          "Developed and performed initial planning for a local administrative application for internal company use, managing collections and billing. This involved setting up the adequate infrastructure for its implementation from scratch. Utilizing technologies such as C#, .NET Framework, and SQL Server.",

        // Keys for Profesor
        "experience.profesor.title": "Programming teacher at Programate",
        "experience.profesor.role": "PHP, JavaScript, CSS and React Teacher", // Assign the correct role
        "experience.profesor.date": "February 2020 – December 2022", // <<< Added date key
        "experience.profesor.from": "Puerto La Cruz, Venezuela",
        "experience.profesor.work1.desc":
          "As an instructor, I developed and taught basic and intermediate courses on PHP, JavaScript, CSS, and React. My goal was to equip students with a solid understanding of backend programming (PHP) and the ability to build web applications using this set of technologies.",

        // Keys for Soporte
        "experience.soporte.title":
          "Antonio José de Sucre University Institute of Technology",
        "experience.soporte.role": "Head of IT Support / Systems Technician", // Assign the correct role
        "experience.soporte.date": "March 2008 – May 2017", // <<< Added date key
        "experience.soporte.from": "Puerto La Cruz, Venezuela",
        "experience.soporte.work1.desc":
          "IT Support Technician, providing technical assistance locally and to nearby branches for users, equipment, computer labs, networks, and servers. Also performed preventive and corrective maintenance on equipment, networks, and servers.",
        "experience.soporte.work2.desc":
          "Furthermore, in an advanced stage, I became IT Support Lead, providing support for administrative and academic applications both locally and to other branches/regional extensions. Additionally, I conducted training sessions on servers with Active Directory in Windows Server 2012R2.",

        // Projects section
        "projects.title": "Projects",
        // Claves para proyectos con fechas (ejemplo)
        "projects.glucose.title": "Glucose Tracking Application",
        "projects.glucose.role": "Personal Project",
        "projects.glucose.desc1":
          "Graphical visualization and trend analysis: Allows users to view their glucose levels in interactive charts, identifying patterns and trends over time (days, weeks, months) for a better understanding of their management.",
        "projects.glucose.desc2":
          "Related events logging: Facilitates the logging of key factors such as meals (with carbs if desired), exercise, medication, and other events to contextualize glucose measurements.",
        "projects.glucose.desc3":
          "Customizable alerts and notifications to contacts: Allows users to define specific alert thresholds and configure important notifications (such as extreme levels) to be sent to designated family members or caregivers.",
        "projects.glucose.desc4":
          "Data report and summary generation: Ability to generate periodic reports (daily, weekly, monthly) with summaries of measurements, averages, and time-in-range, useful for personal monitoring or for sharing with healthcare professionals.",
        "projects.glucose.desc5":
          "The technologies used for this project include a Python Flask API, with future development planned for a mobile application using React Native and a PostgreSQL database.",
        "projects.glucose.date": "December 2024 - Present",
        "experience.glucose.from": "Barcelona, Venezuela",

        "projects.biblioteca.title": "Virtual Library Application",
        "projects.biblioteca.role": "Client Project",
        "projects.biblioteca.desc1":
          "Granular user and role management: Implement different levels of permissions and roles (e.g., Student, Professor, Researcher, Librarian, Administrator) to control access to certain materials, back-office functionalities, and types of actions (like requesting extended loans, downloading certain documents, etc.).",
        "projects.biblioteca.desc2":
          "Material loan and reservation system: Not only access, but also a system to manage the loan (digital or physical) of materials with due dates and the possibility of reserving materials that are currently on loan.",
        "projects.biblioteca.desc3":
          "Integrated digital document viewer: For theses, reports, and certain digital books, the application can include a web viewer that allows users to read the content directly in the browser without always needing to download it, improving security and the quick-reading experience.",
        "projects.biblioteca.desc4":
          "Content upload and management module (Back-office): Robust back-office tools for library staff to easily upload new materials (individually or in batches), edit complete metadata (abstracts, keywords, ISBN, etc.), and manage versions and formats.",
        "projects.biblioteca.desc5":
          "The technologies used for this project include .NET MVC or monolith as it is also commonly known, also following good practices using hexagonal architecture, database with SQL Server.",
        "projects.biblioteca.date": "February 2025 - Present",
        "experience.biblioteca.from": "Barcelona, Venezuela",

        "projects.psm.title":
          "Website of the Santiago Mariño Polytechnic University Institute",
        "projects.psm.role": "Client project",
        "projects.psm.link": "Visit project",
        "projects.psm.desc1":
          "Centralized Content Management and Unification: Unifies all extensions into a single website. It allows each section to autonomously edit its own content, ensuring a coherent visual identity throughout the portal.",
        "projects.psm.desc2":
          "Brand and Digital Attraction Website: The website is a marketing tool focused on attracting new students. The design is appealing and modern, optimized for digital advertising campaigns and the promotion of the university's achievements.",
        "projects.psm.desc3":
          "Mobile-First Portal: Prioritizes the user experience on mobile devices. Key features, such as campus maps and notifications, are designed for quick and easy access from a phone or tablet.",
        "projects.psm.desc4":
          "The technologies used for this project include React and TailwindCSS.",
        "projects.psm.date": "March 2024 - Present",
        "experience.psm.from": "Caracas, Venezuela",

        "projects.camin.title": "MRW Website",
        "projects.camin.role": "Client Project",
        "projects.camin.link": "Visit project",
        "projects.camin.desc1":
          "Website Development: This project involved the full-scale creation of the official MRW website, covering every stage from initial design to final implementation. The main goal was to modernize the brand's digital presence by offering a functional and appealing platform for its customers.",
        "projects.camin.desc2":
          "Domestic Shipment Tracking: A robust tool that allows users to track their packages and shipments within the national territory in real-time, providing transparency and control.",
        "projects.camin.desc3":
          "Service Showcase: A dedicated section was designed to graphically and intuitively display all of MRW's services, making it easier for customers to understand the different shipping and logistics options available.",
        "projects.camin.desc4":
          "Image and File Optimization: Advanced techniques were implemented to reduce the size of images and other files, resulting in a substantial improvement in the website's loading speed.",
        "projects.camin.desc5":
          "The technologies used for this project include Vue.js and Nuxt.js.",
        "projects.camin.date": "January 2021 – March 2022",
        "experience.camin.from": "Lecheria, Venezuela",

        "projects.avior.title": "Avior Airlines Website",
        "projects.avior.role": "Client Project",
        "projects.avior.link": "Visit project",
        "projects.avior.desc1":
          "Website Development: This Avior Airlines web project focused on ticket booking and purchasing. This included the integration of a search engine and an efficient payment system, ensuring a fluid and secure user experience.",
        "projects.avior.desc2":
          "API Integration and Development with SABRE: We built multiple APIs to manage ticket booking and purchasing requests. These APIs communicated directly with the SABRE provider, which ensured accurate and real-time data processing.",
        "projects.avior.desc3":
          "Ticket Refund Service Development: I fully designed and developed the ticket refund service. This involved creating the business logic to efficiently process requests, as well as integrating it with the airline's financial systems to ensure correct refund management.",
        "projects.avior.desc4":
          "The technologies used for this project include C#, .NET Framework, SQL Server, and React.",
        "projects.avior.date": "November 2017 – July 2022",
        "experience.avior.from": "Barcelona, Venezuela",

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
