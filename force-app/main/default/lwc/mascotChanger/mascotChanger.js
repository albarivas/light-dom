import { LightningElement } from "lwc";

export default class MascotChanger extends LightningElement {
  changeMascot() {
    const mascotGreeting = this.template.querySelector("p.mascotGreeting");
    const mascotName = this.template.querySelector("input");
    // Shouldn't do this, but it's just an example!
    mascotGreeting.innerHTML = `Hello ${mascotName.value}!`;
  }
}
