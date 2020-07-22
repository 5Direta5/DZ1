var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var lists = document.querySelectorAll("li");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closebtn");
var overlay = document.getElementById("overlay");



import {pencilEventLinicter} from 'pencil.js';
import {ulEventLinicter} from 'ul.js';
import {tipsBtnEventLinicter} from 'tipsBtn.js';
import {closeBtnEventLinicter} from 'closeBtn.js';
import {inputEventListener} from 'input.js';
import {clearBtnEventListener} from 'clearBtn.js';
import {saveBtnEventListener} from 'saveBtn.js';
import {deleteTodos} from 'deleteTodos.js';
import {loadTodos} from 'loadTodos.js';


deleteTodos();
loadTodos();


 