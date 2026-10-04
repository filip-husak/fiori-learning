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
- [x] Controllers
- [x] Modules
- [ ] **JSON Model** ← další krok
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
- **Controls:** vytvořit ovládací prvek (`sap.m.Text`) a umístit ho do těla stránky.
- **XML Views:** UI je oddělené do samostatného souboru `App.view.xml`. Výchozí XML namespace je `sap.m`, ostatní mají alias z poslední části názvu (např. `mvc` pro `sap.ui.core.mvc`).
- **Controllers:** view se s controllerem propojí přes `controllerName`, událost tlačítka se obslouží pomocí `press=".onShowHello"`. Controller je v TypeScriptu třída, která rozšiřuje `sap/ui/core/mvc/Controller`.
- **Modules:** moduly UI5 se importují (`import MessageToast from "sap/m/MessageToast"`) a místo nativního `alert` se používá `MessageToast.show(...)`.
- **Konvence:** pojmenování controllerů a views mám sepsané v [Conventions_notes.md](Conventions_notes.md).
- Aplikaci spustit lokálně i v GitHub Codespaces.

## MVC v kostce

- **Model** spravuje data aplikace.
- **View** definuje a vykresluje UI (XML view).
- **Controller** reaguje na události z view a uživatelské akce a podle nich upravuje view a model.

Model zatím nemám, přijde v dalším kroku.

## Na čem budu pracovat dál: JSON Model

- první "M" v MVC: vytvořit JSON model a připojit ho k view
- navázat vstupní pole na model (data binding)
- zobrazit zadanou hodnotu po stisku tlačítka

## Struktura repozitáře

```
fiori-learning/
├── webapp/
│   ├── controller/       # controllery (App.controller.ts)
│   ├── view/             # XML views (App.view.xml)
│   ├── index.html        # bootstrap UI5
│   ├── index.ts          # vytvoření view a umístění do stránky
│   └── manifest.json
├── Conventions_notes.md  # poznámky ke konvencím pojmenování
├── package.json          # závislosti a skript pro spuštění
├── tsconfig.json         # konfigurace TypeScriptu
├── ui5.yaml              # konfigurace UI5 tooling
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