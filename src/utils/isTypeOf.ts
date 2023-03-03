type TypeOfTypes = {
  string: string;
  number: number;
  boolean: boolean;
  undefined: undefined;
};

export const isTypeOf = <V extends TypeOfTypes[T], T extends keyof TypeOfTypes>(
  value: unknown,
  type: T
): value is V => typeof value === type;
