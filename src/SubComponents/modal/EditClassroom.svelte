<script lang="ts">
  import {  saveData } from "../../backend/backend";
    import { schoolsStore } from "../../store/store";

  export let SchoolId: number;
  export let ClassrommId: number;
  let schools :any[]= [];
 let numero = 0
 let grado = 0
// Suscribirse a los datos del store
schoolsStore.subscribe((value) => {
  schools = value;
});
 

  function EditClassroom(): void {
  

    const schoolIndex = schools.findIndex(school => school.id === SchoolId);
    const ClassromIndex = schools[schoolIndex].classrooms.findIndex((c: { key: number; })  => c.key === ClassrommId);

    
     

      schools[schoolIndex].classrooms[ClassromIndex].id = numero;
      schools[schoolIndex].classrooms[ClassromIndex].grade = grado;
      console.log("2");
      saveData('school',schools)
      numero = 0
      grado = 0

      schoolsStore.update((schools) =>  {
      return schools
    })
    
    
   

  
  }
</script>

<div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalLabel">Editar aula</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  <form on:submit|preventDefault={EditClassroom}>
   
    <div class="mb-3">
      <label for="asignatureInput" class="form-label">Numero</label>
      <input type="number" class="form-control" id="asignatureInput" bind:value={numero}>
    </div>
    <div class="mb-3">
      <label for="asignatureInput" class="form-label">Grado</label>
      <input type="number" class="form-control" id="asignatureInput" bind:value={grado}>
    </div>
  </form>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" on:click={EditClassroom}>Aceptar</button>
</div>