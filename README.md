# Fiori Learning

Osobní repozitář, ve kterém se učím **SAP Fiori**. Sbírám tu poznámky, cvičné aplikace a ukázky kódu, ke kterým se budu později vracet.

## Cíle

- Pochopit architekturu Fiori (Launchpad, aplikace, návrhové principy)
- Naučit se SAPUI5 / OpenUI5 (views, controllery, data binding, routing)
- Pracovat s OData službami
- Vyzkoušet Fiori elements a rozdíl oproti freestyle aplikacím
- Vytvořit pár funkčních ukázkových aplikací

## Struktura repozitáře

```
fiori-learning/
├── notes/        # poznámky a shrnutí (Markdown)
├── apps/         # cvičné aplikace, každá v samostatné složce
├── snippets/     # krátké ukázky kódu
└── README.md
```

## Jak spustit aplikace

Požadavky: [Node.js](https://nodejs.org/) (LTS) a npm.

```bash
# instalace UI5 CLI
npm install --global @ui5/cli

# spuštění vybrané aplikace
cd apps/<nazev-aplikace>
npm install
npm start
```

Aplikace poběží na `http://localhost:8080`.

## Plán učení

- [ ] Základy Fiori a design guidelines
- [ ] První SAPUI5 aplikace (Hello World)
- [ ] Data binding a modely (JSON, OData)
- [ ] Routing a navigace
- [ ] Fiori elements (List Report / Object Page)
- [ ] Nasazení a práce s Launchpadem

## Užitečné zdroje

- [SAPUI5 SDK](https://ui5.sap.com/) – dokumentace a API reference
- [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/)
- [SAP Learning](https://learning.sap.com/)
- [SAP Tutorials](https://developers.sap.com/tutorial-navigator.html)

## Poznámka

Repozitář slouží k učení. Neobsahuje žádná firemní data, přístupové údaje ani interní systémy.

## Licence

[MIT](LICENSE)
