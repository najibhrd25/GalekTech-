import React from "react";

// Mock data structures
const mockSettings = {
  _id: "settings",
  _type: "settings",
  siteTitle: "VentureDen",
  siteDescription: "The ultimate platform for connecting startups with angel investors and venture funds.",
  logo: {
    id: "image-2804b4c735d4fa395e865f17d74f762637ebffc3-1200x800-jpg",
    preview: "",
    alt: "VentureDen Logo",
  },
  socialLinks: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  contactEmail: "hello@ventureden.com",
};

const mockNavbar = {
  _id: "navbar",
  columns: [
    {
      _key: "col1",
      type: "link",
      name: "Explore",
      href: "#features",
      description: "Discover startups and categories",
    },
    {
      _key: "col2",
      type: "link",
      name: "Top Categories",
      href: "#integrations",
      description: "Browse popular industries",
    },
    {
      _key: "col3",
      type: "link",
      name: "Blog",
      href: "/blog",
      description: "Read latest insights",
    }
  ],
  buttons: [] // Keep empty since Sign In is rendered separately by NavbarAuth component
};

const mockFooter = {
  _id: "footer",
  richText: [
    {
      _key: "footer-p1",
      _type: "block",
      children: [{ _key: "span-1", _type: "span", text: "© 2026 VentureDen. All rights reserved. Empowering next-gen founders." }],
    }
  ],
};

const mockCategories = [
  { _id: "cat1", title: "SaaS", slug: "saas", description: "Software as a Service", count: 3 },
  { _id: "cat2", title: "AI/ML", slug: "ai-ml", description: "Artificial Intelligence and Machine Learning", count: 2 },
  { _id: "cat3", title: "Web3", slug: "web3", description: "Decentralized applications and protocols", count: 1 },
];

const mockStartups = [
  {
    _id: "startup1",
    title: "VentureDen",
    slug: "ventureden",
    description: "The premier platform for connecting startups with angel investors and venture funds.",
    category: "SaaS",
    image: { id: "image-2804b4c735d4fa395e865f17d74f762637ebffc3-1200x800-jpg", alt: "VentureDen" },
    _createdAt: "2026-05-30T00:00:00Z",
    views: 120,
    upvotes: 45,
    author: { name: "John Doe", username: "johndoe", image: { id: "image-2804b4c735d4fa395e865f17d74f762637ebffc3-1200x800-jpg", alt: "John Doe" } }
  },
  {
    _id: "startup2",
    title: "Aether AI",
    slug: "aether-ai",
    description: "Next-generation generative AI workspace for enterprise workflow automation.",
    category: "AI/ML",
    image: { id: "image-2804b4c735d4fa395e865f17d74f762637ebffc3-1200x800-jpg", alt: "Aether AI" },
    _createdAt: "2026-05-29T00:00:00Z",
    views: 310,
    upvotes: 98,
    author: { name: "Jane Smith", username: "janesmith", image: { id: "image-2804b4c735d4fa395e865f17d74f762637ebffc3-1200x800-jpg", alt: "Jane Smith" } }
  }
];

