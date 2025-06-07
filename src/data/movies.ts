export interface Movie {
  id: number;
  title: string;
  genre: string[];
  rating: number;
  year: number;
  director: string;
  actors: string[];
  description: string;
  imageUrl: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Mission: Impossible - Fallout",
    genre: ["Action", "Aventure", "Thriller"],
    rating: 7.7,
    year: 2018,
    director: "Christopher McQuarrie",
    actors: ["Tom Cruise", "Henry Cavill", "Ving Rhames"],
    description: "Ethan Hunt et son équipe IMF se lancent dans une course contre la montre après qu'une mission a mal tourné.",
    imageUrl: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg"
  },
  {
    id: 2,
    title: "Top Gun: Maverick",
    genre: ["Action", "Drame"],
    rating: 8.3,
    year: 2022,
    director: "Joseph Kosinski",
    actors: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
    description: "Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine, Pete 'Maverick' Mitchell est à sa place.",
    imageUrl: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
  },
  {
    id: 3,
    title: "Le Loup de Wall Street",
    genre: ["Comédie", "Drame", "Crime"],
    rating: 8.2,
    year: 2013,
    director: "Martin Scorsese",
    actors: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
    description: "L'histoire vraie de Jordan Belfort, depuis son ascension jusqu'à sa chute à Wall Street.",
    imageUrl: "https://image.tmdb.org/t/p/w500/zBXAjVyXJNhLXwEHD2IJP7QiHft.jpg"
  },
  {
    id: 4,
    title: "Black Panther",
    genre: ["Action", "Aventure", "Science-Fiction"],
    rating: 7.3,
    year: 2018,
    director: "Ryan Coogler",
    actors: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
    description: "T'Challa, héritier du royaume caché mais avancé du Wakanda, doit intervenir pour diriger son peuple vers un nouvel avenir.",
    imageUrl: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
  },
  {
    id: 5,
    title: "La Nuit des Rois",
    genre: ["Drame", "Crime"],
    rating: 7.1,
    year: 2020,
    director: "Philippe Lacôte",
    actors: ["Bakary Koné", "Steve Tientcheu", "Digbeu Jean Cyrille"],
    description: "Un jeune homme est envoyé à la prison de La Maca en Côte d'Ivoire. Pour survivre à sa première nuit, il doit raconuter une histoire à ses codétenus.",
    imageUrl: "https://image.tmdb.org/t/p/w500/4oF4EkZB1pHfYw7ky9Yh5sJqNl3.jpg"
  },
  {
    id: 6,
    title: "Avatar: La Voie de l'eau",
    genre: ["Action", "Aventure", "Science-Fiction"],
    rating: 7.6,
    year: 2022,
    director: "James Cameron",
    actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    description: "Jake Sully vit avec sa nouvelle famille formée sur la planète Pandora. Lorsqu'une menace familière revient pour finir ce qui avait été commencé, Jake doit travailler avec Neytiri et l'armée de la race Na'vi pour protéger leur planète.",
    imageUrl: "https://image.tmdb.org/t/p/w500/94xxm5701CzOdJdUEdIuwqZaowx.jpg"
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    genre: ["Action", "Aventure", "Science-Fiction"],
    rating: 8.4,
    year: 2019,
    director: "Anthony Russo, Joe Russo",
    actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    description: "Après les événements dévastateurs d'Avengers: Infinity War, l'univers est en ruines. Avec l'aide d'alliés restants, les Avengers s'assemblent une fois de plus afin d'inverser les actions de Thanos et de rétablir l'ordre dans l'univers.",
    imageUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  }
];