var defaults={
	targetCls:'',
	beginyear:1978,
	endyear:2050,

}
function Calendar (options) {
	var self=this;
	self.options=$.extend({},options ||{})；
}

Calendar.prototype={
	constructor:Calendar

}