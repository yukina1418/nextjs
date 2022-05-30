import { ChangeEvent, RefObject } from "react";

export interface IUploads02Props {
  data?: any;
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploads02UIProps {
  fileRef: RefObject<HTMLInputElement>;
  data: string;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
