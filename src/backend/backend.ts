
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
    Key: number;
    id: number;
    grade: number;
  }[];
}

export function saveData(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadData(key: string) {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
}

export function deleteData(key: string) {
  localStorage.removeItem(key);
}

export function loadSchool() {
  let schools: School[] = [];
  if (typeof localStorage !== 'undefined') {
    schools = loadData('school') ? loadData('school') : []

  }


  return schools;
}

export function getSchool(schoolId: number): any {
  const schools = loadSchool()

  const school = schools.find((school) => school.id === schoolId);

  if (school) {
    return school;
  } else {
    return [];
  }
}