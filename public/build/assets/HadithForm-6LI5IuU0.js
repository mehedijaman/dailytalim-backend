var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as _sfc_main$2, a as __unplugin_components_6 } from "./AppFormErrors-GGPfPvDi.js";
import { _ as __unplugin_components_0, b as _sfc_main$3 } from "./AppInputText-CnCOpisB.js";
import { _ as _sfc_main$5 } from "./AppTipTapEditor-CqF5YX9f.js";
import { _ as _sfc_main$4 } from "./AppCheckbox-6CDAHsF0.js";
import { _ as __unplugin_components_3 } from "./AppCombobox-CT0SRbII.js";
import { _ as __unplugin_components_2 } from "./AppLabel-DghcdlCQ.js";
import { _ as _sfc_main$1 } from "./AppSectionHeader-DUuZje-H.js";
import { C, m as me } from "./app-B1Sq0VTC.js";
import { u as useTitle } from "./useTitle-CoIzRuPZ.js";
import { u as useFormContext } from "./useFormContext-Bd_C1v1K.js";
import { u as useFormErrors } from "./useFormErrors-BMbFIh37.js";
import { r as ref, w as watch, o as onMounted, f as createElementBlock, g as openBlock, j as createVNode, u as unref, k as withCtx, y as createTextVNode, t as toDisplayString, i as createBaseVNode, n as normalizeClass, F as Fragment } from "./runtime-dom.esm-bundler-CDgXytbd.js";
import "./slug-BnyHR7ug.js";
function useFormKitabOptions(props, form) {
  const kitabOptions = ref([]);
  const chapterOptions = ref([]);
  const formatOptions = (items, labelKey = "name", valueKey = "id") => items.map((item) => ({
    label: item[labelKey],
    value: item[valueKey]
  }));
  const preSelectValue = (options, value) => {
    return options.find((option) => option.value == value) || null;
  };
  const populateChapters = (kitabId) => {
    const kitab = props.kitabs.find((kitab2) => kitab2.id == kitabId);
    chapterOptions.value = formatOptions((kitab == null ? void 0 : kitab.chapters) || []);
  };
  const initializeOptions = () => {
    var _a, _b;
    kitabOptions.value = formatOptions(props.kitabs);
    if (form.kitab_id) {
      form.kitab_id = preSelectValue(kitabOptions.value, form.kitab_id);
      if ((_a = form.kitab_id) == null ? void 0 : _a.value) {
        populateChapters(form.kitab_id.value);
        chapterOptions.value = formatOptions(((_b = props.kitabs.find((k) => k.id == form.kitab_id.value)) == null ? void 0 : _b.chapters) || []);
        form.chapter_id = preSelectValue(chapterOptions.value, form.chapter_id);
      }
    }
  };
  watch(
    () => form.kitab_id,
    (newValue) => {
      var _a;
      form.chapter_id = null;
      if (newValue == null ? void 0 : newValue.value) {
        populateChapters(newValue.value);
        chapterOptions.value = formatOptions(((_a = props.kitabs.find((k) => k.id == newValue.value)) == null ? void 0 : _a.chapters) || []);
        form.chapter_id = preSelectValue(chapterOptions.value, form.chapter_id);
      }
    }
  );
  onMounted(() => {
    initializeOptions();
  });
  return {
    kitabOptions,
    chapterOptions
  };
}
const _hoisted_1 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_2 = { class: "mt-5 flex items-center" };
const _hoisted_3 = { class: "md:col-span-2" };
const _sfc_main = {
  __name: "HadithForm",
  props: {
    hadith: {
      type: Object,
      default: null
    },
    kitabs: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const { title } = useTitle("hadith");
    const breadCrumb = [
      { label: "Home", href: route("dashboard.index") },
      { label: "Hadiths", href: route("hadith.index") },
      { label: title, last: true }
    ];
    const form = C({
      kitab_id: props.hadith ? props.hadith.kitab_id : "",
      chapter_id: props.hadith ? props.hadith.chapter_id : "",
      hadith_number: props.hadith ? props.hadith.hadith_number : "",
      active: props.hadith ? props.hadith.active : true,
      description: props.hadith ? props.hadith.description : ""
    });
    const { kitabOptions, chapterOptions } = useFormKitabOptions(props, form);
    const { isCreate } = useFormContext();
    const getValueFromKey = (data, key) => {
      var _a;
      return ((_a = data[key]) == null ? void 0 : _a.value) || null;
    };
    const submitForm = () => {
      const postData = (data) => {
        const commonData = __spreadProps(__spreadValues({}, data), {
          kitab_id: getValueFromKey(data, "kitab_id"),
          chapter_id: getValueFromKey(data, "chapter_id")
        });
        return isCreate.value ? commonData : __spreadProps(__spreadValues({}, commonData), { _method: "PUT" });
      };
      if (isCreate.value) {
        form.transform(postData).post(route("hadith.store"));
      } else {
        form.transform(postData).post(route("hadith.update", props.hadith.id));
      }
    };
    const { errorsFields } = useFormErrors();
    return (_ctx, _cache) => {
      const _component_AppSectionHeader = _sfc_main$1;
      const _component_AppFormErrors = _sfc_main$2;
      const _component_AppLabel = __unplugin_components_2;
      const _component_AppCombobox = __unplugin_components_3;
      const _component_AppInputText = _sfc_main$3;
      const _component_AppCheckbox = _sfc_main$4;
      const _component_AppTipTapEditor = _sfc_main$5;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppCard = __unplugin_components_6;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(me), { title: unref(title) }, null, 8, ["title"]),
        createVNode(_component_AppSectionHeader, {
          title: unref(title),
          "bread-crumb": breadCrumb
        }, null, 8, ["title"]),
        createVNode(_component_AppCard, { class: "w-full" }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(unref(title)), 1)
          ]),
          content: withCtx(() => [
            createVNode(_component_AppFormErrors, { class: "mb-4" }),
            createBaseVNode("form", _hoisted_1, [
              createBaseVNode("div", null, [
                createVNode(_component_AppLabel, { for: "kitab_id" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Kitab")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_AppCombobox, {
                  modelValue: unref(form).kitab_id,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).kitab_id = $event),
                  options: unref(kitabOptions),
                  "combo-label": "Select a Kitab",
                  class: "w-full"
                }, null, 8, ["modelValue", "options"])
              ]),
              createBaseVNode("div", null, [
                createVNode(_component_AppLabel, { for: "chapter_id" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Chapter")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_AppCombobox, {
                  modelValue: unref(form).chapter_id,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).chapter_id = $event),
                  options: unref(chapterOptions),
                  "combo-label": "Select a Chapter",
                  class: "w-full"
                }, null, 8, ["modelValue", "options"])
              ]),
              createBaseVNode("div", null, [
                createVNode(_component_AppLabel, { for: "hadith_number" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Hadith Number")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_AppInputText, {
                  id: "hadith_number",
                  modelValue: unref(form).hadith_number,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).hadith_number = $event),
                  type: "text",
                  class: normalizeClass({
                    "input-error": unref(errorsFields).includes("hadith_number")
                  })
                }, null, 8, ["modelValue", "class"])
              ]),
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_AppCheckbox, {
                  id: "active",
                  modelValue: unref(form).active,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).active = $event),
                  name: "active",
                  value: true
                }, null, 8, ["modelValue"]),
                createVNode(_component_AppLabel, {
                  for: "active",
                  class: "ml-3"
                }, {
                  default: withCtx(() => _cache[5] || (_cache[5] = [
                    createTextVNode(" Active ")
                  ])),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_AppLabel, { for: "description" }, {
                  default: withCtx(() => _cache[6] || (_cache[6] = [
                    createTextVNode("Description")
                  ])),
                  _: 1
                }),
                createVNode(_component_AppTipTapEditor, {
                  modelValue: unref(form).description,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).description = $event),
                  "editor-id": "description",
                  class: normalizeClass({
                    "app-tip-tap-error": unref(errorsFields).includes("description")
                  }),
                  "file-upload-url": _ctx.route("hadith.uploadEditorImage")
                }, null, 8, ["modelValue", "class", "file-upload-url"])
              ])
            ])
          ]),
          footer: withCtx(() => [
            createVNode(_component_AppButton, {
              class: "btn btn-primary",
              onClick: submitForm
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Save")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
