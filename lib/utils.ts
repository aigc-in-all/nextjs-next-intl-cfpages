import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development"
}

export function getDomain(): string {
  return process.env.NEXT_PUBLIC_DOMAIN || "localhost"
}