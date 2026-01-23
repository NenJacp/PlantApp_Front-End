import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const PUBLIC_API_BASE_URL = 'http://localhost:5247';

export const load: PageServerLoad = async ({ params, fetch }) => {
  const statusParam = params.status;
  const status = Number(statusParam);

  if (!status || Number.isNaN(status)) {
    throw error(400, 'Parámetro de status inválido');
  }

  const res = await fetch(`${PUBLIC_API_BASE_URL}/api/test-errors/${status}`);

  // Si la API devuelve error, lanzamos el error para que lo capture +error.svelte
  if (!res.ok) {
    throw error(res.status, `Error generado desde la API con status ${res.status}`);
  }

  // Si por alguna razón la API responde OK, devolvemos datos "normales"
  return {
    status,
    ok: true
  };
};

