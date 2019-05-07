var vm = new Vue ({
	el: '#app',
	data: {
		picked: [],
		correct_picked: [1, 3],
		result: [],
		quastion: null,
		quastion2: null,
		index: 0
	},
	methods: {
		get: function (e) {
			this.result = [];

			for (i = 0; i < 2; i++) {
				this.result[i] = this.correct_picked[i] == this.picked[i];
			}
			// return this.result;

			// e.preventDefault();

			if (this.result[0] && this.result[1]) {
				alert("Correct");
			} else alert("Uncorrect");
			
		},
		set: function (e) {
			this.index = null;
			this.picked = [];
			this.result = this.correct_picked == this.picked;
		}
	}
})

// computed: {
//   fullName: {
//     // геттер:
//     get: function () {
//       return this.firstName + ' ' + this.lastName
//     },
//     // сеттер:
//     set: function (newValue) {
//       var names = newValue.split(' ')
//       this.firstName = names[0]
//       this.lastName = names[names.length - 1]
//     }
//   }
// }