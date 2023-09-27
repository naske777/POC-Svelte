import { writable } from 'svelte/store';

// Obtener los datos de la escuela desde el backend
import { loadSchool } from '../backend/backend';

// Definir el tipo para la estructura de datos de schools
interface School {
  id: number;
  name: string;
  teachers: {
    id: number;
    name: string;
    asignature: string;
    classroomId: number;
  }[];
  classrooms: {
    id: number;
    grade: number;
  }[];
}

// Obtener el valor inicial de schools llamando a la función loadSchool()
const initialSchools: School[] = loadSchool();

// Crear el store para schools
export const schoolsStore = writable(initialSchools);