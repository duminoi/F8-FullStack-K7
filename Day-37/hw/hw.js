class F8 {
  static component(tag, obj) {
    class Component extends HTMLElement {
      connectedCallback() {
        var shadowRoot = this.attachShadow({
          mode: "open",
        });
        shadowRoot.innerHTML = obj.template;
        this.handleEvent(shadowRoot);
        console.dir(shadowRoot);
      }
      handleEvent(root) {
        Array.from(root.children).forEach((child) => {
          Array.from(child.attributes).forEach(function (attr) {
            if (attr.nodeName.includes("v-on:")) {
              if (attr.nodeName.includes("click")) {
                console.log(attr.nodeName, child);
                child.addEventListener("click", () => {
                  console.log("click");
                });
              }
            }
          });
        });
      }
    }
    customElements.define(tag, Component);
  }
}

F8.component("custom-app", {
  data: () => ({
    count: 0,
    title: "Counter app",
  }),
  template: `
    <h1>{{ title }}</h1>
    <h2>Đã đếm: {{ count }} lần {{ title }}</h2>
    <button v-on:click="count--" v-on:change="">-</button>
    <button v-on:click="count++">+</button>
`,
});

// `<div class="content">
//                   <h1 @mouseover="this.style.color='red'">Hello world</h1>
//                   <button @click="console.log(12345)">Click</button>
//               </div>
//   `;
