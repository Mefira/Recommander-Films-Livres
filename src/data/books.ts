export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string[];
  rating: number;
  year: number;
  description: string;
  imageUrl: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    genre: ["Science-Fiction", "Fantasy"],
    rating: 8.9,
    year: 1965,
    description: "Dans un futur lointain, le duc Leto Atréides reçoit la gestion de la planète désertique Arrakis, unique source de l'épice, la substance la plus précieuse de l'univers.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: ["Science-Fiction", "Dystopie"],
    rating: 8.8,
    year: 1949,
    description: "Dans un monde totalitaire, Winston Smith tente de maintenir son humanité tout en vivant sous une surveillance constante.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg"
  },
  {
    id: 3,
    title: "Le Comte de Monte-Cristo",
    author: "Alexandre Dumas",
    genre: ["Aventure", "Drame", "Romance"],
    rating: 8.7,
    year: 1844,
    description: "Edmond Dantès, injustement emprisonné, s'évade et entreprend une vengeance minutieusement préparée.",
    imageUrl: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "L'Enfant noir",
    author: "Camara Laye",
    genre: ["Autobiographie", "Littérature africaine"],
    rating: 8.1,
    year: 1953,
    description: "Récit autobiographique de l'enfance de l'auteur en Guinée, évoquant les traditions, la famille et l'initiation dans la culture malinké.",
    imageUrl: "https://m.media-amazon.com/images/I/51QJ5XZVQ5L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 5,
    title: "Americanah",
    author: "Chimamanda Ngozi Adichie",
    genre: ["Fiction", "Drame", "Romance"],
    rating: 8.3,
    year: 2013,
    description: "L'histoire d'Ifemelu, une jeune Nigériane qui émigre aux États-Unis pour ses études et découvre les questions de race et d'identité.",
    imageUrl: "https://m.media-amazon.com/images/I/91lU2IXFZFL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 6,
    title: "Harry Potter à l'école des sorciers",
    author: "J.K. Rowling",
    genre: ["Fantasy", "Jeunesse"],
    rating: 8.2,
    year: 1997,
    description: "Harry Potter découvre le jour de ses 11 ans qu'il est un sorcier et qu'il est accepté à Poudlard, l'école de sorcellerie.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg"
  },
  {
    id: 7,
    title: "Le Seigneur des Anneaux",
    author: "J.R.R. Tolkien",
    genre: ["Fantasy", "Aventure"],
    rating: 9.0,
    year: 1954,
    description: "Frodon Sacquet hérite d'un anneau magique et doit entreprendre un périlleux voyage pour le détruire et sauver la Terre du Milieu.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
  },
  {
    id: 8,
    title: "Orgueil et Préjugés",
    author: "Jane Austen",
    genre: ["Romance", "Classique", "Drame"],
    rating: 8.6,
    year: 1813,
    description: "Elizabeth Bennet navigue dans les complexités de l'amour, de la réputation et de la classe sociale dans l'Angleterre du 19ème siècle, particulièrement dans sa relation tumultueuse avec M. Darcy.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg"
  },
  {
    id: 9,
    title: "Cent ans de solitude",
    author: "Gabriel García Márquez",
    genre: ["Réalisme magique", "Fiction", "Classique"],
    rating: 8.5,
    year: 1967,
    description: "L'histoire multi-générationnelle de la famille Buendía dans le village fictif de Macondo, mêlant réalisme et éléments fantastiques dans une œuvre emblématique du réalisme magique.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg"
  }
];