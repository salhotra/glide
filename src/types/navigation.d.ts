import {Days} from '../constants';

export type RootStackParamList = {
  Home: undefined;
  Routine: {
    routine: {id: string; name: string; time: string; days: typeof Days};
  };
  CreateRoutine: {
    startPoint?: string;
  };
  CreateTask: {routineId: string};
  StartPoint: undefined;
};
