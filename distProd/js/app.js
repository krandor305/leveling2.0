/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/navbar */ \"./src/Header/navbar.vue\");\n// import Button from 'primevue/button';\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    NavBar: _Header_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var primevue_menubar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/menubar */ \"./node_modules/primevue/menubar/menubar.esm.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    Menubar: primevue_menubar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      items: [{\n        label: 'Home',\n        name: \"Home\",\n        to: \"/\"\n      }, {\n        label: 'Projects',\n        name: \"Home\",\n        to: \"/projects\"\n      }, {\n        label: 'Profile',\n        name: \"Home\",\n        to: \"/profile\"\n      }]\n    };\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/Header/navbar.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/button */ \"./node_modules/primevue/button/button.esm.js\");\n/* harmony import */ var primevue_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/card */ \"./node_modules/primevue/card/card.esm.js\");\n/* harmony import */ var _components_MainComponents_Levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainComponents/Levels */ \"./src/components/MainComponents/Levels.vue\");\n/* harmony import */ var primevue_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/sidebar */ \"./node_modules/primevue/sidebar/sidebar.esm.js\");\n/* harmony import */ var primevue_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/dropdown */ \"./node_modules/primevue/dropdown/dropdown.esm.js\");\n/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/inputtext */ \"./node_modules/primevue/inputtext/inputtext.esm.js\");\n/* harmony import */ var primevue_selectbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/selectbutton */ \"./node_modules/primevue/selectbutton/selectbutton.esm.js\");\n/* harmony import */ var _services_getUserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/getUserContext */ \"./src/services/getUserContext.js\");\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tasks */ \"./src/components/Tasks.vue\");\n/* harmony import */ var _components_UserComponents_ProfileCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UserComponents/ProfileCard */ \"./src/components/UserComponents/ProfileCard.vue\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomePage',\n  props: {\n    msg: String\n  },\n  components: {\n    Button: primevue_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Card: primevue_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Levels: _components_MainComponents_Levels__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    Sidebar: primevue_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    Dropdown: primevue_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    Inputtext: primevue_inputtext__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    SelectButton: primevue_selectbutton__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    Tasks: _Tasks__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    ProfileCard: _components_UserComponents_ProfileCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  },\n  data() {\n    return {\n      cogActivated: false,\n      blockToAdd: {\n        title: '',\n        typeBlock: '',\n        content: '',\n        size: '',\n        disposition: ''\n      },\n      blocks: [],\n      projects: []\n    };\n  },\n  async mounted() {\n    this.loadBlocks();\n  },\n  methods: {\n    async addBlock() {\n      //validation\n      if (!this.blockToAdd.title) {\n        return false;\n      }\n\n      //to optimize by making optionValue work\n      if (this.blockToAdd.typeBlock == 'Tasks') {\n        this.blockToAdd.content = this.blockToAdd.content.id;\n      }\n      var result = await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_7__.PostApiRequest)(\"blocknews\", this.blockToAdd);\n      console.log(result);\n      this.cogActivated = !this.cogActivated;\n      this.blockToAdd = {\n        title: '',\n        typeBlock: '',\n        content: '',\n        size: '',\n        disposition: ''\n      };\n      this.loadBlocks();\n    },\n    async loadBlocks() {\n      this.blocks = await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_7__.GetApiRequest)(\"blocknews\");\n      this.blocks = this.blocks.map(function (m) {\n        let obj = {\n          ...m\n        };\n        if (obj.size == \"1/4\") {\n          obj.size = 12 / 4;\n        } else if (obj.size == \"1/3\") {\n          obj.size = 12 / 3;\n        } else if (obj.size == \"1/2\") {\n          obj.size = 12 / 2;\n        } else {\n          obj.size = 12;\n        }\n        return obj;\n      });\n      this.projects = await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_7__.GetApiRequest)(\"project\");\n    },\n    async DeleteBlock(id) {\n      await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_7__.DeleteApiRequest)(\"blocknews\", id);\n      this.loadBlocks();\n    }\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/Home.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Login.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Login.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/button */ \"./node_modules/primevue/button/button.esm.js\");\n/* harmony import */ var primevue_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/card */ \"./node_modules/primevue/card/card.esm.js\");\n/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/inputtext */ \"./node_modules/primevue/inputtext/inputtext.esm.js\");\n/* harmony import */ var primevue_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/password */ \"./node_modules/primevue/password/password.esm.js\");\n/* harmony import */ var _services_getUserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/getUserContext */ \"./src/services/getUserContext.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomePage',\n  props: {\n    msg: String\n  },\n  components: {\n    Button: primevue_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Card: primevue_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    Password: primevue_password__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data() {\n    return {\n      cogActivated: false,\n      login: {\n        username: \"\",\n        password: \"\"\n      }\n    };\n  },\n  methods: {\n    async Login() {\n      let res = await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_5__.PostApiRequest)(\"auth/login\", this.login);\n      this.login = {\n        username: \"\",\n        password: \"\"\n      };\n      localStorage.setItem('token', res.token);\n      this.$router.push('projects');\n      console.log(res);\n    }\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/Login.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Levels.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Levels.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/datatable */ \"./node_modules/primevue/datatable/datatable.esm.js\");\n/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/column */ \"./node_modules/primevue/column/column.esm.js\");\n/* harmony import */ var _services_getUserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/getUserContext */ \"./src/services/getUserContext.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'LevelsComponent',\n  props: {\n    // msg: String\n  },\n  components: {\n    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Column: primevue_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      loaded: 0,\n      skills: [\n        // { title:'Strength' , level: 20},\n        // { title:'Charisma' , level: 20},\n      ]\n    };\n  },\n  mounted() {\n    this.loadSkill();\n  },\n  methods: {\n    async loadSkill() {\n      let skills = await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_2__.GetApiRequest)(\"skill/\");\n      this.skills = skills;\n      this.loaded = new Date();\n    }\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Levels.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/ProjectCard.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/ProjectCard.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var primevue_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/card */ \"./node_modules/primevue/card/card.esm.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProjectCard',\n  props: {\n    Project: Object\n  },\n  components: {\n    Card: primevue_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {};\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/ProjectCard.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Projects.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Projects.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/datatable */ \"./node_modules/primevue/datatable/datatable.esm.js\");\n/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/column */ \"./node_modules/primevue/column/column.esm.js\");\n/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/button */ \"./node_modules/primevue/button/button.esm.js\");\n/* harmony import */ var _services_getUserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getUserContext */ \"./src/services/getUserContext.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProjectsComponent',\n  components: {\n    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Column: primevue_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Button: primevue_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: {\n    // msg: String\n  },\n  data() {\n    return {\n      cogActivated: false,\n      projects: [{\n        project: 'Waifu-GPT'\n      }, {\n        project: 'WebNovel'\n      }, {\n        project: 'Portfolio/Freelance Projects'\n      }, {\n        project: 'Work Projects'\n      }, {\n        project: 'Boxing'\n      }, {\n        project: 'Administrative papers  '\n      }]\n    };\n  },\n  mounted() {\n    this.loadProjects();\n  },\n  methods: {\n    async loadProjects() {\n      this.projects = await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_3__.GetApiRequest)(\"project\");\n    }\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Projects.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Tasks.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Tasks.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var primevue_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/datatable */ \"./node_modules/primevue/datatable/datatable.esm.js\");\n/* harmony import */ var primevue_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/column */ \"./node_modules/primevue/column/column.esm.js\");\n/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/button */ \"./node_modules/primevue/button/button.esm.js\");\n/* harmony import */ var primevue_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/dialog */ \"./node_modules/primevue/dialog/dialog.esm.js\");\n/* harmony import */ var primevue_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/textarea */ \"./node_modules/primevue/textarea/textarea.esm.js\");\n/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/inputtext */ \"./node_modules/primevue/inputtext/inputtext.esm.js\");\n/* harmony import */ var primevue_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/checkbox */ \"./node_modules/primevue/checkbox/checkbox.esm.js\");\n/* harmony import */ var _services_getUserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/getUserContext */ \"./src/services/getUserContext.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'tasksComponent',\n  props: {\n    ProjectId: String,\n    Tasks: Array\n  },\n  emits: ['refresh'],\n  components: {\n    DataTable: primevue_datatable__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Column: primevue_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Button: primevue_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    Dialog: primevue_dialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    Textarea: primevue_textarea__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    CheckBox: primevue_checkbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      visible: false,\n      tasks: [{\n        task: 'Waifu-GPT',\n        percent: \"20%\"\n      }, {\n        task: 'WebNovel',\n        percent: \"20%\"\n      }, {\n        task: 'Portfolio/Freelance tasks',\n        percent: \"20%\"\n      }, {\n        task: 'Work tasks',\n        percent: \"20%\"\n      }, {\n        task: 'Boxing',\n        percent: \"20%\"\n      }, {\n        task: 'Administrative papers  ',\n        percent: \"20%\"\n      }],\n      taskToAdd: {\n        title: \"\",\n        description: \"\",\n        skill: \"\"\n      }\n    };\n  },\n  mounted() {\n    this.tasks = this.Tasks;\n    // this.loadTasks()\n  },\n\n  methods: {\n    async duplicateTask(data) {\n      this.taskToAdd = data;\n      delete this.taskToAdd.id;\n      delete this.taskToAdd.done;\n      this.SubmitAndResetCreate();\n    },\n    async SubmitAndResetCreate() {\n      if (!this.taskToAdd.title) {\n        return false;\n      }\n      this.taskToAdd.project = this.ProjectId;\n      await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_7__.PostApiRequest)(\"task\", this.taskToAdd);\n      this.taskToAdd = {\n        title: \"\",\n        description: \"\",\n        skill: \"\"\n      };\n      this.visible = false;\n      this.$emit('refresh');\n    },\n    async DeleteTask(id) {\n      await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_7__.DeleteApiRequest)(\"task\", id);\n      this.$emit('refresh');\n    },\n    async checkTask(id) {\n      await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_7__.PostApiRequest)(\"checktask/\" + id, {});\n      this.$emit('refresh');\n    }\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Tasks.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Profile.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Profile.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MainComponents_Levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MainComponents/Levels */ \"./src/components/MainComponents/Levels.vue\");\n/* harmony import */ var _components_UserComponents_ProfileCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserComponents/ProfileCard */ \"./src/components/UserComponents/ProfileCard.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomePage',\n  props: {},\n  components: {\n    Levels: _components_MainComponents_Levels__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ProfileCard: _components_UserComponents_ProfileCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      cogActivated: false\n    };\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/Profile.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Projects.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Projects.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MainComponents_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MainComponents/Projects */ \"./src/components/MainComponents/Projects.vue\");\n/* harmony import */ var _components_UserComponents_ProfileCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserComponents/ProfileCard */ \"./src/components/UserComponents/ProfileCard.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomePage',\n  props: {},\n  components: {\n    Projects: _components_MainComponents_Projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ProfileCard: _components_UserComponents_ProfileCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      cogActivated: false\n    };\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/Projects.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Tasks.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Tasks.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MainComponents_Tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MainComponents/Tasks */ \"./src/components/MainComponents/Tasks.vue\");\n/* harmony import */ var _components_MainComponents_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainComponents/ProjectCard */ \"./src/components/MainComponents/ProjectCard.vue\");\n/* harmony import */ var _services_getUserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/getUserContext */ \"./src/services/getUserContext.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomePage',\n  props: {\n    ProjectId: String\n  },\n  components: {\n    Tasks: _components_MainComponents_Tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ProjectCard: _components_MainComponents_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      loaded: 0,\n      tasks: [],\n      project: {}\n    };\n  },\n  mounted() {\n    this.loadProject();\n  },\n  methods: {\n    async loadProject() {\n      if (this.ProjectId) {\n        let project = await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_2__.GetApiRequest)(\"project/\" + this.ProjectId);\n        this.project = project;\n        this.tasks = project.tasks;\n        this.loaded = new Date();\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/Tasks.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UserComponents/ProfileCard.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UserComponents/ProfileCard.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var primevue_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/card */ \"./node_modules/primevue/card/card.esm.js\");\n/* harmony import */ var _MainComponents_Levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MainComponents/Levels */ \"./src/components/MainComponents/Levels.vue\");\n/* harmony import */ var _services_getUserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/getUserContext */ \"./src/services/getUserContext.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProfileCard',\n  props: {\n    showLevels: Boolean\n  },\n  components: {\n    Card: primevue_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Levels: _MainComponents_Levels__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      userProfile: {}\n    };\n  },\n  async mounted() {\n    this.userProfile = await (0,_services_getUserContext__WEBPACK_IMPORTED_MODULE_2__.GetApiRequest)(\"auth/MyProfile\");\n  }\n});\n\n//# sourceURL=webpack://evolev/./src/components/UserComponents/ProfileCard.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_NavBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"NavBar\");\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavBar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://evolev/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=template&id=3c9405a9":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=template&id=3c9405a9 ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"Evolev\", -1 /* HOISTED */);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Menubar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Menubar\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Menubar, {\n    model: $data.items\n  }, {\n    start: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"       \")]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"model\"]);\n}\n\n//# sourceURL=webpack://evolev/./src/Header/navbar.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=template&id=8dc7cce2":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=template&id=8dc7cce2 ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"home\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"Add a block\", -1 /* HOISTED */);\nconst _hoisted_4 = {\n  class: \"flex flex-column gap-2\"\n};\nconst _hoisted_5 = {\n  class: \"grid\"\n};\nconst _hoisted_6 = {\n  style: {\n    \"text-align\": \"right\"\n  }\n};\nconst _hoisted_7 = {\n  key: 0\n};\nconst _hoisted_8 = {\n  key: 1\n};\nconst _hoisted_9 = [\"href\"];\nconst _hoisted_10 = {\n  key: 2\n};\nconst _hoisted_11 = {\n  key: 3\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Button\");\n  const _component_Inputtext = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Inputtext\");\n  const _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Dropdown\");\n  const _component_SelectButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"SelectButton\");\n  const _component_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Sidebar\");\n  const _component_Levels = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Levels\");\n  const _component_Tasks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Tasks\");\n  const _component_ProfileCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ProfileCard\");\n  const _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Card\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {\n    icon: \"pi pi-cog\",\n    rounded: \"\",\n    outlined: \"\",\n    style: {\n      \"float\": \"left\"\n    },\n    onClick: _cache[0] || (_cache[0] = $event => $data.cogActivated = !$data.cogActivated)\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar, {\n    visible: $data.cogActivated,\n    \"onUpdate:visible\": _cache[8] || (_cache[8] = $event => $data.cogActivated = $event)\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Inputtext, {\n      modelValue: $data.blockToAdd.title,\n      \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.blockToAdd.title = $event),\n      placeholder: \"Title *\"\n    }, null, 8 /* PROPS */, [\"modelValue\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {\n      modelValue: $data.blockToAdd.typeBlock,\n      \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $data.blockToAdd.typeBlock = $event),\n      options: ['Link', 'Levels', 'Tasks', 'Profile'],\n      placeholder: \"Type\",\n      class: \"w-full md:w-14rem\"\n    }, null, 8 /* PROPS */, [\"modelValue\"]), $data.blockToAdd.typeBlock == 'Link' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Inputtext, {\n      key: 0,\n      modelValue: $data.blockToAdd.content,\n      \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $data.blockToAdd.content = $event),\n      placeholder: \"Link\"\n    }, null, 8 /* PROPS */, [\"modelValue\"])) : $data.blockToAdd.typeBlock == 'Tasks' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Dropdown, {\n      key: 1,\n      modelValue: $data.blockToAdd.content,\n      \"onUpdate:modelValue\": _cache[4] || (_cache[4] = $event => $data.blockToAdd.content = $event),\n      options: $data.projects,\n      optionvalue: \"id\",\n      optionLabel: \"title\",\n      placeholder: \"Projects\",\n      class: \"w-full md:w-14rem\"\n    }, null, 8 /* PROPS */, [\"modelValue\", \"options\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Size: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectButton, {\n      modelValue: $data.blockToAdd.size,\n      \"onUpdate:modelValue\": _cache[5] || (_cache[5] = $event => $data.blockToAdd.size = $event),\n      options: ['1/4', '1/3', '1/2', '1/1'],\n      \"aria-labelledby\": \"multiple\"\n    }, null, 8 /* PROPS */, [\"modelValue\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Disposition: \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectButton, {\n      modelValue: $data.blockToAdd.disposition,\n      \"onUpdate:modelValue\": _cache[6] || (_cache[6] = $event => $data.blockToAdd.disposition = $event),\n      options: ['Horizontal', 'Vertical'],\n      \"aria-labelledby\": \"multiple\"\n    }, null, 8 /* PROPS */, [\"modelValue\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {\n      label: \"add\",\n      style: {\n        \"float\": \"left\"\n      },\n      onClick: _cache[7] || (_cache[7] = $event => $options.addBlock())\n    })])]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"visible\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Content starts here \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" {{ blocks }} \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" { \\\"id\\\": 2, \\\"created\\\": \\\"2023-09-27T23:25:56.753775Z\\\", \\\"title\\\": \\\"test\\\", \\\"typeBlock\\\": \\\"Levels\\\", \\\"size\\\": \\\"1/4\\\", \\\"disposition\\\": \\\"Horizontal\\\", \\\"content\\\": \\\"\\\", \\\"assignee\\\": 1 } \"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.blocks, block => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: block.id,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('col-' + block.size)\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Card, null, {\n      title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.title) + \" \", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {\n        icon: \"pi pi-trash\",\n        onClick: $event => $options.DeleteBlock(block.id)\n      }, null, 8 /* PROPS */, [\"onClick\"])])]),\n      content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [block.typeBlock == 'Levels' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Levels)])) : block.typeBlock == 'Link' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n        href: block.content\n      }, \"Link to resource\", 8 /* PROPS */, _hoisted_9)])) : block.typeBlock == 'Tasks' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tasks, {\n        ProjectId: block.content\n      }, null, 8 /* PROPS */, [\"ProjectId\"])])) : block.typeBlock == 'Profile' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProfileCard, {\n        showLevels: false\n      })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]),\n      _: 2 /* DYNAMIC */\n    }, 1024 /* DYNAMIC_SLOTS */)], 2 /* CLASS */);\n  }), 128 /* KEYED_FRAGMENT */))])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://evolev/./src/components/Home.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Login.vue?vue&type=template&id=ef68022e":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Login.vue?vue&type=template&id=ef68022e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"grid\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-3\"\n}, null, -1 /* HOISTED */);\nconst _hoisted_3 = {\n  class: \"col-6\"\n};\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n  alt: \"user header\",\n  height: \"150\",\n  width: \"150\",\n  src: \"https://images.unsplash.com/photo-1476445704028-a36e0c798192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80\"\n}, null, -1 /* HOISTED */);\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Username:\", -1 /* HOISTED */);\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_7 = {\n  class: \"p-inputgroup flex-1\"\n};\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"p-inputgroup-addon\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n  class: \"pi pi-user\"\n})], -1 /* HOISTED */);\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Password:\", -1 /* HOISTED */);\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_11 = {\n  class: \"p-inputgroup flex-1\"\n};\nconst _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-3\"\n}, null, -1 /* HOISTED */);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"InputText\");\n  const _component_Password = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Password\");\n  const _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Button\");\n  const _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Card\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Card, null, {\n    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Login \")]),\n    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_4, _hoisted_5, _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {\n      placeholder: \"Username\",\n      modelValue: $data.login.username,\n      \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.login.username = $event)\n    }, null, 8 /* PROPS */, [\"modelValue\"])]), _hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Password, {\n      modelValue: $data.login.password,\n      \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.login.password = $event),\n      toggleMask: \"\"\n    }, null, 8 /* PROPS */, [\"modelValue\"])]), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {\n      label: \"Login\",\n      onClick: $options.Login\n    }, null, 8 /* PROPS */, [\"onClick\"])]),\n    _: 1 /* STABLE */\n  })]), _hoisted_13]);\n}\n\n//# sourceURL=webpack://evolev/./src/components/Login.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Levels.vue?vue&type=template&id=0f4f6a6f":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Levels.vue?vue&type=template&id=0f4f6a6f ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Column\");\n  const _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DataTable\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DataTable, {\n    key: $data.loaded,\n    value: $data.skills,\n    tableStyle: \"min-width: 50rem\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {\n      field: \"title\",\n      header: \"Skill\"\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {\n      field: \"level\",\n      header: \"Level\"\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {\n      field: \"experience\",\n      header: \"XP\"\n    })]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"value\"]);\n}\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Levels.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/ProjectCard.vue?vue&type=template&id=74e52a0e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/ProjectCard.vue?vue&type=template&id=74e52a0e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n  alt: \"user header\",\n  src: \"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80\",\n  width: \"200\"\n}, null, -1 /* HOISTED */);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Card\");\n  return $props.Project ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Card, {\n    key: 0,\n    style: {\n      \"width\": \"25em\"\n    }\n  }, {\n    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1]),\n    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.Project.title), 1 /* TEXT */)]),\n\n    subtitle: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.Project.description), 1 /* TEXT */)]),\n\n    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => []),\n    _: 1 /* STABLE */\n  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true);\n}\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/ProjectCard.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Projects.vue?vue&type=template&id=9f19540c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Projects.vue?vue&type=template&id=9f19540c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"Column\");\n  const _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"Button\");\n  const _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"DataTable\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)(_component_DataTable, {\n    value: $data.projects,\n    tableStyle: \"min-width: 50rem\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, {\n      field: \"title\",\n      header: \"Project\"\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\" <Column field=\\\"percent\\\" header=\\\"percent\\\"></Column> \"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Column, null, {\n      body: (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(slotProps => [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_Button, {\n        label: \"Access\",\n        onClick: $event => _ctx.$router.push('/task/' + slotProps.data.id)\n      }, null, 8 /* PROPS */, [\"onClick\"])]),\n      _: 1 /* STABLE */\n    })]),\n\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"value\"]);\n}\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Projects.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Tasks.vue?vue&type=template&id=4de3a83e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Tasks.vue?vue&type=template&id=4de3a83e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", null, \" Add a task \", -1 /* HOISTED */);\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_3 = {\n  class: \"p-input-icon-left\"\n};\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_6 = {\n  class: \"p-float-label\"\n};\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", null, \"Description\", -1 /* HOISTED */);\nconst _hoisted_8 = {\n  class: \"p-input-icon-left\"\n};\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_11 = {\n  style: {\n    \"text-align\": \"right\"\n  }\n};\nconst _hoisted_12 = {\n  style: {\n    \"text-align\": \"right\"\n  }\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"InputText\");\n  const _component_Textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Textarea\");\n  const _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Button\");\n  const _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Dialog\");\n  const _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Column\");\n  const _component_CheckBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"CheckBox\");\n  const _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DataTable\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {\n    visible: $data.visible,\n    \"onUpdate:visible\": _cache[3] || (_cache[3] = $event => $data.visible = $event),\n    modal: \"\",\n    header: \"Header\",\n    style: {\n      width: '50vw'\n    }\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {\n      modelValue: $data.taskToAdd.title,\n      \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.taskToAdd.title = $event),\n      placeholder: \"Title *\"\n    }, null, 8 /* PROPS */, [\"modelValue\"])]), _hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Textarea, {\n      modelValue: $data.taskToAdd.description,\n      \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.taskToAdd.description = $event),\n      rows: \"5\",\n      cols: \"30\"\n    }, null, 8 /* PROPS */, [\"modelValue\"]), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {\n      modelValue: $data.taskToAdd.skill,\n      \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $data.taskToAdd.skill = $event),\n      placeholder: \"Skill\"\n    }, null, 8 /* PROPS */, [\"modelValue\"])]), _hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {\n      label: \"Save\",\n      onClick: $options.SubmitAndResetCreate\n    }, null, 8 /* PROPS */, [\"onClick\"])]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"visible\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {\n    value: $data.tasks,\n    tableStyle: \"min-width: 50rem\"\n  }, {\n    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {\n      icon: \"pi pi-external-link\",\n      label: \"Add a task\",\n      onClick: _cache[4] || (_cache[4] = $event => $data.visible = !$data.visible)\n    })])]),\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {\n      field: \"title\",\n      header: \"Task\"\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {\n      field: \"description\"\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {\n      field: \"skill\"\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, null, {\n      body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(slotProps => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CheckBox, {\n        modelValue: slotProps.data.done,\n        binary: true,\n        onClick: $event => $options.checkTask(slotProps.data.id),\n        disabled: slotProps.data.done\n      }, null, 8 /* PROPS */, [\"modelValue\", \"onClick\", \"disabled\"])]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, null, {\n      body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(slotProps => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <input type=\\\"checkbox\\\" :checked=\\\"slotProps.data.done\\\" @click=\\\"checkTask(slotProps.data.id)\\\"> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {\n        icon: \"pi pi-external-link\",\n        label: \"Duplicate task\",\n        onClick: $event => $options.duplicateTask(slotProps.data)\n      }, null, 8 /* PROPS */, [\"onClick\"])]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, null, {\n      body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(slotProps => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {\n        icon: \"pi pi-trash\",\n        onClick: $event => $options.DeleteTask(slotProps.data.id)\n      }, null, 8 /* PROPS */, [\"onClick\"])])]),\n      _: 1 /* STABLE */\n    })]),\n\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"value\"])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Tasks.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Profile.vue?vue&type=template&id=bf1681ae":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Profile.vue?vue&type=template&id=bf1681ae ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"grid\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-2\"\n}, null, -1 /* HOISTED */);\nconst _hoisted_3 = {\n  class: \"col-8\"\n};\nconst _hoisted_4 = {\n  class: \"col-2\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Levels = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Levels\");\n  const _component_ProfileCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ProfileCard\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Levels)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProfileCard, {\n    showLevels: false\n  })])]);\n}\n\n//# sourceURL=webpack://evolev/./src/components/Profile.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Projects.vue?vue&type=template&id=60dc6baa":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Projects.vue?vue&type=template&id=60dc6baa ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"grid\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-2\"\n}, null, -1 /* HOISTED */);\nconst _hoisted_3 = {\n  class: \"col-8\"\n};\nconst _hoisted_4 = {\n  class: \"col-2\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Projects = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Projects\", true);\n  const _component_ProfileCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ProfileCard\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Projects)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProfileCard, {\n    showLevels: true\n  })])]);\n}\n\n//# sourceURL=webpack://evolev/./src/components/Projects.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Tasks.vue?vue&type=template&id=0acc1ee4":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Tasks.vue?vue&type=template&id=0acc1ee4 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"grid\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-2\"\n}, null, -1 /* HOISTED */);\nconst _hoisted_3 = {\n  class: \"col-8\"\n};\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-2\"\n}, null, -1 /* HOISTED */);\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-2\"\n}, null, -1 /* HOISTED */);\nconst _hoisted_6 = {\n  class: \"col-8\"\n};\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-2\"\n}, null, -1 /* HOISTED */);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ProjectCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ProjectCard\");\n  const _component_Tasks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Tasks\", true);\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ProjectCard, {\n    key: $data.loaded,\n    Project: $data.project\n  }, null, 8 /* PROPS */, [\"Project\"]))]), _hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Tasks, {\n    key: $data.loaded,\n    ProjectId: $data.project.id,\n    Tasks: $data.tasks,\n    onRefresh: _cache[0] || (_cache[0] = $event => $options.loadProject())\n  }, null, 8 /* PROPS */, [\"ProjectId\", \"Tasks\"]))]), _hoisted_7]);\n}\n\n//# sourceURL=webpack://evolev/./src/components/Tasks.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UserComponents/ProfileCard.vue?vue&type=template&id=2020a5ca":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UserComponents/ProfileCard.vue?vue&type=template&id=2020a5ca ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n  alt: \"user header\",\n  src: \"https://www.w3schools.com/howto/img_avatar.png\",\n  style: {\n    \"border-radius\": \"50%\"\n  },\n  width: \"120\"\n}, null, -1 /* HOISTED */);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Levels = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Levels\");\n  const _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Card\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Card, {\n    style: {\n      \"width\": \"25em\"\n    }\n  }, {\n    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1]),\n    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userProfile.username), 1 /* TEXT */)]),\n\n    subtitle: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Lvl.\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userProfile.levelUser), 1 /* TEXT */)]),\n\n    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [$props.showLevels ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Levels, {\n      key: 0\n    })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]),\n    _: 1 /* STABLE */\n  });\n}\n\n//# sourceURL=webpack://evolev/./src/components/UserComponents/ProfileCard.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var primevue_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/config */ \"./node_modules/primevue/config/config.esm.js\");\n/* harmony import */ var primevue_resources_themes_fluent_light_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/resources/themes/fluent-light/theme.css */ \"./node_modules/primevue/resources/themes/fluent-light/theme.css\");\n/* harmony import */ var primevue_resources_themes_fluent_light_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primevue_resources_themes_fluent_light_theme_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var primevue_resources_primevue_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/resources/primevue.min.css */ \"./node_modules/primevue/resources/primevue.min.css\");\n/* harmony import */ var primevue_resources_primevue_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primevue_resources_primevue_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeicons/primeicons.css */ \"./node_modules/primeicons/primeicons.css\");\n/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeflex/primeflex.css */ \"./node_modules/primeflex/primeflex.css\");\n/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.vue\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Projects */ \"./src/components/Projects.vue\");\n/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Profile */ \"./src/components/Profile.vue\");\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Tasks */ \"./src/components/Tasks.vue\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Login */ \"./src/components/Login.vue\");\n\n\n\n\n\n\n\nwindow.$ = window.jQuery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\n\n\n\n\n\nconst routes = [{\n  path: '/',\n  name: 'News',\n  component: _components_Home__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}, {\n  path: '/projects',\n  name: 'Projects',\n  component: _components_Projects__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}, {\n  path: '/profile',\n  name: 'Profile',\n  component: _components_Profile__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n}, {\n  path: '/task/:ProjectId',\n  props: true,\n  name: 'Task',\n  component: _components_Tasks__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n}, {\n  path: '/login',\n  name: 'login',\n  component: _components_Login__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n}];\nconst routers = (0,vue_router__WEBPACK_IMPORTED_MODULE_12__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_12__.createWebHashHistory)(),\n  routes\n});\n\n// console.log(process.env)\n// alert(process.env)\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use(primevue_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.use(routers);\napp.mount('#app');\n\n//# sourceURL=webpack://evolev/./src/main.js?");

/***/ }),

