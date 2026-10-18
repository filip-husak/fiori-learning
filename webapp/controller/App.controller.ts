import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/* This shows naming convention for controllers - IDEs, JSDoc. */
/**
 * @name ui5.tutorial.walkthrough.controller.App
 */
export default class AppController extends Controller {
	onInit(): void {
		// show data model on view
			const data = {
					recipient: {
						name: "Světe!"
					}
			};
			const dataModel = new JSONModel(data);
			this.getView()?.setModel(dataModel);

			// show i18n model on view
			const i18nModel = new ResourceModel({
					bundleName: "ui5.tutorial.walkthrough.i18n.i18n"
			});
			this.getView()?.setModel(i18nModel, "i18n");
		}

		onShowHello(): void {
			const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/name");
			const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
			const msg = resourceBundle.getText("helloMsg", [recipient]) as string;
			MessageToast.show(msg);

	}
};