import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount)
}

export function formatDate(dateString: Date | string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("fr-FR").format(date)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
