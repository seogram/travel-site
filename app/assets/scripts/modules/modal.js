import $ from 'jquery';
class Modal{
  constructor(){
    this.modalClosebtn = $(".modal__closebtn");
    this.modalContainer = $(".modal");
    this.contactBtn = $(".btn");
    this.event();
  }

  event(){
  this.modalClosebtn.click(this.closeModal.bind(this));
  //close with escape key
  var that = this;
  $(document).keyup(function(e) {
     if (e.keyCode == 27) {
       that.modalContainer.addClass("modal--is-closed");
    }
});
  this.contactBtn.click(this.openModal.bind(this));
  }
  //close modalClose
closeModal(){
  this.modalContainer.removeClass("modal--is-open");
}

  //open modalClose
openModal () {
    this.modalContainer.addClass("modal--is-open");
}

}

export default Modal;
