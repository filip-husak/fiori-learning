# Fiori Learning

Osobní repozitář, ve kterém se učím **SAP Fiori** a **SAPUI5**. Procházím oficiální **OpenUI5 Walkthrough v TypeScriptu** a průběžně si k němu ukládám kód a poznámky.

## Použité technologie

- [OpenUI5](https://openui5.org/) s typy `@openui5/types`
- TypeScript, transpilace přes `ui5-tooling-transpile`
- UI5 CLI (`@ui5/cli`) s live reloadem během vývoje
- UI5 komponenty a modely: `UIComponent`, `JSONModel` (výchozí i pojmenovaný), `ResourceModel`
- Ovládací prvky z `sap.m`: `Shell`, `App`, `Page`, `Panel`, `Button`, `Input`, `FormattedText`, `Dialog`, `List`, `ObjectListItem`
- Ovládací prvky z `sap.ui.core`: `Icon`, `FragmentDefinition`
- Ikonový font SAP (`sap-icon://`)
- Descriptor aplikace (`manifest.json`)
- Vlastní CSS (`webapp/css/style.css`)

## Aktuální stav

- [x] Hello World
- [x] Bootstrap
- [x] Controls
- [x] XML Views
- [x] Controllers
- [x] Modules
- [x] JSON Model
- [x] Translatable Texts (i18n)
- [x] Component Configuration (`Component.ts`, `manifest: "json"`)
- [x] Descriptor for Applications (`manifest.json` – `sap.app`, `sap.ui`, `sap.ui5`)
- [x] Pages a Panels
- [x] Shell Control jako kontejner
- [x] Margins a Paddings
- [x] Custom CSS a Theme Colors
- [x] Nested Views
- [x] Dialogs a Fragments
- [x] Fragment Callbacks
- [x] Icons
- [ ] Aggregation Binding (rozpracováno – hotový `InvoiceList` a model `invoice`, seznam ještě není vložený do aplikace)
- [ ] Data Types, Expression Binding a Formatters
- [ ] Filtering, Sorting a Grouping
- [ ] Remote OData Service a Mock Server
- [ ] Testování (QUnit, OPA)
- [ ] Routing a navigace
- [ ] Responsivita a přístupnost

## Co už umím

- **Bootstrap:** UI5 se načítá přes `sap-ui-core.js` a konfiguruje se atributy `data-sap-ui-*` (téma, asynchronní načítání, resource roots). Komponenta se spouští přes `data-sap-ui-on-init="module:sap/ui/core/ComponentSupport"`.
- **Controls:** vytvořit ovládací prvek (např. `sap.m.Text`) a pracovat s prvky z knihovny `sap.m`.
- **XML Views:** UI je oddělené do samostatných souborů `*.view.xml`. Výchozí XML namespace je `sap.m`, ostatní mají alias z poslední části názvu (např. `mvc` pro `sap.ui.core.mvc`).
- **Controllers:** view se s controllerem propojí přes `controllerName`, událost tlačítka se obslouží pomocí `press=".onShowHello"`. Controller je v TypeScriptu třída, která rozšiřuje `sap/ui/core/mvc/Controller`.
- **Modules:** moduly UI5 se importují (např. `MessageToast` z `sap/m/MessageToast`) a místo nativního `alert` se používá `MessageToast.show(...)`.
- **JSON Model a data binding:** `JSONModel` uchovává data příjemce (`/recipient/name`). Vstupní pole je navázané na tuto hodnotu, změny se promítají do modelu a controller z něj získává aktuální jméno pro zprávu.
- **Internationalizace (i18n):** texty (tlačítka, zpráva, nadpisy stránky, panelu a seznamu) se načítají ze souboru `webapp/i18n/i18n.properties` přes `ResourceModel`. Zpráva používá placeholder `{0}`, takže se jméno do překladu předává jako parametr.
- **Komponenta:** `Component.ts` rozšiřuje `UIComponent`, v `metadata` odkazuje na descriptor (`manifest: "json"`) a v `init()` nastavuje JSON model s daty příjemce.
- **Descriptor aplikace (`manifest.json`):** konfigurace aplikace je oddělená od kódu. Sekce `sap.app` obsahuje ID aplikace, verzi a překládatelný název a popis (`{{appTitle}}`, `{{appDescription}}` z i18n). Sekce `sap.ui` definuje typ technologie a podporovaná zařízení. Sekce `sap.ui5` určuje závislosti (`sap.ui.core`, `sap.m`), root view (`App`, XML), modely (`i18n` a `invoice`) a další zdroje aplikace (`resources` – zde vlastní CSS).
- **Asynchronní načítání:** komponenta deklaruje rozhraní `sap.ui.core.IAsyncContentCreation`, takže se root view vytváří asynchronně. Bootstrap v `index.html` má nastavené `data-sap-ui-async="true"`.
- **Pages, Panels a Shell:** root view `App.view.xml` obaluje obsah do `Shell` → `App` → `Page`. Vlastní obsah je v `Panel` s nadpisem z i18n.
- **Margins a Paddings:** odsazení se řeší pomocí standardních UI5 tříd, např. `sapUiResponsiveMargin` na panelu, `sapUiSmallMarginEnd` na tlačítku a `sapUiSmallMargin` na textu. Pevné hodnoty v CSS nejsou potřeba.
- **Custom CSS a Theme Colors:** vlastní styly jsou v `webapp/css/style.css` a načítají se přes `resources` → `css` v `manifest.json`. Selektory jsou svázané s třídou `myAppDemoWT` nastavenou na `App`, takže platí jen v rámci aplikace. Barvu textu nenastavuju v CSS, ale pomocí třídy závislé na tématu (`sapThemeHighlight-asColor`), aby seděla ke zvolenému tématu.
- **Nested Views:** obsah panelu je vyčleněný do samostatného `HelloPanel.view.xml` s vlastním `HelloPanel.controller.ts` (obsluha tlačítek a zpráva). `App.view.xml` ho vkládá přes `mvc:XMLView`. `App.controller.ts` zůstává prázdný, protože root view už žádnou logiku nemá.
- **Dialogs a Fragments:** dialog je vyčleněný do samostatného fragmentu `HelloDialog.fragment.xml` (`core:FragmentDefinition`). Controller ho načítá přes `this.loadFragment({ name: ... })` a otevírá metodou `open()`. Fragment se načte jen jednou, při prvním otevření – instance se uloží do vlastnosti `dialog` pomocí operátoru `??=`. Dialog používá model komponenty, takže v nadpisu vidí aktuální jméno příjemce (`{/recipient/name}`).
- **Fragment Callbacks:** tlačítko v dialogu (`beginButton`) volá `.onCloseDialog`. Handler je v controlleru view, které fragment načetlo. Dialog zavírá přes `this.byId("helloDialog")` – ID prvků z fragmentu se prefixují ID view, takže je potřeba hledat je přes `byId` controlleru, ne globálně.
- **Icons:** ikony se berou z ikonového fontu SAP přes protokol `sap-icon://`. Použil jsem je jako vlastnost `icon` na tlačítku (`sap-icon://world`) a jako samostatný prvek `core:Icon` v dialogu (`sap-icon://hello-world`, velikost `8rem`).
- **Aggregation Binding (část 1):** testovací data faktur jsou v `webapp/model/localInvoices.json`. Model je v `manifest.json` zaregistrovaný jako pojmenovaný `invoice` s odkazem `uri` na JSON soubor, takže ho UI5 vytvoří automaticky a je vidět v celé aplikaci. `InvoiceList.view.xml` obsahuje `List`, jejíž agregace `items` je navázaná na `{invoice>/Invoices}`. Pro každou fakturu se vytvoří `ObjectListItem`, jehož `title` používá relativní cesty (`{invoice>Quantity} x {invoice>ProductName}`). U pojmenovaného modelu je vždy potřeba prefix `invoice>`.
- **Konvence:** pojmenování controllerů, views, pravidla pro i18n a pro `manifest.json` mám sepsané v [Conventions_notes.md](Conventions_notes.md).
- Aplikaci lze spustit lokálně pomocí npm; postup je níže.

## MVC v kostce

- **Model** spravuje data aplikace; aktuálně používám `JSONModel` pro jméno příjemce (nastavený v `Component.ts`), pojmenovaný `JSONModel` `invoice` pro seznam faktur (definovaný v `manifest.json`) a `ResourceModel` pro i18n texty (také v `manifest.json`). Všechny jsou na úrovni komponenty, takže je vidí i vnořená view a fragmenty.
- **View** definuje a vykresluje UI (XML view); root view je určený v `manifest.json` a větší části UI se dají vyčlenit do vnořených views nebo fragmentů.
- **Controller** reaguje na události z view a uživatelské akce a podle nich pracuje s modelem. Každé view má svůj controller se stejným názvem; fragment využívá controller view, které ho načetlo.

## Na čem budu pracovat dál

- dokončit Aggregation Binding – zobrazit `InvoiceList` v aplikaci pod panelem
- pokračovat částmi Data Types, Expression Binding a Formatters
- potom Filtering, Sorting a Grouping

## Struktura repozitáře

```
fiori-learning/
├── webapp/
│   ├── controller/       # controllery (App.controller.ts, HelloPanel.controller.ts)
│   ├── css/              # vlastní styly (style.css)
│   ├── i18n/             # texty pro internacionalizaci (i18n.properties)
│   ├── model/            # lokální testovací data (localInvoices.json)
│   ├── view/             # XML views a fragmenty (App, HelloPanel, InvoiceList, HelloDialog.fragment.xml)
│   ├── Component.ts      # UI5 komponenta a nastavení JSON modelu
│   ├── index.html        # bootstrap UI5 a spuštění komponenty (ComponentSupport)
│   └── manifest.json     # descriptor aplikace (sap.app, sap.ui, sap.ui5)
├── Conventions_notes.md  # poznámky ke konvencím pojmenování a manifestu
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
