import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

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
			}

		onShowHello(): void {
			MessageToast.show("Ahoj světe!");
	}
};