/***/ "./src/services/getUserContext.js":
/*!****************************************!*\
  !*** ./src/services/getUserContext.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteApiRequest: function() { return /* binding */ DeleteApiRequest; },\n/* harmony export */   GetApiRequest: function() { return /* binding */ GetApiRequest; },\n/* harmony export */   PostApiRequest: function() { return /* binding */ PostApiRequest; }\n/* harmony export */ });\nvar GlobalUrl = \"https://waifu-gpt.com/\";\nvar $ = window.jQuery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\nasync function GetApiRequest(objectName) {\n  let url = GlobalUrl + objectName;\n  let ajaxObj = {\n    url: url\n  };\n  if (localStorage.getItem(\"token\")) {\n    ajaxObj.beforeSend = function (xhr) {\n      xhr.setRequestHeader(\"Authorization\", \"Token \" + localStorage.getItem(\"token\"));\n    };\n  }\n  var objects = await $.ajax(ajaxObj);\n  return objects;\n}\nasync function PostApiRequest(objectName, data) {\n  var url = GlobalUrl + objectName + \"/\";\n  let ajaxObj = {\n    url: url,\n    method: \"POST\",\n    data: JSON.stringify(data)\n  };\n  if (localStorage.getItem(\"token\")) {\n    ajaxObj.beforeSend = function (xhr) {\n      xhr.setRequestHeader(\"Authorization\", \"Token \" + localStorage.getItem(\"token\"));\n    };\n  }\n  var objects = await $.ajax(ajaxObj);\n  return objects;\n}\nasync function DeleteApiRequest(objectName, id) {\n  var url = GlobalUrl + objectName + \"/\" + id;\n  let ajaxObj = {\n    url: url,\n    method: \"DELETE\"\n  };\n  if (localStorage.getItem(\"token\")) {\n    ajaxObj.beforeSend = function (xhr) {\n      xhr.setRequestHeader(\"Authorization\", \"Token \" + localStorage.getItem(\"token\"));\n    };\n  }\n  var objects = await $.ajax(ajaxObj);\n  return objects;\n}\n\n//# sourceURL=webpack://evolev/./src/services/getUserContext.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n#app {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-align: center;\\n  color: #2c3e50;\\n  margin-top: 0px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://evolev/./src/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n#app {\\r\\n    font-family: Avenir, Helvetica, Arial, sans-serif;\\r\\n    -webkit-font-smoothing: antialiased;\\r\\n    -moz-osx-font-smoothing: grayscale;\\r\\n    text-align: center;\\r\\n    color: #2c3e50;\\n}\\r\\n  \", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://evolev/./src/Header/navbar.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/App.vue?");

