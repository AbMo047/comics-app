export type Comic = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  issueNumber?: number;
  description?: string | null;
  pageCount?: number;
  backgroundColor?: string;
  textColor?: string;
  dropShadow?: string;
  message?: string;
};
