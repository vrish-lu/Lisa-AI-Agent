"use client";

import React, { useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Check, Clock, Zap, Shield, Globe, FileText, MessageSquare, Sparkles, Brain, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Data ---
const departmentsData: Record<string, any> = {
    'sales': {
        title: 'Sales AI',
        name: 'Alex',
        role: 'SDR & Outreach Specialist',
        desc: 'I automate lead research, personalized outreach, and CRM updates. I never let a lead go cold and I work 24/7 to fill your pipeline.',
        traits: ['Persuasive', 'Persistent', 'Data-Driven'],
        tasks: [
            'Research prospects on LinkedIn & web',
            'Draft & send hyper-personalized emails',
            'Handle objection handling & follow-ups',
            'Update Salesforce/HubSpot automatically',
            'Book meetings directly to your calendar'
        ],
        powerUps: [
            { title: 'Auto-Sequencer', desc: 'Launch multi-channel campaigns instantly.' },
            { title: 'Lead Enricher', desc: 'Find verified emails and phone numbers.' },
            { title: 'Meeting Booker', desc: 'Coordinate times and send calendar invites.' },
            { title: 'CRM Sync', desc: 'Keep your pipeline up-to-date in real-time.' }
        ],
        tools: ['Salesforce', 'HubSpot', 'LinkedIn', 'Gmail', 'Outlook'],
        imageIndex: 0
    },
    'marketing': {
        title: 'Marketing AI',
        name: 'Sarah',
        role: 'Content & Campaign Manager',
        desc: 'I scale your content engine. I research topics, draft blog posts, create social media calendars, and analyze campaign performance.',
        traits: ['Creative', 'Trend-Aware', 'Analytical'],
        tasks: [
            'Trend research & topic ideation',
            'Draft SEO-optimized blog posts',
            'Create LinkedIn & Twitter threads',
            'Repurpose content across channels',
            'Generate weekly performance reports'
        ],
        powerUps: [
            { title: 'Viral Post Generator', desc: 'Create high-engagement social content.' },
            { title: 'SEO Optimizer', desc: 'Rank higher with keyword-rich articles.' },
            { title: 'Trend Hunter', desc: 'Spot rising topics before your competitors.' },
            { title: 'Campaign Analyzer', desc: 'Deep-dive into what’s working and why.' }
        ],
        tools: ['WordPress', 'LinkedIn', 'Twitter', 'Google Analytics', 'Canva'],
        imageIndex: 1
    },
    'customer-support': {
        title: 'Support AI',
        name: 'Ben',
        role: 'L1 Customer Success Agent',
        desc: 'I resolve 80% of tickets instantly. I handle FAQs, triage complex issues, and keep your customers happy 24/7.',
        traits: ['Empathetic', 'Instant', 'Patient'],
        tasks: [
            'Instant responses to L1 queries',
            'Ticket classification & routing',
            'Password resets & order status',
            'Escalate complex issues with context',
            'Update knowledge base from resolved tickets'
        ],
        powerUps: [
            { title: 'Instant Triage', desc: 'Route tickets to the right human instantly.' },
            { title: 'Sentiment Analysis', desc: 'Detect angry customers and prioritize them.' },
            { title: 'Knowledge Sync', desc: 'Turn solved tickets into help articles.' },
            { title: '24/7 Responder', desc: 'Never leave a customer waiting.' }
        ],
        tools: ['Zendesk', 'Intercom', 'Jira', 'Slack', 'Email'],
        imageIndex: 2
    },
    'hr-recruitment': {
        title: 'HR AI',
        name: 'Lisa',
        role: 'Recruiter & Onboarding Specialist',
        desc: 'I streamline your hiring pipeline. I screen resumes, schedule interviews, and handle employee onboarding queries.',
        traits: ['Organized', 'Unbiased', 'Efficient'],
        tasks: [
            'Screen resumes against job descriptions',
            'Schedule interviews with candidates',
            'Send pre-onboarding documents',
            'Answer employee policy FAQs',
            'Track candidate pipeline status'
        ],
        powerUps: [
            { title: 'Resume Screener', desc: 'Filter thousands of applicants in seconds.' },
            { title: 'Interview Scheduler', desc: 'Coordinate complex panel interviews.' },
            { title: 'Onboarding Bot', desc: 'Guide new hires through paperwork.' },
            { title: 'Policy Expert', desc: 'Instantly answer employee handbook questions.' }
        ],
        tools: ['Greenhouse', 'Lever', 'Google Calendar', 'DocuSign', 'Slack'],
        imageIndex: 3
    },
};

const heroImages = ['person1.png', 'person2.png', 'person3.png', 'person4.png', 'person5.png', 'person6.png', 'person7.png'];

const DepartmentDetail = () => {
    const params = useParams();
    const slug = params?.slug as string;
    const container = useRef(null);

    // Fallback for undefined departments
    const data = departmentsData[slug] || {
        title: 'AI Employee',
        name: 'Agent',
        role: 'Digital Specialist',
        desc: 'Automate your workflows with a custom AI employee designed for your specific needs.',
        traits: ['Fast', 'Accurate', 'Secure'],
        tasks: ['Automate repetitive tasks', 'Integrate with your tools', 'Work 24/7', 'Scale instantly'],
        powerUps: [
            { title: 'Task Automator', desc: 'Handle repetitive workflows.' },
            { title: 'Data Sync', desc: 'Connect your favorite apps.' },
            { title: 'Smart Alerts', desc: 'Get notified of important events.' },
            { title: 'Custom Reports', desc: 'Generate insights on demand.' }
        ],
        tools: ['Your Stack'],
        imageIndex: 4
    };

    const avatarImage = `/images/${heroImages[data.imageIndex % heroImages.length]}`;

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from('.hero-avatar', { x: -50, opacity: 0, duration: 1, ease: 'power3.out' })
            .from('.hero-content > *', { x: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, '-=0.8');

        gsap.from('.brain-item', {
            scrollTrigger: { trigger: '.brain-section', start: 'top 80%' },
            y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out'
        });

        gsap.from('.powerup-card', {
            scrollTrigger: { trigger: '.powerups-section', start: 'top 80%' },
            y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out'
        });

    }, { scope: container });

    return (
        <main ref={container} className="page-container" style={{ paddingTop: '120px', paddingBottom: '5rem', background: 'var(--bg-cream)' }}>
            <div className="section-container" style={{ maxWidth: '1100px' }}>

                <Link href="/departments" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '3rem', textDecoration: 'none', fontWeight: 500 }}>
                    <ArrowLeft size={18} /> Back to Departments
                </Link>

                {/* Hero Section */}
                <div className="hero-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '8rem' }}>

                    {/* Left: Avatar */}
                    <div className="hero-avatar" style={{ position: 'relative' }}>
                        <div style={{
                            background: '#e0e7ff',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            aspectRatio: '1/1.1',
                            position: 'relative',
                            boxShadow: 'var(--shadow-lg)'
                        }}>
                            <img src={avatarImage} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Floating Stats */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            left: '-1rem',
                            background: '#fff',
                            padding: '1rem 1.5rem',
                            borderRadius: '1rem',
                            boxShadow: 'var(--shadow-md)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem'
                        }}>
                            <div style={{ background: '#dcfce7', padding: '0.5rem', borderRadius: '50%', color: '#166534' }}><Clock size={20} /></div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Availability</div>
                                <div style={{ fontWeight: 700, color: 'var(--text-dark)' }}>24/7/365</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="hero-content">
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            {data.traits.map((trait: string, i: number) => (
                                <span key={i} style={{
                                    background: '#f3f4f6',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '2rem',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    color: 'var(--text-dark)'
                                }}>
                                    {trait}
                                </span>
                            ))}
                        </div>

                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '0.5rem' }}>
                            I'm {data.name}.
                        </h1>
                        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 400 }}>
                            {data.role}
                        </h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2.5rem', color: 'var(--text-dark)' }}>
                            {data.desc}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <button className="cta-button" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                                Hire {data.name}
                            </button>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                Starting at ₹20k/mo
                            </span>
                        </div>
                    </div>
                </div>

                {/* Brain AI Section */}
                <div className="brain-section" style={{ marginBottom: '8rem', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem' }}>Empowered by your Brain AI</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Your unique knowledge. {data.name}'s expertise. Combined into one. Feed your brain with your data.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {[
                            { icon: Globe, title: 'Web', desc: 'Connect your website info' },
                            { icon: FileText, title: 'Files', desc: 'Upload PDFs & Docs' },
                            { icon: MessageSquare, title: 'Snippets', desc: 'Add unique business context' }
                        ].map((item, i) => (
                            <div key={i} className="brain-item" style={{
                                background: '#fff',
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                boxShadow: 'var(--shadow-sm)',
                                width: '250px',
                                border: '1px solid var(--border-light)'
                            }}>
                                <div style={{ background: '#f3f4f6', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--text-dark)' }}>
                                    <item.icon size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Power-Ups Section */}
                <div className="powerups-section" style={{ marginBottom: '8rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem' }}>Power-Ups available for {data.name}</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Unlock more capabilities with specialized add-ons.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {data.powerUps.map((powerUp: any, i: number) => (
                            <div key={i} className="powerup-card" style={{
                                background: '#1a1a1a',
                                color: '#fff',
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', opacity: 0.2 }}>
                                    <Rocket size={40} />
                                </div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', position: 'relative' }}>{powerUp.title}</h3>
                                <p style={{ fontSize: '0.95rem', opacity: 0.8, position: 'relative' }}>{powerUp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What I Can Do Section */}
                <div className="tasks-section" style={{ marginBottom: '8rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem' }}>What I Can Do For You</h2>
                        <p style={{ color: 'var(--text-muted)' }}>I'm trained on best-in-class SOPs to handle these tasks autonomously.</p>
                    </div>

                    <div className="tasks-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {data.tasks.map((task: string, i: number) => (
                            <div key={i} className="task-card" style={{
                                background: 'var(--bg-white)',
                                padding: '1.5rem',
                                borderRadius: '1rem',
                                boxShadow: 'var(--shadow-sm)',
                                border: '1px solid var(--border-light)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                transition: 'transform 0.2s'
                            }}>
                                <div style={{ background: 'var(--bg-cream)', padding: '0.6rem', borderRadius: '0.6rem', color: 'var(--text-dark)' }}>
                                    <Zap size={20} />
                                </div>
                                <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>{task}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools Section */}
                <div style={{ marginBottom: '6rem', padding: '3rem', background: '#fff', borderRadius: '2rem', border: '1px solid var(--border-light)', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>My Tool Stack</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        {data.tools.map((tool: string, i: number) => (
                            <span key={i} style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-muted)' }}>{tool}</span>
                        ))}
                    </div>
                </div>

                {/* Guarantee Section */}
                <div style={{ textAlign: 'center', padding: '4rem 0', borderTop: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#dcfce7', width: '60px', height: '60px', borderRadius: '50%', marginBottom: '1.5rem', color: '#166534' }}>
                        <Shield size={30} />
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>Guarantee</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Each AI Employee comes with a 14-day money-back guarantee. <br />
                        <Link href="#" style={{ color: 'var(--text-dark)', textDecoration: 'underline' }}>Learn More</Link>
                    </p>
                </div>

            </div>
        </main>
    );
};

export default DepartmentDetail;
