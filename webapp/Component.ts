import JSONModel from "sap/ui/model/json/JSONModel";
import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace ui5.tutorial.walkthrough
 */
export default class Component extends UIComponent {
  public static metadata = {
    interfaces: ["sap.ui.core.IAsyncContentCreation"],
    manifest: "json"
  };

  init(): void {
    super.init();

    const data = {
      recipient: {
        name: "Světe"
      }
    };

    const dataModel = new JSONModel(data);
    this.setModel(dataModel);
  }
}