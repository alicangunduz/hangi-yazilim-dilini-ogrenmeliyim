"use strict";

$(function () {
  // ========== Form-select-option ========== //
  $(".form_items li").on('click', function () {
    $(".form_items li").removeClass("active");
    $(this).addClass("active");
  }); // ========== Multi-step-form-Button ========== //
  // ===== DOM elements =====//

  var domStings = {
    progressBar: document.querySelector('.form_progress_bar'),
    progressItemsClass: 'progress_item',
    progressItems: document.querySelectorAll(".progress_item"),
    multiStepForm: document.querySelector('.multisteps_form'),
    multiStepPanelClass: 'multisteps_form_panel',
    multiStepPanels: document.querySelectorAll('.multisteps_form_panel') // formPrevBtnClass: 'msf_btn_last',
    // formNextBtnClass: 'msf_btn_next'

  }; // ===== Remove class from a set of items ===== //
  // const removeClasses = (elemSet, className) => {
  //   elemSet.forEach(elem => {
  //     elem.classList.remove(className);
  //   });
  // };
  // ===== Remove class from a set of items ===== //
});