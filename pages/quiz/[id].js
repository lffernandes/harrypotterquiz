/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/scrrens/Quiz';

// eslint-disable-next-line react/prop-types
export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
      // eslint-disable-next-line react/prop-types
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObj) => respostaConvertidaEmObj);
    // .catch((err) => {
    //   console.error(err);
    // });

    // console.log('', dbExterno);
    return {
      props: {
        dbExterno,

      },
    };
  } catch (err) {
    throw new Error('Falha em pegar os dados');
  }
}
