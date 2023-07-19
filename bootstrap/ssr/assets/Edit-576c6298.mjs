import { reactive, unref, withCtx, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-7a3c9f3c.mjs";
import _sfc_main$2 from "./ContentHeader-a95af49c.mjs";
import "choices.js";
import _sfc_main$3 from "./MyChoices-6fe8bcef.mjs";
import Swal from "sweetalert2";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    user: Object,
    roles: Object,
    permissions: Object,
    errors: Object
  },
  setup(__props) {
    const props = __props;
    const breadcrumbs = [
      {
        title: "Administrator",
        active: true
      },
      {
        title: "User Management",
        active: false,
        link: route("admin.user.index")
      },
      {
        title: "Edit User",
        active: true
      }
    ];
    let e_user = reactive({
      name: props.user.name,
      email: props.user.email,
      roles: [],
      permissions: []
    });
    let submit = () => {
      router.put(route("admin.user.update", props.user), e_user, {
        onSuccess: (response) => {
          if (response.props.response.success) {
            Swal.fire("Success", response.props.response.success, "success");
          }
        }
      });
    };
    let setRoles = (payload) => {
      e_user.roles = payload;
    };
    let setPermissions = (payload) => {
      e_user.permissions = payload;
    };
    props.user.roles.forEach(function(value) {
      e_user.roles.push(value.id);
    });
    props.user.permissions.forEach(function(value) {
      e_user.permissions.push(value.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create User" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Create User",
              breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="row justify-content-center"${_scopeId}><div class="col-sm-4"${_scopeId}><div class="card"${_scopeId}><form${_scopeId}><div class="card-header"${_scopeId}><h3 class="card-title"${_scopeId}>Create User</h3></div><div class="card-body"${_scopeId}><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Name</label><input type="text" class="form-control" placeholder="Enter Full Name"${ssrRenderAttr("value", unref(e_user).name)}${_scopeId}>`);
            if (__props.errors.name) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group mb-3"${_scopeId}><label${_scopeId}>E-Mail</label><input type="email" class="form-control" placeholder="Enter Email Address"${ssrRenderAttr("value", unref(e_user).email)}${_scopeId}>`);
            if (__props.errors.email) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.email)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Select Role(s)</label>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "selectrole",
              placeholder: "Select Role",
              type: "multiple",
              modelValue: unref(e_user).roles,
              "onUpdate:modelValue": ($event) => unref(e_user).roles = $event,
              onGetValue: unref(setRoles)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.roles, (role) => {
                    _push3(`<option${ssrRenderAttr("value", role.id)}${ssrIncludeBooleanAttr(unref(e_user).roles.includes(role.id)) ? " selected" : ""}${_scopeId2}>${ssrInterpolate(role.name)}</option>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                      return openBlock(), createBlock("option", {
                        key: role.id,
                        value: role.id,
                        selected: unref(e_user).roles.includes(role.id)
                      }, toDisplayString(role.name), 9, ["value", "selected"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.errors.roles) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.roles)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="form-group mb-3"${_scopeId}><label${_scopeId}>Select Permission(s)</label>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "selectperm",
              placeholder: "Select Permission",
              type: "multiple",
              modelValue: unref(e_user).permissions,
              "onUpdate:modelValue": ($event) => unref(e_user).permissions = $event,
              onGetValue: unref(setPermissions)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.permissions, (permission) => {
                    _push3(`<option${ssrRenderAttr("value", permission.id)}${ssrIncludeBooleanAttr(unref(e_user).permissions.includes(permission.id)) ? " selected" : ""}${_scopeId2}>${ssrInterpolate(permission.name)}</option>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.permissions, (permission) => {
                      return openBlock(), createBlock("option", {
                        key: permission.id,
                        value: permission.id,
                        selected: unref(e_user).permissions.includes(permission.id)
                      }, toDisplayString(permission.name), 9, ["value", "selected"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.errors.permissions) {
              _push2(`<span class="text-danger"${_scopeId}>${ssrInterpolate(__props.errors.permissions)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="card-footer d-grid gap-2"${_scopeId}><button type="submit" class="btn btn-success"${_scopeId}>Save</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.user.index"),
              class: "btn btn-light"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back`);
                } else {
                  return [
                    createTextVNode("Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Create User",
                breadcrumbs
              }),
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-sm-4" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(unref(submit), ["prevent"])
                    }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h3", { class: "card-title" }, "Create User")
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, "Name"),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "form-control",
                            placeholder: "Enter Full Name",
                            "onUpdate:modelValue": ($event) => unref(e_user).name = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(e_user).name]
                          ]),
                          __props.errors.name ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, "E-Mail"),
                          withDirectives(createVNode("input", {
                            type: "email",
                            class: "form-control",
                            placeholder: "Enter Email Address",
                            "onUpdate:modelValue": ($event) => unref(e_user).email = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(e_user).email]
                          ]),
                          __props.errors.email ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.email), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, "Select Role(s)"),
                          createVNode(_sfc_main$3, {
                            id: "selectrole",
                            placeholder: "Select Role",
                            type: "multiple",
                            modelValue: unref(e_user).roles,
                            "onUpdate:modelValue": ($event) => unref(e_user).roles = $event,
                            onGetValue: unref(setRoles)
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                                return openBlock(), createBlock("option", {
                                  key: role.id,
                                  value: role.id,
                                  selected: unref(e_user).roles.includes(role.id)
                                }, toDisplayString(role.name), 9, ["value", "selected"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onGetValue"]),
                          __props.errors.roles ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.roles), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "form-group mb-3" }, [
                          createVNode("label", null, "Select Permission(s)"),
                          createVNode(_sfc_main$3, {
                            id: "selectperm",
                            placeholder: "Select Permission",
                            type: "multiple",
                            modelValue: unref(e_user).permissions,
                            "onUpdate:modelValue": ($event) => unref(e_user).permissions = $event,
                            onGetValue: unref(setPermissions)
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.permissions, (permission) => {
                                return openBlock(), createBlock("option", {
                                  key: permission.id,
                                  value: permission.id,
                                  selected: unref(e_user).permissions.includes(permission.id)
                                }, toDisplayString(permission.name), 9, ["value", "selected"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onGetValue"]),
                          __props.errors.permissions ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(__props.errors.permissions), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "card-footer d-grid gap-2" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "btn btn-success"
                        }, "Save"),
                        createVNode(unref(Link), {
                          href: _ctx.route("admin.user.index"),
                          class: "btn btn-light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Back")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ], 40, ["onSubmit"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/User/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};