const mockHomePage = {
  _id: "homePage",
  _type: "homePage",
  title: "Welcome to VentureDen",
  seoTitle: "VentureDen - Discover the Future of Funding",
  seoDescription: "Connecting next-generation startup founders with premier angel investors and VC funds.",
  pageBuilder: [
    {
      _key: "hero",
      _type: "heroSection",
      badge: "Introducing VentureDen v1.0",
      title: "Where Startups Meet Capital",
      subtitle: "VentureDen connects high-growth startups, pitch to top investors, and explore venture opportunities globally.",
      buttons: [
        { text: "Explore Features", variant: "primary", _key: "b1", _type: "button", href: "#features" },
        { text: "View FAQ", variant: "secondary", _key: "b2", _type: "button", href: "#faq" }
      ],
    },
    {
      _key: "logoTicker",
      _type: "logoTickerSection",
      title: "Trusted by innovative companies",
      logos: [
        { id: "mock-logo-google", alt: "Google" },
        { id: "mock-logo-microsoft", alt: "Microsoft" },
        { id: "mock-logo-apple", alt: "Apple" },
        { id: "mock-logo-stripe", alt: "Stripe" },
        { id: "mock-logo-amazon", alt: "Amazon" },
        { id: "mock-logo-meta", alt: "Meta" }
      ],
    },
    {
      _key: "features",
      _type: "featureCardsIcon",
      eyebrow: "Features",
      title: "Engineered for modern dealmaking",
      cards: [
        {
          _key: "fc1",
          _type: "card",
          title: "Global Dealflow",
          animationVariant: "avatars",
          richText: [
            {
              _type: "block",
              _key: "p1",
              children: [{ _type: "span", _key: "s1", text: "Discover and connect with high-quality, verified startup founders and angel investors from tech hubs worldwide." }]
            }
          ]
        },
        {
          _key: "fc2",
          _type: "card",
          title: "AI-Powered Matching",
          animationVariant: "text-highlight",
          richText: [
            {
              _type: "block",
              _key: "p2",
              children: [{ _type: "span", _key: "s2", text: "Receive curated investment recommendations matched specifically to your industry, stage, and investment criteria." }]
            }
          ]
        },
        {
          _key: "fc3",
          _type: "card",
          title: "Lightning Fast Pitching",
          animationVariant: "keyboard-keys",
          richText: [
            {
              _type: "block",
              _key: "p3",
              children: [{ _type: "span", _key: "s3", text: "Create beautifully formatted startup pitches and share securely with selected VC funds in minutes." }]
            }
          ]
        }
      ],
      features: ["Verified Investors", "Secure Pitch Decks", "Real-time Chat", "Smart Analytics", "Automated NDAs"]
    },
    {
      _key: "integrations",
      _type: "integrationsSection",
      eyebrow: "Integrations",
      title: "Connected to your workspace",
      subtitle: "VentureDen integrates seamlessly with all the tools you use every day, keeping your workflow automated.",
      integrations: [
        { _key: "int1", name: "Slack", description: "Receive real-time notifications when investors view your pitch.", icon: null },
        { _key: "int2", name: "Notion", description: "Sync startup pitch parameters directly into your database.", icon: null },
        { _key: "int3", name: "HubSpot", description: "Keep your investor pipeline CRM fully updated.", icon: null }
      ]
    },
    {
      _key: "faqAccordion",
      _type: "faqAccordion",
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about joining and using the VentureDen platform.",
      faqs: [
        {
          _id: "faq1",
          title: "What is VentureDen?",
          richText: [
            {
              _type: "block",
              _key: "f1",
              children: [{ _type: "span", _key: "s_f1", text: "VentureDen is a next-generation platform designed to connect startup founders with angel investors and venture capital firms to streamline fundraising." }]
            }
          ]
        },
        {
          _id: "faq2",
          title: "Is it free for founders?",
          richText: [
            {
              _type: "block",
              _key: "f2",
              children: [{ _type: "span", _key: "s_f2", text: "Yes, creating a profile and submitting basic pitches to our investor network is completely free for founders." }]
            }
          ]
        },
        {
          _id: "faq3",
          title: "How does AI matching work?",
          richText: [
            {
              _type: "block",
              _key: "f3",
              children: [{ _type: "span", _key: "s_f3", text: "Our algorithm analyzes startup profiles, sector tags, and stage parameters to recommend the most relevant matches based on VC investment mandates." }]
            }
          ]
        }
      ]
    }
  ],
};

export const sanityFetch = async ({ query, params }: { query: any; params?: any }) => {
  const queryStr = typeof query === "string" ? query : (query?.query || "");

  let data: any = null;

  if (queryStr.includes("homePage")) {
    data = mockHomePage;
  } else if (queryStr.includes("navbar")) {
    data = mockNavbar;
  } else if (queryStr.includes("footer")) {
    data = mockFooter;
  } else if (queryStr.includes("settings")) {
    data = mockSettings;
  } else if (queryStr.includes("category")) {
    data = mockCategories;
  } else if (queryStr.includes("startup")) {
    data = mockStartups;
  } else if (queryStr.includes("sitemap")) {
    data = {
      slugPages: [],
      blogPages: [],
      startupPages: [],
      categoryPages: []
    };
  } else {
    data = [];
  }

  return { data };
};

export const SanityLive = () => null;
