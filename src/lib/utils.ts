import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return format(date, "PPP", { locale: es })
}