import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCard from './components/ServiceCard';
import ServiceComparison from './components/ServiceComparison';
import ProjectCalculator from './components/ProjectCalculator';
import ClientTestimonials from './components/ClientTestimonials';
import CallToAction from './components/CallToAction';

const ServicesOverview = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 'nbn-fiber',
      title: 'NBN Fiber Installation',
      icon: 'Wifi',
      color: 'bg-primary',
      description: `Comprehensive NBN fiber installation services including FTTP, FTTN, and HFC deployments. Our certified technicians deliver high-quality installations with rigorous testing and quality assurance protocols.`,
      tags: ['NBN Certified', 'FTTP/FTTN', 'HFC Upgrades', 'Network Testing'],
      benefits: [
        'NBN Co certified installation teams',
        'Comprehensive pre-installation surveys',
        'Advanced fiber splicing and testing equipment',
        'Quality assurance and performance verification',
        'Minimal disruption installation techniques',
        'Complete documentation and handover'
      ],
      highlights: [
        'FTTP installations with precision splicing',
        'FTTN cabinet connections and testing',
        'HFC network upgrades and maintenance',
        'End-to-end network performance testing'
      ],
      capabilities: [
        {
          name: 'Fiber Splicing',
          icon: 'Zap',
          description: 'Precision fusion splicing with loss verification'
        },
        {
          name: 'Network Testing',
          icon: 'Activity',
          description: 'OTDR testing and performance validation'
        },
        {
          name: 'Installation',
          icon: 'Settings',
          description: 'Complete FTTP/FTTN deployment services'
        },
        {
          name: 'Quality Assurance',
          icon: 'Shield',
          description: 'Comprehensive testing and documentation'
        },
        {
          name: 'Maintenance',
          icon: 'Tool',
          description: 'Ongoing support and fault resolution'
        },
        {
          name: 'Compliance',
          icon: 'CheckCircle',
          description: 'Full NBN Co standards compliance'
        }
      ],
      caseStudies: [
        {
          title: 'Western Sydney NBN Rollout',
          client: 'Ventia',
          status: 'Completed',
          description: 'Large-scale FTTP deployment across 200+ premises with zero safety incidents and ahead-of-schedule completion.',
          duration: '8 weeks',
          teamSize: '12 technicians',
          scope: '200+ FTTP connections'
        },
        {
          title: 'Regional HFC Upgrade',
          client: 'ServiceStream',
          status: 'Completed',
          description: 'Complex HFC network upgrade project involving signal amplification and node optimization.',
          duration: '6 weeks',
          teamSize: '8 technicians',
          scope: '150+ HFC upgrades'
        }
      ],
      equipment: [
        { name: 'Fusion Splicer', spec: 'Fujikura 90S+' },
        { name: 'OTDR', spec: 'EXFO FTB-1v2' },
        { name: 'Power Meter', spec: 'EXFO FPM-300' },
        { name: 'Fiber Cleaver', spec: 'Fujikura CT-50' },
        { name: 'Test Equipment', spec: 'Fluke Networks' }
      ],
      certifications: [
        'NBN Co Certified Installer',
        'Fiber Optic Technician Certification',
        'ACMA Cabling License',
        'Work Health & Safety Certification'
      ]
    },
    {
      id: 'copper-infrastructure',
      title: 'Copper Infrastructure Maintenance',
      icon: 'Cable',
      color: 'bg-secondary',
      description: `Expert copper infrastructure maintenance and upgrade services. From fault detection to complete system overhauls, we ensure reliable performance of legacy telecommunications networks.`,
      tags: ['Fault Detection', 'Cable Repair', 'System Upgrades', 'Emergency Response'],
      benefits: [
        'Advanced fault detection and location equipment',
        'Rapid response for emergency repairs',
        'Comprehensive cable testing and certification',
        'Legacy system upgrade and modernization',
        'Preventive maintenance programs',
        '24/7 emergency support availability'
      ],
      highlights: [
        'TDR fault location and analysis',
        'Cable jointing and repair services',
        'Insulation resistance testing',
        'Pair identification and verification'
      ],
      capabilities: [
        {
          name: 'Fault Location',
          icon: 'Search',
          description: 'TDR and advanced fault detection methods'
        },
        {
          name: 'Cable Repair',
          icon: 'Tool',
          description: 'Professional jointing and restoration'
        },
        {
          name: 'Testing',
          icon: 'Activity',
          description: 'Comprehensive electrical testing'
        },
        {
          name: 'Upgrades',
          icon: 'ArrowUp',
          description: 'Legacy system modernization'
        },
        {
          name: 'Maintenance',
          icon: 'Settings',
          description: 'Preventive maintenance programs'
        },
        {
          name: 'Emergency',
          icon: 'AlertTriangle',
          description: '24/7 emergency response service'
        }
      ],
      caseStudies: [
        {
          title: 'Regional Network Maintenance',
          client: 'ServiceStream',
          status: 'Ongoing',
          description: 'Comprehensive maintenance contract covering 500km of copper infrastructure with 99.5% uptime achievement.',
          duration: 'Annual contract',
          teamSize: '6 technicians',
          scope: '500km network coverage'
        },
        {
          title: 'Emergency Fault Resolution',
          client: 'Corporate Client',
          status: 'Completed',
          description: 'Critical fault resolution in CBD area affecting 200+ services, restored within 4 hours.',
          duration: '4 hours',
          teamSize: '4 technicians',
          scope: '200+ affected services'
        }
      ],
      equipment: [
        { name: 'TDR', spec: 'Megger TDR2050' },
        { name: 'Insulation Tester', spec: 'Fluke 1555' },
        { name: 'Tone Generator', spec: 'Fluke Pro3000' },
        { name: 'Cable Locator', spec: 'Radiodetection RD8100' },
        { name: 'Jointing Kit', spec: 'Professional grade' }
      ],
      certifications: [
        'Telstra Approved Contractor',
        'ACMA Cabling License',
        'Electrical Safety Certification',
        'Confined Space Entry Permit'
      ]
    },
    {
      id: 'structured-cabling',
      title: 'Structured Cabling Solutions',
      icon: 'Network',
      color: 'bg-accent',
      description: `Professional structured cabling installations for commercial and industrial environments. From Cat6A to fiber backbone systems, we deliver future-ready network infrastructure.`,
      tags: ['Cat6/Cat6A', 'Fiber Backbone', 'Cable Management', 'Performance Testing'],
      benefits: [
        'Cat6A and fiber backbone installations',
        'Professional cable management systems',
        'Comprehensive performance testing',
        'Future-ready scalable designs',
        'Complete documentation packages',
        'Warranty and ongoing support'
      ],
      highlights: [
        'High-performance Cat6A installations',
        'Fiber backbone infrastructure',
        'Professional patch panel configurations',
        'Comprehensive cable management'
      ],
      capabilities: [
        {
          name: 'Cat6A Installation',
          icon: 'Cable',
          description: 'High-performance copper cabling systems'
        },
        {
          name: 'Fiber Backbone',
          icon: 'Zap',
          description: 'Multi-mode and single-mode fiber systems'
        },
        {
          name: 'Patch Panels',
          icon: 'Grid3x3',
          description: 'Professional termination and labeling'
        },
        {
          name: 'Cable Management',
          icon: 'Package',
          description: 'Organized and accessible cable routing'
        },
        {
          name: 'Testing',
          icon: 'Activity',
          description: 'Performance verification and certification'
        },
        {
          name: 'Documentation',
          icon: 'FileText',
          description: 'Complete as-built documentation'
        }
      ],
      caseStudies: [
        {
          title: 'Commercial Complex Cabling',
          client: 'Corporate Client',
          status: 'Completed',
          description: '15-floor commercial building with comprehensive structured cabling including fiber backbone and Cat6A distribution.',
          duration: '4 weeks',
          teamSize: '8 technicians',
          scope: '15-floor building'
        },
        {
          title: 'Industrial Facility Network',
          client: 'Manufacturing Client',
          status: 'Completed',
          description: 'Harsh environment cabling installation with specialized protection and redundancy requirements.',
          duration: '3 weeks',
          teamSize: '6 technicians',
          scope: 'Industrial facility'
        }
      ],
      equipment: [
        { name: 'Cable Tester', spec: 'Fluke DSX-8000' },
        { name: 'Fiber Tester', spec: 'EXFO FiberBasix-20' },
        { name: 'Termination Tools', spec: 'Panduit Professional' },
        { name: 'Cable Manager', spec: 'Legrand Cable Management' },
        { name: 'Labeling System', spec: 'Brady Label Printer' }
      ],
      certifications: [
        'BICSI Certified Technician',
        'ACMA Cabling License',
        'Manufacturer Certifications',
        'Quality Assurance Standards'
      ]
    },
    {
      id: 'civil-works',
      title: 'Civil Works & Trenching',
      icon: 'Construction',
      color: 'bg-steel-blue',
      description: `Comprehensive civil works services for telecommunications infrastructure. From trenching and conduit installation to road restoration, we handle all aspects of underground infrastructure deployment.`,
      tags: ['Trenching', 'Conduit Installation', 'Road Restoration', 'Environmental Compliance'],
      benefits: [
        'Professional trenching and excavation services',
        'Conduit installation and protection systems',
        'Complete road and surface restoration',
        'Environmental compliance and permits',
        'Traffic management and safety protocols',
        'Coordination with local authorities'
      ],
      highlights: [
        'Precision trenching with minimal disruption',
        'HDPE conduit installation systems',
        'Professional restoration and reinstatement',
        'Full environmental compliance'
      ],
      capabilities: [
        {
          name: 'Trenching',
          icon: 'Construction',
          description: 'Precision excavation with minimal disruption'
        },
        {
          name: 'Conduit Installation',
          icon: 'Package',
          description: 'HDPE and PVC conduit systems'
        },
        {
          name: 'Restoration',
          icon: 'RefreshCw',
          description: 'Professional surface reinstatement'
        },
        {
          name: 'Permits',
          icon: 'FileText',
          description: 'Council permits and approvals'
        },
        {
          name: 'Safety',
          icon: 'Shield',
          description: 'Traffic management and safety protocols'
        },
        {
          name: 'Environment',
          icon: 'Leaf',
          description: 'Environmental protection measures'
        }
      ],
      caseStudies: [
        {
          title: 'Fiber Backbone Installation',
          client: 'Infrastructure Partner',
          status: 'Completed',
          description: '25km fiber backbone installation with complex trenching across multiple council areas and environmental zones.',
          duration: '12 weeks',
          teamSize: '15 workers',
          scope: '25km fiber backbone'
        },
        {
          title: 'Urban Conduit Network',
          client: 'Ventia',
          status: 'Completed',
          description: 'Dense urban conduit installation with minimal traffic disruption and full restoration compliance.',
          duration: '8 weeks',
          teamSize: '12 workers',
          scope: 'Urban conduit network'
        }
      ],
      equipment: [
        { name: 'Excavator', spec: '20-tonne tracked excavator' },
        { name: 'Trencher', spec: 'Vermeer T755III' },
        { name: 'Compactor', spec: 'Wacker Neuson roller' },
        { name: 'Vacuum Truck', spec: 'Hydro excavation unit' },
        { name: 'Safety Equipment', spec: 'Traffic management gear' }
      ],
      certifications: [
        'Civil Contractor License',
        'Traffic Management Certification',
        'Environmental Compliance',
        'Work Health & Safety Certification'
      ]
    }
  ];

  const handleServiceToggle = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ServiceHero />
        
        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive telecommunications infrastructure solutions delivered by certified professionals
              </p>
            </div>
            
            <div className="space-y-8">
              {services?.map((service) => (
                <ServiceCard
                  key={service?.id}
                  service={service}
                  isExpanded={expandedService === service?.id}
                  onToggle={() => handleServiceToggle(service?.id)}
                />
              ))}
            </div>
          </div>
        </section>

        <ServiceComparison />
        <ProjectCalculator />
        <ClientTestimonials />
        <CallToAction />
      </main>
    </div>
  );
};

export default ServicesOverview;