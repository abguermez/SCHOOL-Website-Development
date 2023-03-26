// Navbar on scroll
window.addEventListener('scroll', ()=>{
    const navMenu = document.querySelector('.nav__menu');
    navMenu.classList.toggle('scroll', window.scrollY > 10);
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 10);
})


// Afficher Nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#op-menu-btn");
const CloseBtn = document.querySelector("#cl-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex"; 
    CloseBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
// Fermer Nav menu
const  closeNav = () => {
    menu.style.display = "none"; 
    CloseBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

CloseBtn.addEventListener("click", closeNav)



// Translate 

const translations = {
    fr: {
        home: "Accueil",
        about: "Présentation",
        contact:"Contact",
        parcours:"Choisir le meilleur choix pour votre parcours",
        formation:"Groupe scolaire AL KARAMA vous offre une formation spéciale pour votre parcours avec un programme polyvalent.",
        contactn:"Préinscription",


        subjects:"Présentation",
        subjects_disc:"Le Groupe scolaire AL Karama enseigne le programme du Ministère de l’éducation nationale Marocain. Notre école, située à Tiznit, accueille vos enfants en maternelle, au primaire, au collège et au lycée dans un espace de vie  qui a été conçu avec un souci d’équilibre entre l’éducation, l’art, le sport, la culture et le respect de l’environnement.",
        subjects_inf:"Plus d'informations",

        sub_1:"Objectif ",
        sub_disc_1:"faire acquérir des capacités à s'exprimer, à écouter et animer un groupe. évaluer la capacité des personnes en formation à exercer l'activité d'accueil informatif.        ",
        sub_2:"Pédagogie",
        sub_disc_2:" L'objectif pédagogique est la formulation explicite de ce que l'enseignant cherche à faire atteindre à ses élèves pendant l'action de formation. Cet objectif s'exprime en terme de performance.",
        sub_3:"Activités",
        sub_disc_3:"Activité pratiquée, dans l'école ou hors de l'école, sous la responsabilité des enseignants, conformément aux instructions et aux programmes officiels.",
        sub_4:"Equipements",
        sub_disc_4:"Le groupe scolaire AL KARAMA met à disposition une série d’équipements de qualité et de sécurité, pour les accompagner dans leur enseignement et leurs activités.",


        etabs:"établissement",

        etabs_tit_1:"École",
        etabs_disc_1:"notre structure offre un cadre agréable et ludique à vos enfants et assure leur évolution jusqu’à l’obtention de leur baccalauréat au sein du même groupe scolaire.",
        etabs_tit_2:"Les équipements",
        etabs_disc_2:" Notre école située à Tiznit, accueille vos enfants en maternelle, au primaire, au collège et au lycée dans un espace de vie qui a été conçu avec un souci d’équilibre entre l’éducation, l’art, le sport, la culture et le respect de l’environnement.",
        etabs_tit_3:"Infrastructure",
        etabs_disc_3:"L’épanouissement de votre enfant est au cœur du projet de notre groupe, et c’est dans cette optique que notre école a été fondée, avec des espaces de développement et de vie uniques à Tiznit.",


        Comm:"Communiqués",
        testimonial_name:"Directeur pédagogique M.Rachid al Baz",
        testimonial_job:"Directeur",
        testimonial_disc_1:"En ouvrant les portes du AL KARAMA, nous espérons à Veiller sur le climat scolaire, pour permette à chacun de se construire en sécurité.Etre aux aguets pour répondre aux besoins de tous, que chacun soit accueilli et reconnu comme il le mérite.Et que tous ensemble, nous soyons unis par une pastorale intégrale et rayonnante. Bonne année à tous !",
        testimonial_disc_2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ea facilis dolore doloribus libero molestiae blanditiis eaque quas odio, maxime eos nihil consequuntur molestias voluptatem quis quo. Quam, doloribus perferendis.",


        footer__1:"À propos de nous",
        footer__1_loc:"Rue boutini num 307 - TIZNIT",
        footer__1_num1:" 06 61 38 19 85 / 06 43 46 60 96",
        footer__1_num2:"08 08 62 47 85",

        footer__2:"Nos cycle",
        footer2__mat:"Maternelle",
        footer2__pri:"Primaire",
        footer2__col:"Collége",
        footer2__lyc:"Lycée",

        footer__3:"LES ÉCOLES AL KARAMA",
        footer3__dic:"Nous sommes une école citoyenne, attachée à son identité nationale et ouverte sur le monde. Nous nous distinguons par un projet éducatif innovant, inspiré de programmes internationaux.",
    
    
    
        about_titre:"Groupe scolaire Al Karama",
        about_disc:"L'Institution Al KARAMA s'engage pour permettre à ses enfants d'intégrer un monde de plus en plus complexe et compétitif. Elle leur apporte des atouts pédagogiques, didactiques et humains pour faire face aux défis de demain. Ainsi elle développe son enseignement selon une vision pédagogique claire et évolutive. En fait, trois composantes sous-tendent sa stratégie : une éducation constructive, un enseignement d'excellence et un esprit d'innovation. Ainsi, l'Institution AL KARAMA s'est fait un devoir de rappeler aux jeunes les valeurs de respect, de solidarité et de citoyenneté. Dans un monde de plus en plus sélectif, l'Institution développe une éducation moderne, posant aux étudiants les bases des compétences requises. Dans un monde de plus en plus ouvert aux autres, Al KARAMA cultive l'esprit de tolérance en inculquant les langues et cultures étrangères aux générations futures. Cette vision émane d'un dialogue permanent entre les différents acteurs éducatifs : les corps administratifs et pédagogiques, les parents d'élèves et les élèves eux-mêmes. le Groupe Scolaire Al KARAMA à moyen terme comme objectif de s'imposer comme un vecteur d'éducation, de formation et d'enseignement dans l'espace éducatif du sud du royaume. Limitant dans un premier temps son champ d'action à l'enseignement général où elle réussit à se construire une image de marque positive. Avec notre devise, Succès, Valeurs, Innovation. Nous marcherons main dans la main afin de relever les défis de nos enfants d'aujourd'hui pour éclairer leurs chemins demain.",


        contact_title:"Contactez-nous",
        contact_disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque nemo excepturi repellendus, distinctio atque voluptatibus eveniet similique quod esse.",
        contact_env:"ENVOYER MA DEMANDE",
    },
    
    ar: {
        home: "الصفـحة الرئـسية",
        about: "تقديم",
        contact:"اتـصل بـنا",
        parcours:"الخيار الأمثـل  لمســارك الدراســي",
        formation:"مجمـوعة مدارس الكـرامة تقدم لكم تكـوين متـكامل لمساركـم الدراسـي مع بـرنامج متنوع",
        contactn:" التســجيل المسبــــق",
        

        subjects:"المــواد",
        subjects_disc:"تقوم مجموعة مدارس الكرامة بتدريس برنامج وزارة التربية الوطنية المغربية. ترحب مدرستنا ، الواقعة في تزنيت ، بأطفالك في رياض الأطفال والمدارس الابتدائية والمتوسطة والثانوية في مساحة معيشية مصممة مع الاهتمام بالتوازن بين التعليم والفن والرياضة والثقافة واحترام البيئة.",
        subjects_inf:"المـزيد من المعـلومات",

        sub_1:"الأهــداف",
        sub_disc_1:"اكـــتســاب القـــدرة على التعــبير عن الذات والاستماع وتحريك المجموعة. تقييم قدرة المتدربين على القيام بنشاط استقبال المعلومات.",
        sub_2:"الـبـيداغـوجيــا",
        sub_disc_2:"الهدف التربوي هو الصياغة الواضحة لما يسعى المعلم إلى تحقيقه لطلابه أثناء إجراء التدريب. يتم التعبير عن هذا الهدف من حيث الأداء.",
        sub_3:"أنـشـطـــة",
        sub_disc_3:"النشاط الذي ينفذ داخل المدرسة أو خارجها تحت مسئولية المعلمين وفق التعليمات والبرامج الرسمية.",
        sub_4:"المؤهــلات",
        sub_disc_4:"توفر مجموعة مدارس الكرامة سلسلة من معدات الجودة والسلامة لدعمهم في التدريس والأنشطة.",


        etabs:"المـؤسسـة",

        etabs_tit_1:"المدرسـة",
        etabs_disc_1:"يوفر هيكلنا بيئة ممتعة ومرحة لأطفالك ويضمن تطورهم حتى يحصلوا على شهادة البكالوريا في نفس المجموعة المدرسية.",
        etabs_tit_2:"المؤهــلات",
        etabs_disc_2:"مدرستنا الواقعة في تزنيت ترحب بأطفالك في رياض الأطفال والمدارس الابتدائية والمتوسطة والثانوية في مساحة معيشية مصممة مع الاهتمام بالتوازن بين التعليم والفن والرياضة والثقافة واحترام البيئة.",
        etabs_tit_3:"البنـيات",
        etabs_disc_3:"يعتبر تطور طفلك في صميم مشروع مجموعتنا ، ومن هذا المنطلق ، تم تأسيس مدرستنا ، مع تطوير فريد ومساحات معيشية في تزنيت.",


        Comm:"التــواصــــــل",
        testimonial_name:"المدير التربوي ذ راشد الباز",
        testimonial_job:"المدير التربوي",
        testimonial_disc_1:"من خلال فتح أبواب الكرامة ، نأمل في مراقبة المناخ المدرسي  ، للسماح للجميع ببناء أنفسهم بأمان. كن على اطلاع لتلبية احتياجات الجميع ، بحيث يتم الترحيب بالجميع والاعتراف بهم على النحو الذي يستحقونه. وأننا جميعًا متحدون برعوية متكاملة ومتألقة. سنة جديدة سعيدة للجميع !",        


        footer__1:"حـول المؤسـسة",
        footer__1_loc:"طريــق بوتـيني رقم 307 - تيزنـيت",
        footer__1_num1:" 96 60 46 43 06 / 85 19 38 61 06",
        footer__1_num2:"85 47 62 08 08",
        footer__2:"المستـويات",
        footer2__mat:"التمـهيدي",
        footer2__pri:"الإبتـدائي",
        footer2__col:"الإعـدادي",
        footer2__lyc:"الثـانوي",

        footer__3:"مجـموعة مدارس الكـرامة",
        footer3__dic:"نحن مدرسة مدنية مرتبطة بهويتها الوطنية ومنفتحة على العالم. نميز أنفسنا بمشروع تعليمي مبتكر مستوحى من البرامج العالمية.        ",
        
        
        
        about_titre:"مجـموعة مدارس الكـرامة",
        about_disc:"تلتزم مؤسسة الكرامة بتمكين أطفالها من الاندماج في عالم يزداد تعقيدًا وتنافسية. يوفر لهم الأصول التربوية والتعليمية والبشرية لمواجهة تحديات الغد. وهكذا تطور تعليمها وفق رؤية تربوية واضحة ومتطورة. في الواقع ، هناك ثلاثة مكونات تكمن وراء استراتيجيتها: التعليم البناء ، والتميز في التدريس ، وروح الابتكار. وهكذا ، جعلت مؤسسة الكرامة من واجبها تذكير الشباب بقيم الاحترام والتضامن والمواطنة. في عالم انتقائي بشكل متزايد ، تعمل المؤسسة على تطوير تعليم حديث ، ووضع أسس المهارات المطلوبة للطلاب. في عالم منفتح بشكل متزايد على الآخرين ، تزرع الكرامة روح التسامح من خلال غرس اللغات والثقافات الأجنبية في الأجيال القادمة. تنبثق هذه الرؤية من حوار دائم بين مختلف الفاعلين التربويين: الهيئات الإدارية والتعليمية ، آباء التلاميذ والتلاميذ أنفسهم. مجموعة مدارس الكرامة على المدى المتوسط ​​كهدف لترسيخ نفسها كموجه للتعليم والتدريب والتدريس في المجال التعليمي في جنوب المملكة. في البداية ، اقتصرت مجال عملها على التعليم العام حيث تمكنت من بناء صورة إيجابية للعلامة التجارية. بشعارنا النجاح والقيم والابتكار. سوف نسير يدا بيد لمواجهة تحديات أطفالنا اليوم لننير مساراتهم غدا.",


        contact_title:"حـول المؤسـسة",
        contact_disc:"نحن مدرسة مدنية مرتبطة بهويتها الوطنية ومنفتحة على العالم. نميز أنفسنا بمشروع تعليمي مبتكر مستوحى من البرامج العالمية.        ",
        contact_env:"إرســــال الطلــب",
    }
}



const languageSelector = document.querySelector('select');

languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-i18n');
        element.textContent = translations[language][translationKey];
    });
    if (language == 'ar') {
        document.dir = 'rtl';
    }
    else {
        document.dir = 'ltr';
    }
};

// Save the selected language to local storage when the language changes
languageSelector.addEventListener('change', (event) => {
    localStorage.setItem('language', event.target.value);
    setLanguage(event.target.value);
  });
  
  // Set the initial language when the page loads
  const initialLanguage = localStorage.getItem('language') || 'fr';
  languageSelector.value = initialLanguage;
  setLanguage(initialLanguage);
