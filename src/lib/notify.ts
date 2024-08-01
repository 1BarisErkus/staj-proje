import { toast, TypeOptions } from "react-toastify";

export const notify = (message: string, type: string) =>
  toast(message, { type: type as TypeOptions });
