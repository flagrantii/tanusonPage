export interface webJson {
    id: number;
    title: string;
    href: string;
    description: string;
    date: string;
    datetime: string;
    category: { title: string; href: string };
    author: {
        name: string;
        role: string;
        href: string;
        imageUrl: string;
    }
}

export interface certJson {
        id: number;
        title: string;
        href: string;
        description: string;
        date: string;
        datetime: string;
        category: { title: string; org: string };
          author: {
          name: string;
          role: string;
          href: string;
          imageUrl:
                string;
          cersimage: string;
      },
        skills: string[];
}

export interface careerJson {
        id: number;
        company: string;
        href: string;
        description: string;
        date: string;
        role: string;
        location: string;
        img: string;
}

export interface eduJson {
    id: number;
    company: string;
    href: string;
    description: string;
    date: string;
    role: string;
    location: string;
    img: string;
}