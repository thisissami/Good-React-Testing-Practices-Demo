export type LibDetails = {
  name: string;
  description: string;
};

type Libraries = Record<string, LibDetails>;

const libraries: Libraries = {
  redux: {
    name: 'Redux',
    description: 'Redux is used to manage state for complex React applications.'
  }
}

export default libraries;
