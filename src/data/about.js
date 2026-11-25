// Content mirrored from https://embesysindia.com/about/
// Text wrapped in **double asterisks** renders bold (see <Rich />).
const img = (p) => `/media/${p}`;

export const aboutPage = {
  title: 'About Us | Embesys Innovative Technologies Pvt. Ltd',
  hero: {
    image: img('2025/10/about-us-3.webp'),
    alt: 'About Us – Embesys Innovative Technologies Pvt. Ltd. Delivering Excellence. An ISO 9001:2015 Certified Company',
  },
  intro: {
    image: img('2025/10/ISO_CERTIFICATE.webp'),
    imageAlt: 'ISO Certificate',
    heading: 'Embesys Innovative Technologies Pvt. Ltd.',
    blocks: [
      { p: 'We feel obliged to introduce our ambitious venture "**EMBESYS INNOVATIVE TECHNOLOGIES**", started with a vision of being a professionally managed, knowledge-based, innovative, and customer-centric technology company.' },
      { p: 'The technology platforms and components of our solutions are powered by global leaders such as **National Instruments, Dassault Systèmes SOLIDWORKS, Dassault Systèmes 3DEXPERIENCE Works, Materialise Additive Manufacturing Suite, Materialise Medical Innovation Suite, TRNSYS, CAMWORKS, and OPAL-RT**. We also specialize in **Additive Manufacturing & Reverse Engineering Solutions, Industrial CT Scanning, and Data Imaging Software**.' },
      { p: 'As a leading **Research Laboratory and Center of Excellence (CoE)** developer in India, we focus on building state-of-the-art infrastructure in collaboration with top technology partners having a PAN-India presence. Our team of experienced technocrats consistently delivers world-class solutions, ensuring quality, reliability, and innovation in every project.' },
      { p: 'We are focused on establishing Research Laboratories and Centers of Excellence in premier engineering institutes and R&D organizations across India, specializing in the domains of:' },
      {
        list: [
          'Virtual Engineering & Digital Prototyping',
          'Industry 4.0 and Industrial IoT (IIoT)',
          'Smart Manufacturing & Mechatronics',
          'Renewable Energy & Smart Grid Automation',
          'Biomedical Research, Surgical Simulation & Implant Design',
        ],
      },
      { p: 'We also provide **RF Communication, Software Defined Radio (SDR), and 5G prototyping solutions**, empowering academia and industry to explore next-generation communication systems.' },
      { p: 'Through our **in-house R&D center**, we ensure continuous innovation, technology integration, and live technical support, making Embesys a trusted partner for OEMs, industries, and academic institutions across India.' },
      { p: 'Our expertise covers **Design, Analysis, Additive Manufacturing, and Digital Fabrication** with services including **3D Printing (SLS, MJF, SLA, FDM), Vacuum Casting, CNC Machining, and Injection Moulding**.' },
      { p: 'We also deliver **renewable energy systems, Hybrid Smart Grid solutions, and Building Management & Automation Systems (BMS/BIM)** for efficient energy and infrastructure management.' },
      { p: 'At Embesys, we are committed to **delivering excellence through innovation**, enabling industry-ready skills, smart infrastructure, and sustainable technology growth for Industry 4.0 and beyond.' },
    ],
  },
  missionVision: {
    heading: 'OUR MISSION & VISION',
    mission: {
      title: 'Mission',
      text: 'To be a prominent and leading Technology Distributor evolving into a Services & Solutions company, acting as a Business Enabler by seamlessly partnering with brands and technology innovators to deliver sustainable value.',
    },
    vision: {
      title: 'Vision',
      points: [
        'Enhance customer profitability and quality through knowledge, technology, and collaboration',
        'Drive a multi-faceted approach in technology and services',
        'Expand market reach and brand coverage globally',
        'Establish a strong presence across emerging markets and major locations',
      ],
    },
  },
};
