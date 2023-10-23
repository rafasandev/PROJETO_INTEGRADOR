import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavDataService {
  monitorsList: any = [
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Alice',
      course: 'Biomedicina',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Bob',
      course: 'Ciência de Dados e Inteligência Artificial',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Carla',
      course: 'Ciências Biológicas (Bacharelado)',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Daniel',
      course: 'Ciências Biológicas (Licenciatura)',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Eduarda',
      course: 'Educação Física - Bacharelado',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Felipe',
      course: 'Educação Física - Licenciatura',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Gabriela',
      course: 'Enfermagem',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Hugo',
      course: 'Engenharia Agronômica',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Isabela',
      course: 'Engenharia Ambiental',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'João',
      course: 'Engenharia Civil',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Karina',
      course: 'Engenharia da Computação',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Lucas',
      course: 'Engenharia de Alimentos',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Mariana',
      course: 'Engenharia de Bioprocessos e Biotecnologia',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Natalia',
      course: 'Engenharia de Controle e Automação',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Otávio',
      course: 'Engenharia de Produção',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Patrícia',
      course: 'Engenharia Elétrica',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Rafael',
      course: 'Engenharia Mecânica',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Sandra',
      course: 'Engenharia Química',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Thiago',
      course: 'Estética e Cosmética',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Valentina',
      course: 'Farmácia',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'William',
      course: 'Fisioterapia',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Xavier',
      course: 'Fonoaudiologia',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Yasmin',
      course: 'Medicina Veterinária',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Zoe',
      course: 'Nutrição',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'André',
      course: 'Odontologia',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Bianca',
      course: 'Psicologia',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Carlos',
      course: 'Terapia Ocupacional',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Diana',
      course: 'Química',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Elias',
      course: 'Química Industrial',
    },
    {
      image: '/assets/img/back-test.png',
      rate: '4',
      name: 'Fernanda',
      course: 'Biologia Molecular',
    },
  ];

  coursesList: any = [
    { image: '', rate: '4', name: 'Administração', id: 1 },
    { name: 'ADS', id: 2 },
    { name: 'Arquitetura e Urbanismo', id: 3 },
    { name: 'Artes Visuais', id: 4 },
    { name: 'Biomedicina', id: 5 },
    { name: 'Ciência de Dados', id: 6 },
    { name: 'Ciências Biológicas', id: 8 },
    { name: 'Ciências Contábeis', id: 9 },
    { name: 'Ciências Econômicas', id: 10 },
    { name: 'Comércio Exterior', id: 11 },
    { name: 'Dança', id: 12 },
    { name: 'Design', id: 13 },
    { name: 'Design de Interiores', id: 14 },
    { name: 'Direito', id: 15 },
    { name: 'Educação Física', id: 16 },
    { name: 'Enfermagem', id: 18 },
    { name: 'Engenharia Agronômica', id: 19 },
    { name: 'Engenharia Ambiental', id: 20 },
    { name: 'Engenharia Civil', id: 21 },
    { name: 'Engenharia da Computação', id: 22 },
    { name: 'Engenharia de Alimentos', id: 23 },
    { name: 'Engenharia de Bioprocessos', id: 24 },
    { name: 'Engenharia de Controle', id: 25 },
    { name: 'Engenharia de Produção', id: 26 },
    { name: 'Engenharia Elétrica', id: 27 },
    { name: 'Engenharia Mecânica', id: 28 },
    { name: 'Engenharia Química', id: 29 },
    { name: 'Estética e Cosmética', id: 30 },
    { name: 'Farmácia', id: 31 },
    { name: 'Filosofia', id: 32 },
    { name: 'Fisioterapia', id: 33 },
    { name: 'Fonoaudiologia', id: 34 },
    { name: 'Gastronomia', id: 35 },
    { name: 'Gestão Comercial', id: 36 },
    { name: 'Gestão da Qualidade', id: 37 },
    { name: 'Gestão de Equinocultura', id: 38 },
    { name: 'Gestão de Recursos Humanos', id: 39 },
    { name: 'Gestão Financeira', id: 40 },
    { name: 'História', id: 41 },
    { name: 'Hotelaria', id: 42 },
    { name: 'Jogos Digitais', id: 43 },
    { name: 'Jornalismo', id: 44 },
    { name: 'Letras: Português/Inglês', id: 45 },
    { name: 'Logística', id: 46 },
    { name: 'Marketing', id: 47 },
    { name: 'Matemática', id: 48 },
    { name: 'Medicina Veterinária', id: 49 },
    { name: 'Moda', id: 50 },
    { name: 'Música', id: 51 },
    { name: 'Nutrição', id: 52 },
    { name: 'Odontologia', id: 53 },
    { name: 'Pedagogia', id: 54 },
    { name: 'Processos Gerenciais', id: 55 },
    { name: 'Psicologia', id: 56 },
    { name: 'Publicidade e Propaganda', id: 57 },
    { name: 'Química', id: 58 },
    { name: 'Química Industrial', id: 59 },
    { name: 'Relações Internacionais', id: 60 },
    { name: 'Relações Públicas', id: 61 },
    { name: 'Teatro', id: 62 },
    { name: 'Terapia Ocupacional', id: 63 },
  ];

  categoryList: any = [
    { name: 'Física', id: 1 },
    { name: 'Programação', id: 2 },
    { name: 'Química', id: 3 },
    { name: 'Matemática Financeira', id: 4 },
    { name: 'Biologia Molecular', id: 5 },
    { name: 'Estatística', id: 6 },
    { name: 'Bioquímica', id: 7 },
    { name: 'Anatomia Humana', id: 8 },
    { name: 'Contabilidade', id: 9 },
    { name: 'Economia Brasileira', id: 10 },
    { name: 'Comércio Internacional', id: 11 },
    { name: 'Expressão Corporal', id: 12 },
    { name: 'Design Gráfico', id: 13 },
    { name: 'Decoração de Interiores', id: 14 },
    { name: 'Legislação Penal', id: 15 },
    { name: 'Fisiologia do Exercício', id: 16 },
    { name: 'Metodologia do Ensino', id: 17 },
    { name: 'Enfermagem Geriátrica', id: 18 },
    { name: 'Agronomia Tropical', id: 19 },
    { name: 'Gestão Ambiental', id: 20 },
    { name: 'Engenharia Estrutural', id: 21 },
    { name: 'Redes de Computadores', id: 22 },
    { name: 'Tecnologia de Alimentos', id: 23 },
    { name: 'Engenharia Genética', id: 24 },
    { name: 'Automatização Industrial', id: 25 },
    { name: 'Logística de Produção', id: 26 },
    { name: 'Eletrônica Industrial', id: 27 },
    { name: 'Termodinâmica Aplicada', id: 28 },
    { name: 'Engenharia Química Industrial', id: 29 },
    { name: 'Estética Avançada', id: 30 },
    { name: 'Farmacologia Clínica', id: 31 },
    { name: 'Ética Filosófica', id: 32 },
    { name: 'Reabilitação Fisioterapêutica', id: 33 },
    { name: 'Audiologia Clínica', id: 34 },
    { name: 'Gastronomia Internacional', id: 35 },
    { name: 'Administração de Vendas', id: 36 },
    { name: 'Controle de Qualidade', id: 37 },
    { name: 'Criação de Equinos', id: 38 },
    { name: 'Gestão de Pessoas', id: 39 },
    { name: 'Finanças Corporativas', id: 40 },
    { name: 'História da Arte', id: 41 },
    { name: 'Gestão Hoteleira', id: 42 },
    { name: 'Desenvolvimento de Jogos', id: 43 },
    { name: 'Produção Jornalística', id: 44 },
    { name: 'Estudos Linguísticos', id: 45 },
    { name: 'Gestão Logística', id: 46 },
    { name: 'Comportamento do Consumidor', id: 47 },
    { name: 'Álgebra Linear', id: 48 },
    { name: 'Clínica Veterinária', id: 49 },
    { name: 'Design de Moda', id: 50 },
    { name: 'Teoria Musical', id: 51 },
    { name: 'Nutrição Clínica', id: 52 },
    { name: 'Odontologia Restauradora', id: 53 },
    { name: 'Pedagogia Infantil', id: 54 },
    { name: 'Gestão de Processos', id: 55 },
    { name: 'Psicologia Organizacional', id: 56 },
    { name: 'Publicidade Estratégica', id: 57 },
    { name: 'Química Orgânica', id: 58 },
    { name: 'Engenharia de Materiais', id: 59 },
    { name: 'Política Internacional', id: 60 },
    { name: 'Marketing Digital', id: 61 },
    { name: 'Interpretação Teatral', id: 62 },
    { name: 'Terapia Ocupacional Geriátrica', id: 63 },
  ];

  ratingList: any = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];
}