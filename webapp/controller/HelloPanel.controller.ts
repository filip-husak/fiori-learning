import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Dialog from "sap/m/Dialog";

/* This shows naming convention for controllers - IDEs, JSDoc. */
/**
 * @name ui5.tutorial.walkthrough.controller
 */
export default class HelloPanel extends Controller {
        private dialog : Dialog

    onShowHello(): void {
    // read msg from i18n model
		// functions with generic return values require casting
    const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
    const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/name");
    const msg = resourceBundle.getText("helloMsg", [recipient]) as string;
    // Show message
    MessageToast.show(msg);
  }

  async onOpenDialog(): Promise<void> {
    this.dialog ??= await this.loadFragment({
      name: "ui5.tutorial.walkthrough.view.HelloDialog"
    }) as Dialog;
    this.dialog.open();
  }
};