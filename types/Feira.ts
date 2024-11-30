type TypeFeira = {
  id: string;
  nome: string;
  endereco: string;
  numero: string;
  cidade: string;
  horario: string;
  data: string;
  descricao: string;
  imagem: string;
  tags: {
    id: string;
    nome: string;
  }[];
  diaSemana: {
    id: string;
    dia: string;
  }[];
  userId: string;
  nota: number;
};