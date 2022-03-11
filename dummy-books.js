const DUMMY_BOOKS = [
  {
    id: 'b1',
    title: 'Light Perpetual',
    author: 'Francis Spufford',
    picture: '/images/light-perpetual.jpg',
    format: 'Paperback | 336 pages',
    publishedDate: '2022-02-03',
    description: `Francis Spufford is the author of five highly-praised works of non-fiction, most frequently described by reviewers as either 'bizarre' or 'brilliant', and usually as both. His debut novel Golden Hill won the Costa First Novel Award, the RSL Ondaatje Prize, the Desmond Elliott Prize, and was shortlisted for the Walter Scott Prize for Historical Fiction, the Rathbones Folio Prize, the Authors' Club Best First Novel Award and the British Book Awards Debut Novel of the Year. In 2007 he was elected a Fellow of the Royal Society of Literature. He teaches writing at Goldsmiths College, University of London, and lives near Cambridge.`,
  },
  {
    id: 'b2',
    title: 'Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    picture: '/images/seven-husbands.jpg',
    format: 'Paperback | 400 pages',
    publishedDate: '2021-10-14',
    description: `Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?`,
  },
  {
    id: 'b3',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    picture: '/images/the-midnight-library.jpg',
    format: 'Paperback | 304 pages',
    publishedDate: '2021-02-18',
    description: `Nora's life has been going from bad to worse. Then at the stroke of midnight on her last day on earth she finds herself transported to a library. There she is given the chance to undo her regrets and try out each of the other lives she might have lived. Which raises the ultimate question: with infinite choices, what is the best way to live?`,
  },
  {
    id: 'b4',
    title: 'Galatea',
    author: 'Madeline Miller',
    picture: '/images/galatea.jpg',
    format: 'Hardback | 64 pages',
    publishedDate: '2022-03-03',
    description: `In Ancient Greece, a skilled marble sculptor has been blessed by a goddess who has given his masterpiece - the most beautiful woman the town has ever seen - the gift of life. Now his wife, he expects Galatea to please him, to be obedience and humility personified. But she has desires of her own, and yearns for independence.`,
  },
  {
    id: 'b5',
    title: 'The Children of Jocasta',
    author: 'Natalie Haynes',
    picture: '/images/the-children-of-jocasta.jpg',
    format: 'Paperback | 352 pages',
    publishedDate: '2021-06-01',
    description: `From Natalie Haynes, the Women's Prize shortlisted author of A Thousand Ships, comes The Children of Jocasta, a retelling of Oedipus and Antigone from the perspectives of the women the myths overlooked.`,
  },
  {
    id: 'b6',
    title: 'Ugly Love',
    author: 'Colleen Hoover',
    picture: '/images/ugly-love.jpg',
    format: 'Paperback | 352 pages',
    publishedDate: '2016-01-21',
    description: `When Tate Collins finds airline pilot Miles Archer passed out in front of her apartment door, it is definitely not love at first sight. They wouldn't even go so far as to consider themselves friends. But what they do have is an undeniable mutual attraction.`,
  },
];

export const getBook = (id) => {
  return DUMMY_BOOKS.filter((book) => book.id === id);
};

export default DUMMY_BOOKS;
