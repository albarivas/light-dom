import { LightningElement } from "lwc";
import { loadStyle } from "lightning/platformResourceLoader";
import { loadScript } from "c/resourceLoader";
import cssResource from "@salesforce/resourceUrl/myCSSResource";
import jsResource from "@salesforce/resourceUrl/myJSResource";

export default class StaticResourceLoaderExpCloud extends LightningElement {
  setup = false;

  renderedCallback() {
    if (!this.setup) {
      loadScript(jsResource);
      loadStyle(this, cssResource);

      this.setup = true;
    }
  }
}
