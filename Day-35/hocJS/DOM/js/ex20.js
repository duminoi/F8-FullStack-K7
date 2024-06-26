class F8 {
  static create(tag, callback) {
    class Component extends HTMLElement {
      registry = {
        length: this.handleLength,
        event: this.handleEvent,
      };
      connectedCallback() {
        var _this = this;
        var shadowRoot = this.attachShadow({
          mode: "open",
        });
        shadowRoot.innerHTML = callback.call(this); //Tìm hiểu lại về phần call this
        this.resolveAttributes(shadowRoot);
      }
      resolveAttributes(elementWrapper) {
        var _this = this;
        if (elementWrapper.children && elementWrapper.children.length) {
          Array.from(elementWrapper.children).forEach(function (element) {
            Array.from(element.attributes).forEach(function (attribute) {
              if (attribute.name.startsWith("x-")) {
                var attrName = attribute.name.replace("x-", "");
                var attrValue = attribute.nodeValue;
                typeof _this.registry[attrName] === "function" &&
                  _this.registry[attrName]({
                    element: element,
                    value: attrValue,
                  });
              }
              if (attribute.name.startsWith("@")) {
                var eventName = attribute.name.replace("@", "");
                typeof _this.registry["event"] === "function" &&
                  _this.registry["event"]({
                    element: element,
                    eventName: eventName,
                    value: attribute.nodeValue,
                  });
              }
            });
            _this.resolveAttributes(element);
          });
        }
      }
      handleLength(obj) {
        var element = obj.element;
        var value = obj.value;
        for (var i = 0; i < value; i++) {
          var elementClone = element.cloneNode(true);
          element.parentElement.append(elementClone);
        }
        element.remove();
      }
      handleEvent(obj) {
        console.log("event");
        var eventName = obj.eventName;
        console.log(eventName);
        var value = obj.value;
        var element = obj.element;
        element.addEventListener(eventName, function () {
          var funcCreator = Function(value);
          funcCreator.call(element);
        });
      }
    }
    customElements.define(tag, Component);
  }
}

F8.create("hello-world", function () {
  return `<div class="content">
                <h1 @mouseover="this.style.color='red'">Hello world</h1>
                <button @click="console.log(12345)">Click</button>
            </div>
`;
});

// F8.create("todo-app", function () {
//   console.log("todo-app");
//   var shadowRoot = this.attachShadow({
//     mode: "open",
//   });
//   shadowRoot.innerHTML = `<div class="todo-app">
//         <h1>Todo App</h1>
//         <ul>
//         <li>Todo 1</li>
//         <li>Todo 2</li>
//         <li>Todo 3</li>
//         </ul>
//         <form>
//             <input type="text" placeholder="Name..."/>
//             <button type="submit">Add</button>
//         </form>
//     </div>
//     <style>
//         h1 {
//             color: red;
//         }
//     </style>`;
// });
