import { wpSlugs } from '../pages/wp/slugs';
export const WP = 'https://embesysindia.com';
// Pages rebuilt in React resolve to in-app routes; anything else links to the original WordPress site.
const u = (p) => {
  const m = p.match(/^\/([a-z0-9_-]+)\/?$/);
  if (m && wpSlugs.includes(m[1])) return `/${m[1]}`;
  return p.startsWith('http') ? p : `${WP}/${p.replace(/^\//, '')}`;
};
// Images are served locally from /public/media (mirrored from /wp-content/uploads, converted to WebP)
const img = (p) => `/media/${p.replace(/^\/?wp-content\/uploads\//, '').replace(/\.(png|jpe?g)$/i, '.webp')}`;

export const contact = {
  address: 'No.34, Sri Krishna TC Palya Main Road, Bangalore - 560016',
  phone: '+91 7381069100',
  email: 'digital.marketing@embesysindia.com',
  socials: [
    { name: 'Facebook', href: 'https://www.facebook.com/106633299022729', icon: img('/wp-content/uploads/2025/04/facebook-white.png') },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/embesys-innovative-technologies-pvt-ltd1/', icon: img('/wp-content/uploads/2025/04/linkin_icon-white.png') },
    { name: 'YouTube', href: 'https://www.youtube.com/@embesys-innovative-tech', icon: img('/wp-content/uploads/2025/04/youtube_icon-white.png') },
    { name: 'Instagram', href: 'https://www.instagram.com/embesys_official/?hl=en', icon: img('/wp-content/uploads/2025/11/INSTA_ICON_FINAL.png') },
  ],
};

export const logos = {
  main: img('/wp-content/uploads/2024/01/logo-black-main.png'),
  full: img('/wp-content/uploads/2024/01/update-final-logo-for-register-sign-black.png'),
};

// Pages rebuilt in React are routed in-app; everything else still links to the WordPress site.
export const internalRoutes = {
  '/': '/',
  '/about/': '/about',
  ...Object.fromEntries(wpSlugs.map((s) => [`/${s}/`, `/${s}`])),
};
const L = (label, href = '#', children) => ({
  label,
  href: href === '#' ? '#' : internalRoutes[href] || u(href),
  internal: Boolean(internalRoutes[href]),
  children,
});

