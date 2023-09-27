import { c as create_ssr_component, b as add_attribute, v as validate_component, d as each, e as escape } from "../../chunks/ssr.js";
import { s as schoolsStore, D as DataTable, H as Head, R as Row, C as Cell, B as Body, I as IconButton, A as AddTeacher } from "../../chunks/IconButton.js";
const School = "";
const EditSchool_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { SchoolId } = $$props;
  let name = "";
  schoolsStore.subscribe((value) => {
  });
  if ($$props.SchoolId === void 0 && $$bindings.SchoolId && SchoolId !== void 0)
    $$bindings.SchoolId(SchoolId);
  return `<div class="modal-header" data-svelte-h="svelte-112hycd"><h1 class="modal-title fs-5" id="exampleModalLabel">Editar escuela</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><form><div class="mb-3"><label for="asignatureInput" class="form-label" data-svelte-h="svelte-pp35vk">Nombre</label> <input type="text" class="form-control" id="asignatureInput"${add_attribute("value", name, 0)}></div></form></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-svelte-h="svelte-1hozt8t">Cerrar</button> <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" data-svelte-h="svelte-15q2u0">Aceptar</button></div>`;
});
const SchoolList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let schools = [];
  schoolsStore.subscribe((value) => {
    schools = value;
  });
  let name = "";
  let SchoolId = 0;
  return `<div class="container"><div class="input-group mb-3 "><input type="text" class="form-control" placeholder="Nombre de la escuela" aria-label="Username" aria-describedby="basic-addon1"${add_attribute("value", name, 0)}> <button type="button" class="btn btn-primary" data-svelte-h="svelte-1ym9do1"><span class="icon">+</span> Agregar escuela</button></div> <div class="d-grid gap-2 d-md-block" data-svelte-h="svelte-xkuz6x"></div> ${validate_component(DataTable, "DataTable").$$render(
    $$result,
    {
      "table$aria-label": "User list",
      style: "    width: 100%;\r\nmax-width: 100%; margin-top: 15px;"
    },
    {},
    {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `<h1 style="text-align: left; margin-left: 15px; margin-top: 15px;" data-svelte-h="svelte-aerjpn">Aulas</h1> ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `#`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Nombre`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Profesores`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Aulas`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, { style: "width: 10%;" }, {}, {
                  default: () => {
                    return `Acciones`;
                  }
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${schools != null ? `${each(schools, (item) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.id)}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.name)}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.teachers.length)}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.classrooms.length)}`;
                    }
                  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(IconButton, "IconButton").$$render(
                        $$result,
                        {
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#modalEditSchool",
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
  )}</div>  <div class="modal fade" id="modalTeacher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content">${validate_component(AddTeacher, "AddTeacher").$$render($$result, { SchoolId }, {}, {})}</div></div></div>  <div class="modal fade" id="modalEditSchool" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content">${validate_component(EditSchool_1, "EditSchool").$$render($$result, { SchoolId }, {}, {})}</div></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-fga5ut{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""} <section class="svelte-fga5ut">${validate_component(SchoolList, "SchoolList").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
