# Fiori Learning

Osobní repozitář, ve kterém se učím **SAP Fiori** a **SAPUI5**. Procházím oficiální **OpenUI5 Walkthrough v TypeScriptu** a průběžně si k němu ukládám kód a poznámky.

## Použité technologie

- [OpenUI5](https://openui5.org/) s typy `@openui5/types`
- TypeScript, transpilace přes `ui5-tooling-transpile`
- UI5 CLI (`@ui5/cli`) s live reloadem během vývoje

## Aktuální stav

- [x] Hello World
- [x] Bootstrap
- [x] Controls
- [x] XML Views
- [ ] **Controllers** ← právě tady
- [ ] Modules
- [ ] JSON Model
- [ ] Translatable Texts (i18n)
- [ ] Component Configuration a Descriptor (`manifest.json`)
- [ ] Pages, Panels a Shell
- [ ] Dialogs a Fragments
- [ ] Aggregation Binding, Data Types, Formatters
- [ ] Filtering, Sorting a Grouping
- [ ] Remote OData Service a Mock Server
- [ ] Testování (QUnit, OPA)
- [ ] Routing a navigace
- [ ] Responsivita a přístupnost

## Co už umím

- **Bootstrap:** UI5 se načítá přes `sap-ui-core.js` a konfiguruje se atributy `data-sap-ui-*` (téma, asynchronní načítání, resource roots).
- Aplikaci spustit lokálně i v GitHub Codespaces.

## Na čem právě pracuji: Controllers

- propojení view a controlleru (`controllerName`)
- event handlery ve view (`press=".onShowHello"`) a jejich implementace v TypeScriptu
- základní práce s `sap.m.MessageToast`

## Struktura repozitáře

```
fiori-learning/
├── webapp/          # zdrojový kód aplikace (views, controllery, index)
├── package.json     # závislosti a skript pro spuštění
├── tsconfig.json    # konfigurace TypeScriptu
├── ui5.yaml         # konfigurace UI5 tooling
└── README.md
```

## Jak aplikaci spustit

Požadavky: [Node.js](https://nodejs.org/) (LTS) a npm. Repozitář jde otevřít i v GitHub Codespaces, lokálně se nemusí nic instalovat.

```bash
npm install
npm start
```

Skript `npm start` spustí `ui5 serve -o index.html`, aplikace poběží na `http://localhost:8080`. V Codespaces se port přesměruje automaticky, otevřít ho jde z panelu **Ports**.

## Užitečné zdroje

- [UI5 Walkthrough](https://ui5.sap.com/#/topic/3da5f4be63264db99f2e5b04c5e853db)
- [SAPUI5 SDK](https://ui5.sap.com/), dokumentace a API reference
- [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/)
- [SAP Learning](https://learning.sap.com/)

## Poznámka

Repozitář slouží k učení. Neobsahuje žádná firemní data, přístupové údaje ani interní systémy.
