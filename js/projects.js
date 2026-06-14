/**
 * Central project data store.
 * Add new projects here; the homepage and detail pages read from this file.
 */
const PROJECTS = [
  {
    id: 'marvel-rivals-analytics',
    slug: 'marvel-rivals-analytics',
    inDevelopment: true,
    title: 'Marvel Rivals Analytics',
    description:
      ' ',
    technologies: [''],
    image: 'assets/images/projects/marvel-rivals-analytics.png',
    demoUrl: 'https://example.com/marvel-rivals-demo',
    videoUrl: null,
    overview:
      'Marvel Rivals Analytics aggregates match and player data into an interactive dashboard for exploring meta trends and personal performance over time.',
    problemStatement:
      'Competitive players lacked a simple way to visualize hero win rates, team compositions, and personal stats outside of in-game leaderboards.',
    architecture:
      'Python scripts ingest match logs into SQLite. A lightweight static frontend queries precomputed JSON exports and renders charts with Plotly.',
    features: [
      'Hero and role performance breakdowns',
      'Match history timeline with filters',
      'Exportable CSV reports',
      'Responsive chart layouts for mobile',
    ],
  },
  {
    id: 'connections-word-game',
    slug: 'connections-word-game',
    title: 'Connections Word Game Clone',
    description:
      'Inspired by the New York Times Connections game, this is a word puzzle game where players group sixteen words into four hidden categories before running out of mistakes.',
    technologies: ['Java', 'JavaScript', 'React', 'Spring Boot', 'Supabase', 'Vercel'],
    image: 'assets/images/projects/connections-word-game.png',
    demoUrl: 'https://connections-jk4e.vercel.app/',
    videoUrl: 'https://youtu.be/TJVDA_2iA8w?si=_dRE1GXvf1boHjyu',
    overview:
      'Make 4 categories out of related words! Create your own puzzle and share it with your friends.',
    problemStatement:
      'I wanted to make my own Connections game to share with my friends and family.',
    architecture:
      'Frontend logic handled with React and Spring Boot for the backend connected with REST API calls. Puzzles and auth through Supabase.',
    features: [
      'Four-category grouping with mistake limits',
      'Create your own puzzles',
      'Login not required',
      'Edge-case handling for duplicate words, character limits, and more',
    ],
  },
  {
    id: 'music-streaming-database',
    slug: 'music-streaming-database',
    title: 'Music Streaming Service Database System',
    description:
      'A relational database design and query layer for a hypothetical music streaming platform.',
    technologies: ['MySQL', 'ER Diagrams'],
    image: 'assets/images/projects/music-streaming-database.png',
    demoUrl: 'https://example.com/music-db-demo',
    videoUrl: null,
    overview:
      'End-to-end database project for a music streaming platform, covering schema design, normalization, and analytical queries, and more.',
    problemStatement:
      'I wanted to design a database from scratch to understand the concepts of database design, normalization, complex queries, indexing, and more.',
    architecture:
      'MySQL hosts the schema, functions, stored procedures, views, and queries.', 
    features: [
      'Enhanced entity relationship diagram',
      'Relational Schema, Physical Database Schema, and Unhandled Constraints',
      'Implemented views, procedures, and functions',
    ],
  },
  {
    id: 'global-housing-market',
    slug: 'global-housing-market',
    title: 'Global Housing Market Analysis',
    description:
      'Exploratory analysis of international housing prices, affordability indices, and regional trends over time.',
    technologies: ['Python', 'PostgreSQL', 'pandas', 'Jupyter', 'scikit-learn'],
    image: 'assets/images/projects/global-housing-market.png',
    demoUrl: 'https://github.com/emrealtcs/global_housing_market_analysis',
    videoUrl: 'https://youtu.be/4VlvOIZf8cY?si=vf6ChMMwiA0Bf2ru',
    overview:
      'A research-style project comparing housing metrics across countries using public datasets, tested and trained with scikit-learn using target encoding, time series analysis, and clustering.',
    problemStatement:
      'How are the housing markets comparing across countries before and after COVID?.',
    architecture:
      'PostgreSQL local hosting for data, Jupyter Notebook/Python for analysis with matplotlib and seaborn for visualization.',
    features: [
      'Exploratory data analysis with matplotlib and seaborn',
      'Multi-stage Machine Learning Pipeline with scikit-learn',
      'Trends visualized with matplotlib and seaborn',
      'Overall Housing Price Index comparisons and predictions.',
    ],
  },
  {
    id: 'spotify-wrapped-clone',
    slug: 'spotify-wrapped-clone',
    title: 'Spotify Wrapped Clone',
    description:
      'A review of users Spotify listening history: top artists, genres, and listening minutes',
    technologies: ['Android', 'Java', 'Spotify API', 'Firebase'],
    image: 'assets/images/projects/spotify-wrapped-clone.png',
    demoUrl: 'https://github.com/emrealtcs/Echo-Fusion-Spotify',
    videoUrl: null,
    overview:
      'A Spotify Wrapped–style mobile application that walks users through personalized listening highlights.',
    problemStatement:
      'Building a full-scale application utilizing public APIs.',
    architecture:
      'Android Studio for Android mobile applications and firebase storage',
    features: [
      'Analysis of Top artists, tracks, and genres for multiple time periods',
      'Total minutes and discovery stats',
      'Album/Song guessing game',
      'Animated results.',
    ],
  },
  {
    id: 'my-gt-journey',
    slug: 'my-gt-journey',
    title: 'My GT Journey',
    description:
      'A personalized map view of Georgia Techs campus based on user foot traffic.',
    technologies: ['Android', 'Java', 'Google Cloud Platform'],
    image: 'assets/images/projects/my-gt-journey.png',
    demoUrl: 'https://example.com/gt-journey-demo',
    videoUrl: null,
    overview:
      'A timeline-based journey across campus, with exploratory artwork recap ',
    problemStatement:
      'How can time sensitive data, such as location, be tracked and visualized artistically?',
    architecture:
      'Android application with Google based location tracking, static storage.',
    features: [
      'Map view of personal foot traffic',
      'Persistant background tracking',
      'Artistic display of location, algorithmically.',
    ],
  },
];

/**
 * Find a project by its URL slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