/***/ }),

/***/ "./src/Header/navbar.vue":
/*!*******************************!*\
  !*** ./src/Header/navbar.vue ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_vue_vue_type_template_id_3c9405a9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=3c9405a9 */ \"./src/Header/navbar.vue?vue&type=template&id=3c9405a9\");\n/* harmony import */ var _navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=script&lang=js */ \"./src/Header/navbar.vue?vue&type=script&lang=js\");\n/* harmony import */ var _navbar_vue_vue_type_style_index_0_id_3c9405a9_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css */ \"./src/Header/navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_navbar_vue_vue_type_template_id_3c9405a9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/Header/navbar.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/Header/navbar.vue?");

/***/ }),

/***/ "./src/components/Home.vue":
/*!*********************************!*\
  !*** ./src/components/Home.vue ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_8dc7cce2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=8dc7cce2 */ \"./src/components/Home.vue?vue&type=template&id=8dc7cce2\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ \"./src/components/Home.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Home_vue_vue_type_template_id_8dc7cce2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/Home.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Login.vue":
/*!**********************************!*\
  !*** ./src/components/Login.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Login_vue_vue_type_template_id_ef68022e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=ef68022e */ \"./src/components/Login.vue?vue&type=template&id=ef68022e\");\n/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ \"./src/components/Login.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Login_vue_vue_type_template_id_ef68022e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/Login.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/Login.vue?");

