export type RootStackParamList = {
  Home: undefined;
  Routine: {routine: {id: string; name: string; time: string; days: string}};
  CreateRoutine: undefined;
  CreateTask: {routineId: string};
};
