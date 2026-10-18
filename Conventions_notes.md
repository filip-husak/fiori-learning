**Controllers**

- Controller names are capitalized

- All controllers are stored in the controller folder

- Controllers carry the same name as the related view (if there is a 1:1 relationship)

- Event handlers are prefixed with on

- Controller names always end with *.controller.ts/.js

**Views**

- View names are capitalized

- All views are stored in the view folder

- Names of XML views always end with *.view.xml

- XML namespaces are declared in the root element of the view

- As a general rule, the default XML namespace is sap.m

- Other XML namespaces use the last part of the SAP namespace as alias (for example, mvc for sap.ui.core.mvc)

**Internationalization - i18n**
- The resource model for internationalization is called the i18n model.

- The base filename is i18n.properties.

- Resource bundle keys are written in (lower) camelCase.

- Resource bundle values can contain placeholders like {0}, {1}, {2}, …

- Never concatenate strings that are translated, always use placeholders.

- Use Unicode escape sequences for special characters.
