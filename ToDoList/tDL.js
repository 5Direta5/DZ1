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



import {pencilEventLinicter} from './pencil.js';
import {ulEventLinicter} from './ul.js';
import {tipsBtnEventLinicter} from './tipsBtn.js';
import {closeBtnEventLinicter} from './closeBtn.js';
import {inputEventListener} from './input.js';
import {clearBtnEventListener} from './clearBtn.js';
import {saveBtnEventListener} from './saveBtn.js';
import {deleteTodos} from './deleteTodos.js';
import {loadTodos} from './loadTodos.js';
import {cat_facts} from "./cat_facts.js";

// Document ready
$(document).ready(() => {
  var spans = document.getElementsByTagName("span");
  var ul = document.querySelector("ul");
  var ul_cat_facts = document.querySelector('.cat-facts');

  // Initialize event listeners
  keypress(deleteTodo);
  ul_checked();
  pencil_show_hide();
  save_todo();
  clear_todo();
  tips();
  close();

  // Load cat facts data
  cat_facts("https://cat-fact.herokuapp.com/facts/random?animal_type&amount=10")
    .done(data => {
      console.log(data);
      setFactsData(data);
    })
    .fail(err => {
      console.log(err);
    })

  // Delete todo if delete span clicked
  function deleteTodo() {
    for (let span of spans) {
      span.addEventListener("click", function () {
        console.log(span.parentElement);
        span.parentElement.remove();
      });
    }
  }

  function loadTodos() {
    if (localStorage.getItem("todoList")) {
      ul.innerHTML = localStorage.getItem("todoList");
    }
  }

  function setFactsData(cat_facts) {
    cat_facts.map(elem => {
      ul_cat_facts.append(document.createElement('li'), elem.text)
    })
    console.log(ul_cat_facts);
  }

  deleteTodo();
  loadTodos();
});