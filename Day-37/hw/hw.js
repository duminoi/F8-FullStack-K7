class F8 {
  static component(tag, { data, template }) {
    class Component extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        var shadowRoot = this.attachShadow({
          mode: "open",
        });
        this.handleEvent(shadowRoot, this);
      }
      handleEvent(root, _this) {
        //convert data
        Object.keys(data()).forEach((key) => {
          window[key] = data()[key];
        });
        //render
        const templateEl = document.createElement("template");
        templateEl.innerHTML = template;
        const templateNode = templateEl.content.cloneNode(true);
        root.append(templateNode);
        // replace variable
        const result = template.match(/{{.+?}}/g);
        console.log(result);
        result.forEach((result) => {
          const variableResult = result.match(/{{(.+?)}}/);
          console.log(variableResult);
        });
        //event
        Array.from(root.children).forEach((child) => {
          Array.from(child.attributes).forEach(function (attr) {
            if (attr.nodeName.includes("v-on:")) {
              if (attr.nodeName.includes("click")) {
                console.log(attr.nodeName, child);
                if (attr.nodeValue.includes("--")) {
                  //   console.log("--");
                  child.addEventListener("click", () => {
                    count--;
                    console.log(count);
                  });
                } else {
                  if (attr.nodeValue.includes("++")) {
                    child.addEventListener("click", () => {
                      count++;
                      console.log(count);
                    });
                  }
                }
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
