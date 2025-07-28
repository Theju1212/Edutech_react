const courseImageMap = {
  mathematics: 'mathematics.jpg',
  physics: 'physics.jpeg',
  chemistry: 'chemistry.png',
  biology: 'biology.jpeg',
  english: 'english.jpeg',

  java: 'java.png',
  python: 'python.png',
  c: 'c.jpeg',
  cpp: 'cpp.jpeg',
  html: 'html.png',
  css: 'css.png',
  javascript: 'javascript.png',

  msexcel: 'msexcel.jpeg',
  ai: 'ai.jpeg',
  generativeai: 'generativeai.jpeg',
  leadership: 'leadership.png',
  communicationskills: 'communicationskills.jpeg',
};

const getCourseImageSrc = (course) => {
  const folder = course.category === 'Academic' ? 'academic' : 'skill';
  const key = course.title.toLowerCase().replace(/\+\+/g, 'pp').replace(/\s+/g, '');
  const file = courseImageMap[key];
  return file
    ? `${process.env.PUBLIC_URL}/images/courses/${folder}/${file}`
    : `${process.env.PUBLIC_URL}/images/placeholder.png`;
};

export default getCourseImageSrc;
