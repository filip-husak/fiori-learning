# Fiori Learning

Osobní repozitář, ve kterém se učím **SAP Fiori** a **SAPUI5**. Procházím oficiální **OpenUI5 Walkthrough v TypeScriptu** a průběžně si k němu ukládám kód a poznámky.

## Použité technologie

- [OpenUI5](https://openui5.org/) s typy `@openui5/types`
- TypeScript, transpilace přes `ui5-tooling-transpile`
- UI5 CLI (`@ui5/cli`) s live reloadem během vývoje
- UI5 komponenty a modely: `UIComponent`, `JSONModel`, `ResourceModel`

## Aktuální stav

- [x] Hello World
- [x] Bootstrap
- [x] Controls
- [x] XML Views
- [x] Controllers
- [x] Modules
- [x] **JSON Model**
- [x] Translatable Texts (i18n)
- [ ] **Component Configuration a Descriptor** (`manifest.json` – zatím obsahuje pouze základní `sap.app`)
- [x] Component (`Component.ts`), komponentové modely a asynchronní načítání
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
- **Controls:** vytvořit ovládací prvek (např. `sap.m.Text`) a pracovat s prvky z knihovny `sap.m`.
- **XML Views:** UI je oddělené do samostatného souboru `App.view.xml`. Výchozí XML namespace je `sap.m`, ostatní mají alias z poslední části názvu (např. `mvc` pro `sap.ui.core.mvc`).
- **Controllers:** view se s controllerem propojí přes `controllerName`, událost tlačítka se obslouží pomocí `press=".onShowHello"`. Controller je v TypeScriptu třída, která rozšiřuje `sap/ui/core/mvc/Controller`.
- **Modules:** moduly UI5 se importují (např. `MessageToast` z `sap/m/MessageToast`) a místo nativního `alert` se používá `MessageToast.show(...)`.
- **JSON Model a data binding:** `JSONModel` uchovává data příjemce (`/recipient/name`). Vstupní pole je navázané na tuto hodnotu, změny se promítají do modelu a controller z něj získává aktuální jméno pro zprávu.
- **Internationalizace (i18n):** text tlačítka i zpráva se načítají ze souboru `webapp/i18n/i18n.properties` přes `ResourceModel`. Zpráva používá placeholder `{0}`, takže se jméno do překladu předává jako parametr.
- **Komponenta:** `Component.ts` rozšiřuje `UIComponent` a nastavuje JSON a i18n model na úrovni komponenty. View se vytváří pomocí `XMLView.create(...)`.
- **Asynchronní načítání:** `index.ts` používá `ComponentContainer` s nastavením `async: true`; komponenta deklaruje rozhraní `sap.ui.core.IAsyncContentCreation`.
- **Konvence:** pojmenování controllerů, views a pravidla pro i18n mám sepsané v [Conventions_notes.md](Conventions_notes.md).
- Aplikaci lze spustit lokálně pomocí npm; postup je níže.

## MVC v kostce

- **Model** spravuje data aplikace; aktuálně používám `JSONModel` pro jméno příjemce.
- **View** definuje a vykresluje UI (XML view).
- **Controller** reaguje na události z view a uživatelské akce a podle nich pracuje s modelem.

Model už je součástí aplikace a je nastavený v `Component.ts`.

## Na čem budu pracovat dál: Component Configuration a Descriptor

- doplnit `manifest.json` o konfiguraci `sap.ui5` (např. závislosti, výchozí view a modely)
- propojit nastavení komponenty s descriptor konfigurací podle konvencí UI5
- potom pokračovat částí Pages, Panels a Shell

## Struktura repozitáře

```
fiori-learning/
├── webapp/
│   ├── controller/       # controllery (App.controller.ts)
│   ├── i18n/             # texty pro internacionalizaci (i18n.properties)
│   ├── view/             # XML views (App.view.xml)
│   ├── Component.ts      # UI5 komponenta a nastavení modelů
│   ├── index.html        # bootstrap UI5
│   ├── index.ts          # vytvoření ComponentContainer a umístění do stránky
│   └── manifest.json     # descriptor aplikace (zatím základní metadata)
├── Conventions_notes.md  # poznámky ke konvencím pojmenování
├── package.json          # závislosti a skript pro spuštění
├── tsconfig.json         # konfigurace TypeScriptu
├── ui5.yaml              # konfigurace UI5 tooling
└── README.md
```

## Jak aplikaci spustit

Požadavky: [Node.js](https://nodejs.org/) (LTS) a npm. Repozitář lze otevřít i v GitHub Codespaces, kde není potřeba nic instalovat lokálně.

```bash
npm install
npm start
```

Skript `npm start` spustí `ui5 serve -o index.html`, aplikace poběží na `http://localhost:8080`. V Codespaces se port přesměruje automaticky; otevřít ho lze v panelu **Ports**.

## Užitečné zdroje

- [UI5 Walkthrough](https://ui5.sap.com/#/topic/3da5f4be63264db99f2e5b04c5e853db)
- [SAPUI5 SDK](https://ui5.sap.com/), dokumentace a API reference
- [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/)
- [SAP Learning](https://learning.sap.com/)
