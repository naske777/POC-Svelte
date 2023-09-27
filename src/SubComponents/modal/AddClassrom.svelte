<script lang="ts">
    import {  saveData } from "../../backend/backend";
      import { schoolsStore } from "../../store/store";
  
    export let SchoolId: number;
    let schools :any[]= [];
  
  // Suscribirse a los datos del store
  schoolsStore.subscribe((value) => {
    schools = value;
  });
    let newClassrom = {
      id: 0,
      grade: 0,
      key:0
    };
  
    function addClassroom(): void {
   newClassrom.key = Date.now();

      const schoolIndex = schools.findIndex(school => school.id === SchoolId);
  
      if (schoolIndex !== -1) {
        schools[schoolIndex].classrooms.push(newClassrom);
        saveData('school',schools)

      }

      schoolsStore.update((schools) =>  {
        return schools
      })
  
       newClassrom = {
      id: 0,
      grade: 0,
      key:0

    };
    }
  </script>
  
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Añadir aula</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form on:submit|preventDefault={addClassroom}>
      <div class="mb-3">
        <label for="numberInput" class="form-label">Numero</label>
        <input type="number" class="form-control" id="numberInput" bind:value={newClassrom.id}>
      </div>
      <div class="mb-3">
        <label for="GradoInput" class="form-label">Grado</label>
        <input type="number" class="form-control" id="GradoInput" bind:value={newClassrom.grade}>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" on:click={addClassroom}>Crear</button>
  </div>