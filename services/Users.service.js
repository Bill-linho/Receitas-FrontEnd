const url = 'http://localhost:3000'

export async function getUsers() {
    const request = `${url}/usuarios`;
  
    try {
      const response = await fetch(request, { method: 'GET' });
      const data = await response.json();
      return data.data;
    } catch (e) {
      console.error('Erro ao buscar receitas:', e);
      return [];
    }
  }

export async function createUsers(user) {
  const request = `${url}/usuarios`;
  
  try {
    const response = await fetch(request, { method: 'POST', headers:{ 'Content-Type':'application/json'}, body: JSON.stringify(user) });
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error('Faz o L', e);
    return [];
  }
}
