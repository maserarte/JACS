document.addEventListener('DOMContentLoaded', function() {
  const langBtn = document.getElementById('language-switch');
  let currentLang = 'es';

  const translations = {
    en: {
      introPortofolio1: 'I am a multifaceted creative with a passion for diverse disciplines, including advertising, design, front-end development, video editing, and TV production.',
      introPortofolio2: 'My expertise lies in creating engaging visual narratives and empowering brands and individuals to forge stronger connections with their audience.',
      introPortofolio3: 'I seamlessly blend design and code to develop interactive and intuitive websites.',
      introPortofolio4: 'Additionally, I possess strong video editing skills and a keen understanding of bringing concepts to life on screen',
      nhHotelesTitle: 'Giving Voice to NH Hotels: Advertising Creativity with Essence.',
      nhHotelesDescription: 'A memorable advertising campaign was created for NH Hotels, capturing the essence of their brand and emotionally connecting with guests through an innovative concept.',
      sesionesTitle: 'Sesiones, a program recognized for its artistic and musical proposal',
      sesionesDescription: 'In Sesiones con Alejandro Franco, I was part of the production team in videography, video editing, and digital management, directly contributing to the visual experience and audience reach.',
      picnicTitle: 'Production and Web for "Picnic"',
      picnicDescription: 'I contributed to the production of the TV show "Picnic", doing video editing and managing the web part associated with the show.',
      telefonicaTitle: 'Telefónica Group: Connecting Brands through Strategic Events.',
      telefonicaDescription: 'Key events were designed and produced, creating the perfect stage for the presentation of their sponsorships and the strengthening of strategic alliances.',
      amadeusTitle: 'Amadeus: Creative Drive and Total Support',
      amadeusDescription: 'Your 360° ally. We integrate advertising, marketing, production, and technological support to enhance your vision as a "technology partner".',
      takedaTitle: 'Takeda Mobile App: Sales Catalog',
      takedaDescription: 'I programmed a mobile app for Takeda\'s sales force. This digital tool centralizes the complete drug catalog, providing sellers with instant access to details such as formula, therapeutic indications, and clinical study results, optimizing their field work.',
      condusefTitle: 'CONDUSEF Mobile App: Unified Complaints',
      condusefDescription: 'For CONDUSEF, I developed a mobile app that consolidates four complaint management systems into a single intuitive platform. This project simplifies the process for users to file all types of complaints from their mobile device.',
      revistaDoritosTitle: 'Editorial Design: "Doritos Magazine" (Sabritas)',
      revistaDoritosDescription: 'I was responsible for designing "La revista Doritos" an internal publication for Sabritas. This magazine served as an essential communication channel, informing staff about company news, product updates, announcements, and offering engaging content for their distraction and entertainment.',
      santillanaTitle: 'Educational Platform Development - Editorial Santillana',
      santillanaDescription: 'I collaborated on the development of Editorial Santillana\'s primary education platform. I was responsible for defining the art and visual proposal, and I worked on the technical implementation as part of the frontend programming team.',
      sfpTitle: 'Frontend Developer - Ministry of Public Administration',
      sfpDescription: 'As a Frontend Developer at the SFP for ten years, I was responsible for the conception of internal development tools, the layout and programming of user interfaces, and ensuring the accurate application of the governmental institutional branding within all systems.',
      serviceTitle: 'Services',
      serviceDescription1: 'Graphic Design',
      serviceDescription2: 'Web Development',
      serviceDescription3: 'Video Mobile Applications',
      serviceDescription4: 'Video/Editing',
      serviceDescription5: 'Digital Production',
    }
    // Puedes agregar más idiomas si lo deseas
  };

  langBtn.addEventListener('click', function() {
    if (currentLang === 'es') {
      document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.getAttribute('data-translate-key');
        if (translations.en[key]) {
          el.textContent = translations.en[key];
        }
      });
      langBtn.textContent = 'Español';
      currentLang = 'en';
    } else {
      // Recarga la página para volver al español original del HTML
      window.location.reload();
    }
  });
});