export type FAQItem = { question: string; answer: string };
export type Treatment = {
  slug: string; name: string; short: string; category: 'Facial' | 'Capilar' | 'Facial y capilar';
  icon: 'face' | 'syringe' | 'lotus' | 'sparkles';
  description: string; indication: string; benefits: string[]; procedure: string; results: string; faqs: FAQItem[]; related?: string[];
};
export type Article = { slug: string; title: string; description: string; date: string; category: string; reading: string; sections: { heading: string; text: string }[]; treatments: string[]; source: { title: string; url: string } };
