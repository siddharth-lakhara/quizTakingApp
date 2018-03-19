const server = require('../src/server');
const getAllQuestions = require('../routes/Handlers/getQuestions');


describe('Get all questions', () => {
  const verifyJSON = {
    allQuestions: [
      {
        question: 'What is the capital of India',
        questionId: 12,
        option1: 'New Delhi',
        option2: 'MP',
        option3: 'UP',
        option4: 'Bangalore',
      },
      {
        question: 'What is the capital of Afghanistan',
        questionId: 23,
        option1: 'Kabul',
        option2: 'Tirana',
        option3: 'Algiers',
        option4: 'Andorra la Vella',
      },
      {
        question: 'What is the capital of Marshall Islands',
        questionId: 45,
        option1: 'Kabul',
        option2: 'Antananarivo',
        option3: 'Majuro',
        option4: 'Andorra la Vella',
      },
      {
        question: 'What is the capital of Micronesia',
        questionId: 56,
        option1: 'Palikir',
        option2: 'Antananarivo',
        option3: 'Majuro',
        option4: 'Andorra la Vella',
      },
      {
        question: 'What is the capital of Monaco',
        questionId: 67,
        option1: 'Palikir',
        option2: 'Monaco',
        option3: 'Majuro',
        option4: 'Andorra la Vella',
      },
    ],
  };

  test('replies all questions', (done) => {
    const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
    getAllQuestions(url).then((res) => {
      expect(res).toEqual(verifyJSON);
      done();
    }).catch((err) => {
      console.log('Error: ', err);
    });
  });

  test('associated route gives 200', (done) => {
    server.inject('/dev/questions', (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});

// describe('Get all answers', () => {
//   test();

//   test();
// });