/***/ }),

/***/ "./src/components/MainComponents/Levels.vue":
/*!**************************************************!*\
  !*** ./src/components/MainComponents/Levels.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Levels_vue_vue_type_template_id_0f4f6a6f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Levels.vue?vue&type=template&id=0f4f6a6f */ \"./src/components/MainComponents/Levels.vue?vue&type=template&id=0f4f6a6f\");\n/* harmony import */ var _Levels_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Levels.vue?vue&type=script&lang=js */ \"./src/components/MainComponents/Levels.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Levels_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Levels_vue_vue_type_template_id_0f4f6a6f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/MainComponents/Levels.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Levels.vue?");

/***/ }),

/***/ "./src/components/MainComponents/ProjectCard.vue":
/*!*******************************************************!*\
  !*** ./src/components/MainComponents/ProjectCard.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectCard_vue_vue_type_template_id_74e52a0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectCard.vue?vue&type=template&id=74e52a0e */ \"./src/components/MainComponents/ProjectCard.vue?vue&type=template&id=74e52a0e\");\n/* harmony import */ var _ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard.vue?vue&type=script&lang=js */ \"./src/components/MainComponents/ProjectCard.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ProjectCard_vue_vue_type_template_id_74e52a0e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/MainComponents/ProjectCard.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/ProjectCard.vue?");

