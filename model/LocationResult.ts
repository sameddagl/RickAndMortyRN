export type LocationResult = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Location[];
};

export type Location = {
  id: Number;
  name: String;
  residents: [String];
};
