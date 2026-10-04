import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";

/ This shows naming convention for controllers - IDEs, JSDoc. /
/**
 * @name ui5.tutorial.walkthrough.controller.App
 */
export default class AppController extends Controller {
	onShowHello(): void {
		// show a native JavaScript alert
		MessageToast.show("Ahoj světe!");
	 }
};