/***/ }),

/***/ "./src/components/MainComponents/Projects.vue":
/*!****************************************************!*\
  !*** ./src/components/MainComponents/Projects.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Projects_vue_vue_type_template_id_9f19540c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=9f19540c */ \"./src/components/MainComponents/Projects.vue?vue&type=template&id=9f19540c\");\n/* harmony import */ var _Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js */ \"./src/components/MainComponents/Projects.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Projects_vue_vue_type_template_id_9f19540c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/MainComponents/Projects.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Projects.vue?");

/***/ }),

/***/ "./src/components/MainComponents/Tasks.vue":
/*!*************************************************!*\
  !*** ./src/components/MainComponents/Tasks.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tasks_vue_vue_type_template_id_4de3a83e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=4de3a83e */ \"./src/components/MainComponents/Tasks.vue?vue&type=template&id=4de3a83e\");\n/* harmony import */ var _Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js */ \"./src/components/MainComponents/Tasks.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Tasks_vue_vue_type_template_id_4de3a83e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/MainComponents/Tasks.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Tasks.vue?");

/***/ }),

/***/ "./src/components/Profile.vue":
/*!************************************!*\
  !*** ./src/components/Profile.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Profile_vue_vue_type_template_id_bf1681ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=bf1681ae */ \"./src/components/Profile.vue?vue&type=template&id=bf1681ae\");\n/* harmony import */ var _Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js */ \"./src/components/Profile.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Profile_vue_vue_type_template_id_bf1681ae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/Profile.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/Profile.vue?");

