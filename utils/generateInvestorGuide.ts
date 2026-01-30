import { jsPDF } from 'jspdf';

export const generateInvestorGuide = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;

  // Couleurs de la charte
  const blueInstitutional = [0, 51, 102]; // #003366
  const goldInstitutional = [212, 175, 55]; // #D4AF37
  const emeraldInstitutional = [80, 200, 120]; // #50C878

  // Page de couverture
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  
  // Logo (texte stylisé)
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(40);
  doc.setFont('helvetica', 'bold');
  doc.text('PRIORITÉS', pageWidth / 2, 80, { align: 'center' });
  
  doc.setTextColor(...goldInstitutional);
  doc.text('RDC', pageWidth / 2, 100, { align: 'center' });
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.text('PORTAIL OFFICIEL DU DÉVELOPPEMENT', pageWidth / 2, 115, { align: 'center' });
  
  // Titre du guide
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text('GUIDE DE', pageWidth / 2, 150, { align: 'center' });
  doc.text("L'INVESTISSEUR", pageWidth / 2, 165, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('République Démocratique du Congo', pageWidth / 2, 185, { align: 'center' });
  doc.text('Vision 2030', pageWidth / 2, 195, { align: 'center' });
  
  // Année
  doc.setFontSize(12);
  doc.setTextColor(...goldInstitutional);
  doc.text('2026', pageWidth / 2, 270, { align: 'center' });

  // Page 2 - Table des matières
  doc.addPage();
  yPosition = 20;
  
  doc.setTextColor(...blueInstitutional);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('TABLE DES MATIÈRES', 20, yPosition);
  
  yPosition += 20;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  
  const tableOfContents = [
    '1. Pourquoi Investir en RDC .................................................. 3',
    '2. Secteurs Prioritaires ........................................................ 5',
    '3. Cadre Légal et Réglementaire .......................................... 8',
    '4. Avantages Fiscaux ........................................................... 10',
    '5. Processus d\'Investissement ............................................. 12',
    '6. Zones Économiques Spéciales ......................................... 14',
    '7. Contacts et Ressources ................................................... 16'
  ];
  
  tableOfContents.forEach((item) => {
    doc.text(item, 25, yPosition);
    yPosition += 10;
  });

  // Page 3 - Pourquoi Investir en RDC
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, 0, pageWidth, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('1. POURQUOI INVESTIR EN RDC', 20, 10);
  
  yPosition = 30;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  
  const whyInvest = [
    'La République Démocratique du Congo offre des opportunités d\'investissement',
    'exceptionnelles dans l\'une des économies les plus prometteuses d\'Afrique.',
    '',
    'RESSOURCES NATURELLES EXCEPTIONNELLES',
    '• 80 millions d\'hectares de terres arables',
    '• 60% des réserves mondiales de cobalt',
    '• 10% des réserves mondiales de cuivre',
    '• Plus grand potentiel hydroélectrique d\'Afrique (100,000 MW)',
    '• Forêt tropicale du bassin du Congo (60 millions d\'hectares)',
    '',
    'MARCHÉ EN CROISSANCE',
    '• Population de 100+ millions d\'habitants',
    '• Croissance démographique de 3.2% par an',
    '• Classe moyenne en expansion rapide',
    '• Position stratégique au cœur de l\'Afrique',
    '• Accès à 14 pays frontaliers',
    '',
    'POTENTIEL ÉCONOMIQUE',
    '• PIB en croissance constante',
    '• Secteur privé dynamique',
    '• Réformes économiques en cours',
    '• Digitalisation accélérée'
  ];
  
  whyInvest.forEach((line) => {
    if (line.startsWith('•')) {
      doc.setFont('helvetica', 'normal');
      doc.text(line, 25, yPosition);
    } else if (line === '') {
      yPosition += 5;
      return;
    } else if (line === line.toUpperCase() && line.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...goldInstitutional);
      doc.text(line, 20, yPosition);
      doc.setTextColor(0, 0, 0);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.text(line, 20, yPosition);
    }
    yPosition += 7;
  });

  // Page 4 - Statistiques clés
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(...emeraldInstitutional);
  doc.rect(0, 0, pageWidth, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('STATISTIQUES CLÉS', 20, 10);
  
  yPosition = 40;
  
  // Boîtes de statistiques
  const stats = [
    { label: 'Population', value: '100M+', color: blueInstitutional },
    { label: 'Superficie', value: '2.3M km²', color: emeraldInstitutional },
    { label: 'Croissance PIB', value: '6.2%', color: goldInstitutional },
    { label: 'Investissements', value: '$12.4B', color: blueInstitutional }
  ];
  
  let xPos = 20;
  stats.forEach((stat, index) => {
    doc.setFillColor(...stat.color);
    doc.roundedRect(xPos, yPosition, 40, 30, 3, 3, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(stat.value, xPos + 20, yPosition + 15, { align: 'center' });
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(stat.label, xPos + 20, yPosition + 23, { align: 'center' });
    
    xPos += 45;
  });

  // Page 5 - Secteurs Prioritaires
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, 0, pageWidth, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('2. SECTEURS PRIORITAIRES', 20, 10);
  
  yPosition = 30;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  
  const sectors = [
    {
      name: 'ÉNERGIE',
      roi: 'ROI: 15-25%',
      description: 'Hydroélectricité, solaire, éolien. Potentiel de 100,000 MW.',
      opportunities: [
        '• Barrage d\'Inga III (11,000 MW)',
        '• Centrales solaires dans les provinces',
        '• Mini-barrages hydroélectriques',
        '• Distribution et transport d\'énergie'
      ]
    },
    {
      name: 'INFRASTRUCTURE',
      roi: 'ROI: 12-20%',
      description: 'Routes, ponts, ports, aéroports. Besoins massifs.',
      opportunities: [
        '• 15,000 km de routes à réhabiliter',
        '• Port en eau profonde de Banana',
        '• Modernisation des aéroports',
        '• Ponts et ouvrages d\'art'
      ]
    },
    {
      name: 'MINES & MÉTAUX',
      roi: 'ROI: 18-30%',
      description: 'Cobalt, cuivre, or, diamants. Ressources abondantes.',
      opportunities: [
        '• Transformation locale des minerais',
        '• Raffinage et métallurgie',
        '• Exploration minière',
        '• Technologies minières vertes'
      ]
    }
  ];
  
  sectors.forEach((sector) => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...goldInstitutional);
    doc.setFontSize(14);
    doc.text(sector.name, 20, yPosition);
    
    doc.setTextColor(...emeraldInstitutional);
    doc.setFontSize(10);
    doc.text(sector.roi, 150, yPosition);
    
    yPosition += 8;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(sector.description, 20, yPosition);
    
    yPosition += 8;
    sector.opportunities.forEach((opp) => {
      doc.setFontSize(10);
      doc.text(opp, 25, yPosition);
      yPosition += 6;
    });
    
    yPosition += 5;
  });

  // Page 6 - Cadre Légal
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, 0, pageWidth, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('3. CADRE LÉGAL ET RÉGLEMENTAIRE', 20, 10);
  
  yPosition = 30;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  
  const legalFramework = [
    'CODE DES INVESTISSEMENTS',
    'Le Code des Investissements de la RDC offre un cadre attractif et sécurisé',
    'pour les investisseurs nationaux et étrangers.',
    '',
    'Garanties offertes:',
    '• Liberté de transfert des capitaux et dividendes',
    '• Protection contre l\'expropriation arbitraire',
    '• Égalité de traitement entre investisseurs',
    '• Règlement des différends par arbitrage international',
    '',
    'CONVENTIONS INTERNATIONALES',
    '• Membre de l\'OHADA (Organisation pour l\'Harmonisation en Afrique',
    '  du Droit des Affaires)',
    '• Conventions bilatérales d\'investissement avec 30+ pays',
    '• Membre du CIRDI (Centre International de Règlement des Différends)',
    '• Adhésion à la MIGA (Agence Multilatérale de Garantie)',
    '',
    'ZONES ÉCONOMIQUES SPÉCIALES',
    'Cadre juridique spécifique avec avantages renforcés pour les ZES.'
  ];
  
  legalFramework.forEach((line) => {
    if (line.startsWith('•')) {
      doc.setFont('helvetica', 'normal');
      doc.text(line, 25, yPosition);
    } else if (line === '') {
      yPosition += 5;
      return;
    } else if (line === line.toUpperCase() && line.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...goldInstitutional);
      doc.text(line, 20, yPosition);
      doc.setTextColor(0, 0, 0);
    } else {
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(line, 170);
      doc.text(lines, 20, yPosition);
      yPosition += (lines.length - 1) * 7;
    }
    yPosition += 7;
  });

  // Page 7 - Avantages Fiscaux
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, 0, pageWidth, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('4. AVANTAGES FISCAUX', 20, 10);
  
  yPosition = 30;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  
  const taxBenefits = [
    'EXONÉRATIONS FISCALES',
    'Selon le secteur et la taille de l\'investissement:',
    '',
    '• Exonération de droits de douane sur équipements',
    '• Réduction d\'impôt sur les sociétés (jusqu\'à 5 ans)',
    '• Exonération de TVA sur importations d\'équipements',
    '• Crédit d\'impôt pour formation du personnel local',
    '',
    'RÉGIMES PRÉFÉRENTIELS',
    '',
    'Investissements > $10M:',
    '• Exonération totale pendant 3 ans',
    '• Réduction de 50% pendant 2 ans supplémentaires',
    '',
    'Investissements > $50M:',
    '• Exonération totale pendant 5 ans',
    '• Réduction de 50% pendant 3 ans supplémentaires',
    '',
    'ZONES ÉCONOMIQUES SPÉCIALES',
    '• Exonération de 10 ans sur impôt sur les sociétés',
    '• Franchise totale de droits de douane',
    '• Exonération de taxes foncières'
  ];
  
  taxBenefits.forEach((line) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
    
    if (line.startsWith('•')) {
      doc.setFont('helvetica', 'normal');
      doc.text(line, 25, yPosition);
    } else if (line === '') {
      yPosition += 5;
      return;
    } else if (line === line.toUpperCase() && line.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...goldInstitutional);
      doc.text(line, 20, yPosition);
      doc.setTextColor(0, 0, 0);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.text(line, 20, yPosition);
    }
    yPosition += 7;
  });

  // Page 8 - Processus d'Investissement
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, 0, pageWidth, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('5. PROCESSUS D\'INVESTISSEMENT', 20, 10);
  
  yPosition = 35;
  
  const steps = [
    { num: '1', title: 'CONSULTATION INITIALE', desc: 'Contactez l\'Agence Nationale pour la Promotion des Investissements (ANAPI)' },
    { num: '2', title: 'ÉTUDE DE FAISABILITÉ', desc: 'Analyse du marché, évaluation des risques et opportunités' },
    { num: '3', title: 'ENREGISTREMENT', desc: 'Création de l\'entreprise et obtention des agréments nécessaires' },
    { num: '4', title: 'LANCEMENT', desc: 'Démarrage des opérations avec accompagnement continu' }
  ];
  
  steps.forEach((step) => {
    doc.setFillColor(...goldInstitutional);
    doc.circle(30, yPosition, 8, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(step.num, 30, yPosition + 4, { align: 'center' });
    
    doc.setTextColor(...blueInstitutional);
    doc.setFontSize(13);
    doc.text(step.title, 45, yPosition + 2);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(step.desc, 140);
    doc.text(lines, 45, yPosition + 10);
    
    yPosition += 35;
  });

  // Page 9 - Contacts
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, 0, pageWidth, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('6. CONTACTS ET RESSOURCES', 20, 10);
  
  yPosition = 35;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  
  const contacts = [
    'PRIORITÉS RDC',
    'Portail Officiel du Développement',
    'Email: contact@priorites-rdc.cd',
    'Web: www.priorites-rdc.cd',
    '',
    'ANAPI',
    'Agence Nationale pour la Promotion des Investissements',
    'Email: info@anapi.cd',
    'Tél: +243 XX XXX XXXX',
    '',
    'MINISTÈRE DU PLAN',
    'Email: contact@plan.gouv.cd',
    '',
    'RESSOURCES EN LIGNE',
    '• Guide complet sur www.priorites-rdc.cd/investir',
    '• Données économiques en temps réel',
    '• Cartographie des opportunités par province',
    '• Formulaires de demande d\'agrément'
  ];
  
  contacts.forEach((line) => {
    if (line.startsWith('•')) {
      doc.setFont('helvetica', 'normal');
      doc.text(line, 25, yPosition);
    } else if (line === '') {
      yPosition += 8;
      return;
    } else if (line === line.toUpperCase() && line.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...goldInstitutional);
      doc.text(line, 20, yPosition);
      doc.setTextColor(0, 0, 0);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.text(line, 20, yPosition);
    }
    yPosition += 7;
  });

  // Dernière page - Footer
  yPosition = 250;
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, yPosition, pageWidth, 50, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('PRIORITÉS RDC', pageWidth / 2, yPosition + 15, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Bâtir l\'Avenir du Cœur de l\'Afrique', pageWidth / 2, yPosition + 25, { align: 'center' });
  doc.text('Vision 2030', pageWidth / 2, yPosition + 35, { align: 'center' });

  // Sauvegarder le PDF
  doc.save('Guide-Investisseur-RDC-2026.pdf');
};
