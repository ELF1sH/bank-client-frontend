import { NavigateFunction } from 'react-router-dom';

interface History {
  navigate: NavigateFunction | undefined;
}

export const history: History = {
  navigate: undefined,
};
