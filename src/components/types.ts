 export type TData = {
  id?:string
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};
export interface TBlogFormProps {
    defaultValues?: TData
    onSubmit: (data:TData) => void;
  }
