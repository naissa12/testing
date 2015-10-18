module.exports = {
	state: false,
	toggle: function () {
		return this.isOn(1);
	},
	isOn: function (result) {
		return !this.state;
	}
}