export const nav = [
  L('Home', '/'),
  L('About', '/about/'),
  L('Products', '#', [
    L('National Instruments (NI)', '#', [
      L('Hardware', '#', [
        L('Multifunction I/O Device', '#', [
          L('Low cost USB DAQ 600x', '/low-cost-usb-daq-600x/'),
          L('NI mioDAQ', '/ni-miodaq/'),
        ]),
        L('Compact DAQ System', '/compactdaq-cdaq-system/'),
        L('CompactRIO Systems', '/compactrio-systems/'),
        L('NI PXI Systems', '/ni-pxi-systems-v2/'),
        L('USRP', '/ni-usrp-product-flyer/'),
        L('Academic Hardware', '#', [
          L('Analog Discovery Studio'), L('Analog Discovery Pro ADP5250'), L('Analog Discovery 3'),
          L('Zybo Z7'), L('Basys 3'), L('myDAQ', '/mydaq/'), L('MyRIO', '/myrio/'), L('Elvis III', '/elvis-iii/'),
        ]),
      ]),
      L('Software', '#', [
        L('For Industrial Purpose', '#', [
          L('LabVIEW', '/labview-2/'), L('FlexLogger', '/flexlogger/'), L('TestStand', '/teststand/'),
          L('DIAdem', '/diadem/'), L('Circuit Design Suite'),
        ]),
        L('For Academic Purpose', '#', [L('AVL LabVIEW'), L('AVL Multisim')]),
      ]),
    ]),
    L('SolidWorks', '#', [
      L('Design/Engineering', '#', [
        L('3D CAD', '/3d-cad/'), L('SolidWorks MBD', '/solidworks-mbd-2/'),
        L('SolidWorks Electrical Schematic', '/solidworks-electrical-schematic/'),
        L('SolidWorks Electrical 3D', '/solidworks-electrical-3d/'),
        L('SolidWorks Electrical Professional', '/solidworks-electrical-professional/'),
      ]),
      L('Data Management/Collaboration', '#', [L('SolidWorks PDM', '/solidworks-pdm/')]),
      L('Manufacturing ERP'),
      L('Manufacturing/Production', '#', [L('SolidWorks Inspection', '/solidworks-inspection/')]),
      L('Marketing/Sales', '#', [L('SolidWorks Composer', '/solidworks-composer/')]),
      L('Simulation', '#', [L('SolidWorks Simulation', '/solidworks-simulation/')]),
      L('3D Experience® Works', '#', [L('3D Experience', '/3dexperience/')]),
    ]),
    L('CAMWorks', '#', [
      L('Modules', '#', [
        L('2.5 Axis Milling', '/2-5-axis-milling/'), L('3 Axis Milling', '/3-axis-milling/'),
        L('Multi-Axis Milling', '/multi-axis-milling/'), L('Mill-Turn', '/mill-turn/'),
        L('Turning', '/turning/'), L('Wire EDM', '/wire-edm/'),
      ]),
    ]),
    L('Materialise', '#', [
      L('Materialise Storefront', '/materialise-storefront/'),
      L('Materialise Magics', '/?page_id=1458'),
      L('Materialise Build Processor', '/materialise-build-processor/'),
      L('Materialise Manufacturing Execution System (MES)', '/materialise-manufacturing-execution-system-mes/'),
      L('Materialise Mimics Innovation Suite', '/materialise-mimics-innovation-suite/'),
      L('Orthopaedic Solutions for Healthcare Professionals', '/orthopaedic-solutions-for-healthcare-professionals/'),
    ]),
    L('Additive Manufacturing', '#', [
      L('Markforged', '/markforged/', [
        L('Metal Solution', '#', [L('Metal X')]),
        L('CFF', '#', [L('Onyx Pro'), L('Mark Two'), L('X7'), L('FX10'), L('FX20')]),
      ]),
      L('Formlabs', '/formlabs/', [
        L('Powder', '#', [L('Fuse1+')]),
        L('Resin', '#', [L('Form4B'), L('Form4B L'), L('Form4'), L('Form4 L')]),
      ]),
      L('Meltio', '/meltio/', [L('M450')]),
      L('2onelab', '/2onelab/', [L('2One Create'), L('2One Create Plus')]),
      L('Creoform'),
    ]),
    L('OPAL-RT', '#', [
      L('Software Platforms', '#', [
        L('RT-LAB', '/rt-lab/'), L('Hypersim', '/hypersim/'), L('NI VeriStand', '/ni-veristand/'),
      ]),
      L('Hardware Platforms', '#', [
        L('OP4512 Simulator', '/simulator-platform-op4512/'), L('OP4610XG Simulator', '/op4610-gx-simulator/'),
        L('OP5705 XG Simulator', '/op5705-xg-simulatoro/'), L('OP5707 XG Simulator', '/op5707-xg-simulator/'),
        L('OP5033 GX Simulator', '/op5033-gx-simulator/'), L('OP8666', '/op8666/'),
      ]),
      L('Hardware Components', '#', [
        L('I/O and Communication Interfaces', '/i-o-and-communication-interfaces/'),
        L('OP1400 4-Quadrant PHIL Amplifier', '/op1400-4-quadrant-phil-amplifier/'),
        L('SLSC Modules', '/slsc-modules/'), L('Communication Protocols', '/communication-protocols/'),
        L('FPGA and I/O Expansion Units', '/fpga-and-i-o-expansion-units/'),
        L('Power and Control', '/power-and-control/'),
        L('Conditioning and Monitoring', '/conditioning-and-monitoring/'),
        L('Accessories', '/accessories/'),
      ]),
    ]),
  ]),
  L('Solutions', '/?page_id=5205', [
    L('R.E & Smart Microgrid Lab', '/microgrid/'),
    L('Electric Vehicle Lab', '/ev/'),
    L('Artificial Intelligence & Machine Learning Lab', '/ai-ml/'),
    L('HealthCare Solution Lab', '/healthcare-solution/'),
    L('Structural Health Monitoring Lab', '/structural-health-monitoring/'),
    L('RF Communication Lab', '/rf-communication/'),
    L('Semiconductor Characterization & Testing Lab', '/semiconductor-characterization/'),
    L('Mechatronics & Robotics Lab', '/mechatronics/'),
  ]),
  L('Projects', '#', [
    L('Integrated Engineering Services', '/integrated_engineering_services/'),
    L('Custom Application Development', '/custom-application-developement/'),
  ]),
  L('Research & Development'),
  { label: 'Training', href: 'https://e-innovista.in/', external: true },
  L('Contact Us', '/contact-us/'),
  L('Employee Corner', '#', [
    L('Register', '/wp-login.php?action=register'),
    L('Log In', '/wp-login.php'),
  ]),
];

