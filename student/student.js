// Vue.component('modal', {
//   template: `
//      <transition name="modal">
//       <div class="modal-mask">
//         <div class="modal-wrapper">
//           <div class="modal-container">

//             <div class="modal-header">
//               <slot name="header">
//                 default header
//               </slot>
//             </div>

//             <div class="modal-body">
//               <slot name="body">
//                 default body
//               </slot>
//             </div>

//             <div class="modal-footer">
//               <slot name="footer">
//                 default footer
//                 <button class="modal-default-button" @click="$emit('close')">
//                   OK
//                 </button>
//               </slot>
//             </div>
//           </div>
//         </div>
//       </div>
//     </transition>
//     `
// })

Vue.component('modal', {
  template: '#modal-template'
});

new Vue({
  el: '#app',
  data: {
    items: [
      '1 Сем',
      '2 Сем',
    ],
    show: false,
  },
});

new Vue({
  el: '#app2',
  data: {
    items: [
      '1 Сем',
      '2 Сем',
    ],
    show: false,
  },
});

new Vue({
  el: '#appModel',
  data: {
    showModal: true,
    errors: [],
    name: null,
    patronymic: null,
    surname: null,
    group: null,
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.surname && this.patronymic && this.group) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Требуется указать Имя.');
      }
      if (!this.surname) {
        this.errors.push('Требуется указать Фамилию.');
      }
      if (!this.patronymic) {
        this.errors.push('Требуется указать Отчество.');
      }
      if (!this.group) {
        this.errors.push('Требуется указать Группу.');
      }

      e.preventDefault();
    }
  }
})

// const appLogin = new Vue({
//   el: '#appLogin',
//   data: {
//     errors: [],
//     name: null,
//     patronymic: null,
//     surname: null,
//     group: null,
//   },
//   methods: {
//     checkForm: function (e) {
//       if (this.name && this.surname && this.patronymic && this.group) {
//         return true;
//       }

//       this.errors = [];

//       if (!this.name) {
//         this.errors.push('Требуется указать Имя.');
//       }
//       if (!this.surname) {
//         this.errors.push('Требуется указать Фамилию.');
//       }
//       if (!this.patronymic) {
//         this.errors.push('Требуется указать Отчество.');
//       }
//       if (!this.group) {
//         this.errors.push('Требуется указать Группу.');
//       }

//       e.preventDefault();
//     }
//   }
// })