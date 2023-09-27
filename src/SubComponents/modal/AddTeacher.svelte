<script lang="ts">
  import {  saveData } from "../../backend/backend";
    import { schoolsStore } from "../../store/store";

  export let SchoolId: number;
  let schools :any[]= [];

// Suscribirse a los datos del store
schoolsStore.subscribe((value) => {
  schools = value;
});
  let newTeacher = {
    id: 0,
    name: '',
    asignature: '',
    classroomId: 0
  };

  function addTeacher(): void {
    // Generar un ID único para el profesor
    newTeacher.id = Date.now();

    // Agregar el profesor a la escuela adecuada en el arreglo "schools"
    const schoolIndex = schools.findIndex(school => school.id === SchoolId);

    if (schoolIndex !== -1) {
      schools[schoolIndex].teachers.push(newTeacher);
      saveData('school',schools)
    
    }
    
    schoolsStore.update((schools) =>  {
      return schools
    })

    // Restablecer los valores del nuevo profesor
    newTeacher = {
      id: 0,
      name: '',
      asignature: '',
      classroomId: 0
    };
  }
</script>

<div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalLabel">Añadir profesor</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  <form on:submit|preventDefault={addTeacher}>
    <div class="mb-3">
      <label for="nameInput" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="nameInput" bind:value={newTeacher.name}>
    </div>
    <div class="mb-3">
      <label for="asignatureInput" class="form-label">Asignatura</label>
      <input type="text" class="form-control" id="asignatureInput" bind:value={newTeacher.asignature}>
    </div>
  </form>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" on:click={addTeacher}>Crear</button>
</div>