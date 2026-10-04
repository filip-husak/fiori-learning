import XMLView from "sap/ui/core/mvc/XMLView";

XMLView.create({
    viewName: "ui5.tutorial.walkthrough.view.App",
	id: "app"
}).then(function (view) {
    view.placeAt("content");
});


alert("UI5 is ready");

/*
Conventions
View names are capitalized

All views are stored in the view folder

Names of XML views always end with *.view.xml

XML namespaces are declared in the root element of the view

As a general rule, the default XML namespace is sap.m

Other XML namespaces use the last part of the SAP namespace as alias (for example, mvc for sap.ui.core.mvc)
*/