/***/ }),

/***/ "./src/components/Projects.vue":
/*!*************************************!*\
  !*** ./src/components/Projects.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Projects_vue_vue_type_template_id_60dc6baa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=60dc6baa */ \"./src/components/Projects.vue?vue&type=template&id=60dc6baa\");\n/* harmony import */ var _Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js */ \"./src/components/Projects.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Projects_vue_vue_type_template_id_60dc6baa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/Projects.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/Projects.vue?");

/***/ }),

/***/ "./src/components/Tasks.vue":
/*!**********************************!*\
  !*** ./src/components/Tasks.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tasks_vue_vue_type_template_id_0acc1ee4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=0acc1ee4 */ \"./src/components/Tasks.vue?vue&type=template&id=0acc1ee4\");\n/* harmony import */ var _Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js */ \"./src/components/Tasks.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Tasks_vue_vue_type_template_id_0acc1ee4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/Tasks.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/Tasks.vue?");

/***/ }),

/***/ "./src/components/UserComponents/ProfileCard.vue":
/*!*******************************************************!*\
  !*** ./src/components/UserComponents/ProfileCard.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProfileCard_vue_vue_type_template_id_2020a5ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileCard.vue?vue&type=template&id=2020a5ca */ \"./src/components/UserComponents/ProfileCard.vue?vue&type=template&id=2020a5ca\");\n/* harmony import */ var _ProfileCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileCard.vue?vue&type=script&lang=js */ \"./src/components/UserComponents/ProfileCard.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ProfileCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ProfileCard_vue_vue_type_template_id_2020a5ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/UserComponents/ProfileCard.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://evolev/./src/components/UserComponents/ProfileCard.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/App.vue?");

