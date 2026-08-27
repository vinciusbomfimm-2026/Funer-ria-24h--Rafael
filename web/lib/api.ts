import {
  DEPOIMENTOS_FALLBACK,
  FAQ_FALLBACK,
  SERVICOS_FALLBACK,
  type Depoimento,
  type FaqItem,
  type Servico,
} from "@/lib/content";

const API_URL = process.env.API_URL ?? "http://localhost:3333";

async function safeFetch<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return fallback;
    const data = (await res.json()) as T;
    if (Array.isArray(data) && data.length === 0) return fallback;
    return data;
  } catch {
    return fallback;
  }
}

export function getServicos(): Promise<Servico[]> {
  return safeFetch("/servicos", SERVICOS_FALLBACK);
}

export function getDepoimentos(): Promise<Depoimento[]> {
  return safeFetch("/depoimentos", DEPOIMENTOS_FALLBACK);
}

export function getFaq(): Promise<FaqItem[]> {
  return safeFetch("/faq", FAQ_FALLBACK);
}
