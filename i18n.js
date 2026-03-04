/* ================================================================
   i18n.js — AMEXPERTS & PARTNERS
   Moteur de traduction par CONTENU TEXTE.
   Aucun data-i18n requis dans le HTML.
   Traduit automatiquement tous les textes de toutes les pages.
   ================================================================ */
(function(){

/* ── Dictionnaire FR → EN ───────────────────────────────────────
   Chaque entrée : [texte_fr, texte_en]
   Le moteur parcourt TOUT le DOM et remplace les textes correspondants.
   ──────────────────────────────────────────────────────────────── */
var T = [

  /* ══ NAVBAR ══ */
  ['Accueil',                      'Home'],
  ['À propos',                     'About'],
  ['Nos Services',                 'Our Services'],
  ['Réalisations',                 'Projects'],
  ['Actualités',                   'News'],
  ['Options',                      'More'],
  ['Projets en financement',       'Projects for funding'],
  ['Nos Partenaires',              'Our Partners'],
  ['Brochure Corporate',           'Corporate Brochure'],
  ['Consultation',                 'Consult'],
  /* Dropdown services */
  ['Rédaction de projets',         'Project writing'],
  ['Mobilisation de ressources',   'Resource mobilization'],
  ['Formations professionnelles',  'Professional training'],
  ['Structuration financière',     'Financial structuring'],
  ['Expertise immobilière',        'Real estate expertise'],
  ['Expertise industrielle',       'Industrial expertise'],
  ['Expertise en assurance',       'Insurance expertise'],
  ['Ingénierie juridique',         'Legal engineering'],

  /* ══ BREADCRUMBS ══ */
  ['À propos',      'About'],
  ['Nos Services',  'Our Services'],
  ['Réalisations',  'Projects'],
  ['Actualités & Blog', 'News & Blog'],
  ['Nos Partenaires',   'Our Partners'],
  ['Projets en financement', 'Projects for funding'],
  ['Brochure Corporate',     'Corporate Brochure'],

  /* ══ PAGE HEADERS ══ */
  ['À propos du cabinet',
   'About the firm'],
  ['Un cabinet pluridisciplinaire fondé sur l\'excellence, l\'intégrité et la vision internationale.',
   'A multidisciplinary firm built on excellence, integrity and international vision.'],

  ['Nos Services',
   'Our Services'],
  ['Une offre intégrée de conseil, d\'ingénierie financière et d\'expertise technique pour concrétiser vos ambitions.',
   'An integrated offer of advisory, financial engineering and technical expertise to fulfil your ambitions.'],

  ['Actualités & Blog',
   'News & Blog'],
  ['Analyses financières, opportunités d\'investissement, notes économiques et actualités du cabinet.',
   'Financial analyses, investment opportunities, economic notes and firm news.'],

  ['Nos Réalisations',
   'Our Projects'],
  ['Un portefeuille de projets concrets illustrant notre expertise et notre engagement pour le développement de l\'Afrique.',
   'A portfolio of concrete projects illustrating our expertise and commitment to Africa\'s development.'],

  ['Partenariats Stratégiques',
   'Strategic Partnerships'],
  ['Construisons ensemble des alliances durables pour démultiplier l\'impact de vos projets en Afrique et à l\'international.',
   'Let us build lasting alliances to multiply the impact of your projects across Africa and internationally.'],

  ['Projets en Recherche de Financement',
   'Projects Seeking Financing'],
  ['Un portefeuille de projets sélectionnés, structurés et accompagnés par notre cabinet, ouverts à l\'investissement.',
   'A portfolio of selected, structured projects accompanied by our firm, open to investment.'],

  ['Brochure Corporate',
   'Corporate Brochure'],
  ['Téléchargez notre documentation officielle pour en savoir plus sur notre cabinet et nos services.',
   'Download our official documentation to learn more about our firm and services.'],

  /* ══ ABOUT ══ */
  ['Notre histoire',                'Our story'],
  ['Nés de l\'Afrique, tournés vers le monde', 'Born in Africa, open to the world'],
  ['AMEXPERTS AND PARTNERS est un cabinet de conseil et d\'ingénierie de projets basé à Lomé, en République du Togo. Fondé par des experts chevronnés issus de la finance internationale, de l\'ingénierie et du droit des affaires, le cabinet s\'est imposé comme un acteur de référence dans l\'accompagnement de projets d\'envergure en Afrique de l\'Ouest, Centrale et à l\'international.',
   'AMEXPERTS AND PARTNERS is an advisory and project engineering firm based in Lomé, Republic of Togo. Founded by seasoned experts in international finance, engineering and business law, the firm has established itself as a reference player in supporting major projects across West and Central Africa and internationally.'],
  ['Notre approche combine rigueur analytique, créativité stratégique et maîtrise des réalités locales pour offrir à nos clients des solutions de financement et de structuration à la hauteur de leurs ambitions.',
   'Our approach combines analytical rigour, strategic creativity and mastery of local realities to offer our clients financing and structuring solutions equal to their ambitions.'],
  ['Années d\'expérience',          'Years of experience'],
  ['Années',                        'Years'],
  ['Projets réalisés',              'Projects completed'],
  ['Pays d\'intervention',          'Countries covered'],
  ['Pays',                          'Countries'],
  ['Notre vision',                  'Our vision'],
  ['Devenir le cabinet de référence en ingénierie de projets et en structuration financière pour le développement économique de l\'Afrique, en mobilisant les meilleures expertises humaines, techniques et financières.',
   'To become the reference firm in project engineering and financial structuring for Africa\'s economic development, by mobilising the best human, technical and financial expertise.'],
  ['Notre mission',                 'Our mission'],
  ['Accompagner les entreprises, institutions et investisseurs dans la conception, la structuration et la réalisation de leurs projets, en leur offrant un conseil expert, intègre et orienté résultats.',
   'To support businesses, institutions and investors in designing, structuring and delivering their projects, offering expert, ethical and results-oriented advice.'],
  ['Ce qui nous guide',             'What guides us'],
  ['Nos valeurs fondamentales',     'Our core values'],
  ['Excellence',                    'Excellence'],
  ['Intégrité',                     'Integrity'],
  ['Innovation',                    'Innovation'],
  ['Partenariat',                   'Partnership'],
  ['Impact africain',               'African impact'],
  ['Confidentialité',               'Confidentiality'],
  ['Nous visons la plus haute qualité dans chaque mission, en mobilisant les meilleurs experts et en appliquant les standards internationaux.',
   'We aim for the highest quality in every assignment, mobilising the best experts and applying international standards.'],
  ['Notre éthique professionnelle est au cœur de toutes nos interventions. Nous traitons chaque dossier avec transparence et honnêteté.',
   'Professional ethics is at the heart of all our work. We handle every file with transparency and honesty.'],
  ['Nous développons des solutions créatives et adaptées aux défis spécifiques de chaque client, en anticipant les évolutions des marchés.',
   'We develop creative solutions tailored to each client\'s specific challenges, anticipating market developments.'],
  ['Nous construisons des relations durables avec nos clients, fondées sur la confiance, le respect mutuel et la création de valeur partagée.',
   'We build lasting relationships with our clients, based on trust, mutual respect and shared value creation.'],
  ['Nous contribuons activement au développement économique de l\'Afrique en catalysant des investissements structurants et créateurs d\'emplois.',
   'We actively contribute to Africa\'s economic development by catalysing structural investments and job creation.'],
  ['Toutes nos missions sont traitées avec la plus stricte confidentialité. La protection de vos informations stratégiques est notre priorité.',
   'All our assignments are handled with the strictest confidentiality. Protecting your strategic information is our priority.'],
  ['Notre équipe',                  'Our team'],
  ['Des experts à votre service',   'Experts at your service'],
  ['Une équipe pluridisciplinaire d\'experts en finance, droit, ingénierie et stratégie d\'entreprise au service de vos projets.',
   'A multidisciplinary team of finance, legal, engineering and business strategy experts at the service of your projects.'],
  ['Notre engagement',              'Our commitment'],
  ['Éthique & Responsabilité',      'Ethics & Responsibility'],
  ['AMEXPERTS & PARTNERS s\'engage à exercer son activité dans le strict respect des principes déontologiques et des standards internationaux en matière de lutte contre la corruption, de protection des données et de responsabilité sociale.',
   'AMEXPERTS & PARTNERS is committed to operating in strict compliance with ethical principles and international standards regarding anti-corruption, data protection and social responsibility.'],
  ['Conformité réglementaire',      'Regulatory compliance'],
  ['Protection des données',        'Data protection'],
  ['Conflits d\'intérêts',          'Conflicts of interest'],
  ['Responsabilité sociale',        'Social responsibility'],
  ['Prendre contact',               'Get in touch'],

  /* ══ INDEX — HERO ══ */
  ['Cabinet de Conseil & Ingénierie — Lomé, Togo', 'Advisory & Engineering Firm — Lomé, Togo'],
  ['L\'expertise financière au service de vos projets', 'Financial expertise at the service of your projects'],
  ['AMEXPERTS & PARTNERS accompagne entreprises, institutions et investisseurs dans la structuration, le financement et la réalisation de leurs projets en Afrique et à l\'international.',
   'AMEXPERTS & PARTNERS supports businesses, institutions and investors in structuring, financing and delivering their projects across Africa and internationally.'],
  ['Demander une consultation',     'Request a consultation'],
  ['Projets structurés',            'Structured projects'],
  ['Pays d\'intervention',          'Countries covered'],
  ['Financements mobilisés',        'Financing raised'],
  ['D\'expérience',                 'Of experience'],

  /* ══ INDEX — PARTENAIRES STRIP ══ */
  ['Nos partenaires & certifications', 'Our partners & certifications'],
  ['Banques · Fonds d\'investissement · Institutions financières · ONG',
   'Banks · Investment funds · Financial institutions · NGOs'],

  /* ══ INDEX — SERVICES ══ */
  ['Ce que nous faisons',           'What we do'],
  ['Nos domaines d\'expertise',     'Our areas of expertise'],
  ['Une offre complète de conseil et d\'ingénierie de projets pour vos ambitions en Afrique et à l\'international.',
   'A comprehensive advisory and project engineering offer for your ambitions in Africa and internationally.'],
  ['Voir tous les services',        'See all services'],
  ['Études de faisabilité, business plans, dossiers bancaires et bailleurs pour maximiser vos chances de financement.',
   'Feasibility studies, business plans, banking and donor files to maximise your financing chances.'],
  ['Recherche de financement, structuration investisseurs, levée de fonds et instruments financiers (BG, SBLC, MT760).',
   'Financing search, investor structuring, fundraising and financial instruments (BG, SBLC, MT760).'],
  ['Modélisation financière avancée, optimisation fiscale, structuration dette/equity et stratégies de levée de fonds.',
   'Advanced financial modelling, tax optimisation, debt/equity structuring and fundraising strategies.'],
  ['Évaluation d\'actifs, audit immobilier et due diligence pour sécuriser vos investissements immobiliers.',
   'Asset valuation, property audit and due diligence to secure your real estate investments.'],
  ['Structuration juridique de projets, montage de financement, due diligence et sécurisation contractuelle.',
   'Legal project structuring, financing arrangements, due diligence and contractual security.'],
  ['Finance structurée, montage de projets, gestion des risques et assurance pour renforcer vos équipes.',
   'Structured finance, project design, risk management and insurance to strengthen your teams.'],
  ['En savoir plus →',              'Learn more →'],

  /* ══ INDEX — WHY US ══ */
  ['Pourquoi nous choisir',         'Why choose us'],
  ['Un cabinet à votre mesure',     'A firm tailored to your needs'],
  ['AMEXPERTS & PARTNERS allie expertise technique, rigueur financière et connaissance du terrain africain pour livrer des solutions sur-mesure.',
   'AMEXPERTS & PARTNERS combines technical expertise, financial rigour and knowledge of the African landscape to deliver bespoke solutions.'],
  ['Ancrage africain, vision internationale', 'African roots, international vision'],
  ['Basé à Lomé, nous intervenons dans toute l\'Afrique de l\'Ouest, Centrale et à l\'international avec une connaissance fine des réalités locales.',
   'Based in Lomé, we operate throughout West and Central Africa and internationally with deep knowledge of local realities.'],
  ['Réseau d\'experts pluridisciplinaires', 'Multidisciplinary expert network'],
  ['Juristes, financiers, ingénieurs et experts sectoriels collaborent pour vous offrir un conseil intégré et cohérent.',
   'Lawyers, financiers, engineers and sector experts collaborate to offer you integrated, coherent advice.'],
  ['Accompagnement de bout en bout', 'End-to-end support'],
  ['De la conception à la mise en œuvre, nous restons à vos côtés à chaque étape du projet.',
   'From design to implementation, we stay by your side at every stage of your project.'],
  ['Éthique & confidentialité',     'Ethics & confidentiality'],
  ['Nous appliquons les plus hauts standards déontologiques. Chaque mission est traitée avec discrétion et intégrité.',
   'We apply the highest ethical standards. Every assignment is handled with discretion and integrity.'],
  ['Découvrir le cabinet',          'Discover the firm'],
  ['Notre mission est de transformer vos ambitions en projets bankables, en mobilisant les meilleures ressources humaines, techniques et financières.',
   'Our mission is to transform your ambitions into bankable projects, by mobilising the best human, technical and financial resources.'],
  ['Direction Générale',            'General Management'],
  ['Années',                        'Years'],
  ['Pays',                          'Countries'],

  /* ══ INDEX — RÉALISATIONS ══ */
  ['Nos références',                'Our references'],
  ['Réalisations récentes',         'Recent projects'],
  ['Voir toutes',                   'View all'],

  /* ══ INDEX — BLOG ══ */
  ['Actualités & Blog',             'News & Blog'],
  ['Nos dernières analyses',        'Our latest analyses'],
  ['Tout voir',                     'View all'],

  /* ══ INDEX — CTA BAND ══ */
  ['Votre projet mérite les meilleures expertises', 'Your project deserves the best expertise'],
  ['Contactez-nous pour une première consultation gratuite et confidentielle.',
   'Contact us for a first free and confidential consultation.'],
  ['Prendre rendez-vous',           'Book an appointment'],

  /* ══ INDEX — CONTACT ══ */
  ['Nous contacter',                'Contact us'],
  ['Demandez une consultation',     'Request a consultation'],
  ['Nos experts sont disponibles pour analyser votre projet et vous proposer les meilleures solutions.',
   'Our experts are available to analyse your project and offer the best solutions.'],
  ['Adresse',                       'Address'],
  ['Rue des Frères Franciscains',   'Rue des Frères Franciscains'],
  ['Lomé, République du Togo',      'Lomé, Republic of Togo'],
  ['Téléphone',                     'Phone'],
  ['Email',                         'Email'],
  ['WhatsApp Business',             'WhatsApp Business'],
  ['Discuter sur WhatsApp',         'Chat on WhatsApp'],
  ['Zone d\'intervention',          'Coverage area'],
  ['Afrique de l\'Ouest, Centrale & International', 'West & Central Africa & International'],
  /* Form labels */
  ['Nom complet *',                 'Full name *'],
  ['Organisation',                  'Organisation'],
  ['Service souhaité',              'Requested service'],
  ['Votre message *',               'Your message *'],
  /* Form placeholders */
  ['Votre nom',                     'Your name'],
  ['Société / Institution',         'Company / Institution'],
  ['Décrivez votre projet ou besoin...', 'Describe your project or need...'],
  /* Select options */
  ['— Sélectionner un service —',   '— Select a service —'],
  ['Mobilisation de ressources',    'Resource mobilization'],
  ['Expertise industrielle',        'Industrial expertise'],
  ['Expertise en assurance',        'Insurance expertise'],
  ['Ingénierie juridique et financière', 'Legal and financial engineering'],
  ['Autre',                         'Other'],
  ['Envoyer',                       'Send'],

  /* ══ FOOTER (commun) ══ */
  ['Services',                      'Services'],
  ['Navigation',                    'Navigation'],
  ['Contact',                       'Contact'],
  ['Cabinet de conseil et d\'ingénierie de projets. Lomé, Togo.',
   'Advisory and project engineering firm. Lomé, Togo.'],
  ['Cabinet de conseil et d\'ingénierie de projets. Expertises industrielles, techniques, de négoces et de représentation.',
   'Advisory and project engineering firm. Industrial, technical, trade and representation expertise.'],
  ['Lomé, Togo · Afrique de l\'Ouest & International', 'Lomé, Togo · West Africa & International'],
  ['Newsletter — Analyses & Opportunités', 'Newsletter — Analyses & Opportunities'],
  ['Votre email',                   'Your email'],
  ['Réalisations',                  'Projects'],
  ['Actualités & Blog',             'News & Blog'],
  ['Nos Partenaires',               'Our Partners'],
  ['Partenariats',                  'Partnerships'],
  ['Projets en financement',        'Projects for funding'],
  ['Brochure',                      'Brochure'],
  ['Tous droits réservés',          'All rights reserved'],

  /* ══ SERVICES PAGE ══ */
  ['Service 01', 'Service 01'], ['Service 02', 'Service 02'],
  ['Service 03', 'Service 03'], ['Service 04', 'Service 04'],
  ['Service 05', 'Service 05'], ['Service 06', 'Service 06'],
  ['Service 07', 'Service 07'], ['Service 08', 'Service 08'],
  ['Structuration financière & organisationnelle', 'Financial & organisational structuring'],
  ['Ingénierie juridique & financière',            'Legal & financial engineering'],
  ['Nous élaborons des documents stratégiques solides et convaincants pour maximiser vos chances d\'obtenir un financement ou un partenariat.',
   'We develop solid, compelling strategic documents to maximise your chances of securing financing or a partnership.'],
  ['Nous identifions et structurons les meilleures sources de financement pour vos projets, en nous appuyant sur notre réseau en Afrique et à l\'international.',
   'We identify and structure the best financing sources for your projects, leveraging our network across Africa and internationally.'],
  ['Des programmes de formation sur-mesure pour renforcer les compétences de vos équipes en finance, gestion de projets et gestion des risques.',
   'Tailored training programmes to strengthen your teams\' skills in finance, project management and risk management.'],
  ['Nous optimisons la structure financière et organisationnelle de vos projets et entreprises pour maximiser la performance et attirer les investisseurs.',
   'We optimise the financial and organisational structure of your projects and companies to maximise performance and attract investors.'],
  ['Nos experts immobiliers certifiés évaluent, auditent et analysent vos actifs immobiliers pour vous donner une image fidèle de leur valeur.',
   'Our certified real estate experts evaluate, audit and analyse your property assets to give you an accurate picture of their value.'],
  ['Nous réalisons des audits techniques et évaluations d\'unités industrielles pour vous donner une vision claire de la valeur et des risques de vos actifs.',
   'We conduct technical audits and evaluations of industrial units to give you a clear view of the value and risks of your assets.'],
  ['Nous accompagnons entreprises et institutions dans l\'analyse de leurs risques assurables et la mise en place de couvertures optimales.',
   'We support businesses and institutions in analysing their insurable risks and implementing optimal coverage.'],
  ['Combinaison stratégique du droit, de la finance et de la structuration contractuelle pour sécuriser vos opérations.',
   'Strategic combination of law, finance and contractual structuring to secure your operations.'],
  ['Un dossier qui convainc',        'A compelling file'],
  ['Nos experts rédigent des dossiers aux standards internationaux, adaptés aux exigences des bailleurs, banques et investisseurs.',
   'Our experts draft files to international standards, tailored to the requirements of donors, banks and institutional investors.'],
  ['Des financements sur mesure',    'Tailored financing'],
  ['Accédez à notre réseau d\'investisseurs institutionnels, fonds d\'investissement et banques partenaires à travers l\'Afrique et l\'Europe.',
   'Access our network of institutional investors, investment funds and partner banks across Africa and Europe.'],
  ['Montez en compétences',          'Upskill your teams'],
  ['Nos formateurs experts dispensent des programmes adaptés aux réalités du marché africain et aux standards internationaux.',
   'Our expert trainers deliver programmes adapted to African market realities and international standards.'],
  ['Optimisation financière',        'Financial optimisation'],
  ['Business plans dynamiques, cash-flow prévisionnels, TRI et VAN pour décider en toute clarté.',
   'Dynamic business plans, cash flow projections, IRR and NPV to decide with full clarity.'],
  ['Valorisation certifiée',         'Certified valuation'],
  ['Des expertises reconnues par les banques, compagnies d\'assurance et juridictions locales.',
   'Appraisals recognised by banks, insurance companies and local jurisdictions.'],
  ['Audit technique industriel',     'Industrial technical audit'],
  ['Des évaluations rigoureuses pour sécuriser vos investissements dans les actifs industriels.',
   'Rigorous assessments to secure your investments in industrial assets.'],
  ['Protégez vos actifs',            'Protect your assets'],
  ['Des stratégies de couverture adaptées à chaque type de projet et de structure d\'entreprise.',
   'Coverage strategies tailored to each type of project and company structure.'],
  ['Sécurité juridique totale',      'Total legal security'],
  ['De la structuration initiale à la signature finale : chaque aspect juridique et contractuel est sécurisé.',
   'From initial structuring to final signature: every legal and contractual aspect is secured.'],
  ['Offres complémentaires',         'Additional offers'],
  ['Services additionnels',          'Additional services'],
  ['Découvrez nos offres de services complémentaires publiées par notre équipe.',
   'Discover our complementary service offers published by our team.'],
  ['Prêt à structurer votre projet ?', 'Ready to structure your project?'],
  ['Nos experts analysent gratuitement votre dossier lors d\'un premier entretien confidentiel.',
   'Our experts analyse your file for free during a first confidential interview.'],
  ['Démarrer un projet',             'Start a project'],
  ['Parler à un expert',             'Speak to an expert'],
  ['Demander un programme',          'Request a programme'],
  ['Analyser mon projet',            'Analyse my project'],
  ['Demander une expertise',         'Request an expertise'],
  ['Commander un audit',             'Order an audit'],
  ['Évaluer mes risques',            'Assess my risks'],
  ['Consulter un expert',            'Consult an expert'],

  /* ══ BLOG PAGE ══ */
  ['À la une',                       'Featured'],
  ['Guide 2026 : Financer son projet en Afrique de l\'Ouest', '2026 Guide: Financing your project in West Africa'],
  ['Notre guide complet des instruments de financement disponibles pour les entreprises et promoteurs.',
   'Our comprehensive guide to financing instruments available for businesses and developers.'],
  ['Voir nos brochures →',           'View our brochures →'],
  ['Catégories',                     'Categories'],
  ['Finance & Structuration',        'Finance & Structuring'],
  ['Investissement',                 'Investment'],
  ['PPP & Infrastructure',           'PPP & Infrastructure'],
  ['Énergie',                        'Energy'],
  ['Immobilier',                     'Real estate'],
  ['Macroéconomie',                  'Macroeconomics'],
  ['Recevez nos analyses directement dans votre boîte mail.',
   'Receive our analyses directly in your inbox.'],
  ['Votre adresse email',            'Your email address'],
  ['S\'inscrire',                    'Subscribe'],
  ['Nous suivre',                    'Follow us'],
  ['Besoin d\'expertise ?',          'Need expertise?'],
  ['Premier entretien gratuit et confidentiel avec un de nos experts.',
   'First interview free and confidential with one of our experts.'],
  ['Prendre RDV',                    'Book an appointment'],

  /* ══ RÉALISATIONS PAGE ══ */
  ['Tous',                           'All'],
  ['Énergie',                        'Energy'],
  ['Agro-industrie',                 'Agro-industry'],
  ['Finance',                        'Finance'],
  ['Infrastructure',                 'Infrastructure'],
  ['Portfolio de projets',           'Project portfolio'],
  ['Études de cas',                  'Case studies'],
  ['Ce que disent nos clients',      'What our clients say'],
  ['Témoignages',                    'Testimonials'],
  ['Votre projet sera notre prochaine réussite', 'Your project will be our next success'],
  ['Contactez-nous pour discuter de votre projet et obtenir une analyse préliminaire gratuite.',
   'Contact us to discuss your project and get a free preliminary analysis.'],

  /* ══ PARTENAIRES PAGE ══ */
  ['Notre approche partenariale',    'Our partnership approach'],
  ['Des alliances stratégiques au service du développement', 'Strategic alliances in the service of development'],
  ['AMEXPERTS & PARTNERS croit profondément que la coopération stratégique est le levier le plus puissant pour accélérer le développement économique de l\'Afrique. Nous cultivons des partenariats solides et durables avec des acteurs complémentaires pour offrir à nos clients des solutions intégrées de haute valeur ajoutée.',
   'AMEXPERTS & PARTNERS firmly believes that strategic cooperation is the most powerful lever to accelerate Africa\'s economic development. We cultivate solid, lasting partnerships with complementary players to offer our clients integrated, high value-added solutions.'],
  ['Que vous soyez une institution financière, un cabinet d\'experts, un fonds d\'investissement ou une ONG, nous sommes ouverts à explorer des formes de collaboration adaptées à vos objectifs.',
   'Whether you are a financial institution, expert firm, investment fund or NGO, we are open to exploring forms of collaboration tailored to your objectives.'],
  ['Proposer un partenariat',        'Propose a partnership'],
  ['Formes de collaboration',        'Forms of collaboration'],
  ['Types de partenariats proposés', 'Types of partnerships offered'],
  ['Joint-Venture',                  'Joint Venture'],
  ['Création d\'entités communes pour structurer et réaliser des projets d\'envergure nécessitant des compétences pluridisciplinaires complémentaires.',
   'Creation of joint entities to structure and deliver large-scale projects requiring complementary multidisciplinary skills.'],
  ['Partenariat Public-Privé (PPP)', 'Public-Private Partnership (PPP)'],
  ['Montage et accompagnement de PPP pour le développement d\'infrastructures, de services publics délégués et d\'équipements collectifs.',
   'Structuring and supporting PPPs for infrastructure development, delegated public services and collective facilities.'],
  ['Memorandum of Understanding',    'Memorandum of Understanding'],
  ['Formalisation d\'accords de coopération, d\'échanges de compétences et de référencement mutuel avec des partenaires stratégiques.',
   'Formalisation of cooperation agreements, skills exchanges and mutual referrals with strategic partners.'],
  ['Accords techniques',             'Technical agreements'],
  ['Collaboration sur des expertises techniques complémentaires : ingénierie, audit, conseil juridique, expertise sectorielle.',
   'Collaboration on complementary technical expertise: engineering, audit, legal advice, sector expertise.'],
  ['Accords financiers',             'Financial agreements'],
  ['Structuration de co-financement, partage de risques et mise en commun de capacités de mobilisation financière.',
   'Co-financing structuring, risk sharing and pooling of financial mobilisation capacity.'],
  ['Réseaux d\'experts',             'Expert networks'],
  ['Intégration dans notre réseau d\'experts référencés pour intervenir en appui sur des missions ponctuelles ou récurrentes.',
   'Integration into our network of referenced experts to intervene in support of one-off or recurring assignments.'],
  ['Notre écosystème',               'Our ecosystem'],
  ['Partenaires & Collaborateurs',   'Partners & Collaborators'],
  ['Nous collaborons avec un réseau sélectionné d\'institutions et d\'experts partageant nos valeurs d\'excellence et d\'intégrité.',
   'We collaborate with a selected network of institutions and experts sharing our values of excellence and integrity.'],
  ['Institutions Bancaires',         'Banking Institutions'],
  ['Partenariats avec des banques commerciales et de développement pour faciliter l\'accès au financement de nos clients.',
   'Partnerships with commercial and development banks to facilitate access to financing for our clients.'],
  ['Banques, fonds, assureurs, microfinance', 'Banks, funds, insurers, microfinance'],
  ['Fonds d\'Investissement',        'Investment Funds'],
  ['Réseau de fonds africains et internationaux spécialisés dans les économies émergentes et les projets d\'infrastructure.',
   'Network of African and international funds specialised in emerging economies and infrastructure projects.'],
  ['PE, VC, family offices, business angels', 'PE, VC, family offices, business angels'],
  ['Cabinets Juridiques',            'Law Firms'],
  ['Partenariats avec des cabinets d\'avocats spécialisés en droit OHADA, droit des affaires et droit international.',
   'Partnerships with law firms specialised in OHADA law, business law and international law.'],
  ['Ingénierie, audit, juridique, conseil', 'Engineering, audit, legal, advisory'],
  ['Bureaux d\'Ingénierie',          'Engineering Offices'],
  ['Collaboration avec des bureaux d\'études techniques pour les expertises industrielles et les audits d\'infrastructure.',
   'Collaboration with technical engineering firms for industrial expertise and infrastructure audits.'],
  ['ONG & Coopération',              'NGOs & Cooperation'],
  ['Partenariats avec des organisations de développement pour accéder aux financements concessionnels et aux appuis techniques.',
   'Partnerships with development organisations to access concessional financing and technical support.'],
  ['Développement, coopération, aide technique', 'Development, cooperation, technical assistance'],
  ['Compagnies d\'Assurance',        'Insurance Companies'],
  ['Réseau d\'assureurs partenaires pour la couverture des risques de projets et la mise en place de garanties bancaires.',
   'Network of partner insurers for project risk coverage and the implementation of bank guarantees.'],
  ['Nous rejoindre',                 'Join us'],
  ['Proposer un partenariat',        'Propose a partnership'],
  ['Vous souhaitez collaborer avec AMEXPERTS & PARTNERS ? Décrivez votre organisation et votre proposition de valeur.',
   'Would you like to collaborate with AMEXPERTS & PARTNERS? Describe your organisation and your value proposition.'],
  ['Nom / Organisation *',           'Name / Organisation *'],
  ['Nom de votre organisation',      'Your organisation name'],
  ['contact@organisation.com',       'contact@organisation.com'],
  ['Type de partenariat',            'Partnership type'],
  ['Message / Proposition *',        'Message / Proposal *'],
  ['Décrivez votre proposition de collaboration...', 'Describe your collaboration proposal...'],
  ['Envoyer la proposition',         'Send the proposal'],

  /* ══ PROJETS FINANCEMENT PAGE ══ */
  ['Les projets présentés sont accompagnés par AMEXPERTS & PARTNERS dans leur processus de structuration et de recherche de financement. Toute expression d\'intérêt sera traitée de manière confidentielle. Les informations détaillées sont transmises aux investisseurs qualifiés sous accord de confidentialité.',
   'The projects presented are supported by AMEXPERTS & PARTNERS in their structuring and financing process. Any expression of interest will be treated confidentially. Detailed information is provided to qualified investors under a non-disclosure agreement.'],
  ['Vous avez un projet ?',          'Have a project?'],
  ['Soumettre un projet à financer', 'Submit a project for financing'],
  ['Vous êtes porteur d\'un projet et recherchez un financement ? Soumettez-le à notre équipe pour une analyse préliminaire gratuite.',
   'Are you a project developer seeking financing? Submit it to our team for a free preliminary analysis.'],
  ['Porteur du projet *',            'Project developer *'],
  ['Nom / Société',                  'Name / Company'],
  ['Secteur',                        'Sector'],
  ['Agro-industrie',                 'Agro-industry'],
  ['Énergie',                        'Energy'],
  ['Infrastructure',                 'Infrastructure'],
  ['Industrie',                      'Industry'],
  ['Titre du projet *',              'Project title *'],
  ['Titre de votre projet',          'Your project title'],
  ['Montant recherché',              'Amount sought'],
  ['Ex: 5 000 000 €',               'Ex: 5,000,000 €'],
  ['Description du projet *',        'Project description *'],
  ['Décrivez votre projet, son stade d\'avancement et vos besoins de financement...',
   'Describe your project, its stage of development and your financing needs...'],
  ['Soumettre mon projet',           'Submit my project'],
  ['Exprimer mon intérêt',           'Express my interest'],
  ['Discuter avec un expert',        'Discuss with an expert'],

  /* ══ BROCHURE PAGE ══ */
  ['Notre documentation officielle', 'Our official documentation'],
  ['Retrouvez l\'ensemble de notre documentation institutionnelle pour vous informer sur nos expertises, nos références et nos offres de service.',
   'Find all our institutional documentation to learn about our expertise, references and service offerings.'],
  ['Les documents sont transmis par email sur demande. Cliquez sur "Demander" pour envoyer une requête à notre équipe.',
   'Documents are sent by email on request. Click "Request" to send a query to our team.'],
  ['Brochure Générale',              'General Brochure'],
  ['Présentation Services',          'Services Presentation'],
  ['Dossier de Références',          'References File'],
  ['Guide : Financer son projet en Afrique', 'Guide: Financing your project in Africa'],
  ['Télécharger',                    'Download'],
  ['Demander',                       'Request'],
  ['Contact direct',                 'Direct contact'],
  ['Besoin d\'informations supplémentaires ?', 'Need more information?'],
  ['Notre équipe est disponible pour répondre à toutes vos questions et vous fournir les documents dont vous avez besoin.',
   'Our team is available to answer all your questions and provide the documents you need.'],
  ['Envoyer un email',               'Send an email'],
  ['Prendre RDV',                    'Book an appointment'],
];

/* ── Index accéléré FR→EN et EN→FR ─────────────────────────── */
var mapFR = {}, mapEN = {};
T.forEach(function(p){ mapFR[norm(p[0])] = p[1]; mapEN[norm(p[1])] = p[0]; });

function norm(s){ return s.replace(/\s+/g,' ').trim(); }

/* ── Nœuds à ignorer ────────────────────────────────────────── */
var SKIP = {SCRIPT:1, STYLE:1, NOSCRIPT:1, CODE:1, PRE:1, INPUT:1, TEXTAREA:1, SELECT:1};

/* ── Traduction d'un nœud texte ─────────────────────────────── */
function translateNode(node, map){
  var t = node.nodeValue;
  if(!t || !t.trim()) return;
  var k = norm(t);
  if(map[k]){ node.nodeValue = t.replace(norm(t), map[k]); return; }
  /* Essai partiel : si le texte contient une clé connue */
  Object.keys(map).forEach(function(fr){
    if(t.indexOf(fr)!==-1){ node.nodeValue = t.split(fr).join(map[fr]); }
  });
}

/* ── Parcours récursif du DOM ───────────────────────────────── */
function walk(el, map){
  if(!el) return;
  if(SKIP[el.nodeName]) return;
  el.childNodes.forEach(function(c){
    if(c.nodeType===3) translateNode(c, map);
    else if(c.nodeType===1) walk(c, map);
  });
}

/* ── Traduction des attributs (placeholder, title, alt) ─────── */
function translateAttrs(map){
  document.querySelectorAll('[placeholder]').forEach(function(el){
    var k = norm(el.placeholder);
    if(map[k]) el.placeholder = map[k];
  });
  document.querySelectorAll('option').forEach(function(el){
    var k = norm(el.textContent);
    if(map[k]) el.textContent = map[k];
  });
  document.querySelectorAll('title').forEach(function(el){
    var t = el.textContent;
    Object.keys(map).forEach(function(fr){
      if(t.indexOf(fr)!==-1) el.textContent = t.split(fr).join(map[fr]);
    });
  });
}

/* ── Boutons langue ─────────────────────────────────────────── */
function setActiveLangBtn(l){
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.classList.toggle('active', b.dataset.lang===l);
  });
}

/* ── Appliquer la langue ────────────────────────────────────── */
var currentLang = 'fr';

function applyLang(l){
  var map = (l==='en') ? mapFR : mapEN;
  /* Si on revient au FR depuis EN, on repasse EN→FR */
  if(l===currentLang) return;
  currentLang = l;
  try{ localStorage.setItem('amp_lang', l); }catch(e){}
  document.documentElement.lang = l;
  walk(document.body, map);
  translateAttrs(map);
  setActiveLangBtn(l);
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function(){
  var saved = 'fr';
  try{ saved = localStorage.getItem('amp_lang')||'fr'; }catch(e){}

  /* Navbar toggle mobile */
  var tog = document.getElementById('navToggle');
  var lnk = document.getElementById('navLinks');
  if(tog && lnk){
    tog.addEventListener('click', function(){ lnk.classList.toggle('open'); });
    lnk.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ lnk.classList.remove('open'); });
    });
  }

  /* Boutons langue */
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.addEventListener('click', function(){ applyLang(this.dataset.lang); });
  });

  setActiveLangBtn(saved);
  if(saved==='en') applyLang('en');
});

window.applyLang = applyLang;
})();
