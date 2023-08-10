import { LightningElement } from "lwc";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";
import cssResource from "@salesforce/resourceUrl/myCSSResource";
import jsResource from "@salesforce/resourceUrl/myJSResource";

export default class StaticResourceLoader extends LightningElement {
  renderedCallback() {
    Promise.all([loadScript(this, jsResource), loadStyle(this, cssResource)])
      .then(() => {
        //changeMascot();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