export const ticker = [
  { tag: '🔴 BREAKING NEWS:', text: 'SOLIDWORKS Innovation Day 2026 is coming to Bhubaneswar! 25 Nov | MAYFAIR Lagoon | SOLIDWORKS 2027 + AI-Powered Design + 3DEXPERIENCE |', highlight: 'Registrations Now Open — Register Today!', href: u('/solidworks-innovation-day-2026/') },
  { text: 'Follow us on LinkedIn for more information.', link: { label: 'Follow Us on LinkedIn', href: 'https://www.linkedin.com/company/104857994/' } },
  { text: '🎉 Exciting News! 🚀 E-InnoVista – Our LMS Training Website is officially LIVE! Visit us at', link: { label: 'www.e-innovista.com', href: 'https://www.e-innovista.com' }, after: 'and start your learning journey today.' },
];

export const heroSlides = [
  { img: img('/wp-content/uploads/2026/10/SolidWorks_Banner2.png'), alt: 'SOLIDWORKS Innovation Day 2026', href: u('/solidworks-innovation-day-2026/') },
  { img: img('/wp-content/uploads/2025/01/solidworks-main-banner-2025.jpg'), alt: 'SOLIDWORKS' },
  { img: img('/wp-content/uploads/2025/08/AI.png'), alt: 'AI & Robotics Solution', href: u('/ai-ml/') },
  { img: img('/wp-content/uploads/2025/09/3-1.png'), alt: 'Condition Based Monitoring', href: u('/condition-based-monitoring/') },
  { img: img('/wp-content/uploads/2025/08/EV.png'), alt: 'Electric Vehicle Lab', href: u('/ev/') },
  { img: img('/wp-content/uploads/2025/08/Healthcare.png'), alt: 'Healthcare Lab Solution', href: u('/healthcare-solution/') },
  { img: img('/wp-content/uploads/2025/08/MICROGRID.png'), alt: 'Smart Microgrid Lab', href: u('/microgrid/') },
  { img: img('/wp-content/uploads/2025/09/2-1.png'), alt: 'RF Communication Solution', href: u('/rf-communication/') },
  { img: img('/wp-content/uploads/2025/08/Structural.png'), alt: 'Structural Health Monitoring', href: u('/structural-health-monitoring/') },
  { img: img('/wp-content/uploads/2025/11/SCL_BANNER.png'), alt: 'Semiconductor Characterization', href: u('/semiconductor-characterization/') },
  { img: img('/wp-content/uploads/2025/12/Mechatronics.png'), alt: 'Mechatronics', href: u('/mechatronics/') },
];

export const about = {
  title: 'Welcome To Embesys Innovative Technologies Pvt. Ltd.',
  paragraphs: [
    'We, Embesys Innovative Technologies Pvt.Ltd is an India based company with a strong customer network and Partnerships with independent OEMs and Technology suppliers. We are one of the leading PLM & Reverse Engineering Solution provider in India catering to a wide variety of Educational and industrial sector. We are a customer oriented company that believes in “Delivering Excellence” consistently. More than a decade of rich experience in the Design & Development domain has given us a broad understanding of the industry needs.',
    'This has helped us optimize processes thus giving our team a distinct edge in making solution more innovative, efficient, cost effective and time saving. EMBESYS has been associated with SolidWorks Corporation - USA, as a Value Added Reseller in east India since 2013, delivering Design Solutions to customers in India. Commitment and Passion to help customers in their Design functions has helped EMBESYS earn the trust of Customer.',
  ],
};

export const features = [
  { icon: 'globe', title: 'Trained and certified by software principals', text: 'Our faculties are well trained and certified by software principals including Dassault Systems, CNC software Inc.' },
  { icon: 'badge', title: 'Authorized Training & Support Center', text: 'Embesys Innovative Technologies Pvt.Ltd is the Authorized Training & Support Center for Catia & SolidWork having its training center at Bhubaneswar, Odisha' },
  { icon: 'bridge', title: 'Vision is to bridge the gap', text: 'Our training is more focused on Industry domain rather than software tools. Our practical & theoretical sessions address real time problems faced by Industries.' },
];

