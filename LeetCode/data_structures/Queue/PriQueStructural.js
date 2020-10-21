//Priority queue优先级队列
window.onload = function () {
  function PriorityQueue() {
    function QueueElement(element, priority) {
      this.element = element;
      this.priority = priority;
    }
    this.items = [];
    PriorityQueue.prototype.enqueue = function(element, priority){
			let queueElement = new QueueElement(element,priority)
		};
  }
};
