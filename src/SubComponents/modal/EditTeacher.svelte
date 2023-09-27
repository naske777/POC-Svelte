<script lang="ts">
  import {  saveData } from "../../backend/backend";
    import { schoolsStore } from "../../store/store";

  export let SchoolId: number;
  export let TeacherId: number;
  let schools :any[]= [];
 let name = ''
 let asignature = ''
// Suscribirse a los datos del store
schoolsStore.subscribe((value) => {
  schools = value;
});
 

  function EditTeacher(): void {
  

    const schoolIndex = schools.findIndex(school => school.id === SchoolId);
    const teacherIndex = schools[schoolIndex].teachers.findIndex((c: { id: number; })  => c.id === TeacherId);

    
     
    
      schools[schoolIndex].teachers[teacherIndex].name = name;
      schools[schoolIndex].teachers[teacherIndex].asignature = asignature;
      console.log("2");
      saveData('school',schools)
      name = ''
      asignature = ''

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
  <form on:submit|preventDefault={EditTeacher}>
   
    <div class="mb-3">
      <label for="asignatureInput" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="asignatureInput" bind:value={name}>
    </div>
    <div class="mb-3">
      <label for="asignatureInput" class="form-label">Asignatura</label>
      <input type="text" class="form-control" id="asignatureInput" bind:value={asignature}>
    </div>
  </form>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" on:click={EditTeacher}>Aceptar</button>
</div>