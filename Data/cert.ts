export type CertItem = {
  id: number
  title: string
  href: string
  description: string
  date: string
  datetime: string
  category: { title: string; org: string }
  author: { href: string; imageUrl: string; cersimage: string }
  skills: string[]
}

export const cers = [
  {
    id: 1,
    title: 'Supervised Machine Learning: Regression and Classification',
    href: 'https://coursera.org/share/1c1244c494a980fd62448707b52a2cab',
    description:
      'Principles of supervised machine learning By in-depth look at regression and classification methods. Gain practical skills in model training and evaluation. Learn to use algorithms for predictive analytics.',
    date: 'October 2022',
    datetime: '2020-03-16',
    category: { title: 'Coursera', org: 'DeepLearning.AI' },
      author: {
      href: '#',
      imageUrl:
          '/icon/coursera.png',
      cersimage: '/cert/cer_deepai.jpeg',
  },
    skills: ["Linear Regression", 
    "Regularization to Avoid Overfitting", 
    "Logistic Regression for Classification",
    "Gradient Descent",
    "Supervised Learning",
  ],
  },
   {
    id: 2,
    title: 'Technical Support Fundamentals',
    href: 'https://coursera.org/share/116e66fe61fc085dd32998deaf5dfabe',
    description:
      'gain expertise in Technical Support Fundamentals, mastering troubleshooting, effective customer communication, and problem-solving techniques. Develop a strong foundation in hardware and software support',
    date: 'October 2022',
    datetime: '2020-03-16',
    category: { title: 'Coursera', org: 'Google' },
    author: {
      href: '#',
      imageUrl:
        '/icon/coursera.png',
      cersimage: '/cert/cer_googleit.jpeg',
    },
    skills: ["Binary Code", "Customer Support", "Linux","Troubleshooting"],
  },
  {
    id: 3,
    title: 'Build LookML Objects in Looker',
    href: 'https://www.cloudskillsboost.google/public_profiles/4070637f-c92e-424f-a35e-c071938698cf/badges/9421029',
    description:
      'Certificate in "Build LookML Objects in Looker" validates proficiency in constructing LookML models within Looker, empowering data analysts to create robust data models for business intelligence.',
    date: 'June 2024',
    datetime: '2020-03-16',
    category: { title: 'Google', org: 'Google Cloud' },
    author: {
      href: '#',
      imageUrl:
        '/icon/google1.jpg',
      cersimage: '/cert/cer_lookml.png',
    },
    skills: ["ML", "AI", "LookML","SQL","Data Analysis","Data Visualization"],
  },
  ]
