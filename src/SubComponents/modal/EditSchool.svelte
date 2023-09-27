<script lang="ts">
  import {  saveData } from "../../backend/backend";
    import { schoolsStore } from "../../store/store";

  export let SchoolId: number;
  let schools :any[]= [];
 let name = ''
// Suscribirse a los datos del store
schoolsStore.subscribe((value) => {
  schools = value;
});


  function EditSchool(): void {
  

    // Agregar el profesor a la escuela adecuada en el arreglo "schools"
    const schoolIndex = schools.findIndex(school => school.id === SchoolId);

    if (schoolIndex !== -1) {
      schools[schoolIndex].name = name;
      saveData('school',schools)
      name = ''

      schoolsStore.update((schools) =>  {
      return schools
    })
    }
    
   

  
  }
</script>

<div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalLabel">Editar escuela</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  <form on:submit|preventDefault={EditSchool}>
   
    <div class="mb-3">
      <label for="asignatureInput" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="asignatureInput" bind:value={name}>
    </div>
  </form>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" on:click={EditSchool}>Aceptar</button>
</div>