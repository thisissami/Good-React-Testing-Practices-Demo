export type LibDetails = {
  name: string;
  description: string;
};

type Libraries = Record<string, LibDetails>;

const libraries: Libraries = {
  reactTestingLib: {
    name: 'React Testing Library',
    description: 'This is the best library for creating effective tests that give you confidence in your React application.'
  },
  jest: {
    name: 'Jest',
    description: 'This is a test runner for running your tests. It has an amazing interactive watch mode.'
  },
  emotion: {
    name: 'Emotion',
    description: 'Wow! CSS has never been so fun!! Or easy!! Or powerful!!'
  },
  reach: {
    name: 'Reach Router',
    description: 'This is a new routing library by the React Router creators, with a big focus on accessibility. This library'
      + 'will soon be deprecated in favor of a newer version of React Router, which will use Reach Router\'s API.'
  },
  redux: {
    name: 'Redux',
    description: 'Redux is often used to manage state for complex React applications.'
  },
  reduxSaga: {
    name: 'Redux Saga',
    description: 'Redux Saga is a very powerful library for managing complex asynchronous requests within Redux. Generators baby!!'
  },
  spinners: {
    name: 'React Spinners',
    description: 'This is a nice collection of loading animations to use when your components are fetching data. It even comes with a `PacmanLoader`!'
  },
  reakit: {
    name: 'Reakit',
    description: 'Reakit is a UI framework that focuses on accessibility. While not as extensive as Material UI or Ant Design, it is powerful, composable, customizable, and accessible.',
    website: 'https://reakit.io/'
  }
}

export default libraries;
