import { c as create_ssr_component, b as add_attribute, v as validate_component, d as each, e as escape } from "../../../../chunks/ssr.js";
import { s as schoolsStore, D as DataTable, H as Head, I as IconButton, R as Row, C as Cell, B as Body, A as AddTeacher } from "../../../../chunks/IconButton.js";
const AddClassrom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { SchoolId } = $$props;
  schoolsStore.subscribe((value) => {
  });
  let newClassrom = { id: 0, grade: 0, key: 0 };
  if ($$props.SchoolId === void 0 && $$bindings.SchoolId && SchoolId !== void 0)
    $$bindings.SchoolId(SchoolId);
  return `<div class="modal-header" data-svelte-h="svelte-ujw7of"><h1 class="modal-title fs-5" id="exampleModalLabel">Añadir aula</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><form><div class="mb-3"><label for="numberInput" class="form-label" data-svelte-h="svelte-1cnuzlr">Numero</label> <input type="number" class="form-control" id="numberInput"${add_attribute("value", newClassrom.id, 0)}></div> <div class="mb-3"><label for="GradoInput" class="form-label" data-svelte-h="svelte-3r4y40">Grado</label> <input type="number" class="form-control" id="GradoInput"${add_attribute("value", newClassrom.grade, 0)}></div></form></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-svelte-h="svelte-1hozt8t">Cerrar</button> <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" data-svelte-h="svelte-ib1vk7">Crear</button></div>`;
});
const EditClassroom_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { SchoolId } = $$props;
  let { ClassrommId } = $$props;
  let numero = 0;
  let grado = 0;
  schoolsStore.subscribe((value) => {
  });
  if ($$props.SchoolId === void 0 && $$bindings.SchoolId && SchoolId !== void 0)
    $$bindings.SchoolId(SchoolId);
  if ($$props.ClassrommId === void 0 && $$bindings.ClassrommId && ClassrommId !== void 0)
    $$bindings.ClassrommId(ClassrommId);
  return `<div class="modal-header" data-svelte-h="svelte-s3pbym"><h1 class="modal-title fs-5" id="exampleModalLabel">Editar aula</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><form><div class="mb-3"><label for="asignatureInput" class="form-label" data-svelte-h="svelte-14rtchp">Numero</label> <input type="number" class="form-control" id="asignatureInput"${add_attribute("value", numero, 0)}></div> <div class="mb-3"><label for="asignatureInput" class="form-label" data-svelte-h="svelte-1v2n3tm">Grado</label> <input type="number" class="form-control" id="asignatureInput"${add_attribute("value", grado, 0)}></div></form></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-svelte-h="svelte-1hozt8t">Cerrar</button> <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" data-svelte-h="svelte-1w4shsr">Aceptar</button></div>`;
});
const EditTeacher_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { SchoolId } = $$props;
  let { TeacherId } = $$props;
  let name = "";
  let asignature = "";
  schoolsStore.subscribe((value) => {
  });
  if ($$props.SchoolId === void 0 && $$bindings.SchoolId && SchoolId !== void 0)
    $$bindings.SchoolId(SchoolId);
  if ($$props.TeacherId === void 0 && $$bindings.TeacherId && TeacherId !== void 0)
    $$bindings.TeacherId(TeacherId);
  return `<div class="modal-header" data-svelte-h="svelte-s3pbym"><h1 class="modal-title fs-5" id="exampleModalLabel">Editar aula</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><form><div class="mb-3"><label for="asignatureInput" class="form-label" data-svelte-h="svelte-pp35vk">Nombre</label> <input type="text" class="form-control" id="asignatureInput"${add_attribute("value", name, 0)}></div> <div class="mb-3"><label for="asignatureInput" class="form-label" data-svelte-h="svelte-15sctc6">Asignatura</label> <input type="text" class="form-control" id="asignatureInput"${add_attribute("value", asignature, 0)}></div></form></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-svelte-h="svelte-1hozt8t">Cerrar</button> <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" data-svelte-h="svelte-himw0o">Aceptar</button></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const ID = parseInt(data.params.id);
  let schools = [];
  schoolsStore.subscribe((value) => {
    schools = value;
  });
  let schoolIndex = schools.findIndex((schools2) => schools2.id === ID);
  let SchoolId = schools[schoolIndex] ? schools[schoolIndex].id : 0;
  let ClassrommId = 0;
  let TeacherId = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div style="text-align: center;">${validate_component(DataTable, "DataTable").$$render(
    $$result,
    {
      "table$aria-label": "User list",
      style: "    width: 100%;\r\nmax-width: 600px; margin-top: 15px; margin-left: 15px;"
    },
    {},
    {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `<div style="text-align: left; margin-left: 15px; margin-top: 15px;display: flex;"><h1 data-svelte-h="svelte-lvn3by">Aulas</h1> ${validate_component(IconButton, "IconButton").$$render(
              $$result,
              {
                "data-bs-toggle": "modal",
                "data-bs-target": "#modalClassrom",
                class: "material-icons",
                ripple: true
              },
              {},
              {
                default: () => {
                  return `add`;
                }
              }
            )}</div> ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Numero`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Grado`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { style: "width: 20%;" }, {}, {
                  default: () => {
                    return `Acciones`;
                  }
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${schools[schoolIndex] ? `${each(schools[schoolIndex].classrooms, (item) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.id)}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.grade)}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(IconButton, "IconButton").$$render(
                        $$result,
                        {
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#modalEditClassroom",
                          class: "material-icons",
                          ripple: true
                        },
                        {},
                        {
                          default: () => {
                            return `edit`;
                          }
                        }
                      )} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons", ripple: true }, {}, {
                        default: () => {
                          return `delete`;
                        }
                      })} `;
                    }
                  })} `;
                }
              })}`;
            })}` : ``}`;
          }
        })}`;
      }
    }
  )} ${validate_component(DataTable, "DataTable").$$render(
    $$result,
    {
      "table$aria-label": "User list",
      style: "    width: 100%;\r\nmax-width: 600px;  margin-top: 15px;  margin-left: 15px"
    },
    {},
    {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `<div style="text-align: left; margin-left: 15px; margin-top: 15px;display: flex;"><h1 data-svelte-h="svelte-1yswoc0">Profesores</h1> ${validate_component(IconButton, "IconButton").$$render(
              $$result,
              {
                "data-bs-toggle": "modal",
                "data-bs-target": "#modalTeacher",
                class: "material-icons",
                ripple: true
              },
              {},
              {
                default: () => {
                  return `add`;
                }
              }
            )}</div> ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Nombre`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Asignatura`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { style: "width: 20%;" }, {}, {
                  default: () => {
                    return `Acciones`;
                  }
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${schools[schoolIndex] ? `${each(schools[schoolIndex].teachers, (item) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.name)}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.asignature)}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(IconButton, "IconButton").$$render(
                        $$result,
                        {
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#modalEditTeacher",
                          class: "material-icons",
                          ripple: true
                        },
                        {},
                        {
                          default: () => {
                            return `edit`;
                          }
                        }
                      )} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons", ripple: true }, {}, {
                        default: () => {
                          return `delete`;
                        }
                      })}`;
                    }
                  })} `;
                }
              })}`;
            })}` : ``}`;
          }
        })}`;
      }
    }
  )}</div>  <div class="modal fade" id="modalTeacher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content">${validate_component(AddTeacher, "AddTeacher").$$render($$result, { SchoolId }, {}, {})}</div></div></div> <div class="modal fade" id="modalClassrom" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content">${validate_component(AddClassrom, "AddClassrom").$$render($$result, { SchoolId }, {}, {})}</div></div></div> <div class="modal fade" id="modalEditClassroom" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content">${validate_component(EditClassroom_1, "EditClassroom").$$render($$result, { SchoolId, ClassrommId }, {}, {})}</div></div></div> <div class="modal fade" id="modalEditTeacher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content">${validate_component(EditTeacher_1, "EditTeacher").$$render($$result, { SchoolId, TeacherId }, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
