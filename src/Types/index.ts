export type WebsiteInfo = {
  title?: string;
  description?: string;
};

export type PublicationType = {
  id: string;
  name?: string;
};

export type AnArchiveType = {
  id: string;
  name?: string;
};

export type Publication = {
  id: string;
  title?: string;
  description?: string;
  link?: string;
  date?: string;
};

export type AnArchive = {
  id: string;
  title?: string;
  description?: string;
  link?: string;
  date?: string;
  content?: EditorContent;
  externalLink?: string;
  file?: string;
};

export type AVenir = {
  id: string;
  title?: string;
  description?: string;
  date?: string;
  coverImage?: string;
  content?: EditorContent;
};

export type Presse = {
  id: string;
  title?: string;
  link?: string;
  outlet?: string;
  description?: string;
  date?: string;
};

export enum BlockType {
  paragraph = "paragraph",
  header = "header",
  list = "list",
  mediaLib = "mediaLib",
  delimiter = "delimiter"
}

export type BaseBlock = {
  id: string;
};

export type ParagraphBlock = BaseBlock & {
  type: BlockType.paragraph;
  data: {
    text: string;
  };
};

export type HeaderBlock = BaseBlock & {
  type: BlockType.header;
  data: {
    text: string;
    level: 1 | 2 | 3 | 4 | 5;
  };
};

export type MediaLibBlock = BaseBlock & {
  type: BlockType.mediaLib;
  data: {
    name: string;
  };
};

export type ListBlock = BaseBlock & {
  type: BlockType.list;
  data: {
    items: string[];
    style: "ordered" | "unordered";
  };
};

export type DelimiterBlock = BaseBlock & {
  type: BlockType.delimiter;
};

export type EditorBlock =
  | ParagraphBlock
  | HeaderBlock
  | ListBlock
  | MediaLibBlock
  | DelimiterBlock;

export type EditorContent = {
  blocks: EditorBlock[];
};

export type HomePage = {
  content?: EditorContent;
  title?: string;
};

export type ContactPage = {
  content?: EditorContent;
  title?: string;
  confirmationEnvoi?: string;
  messageBouton?: string;
};

export type AcademiquePage = {
  content?: EditorContent;
  title?: string;
};

export type EmailParameters = {
  senderEmail: string;
  senderMessage: string;
  senderName: string;
};
