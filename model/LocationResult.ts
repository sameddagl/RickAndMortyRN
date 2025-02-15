export type LocationResult = {
  info: {
    next: string | null;
  };
  results: Location[];
};

export type Location = {
  id: number;
  name: string;
  residents: [string];
};