/***/ }),

/***/ "./src/Header/navbar.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/Header/navbar.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navbar.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/Header/navbar.vue?");

/***/ }),

/***/ "./src/components/Home.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/components/Home.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Login.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/Login.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Login.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/Login.vue?");

/***/ }),

/***/ "./src/components/MainComponents/Levels.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/MainComponents/Levels.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Levels_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Levels_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Levels.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Levels.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Levels.vue?");

/***/ }),

/***/ "./src/components/MainComponents/ProjectCard.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/components/MainComponents/ProjectCard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCard.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/ProjectCard.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/ProjectCard.vue?");

/***/ }),

/***/ "./src/components/MainComponents/Projects.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/components/MainComponents/Projects.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Projects.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Projects.vue?");

/***/ }),

/***/ "./src/components/MainComponents/Tasks.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/components/MainComponents/Tasks.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tasks.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Tasks.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Tasks.vue?");

/***/ }),

/***/ "./src/components/Profile.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/Profile.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Profile.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/Profile.vue?");

/***/ }),

/***/ "./src/components/Projects.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/Projects.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Projects.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/Projects.vue?");

/***/ }),

/***/ "./src/components/Tasks.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/Tasks.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tasks.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Tasks.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/Tasks.vue?");

/***/ }),

/***/ "./src/components/UserComponents/ProfileCard.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/components/UserComponents/ProfileCard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfileCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfileCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProfileCard.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UserComponents/ProfileCard.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://evolev/./src/components/UserComponents/ProfileCard.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\");\n\n\n//# sourceURL=webpack://evolev/./src/App.vue?");

/***/ }),

