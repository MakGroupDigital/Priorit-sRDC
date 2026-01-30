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
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(40);
  doc.setFont('helvetica', 'bold');
  doc.text('PRIORITÉS', pageWidth / 2, 80, { align: 'center' });
  
  doc.setTextColor(...goldInstitutional);
  doc.text('RDC', pageWidth / 2, 100, { align: 'center' });
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.text('PORTAIL OFFICIEL DU DÉVELOPPEMENT', pageWidth / 2, 115, { align: 'center' });
  
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text('GUIDE DE', pageWidth / 2, 150, { align: 'center' });
  doc.text("L'INVESTISSEUR", pageWidth / 2, 165, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('République Démocratique du Congo', pageWidth / 2, 185, { align: 'center' });
  doc.text('Vision 2030', pageWidth / 2, 195, { align: 'center' });
  
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
    '1. Pourquoi Investir en RDC',
    '2. Secteurs Prioritaires',
    '3. Cadre Légal et Réglementaire',
    '4. Avantages Fiscaux',
    '5. Processus d\'Investissement',
    '6. Contacts et Ressources'
  ];
  
  tableOfContents.forEach((item) => {
    doc.text(item, 25, yPosition);
    yPosition += 10;
  });

  // Page 3 - Pourquoi Investir
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
  
  const content = [
    'La RDC offre des opportunités exceptionnelles.',
    '',
    'RESSOURCES NATURELLES',
    '• 60% des réserves mondiales de cobalt',
    '• 10% des réserves mondiales de cuivre',
    '• 100,000 MW de potentiel hydroélectrique',
    '',
    'MARCHÉ EN CROISSANCE',
    '• 100+ millions d\'habitants',
    '• Croissance de 3.2% par an',
    '• Position stratégique en Afrique'
  ];
  
  content.forEach((line) => {
    if (line.startsWith('•')) {
      doc.text(line, 25, yPosition);
    } else if (line === '') {
      yPosition += 5;
      return;
    } else if (line === line.toUpperCase() && line.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...goldInstitutional);
      doc.text(line, 20, yPosition);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
    } else {
      doc.text(line, 20, yPosition);
    }
    yPosition += 7;
  });

  // Page 4 - Secteurs
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, 0, pageWidth, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('2. SECTEURS PRIORITAIRES', 20, 10);
  
  yPosition = 35;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  
  const sectors = [
    { name: 'ÉNERGIE', roi: 'ROI: 15-25%' },
    { name: 'INFRASTRUCTURE', roi: 'ROI: 12-20%' },
    { name: 'MINES & MÉTAUX', roi: 'ROI: 18-30%' },
    { name: 'AGRICULTURE', roi: 'ROI: 10-18%' },
    { name: 'TECHNOLOGIES', roi: 'ROI: 20-35%' },
    { name: 'IMMOBILIER', roi: 'ROI: 12-22%' }
  ];
  
  sectors.forEach((sector) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...goldInstitutional);
    doc.text(sector.name, 20, yPosition);
    doc.setTextColor(...emeraldInstitutional);
    doc.setFontSize(10);
    doc.text(sector.roi, 150, yPosition);
    yPosition += 12;
    doc.setFontSize(12);
  });

  // Page 5 - Contacts
  doc.addPage();
  yPosition = 20;
  
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, 0, pageWidth, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('6. CONTACTS', 20, 10);
  
  yPosition = 35;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  
  doc.text('PRIORITÉS RDC', 20, yPosition);
  yPosition += 7;
  doc.text('Email: contact@priorites-rdc.cd', 20, yPosition);
  yPosition += 7;
  doc.text('Web: www.priorites-rdc.cd', 20, yPosition);

  // Footer
  yPosition = 250;
  doc.setFillColor(...blueInstitutional);
  doc.rect(0, yPosition, pageWidth, 50, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('PRIORITÉS RDC', pageWidth / 2, yPosition + 15, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Vision 2030', pageWidth / 2, yPosition + 25, { align: 'center' });

  // Générer le PDF avec support iOS
  const pdfBlob = doc.output('blob');
  const fileName = 'Guide-Investisseur-RDC-2026.pdf';
  
  // Détection iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  if (isIOS) {
    // Pour iOS: ouvrir dans un nouvel onglet
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(pdfUrl), 100);
  } else {
    // Pour les autres navigateurs
    doc.save(fileName);
  }
};