export const videos = ['LcwP0RSXNx0', 'e8alPsrdtAc', 'eKCJnhR_cdw', '1tlMUkVXV5E', 'sdBGWVFCOlA', 'wEEvze4TnqU', '11EVl2lW3tE', 'zCtL9XyQK8A', 'tbIFF88EDhA', 'CFqJrdtmlGE', 'GxjeBl4wLcE', 'FnZH5DT0kSo'];

export const clients = Array.from({ length: 56 }, (_, i) => i + 1)
  .filter((n) => n !== 44)
  .map((n) => img(`/wp-content/uploads/2025/09/${n === 4 ? '4-1' : n}.png`));

export const news = [
  { title: '📡 Embesys Successfully Conducts ANRF-Funded Two-Day Training Program on MIMO Architecture in 5G Wireless Systems', body: 'In collaboration with VSSUT, Embesys conducted an ANRF-funded two-day training program on “Implementation of MIMO Architecture in 5G Wireless Systems” on 29–30 October 2026, covering 5G fundamentals, MIMO concepts, channel modeling, beamforming, hands-on simulation and real-world 5G applications.' },
  { title: '🚀 Embesys Launches Its Own Product – Embesys NVH Analyzer', body: 'Launched at Embesys TechSummit 2025, the Embesys NVH Analyzer is a smart, compact Noise, Vibration & Harshness diagnostic system integrating vibration, sound and temperature sensing for predictive maintenance, fault detection, quality evaluation and research.', link: { label: 'Visit our LinkedIn page', href: 'https://www.linkedin.com/company/embesys' } },
  { title: '🛠️ SolidWorks Innovation Day 2025 at Bhubaneswar', body: 'Celebrating 30 years of SOLIDWORKS at MAYFAIR Lagoon (Orchid), Jaydev Vihar, Bhubaneswar on 19th November 2025, 9:30 a.m. – 2:30 p.m., highlighting what’s new in SOLIDWORKS 2026.' },
  { title: '🚀 Embesys TechSummit 2025', body: 'Industry-focused research lab solutions, product launches from the Embesys R&D team, the E-InnoVista training program introduction, and live demonstrations with interactive Q&A.' },
  { title: '📡 5G & 6G Communication Workshop at IEEE Tech Summit 2025', body: 'Invited by the IEEE VSSUT, Burla Student Branch on October 17, 2025 for a technical presentation and SDR workshop on “5G & 6G Communication and SDR Applications”.' },
  { title: '🎓 Embesys Completes Center of Excellence at IGIT Sarang', body: 'A state-of-the-art CoE covering RF Communication, Structural Health Monitoring and PCB Design, enabling hands-on training and academia–industry collaboration.' },
  { title: '🚀 Launch of E-Innovista Training Program', body: 'Courses in LabVIEW & DAQ, RF Communication & MIMO, CATIA, SolidWorks, DELMIA Process Planner and DELMIA Robotics.', link: { label: 'www.e-innovista.com', href: 'http://www.e-innovista.com' } },
  { title: '🚀 Embesys Showcases 6G & FR2 Testbed at NITTTR Chandigarh', body: 'At the STC on 5G & Beyond, Embesys showcased a USRP-based FR2 testbed and 6G prototyping technologies to 30+ participants.' },
];

export const offices = [
  { city: 'Bhubaneswar', address: '167-B, 1st Floor, Forest Park, Bhubaneswar Odisha - 751009' },
  { city: 'Bangalore', address: '3rd Floor, Novel Office, B Block, Brigade Tech Park, Pattandur Agrahara, Bangalore - 560066.' },
  { city: 'Kolkata', address: 'IFS Business Center, Suite No: 02, 4th Floor, 206/1, Rash Behari Ave, Near Standard Chartered Bank, Golpark, Hindustan Park, Gariahat, Kolkata, West Bengal - 700029' },
  { city: 'Pune', address: 'Nanded City Sinhgad Rd, Ghule Patil Nagar, Pandurang Industrial Area, Nanded, Pune Maharashtra - 411041' },
];