/***/ "./src/Header/navbar.vue?vue&type=template&id=3c9405a9":
/*!*************************************************************!*\
  !*** ./src/Header/navbar.vue?vue&type=template&id=3c9405a9 ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_template_id_3c9405a9__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_template_id_3c9405a9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navbar.vue?vue&type=template&id=3c9405a9 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=template&id=3c9405a9\");\n\n\n//# sourceURL=webpack://evolev/./src/Header/navbar.vue?");

/***/ }),

/***/ "./src/components/Home.vue?vue&type=template&id=8dc7cce2":
/*!***************************************************************!*\
  !*** ./src/components/Home.vue?vue&type=template&id=8dc7cce2 ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_8dc7cce2__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_8dc7cce2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=8dc7cce2 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Home.vue?vue&type=template&id=8dc7cce2\");\n\n\n//# sourceURL=webpack://evolev/./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Login.vue?vue&type=template&id=ef68022e":
/*!****************************************************************!*\
  !*** ./src/components/Login.vue?vue&type=template&id=ef68022e ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_ef68022e__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_ef68022e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=ef68022e */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Login.vue?vue&type=template&id=ef68022e\");\n\n\n//# sourceURL=webpack://evolev/./src/components/Login.vue?");

/***/ }),

/***/ "./src/components/MainComponents/Levels.vue?vue&type=template&id=0f4f6a6f":
/*!********************************************************************************!*\
  !*** ./src/components/MainComponents/Levels.vue?vue&type=template&id=0f4f6a6f ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Levels_vue_vue_type_template_id_0f4f6a6f__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Levels_vue_vue_type_template_id_0f4f6a6f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Levels.vue?vue&type=template&id=0f4f6a6f */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Levels.vue?vue&type=template&id=0f4f6a6f\");\n\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Levels.vue?");

/***/ }),

/***/ "./src/components/MainComponents/ProjectCard.vue?vue&type=template&id=74e52a0e":
/*!*************************************************************************************!*\
  !*** ./src/components/MainComponents/ProjectCard.vue?vue&type=template&id=74e52a0e ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_template_id_74e52a0e__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectCard_vue_vue_type_template_id_74e52a0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectCard.vue?vue&type=template&id=74e52a0e */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/ProjectCard.vue?vue&type=template&id=74e52a0e\");\n\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/ProjectCard.vue?");

/***/ }),

/***/ "./src/components/MainComponents/Projects.vue?vue&type=template&id=9f19540c":
/*!**********************************************************************************!*\
  !*** ./src/components/MainComponents/Projects.vue?vue&type=template&id=9f19540c ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_9f19540c__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_9f19540c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=template&id=9f19540c */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Projects.vue?vue&type=template&id=9f19540c\");\n\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Projects.vue?");

/***/ }),

/***/ "./src/components/MainComponents/Tasks.vue?vue&type=template&id=4de3a83e":
/*!*******************************************************************************!*\
  !*** ./src/components/MainComponents/Tasks.vue?vue&type=template&id=4de3a83e ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_template_id_4de3a83e__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_template_id_4de3a83e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tasks.vue?vue&type=template&id=4de3a83e */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MainComponents/Tasks.vue?vue&type=template&id=4de3a83e\");\n\n\n//# sourceURL=webpack://evolev/./src/components/MainComponents/Tasks.vue?");

/***/ }),

/***/ "./src/components/Profile.vue?vue&type=template&id=bf1681ae":
/*!******************************************************************!*\
  !*** ./src/components/Profile.vue?vue&type=template&id=bf1681ae ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_bf1681ae__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_bf1681ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=template&id=bf1681ae */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Profile.vue?vue&type=template&id=bf1681ae\");\n\n\n//# sourceURL=webpack://evolev/./src/components/Profile.vue?");

/***/ }),

/***/ "./src/components/Projects.vue?vue&type=template&id=60dc6baa":
/*!*******************************************************************!*\
  !*** ./src/components/Projects.vue?vue&type=template&id=60dc6baa ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_60dc6baa__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_60dc6baa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=template&id=60dc6baa */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Projects.vue?vue&type=template&id=60dc6baa\");\n\n\n//# sourceURL=webpack://evolev/./src/components/Projects.vue?");

/***/ }),

/***/ "./src/components/Tasks.vue?vue&type=template&id=0acc1ee4":
/*!****************************************************************!*\
  !*** ./src/components/Tasks.vue?vue&type=template&id=0acc1ee4 ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_template_id_0acc1ee4__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tasks_vue_vue_type_template_id_0acc1ee4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tasks.vue?vue&type=template&id=0acc1ee4 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Tasks.vue?vue&type=template&id=0acc1ee4\");\n\n\n//# sourceURL=webpack://evolev/./src/components/Tasks.vue?");

/***/ }),

/***/ "./src/components/UserComponents/ProfileCard.vue?vue&type=template&id=2020a5ca":
/*!*************************************************************************************!*\
  !*** ./src/components/UserComponents/ProfileCard.vue?vue&type=template&id=2020a5ca ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfileCard_vue_vue_type_template_id_2020a5ca__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfileCard_vue_vue_type_template_id_2020a5ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProfileCard.vue?vue&type=template&id=2020a5ca */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UserComponents/ProfileCard.vue?vue&type=template&id=2020a5ca\");\n\n\n//# sourceURL=webpack://evolev/./src/components/UserComponents/ProfileCard.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!*****************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://evolev/./src/App.vue?");

/***/ }),

/***/ "./src/Header/navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css":
/*!***************************************************************************!*\
  !*** ./src/Header/navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_style_index_0_id_3c9405a9_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_style_index_0_id_3c9405a9_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_style_index_0_id_3c9405a9_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_style_index_0_id_3c9405a9_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_navbar_vue_vue_type_style_index_0_id_3c9405a9_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://evolev/./src/Header/navbar.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"7634ea42\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://evolev/./src/App.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Header/navbar.vue?vue&type=style&index=0&id=3c9405a9&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"3053b5ea\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://evolev/./src/Header/navbar.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkevolev"] = self["webpackChunkevolev"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;