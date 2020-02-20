# Particules-Air-App

pro-bono project: a local media (web-based, mobile &amp; computer format) for public outreach on a local issue of Air Quality.

**Setup**

`bundle install && yarn install && rails db:setup && yarn --cwd ./nuxt install`

**Architecture**

Rails est à la racine, Nuxt est dans le dossier `nuxt/`

Ils ont chacun leur propre `package.json`, donc pour ajouter une lib JS :

- Pour Rails `yarn add lib-js`
- Pour Nuxt `yarn --cwd ./nuxt add lib-js` ou `cd nuxt && yarn add lib-js`

Pour lancer les serveurs :

- `foreman start` : lance `rails`, `webpacker-dev-server` et `nuxt`
- `foreman start -f Procfile.rails` : lance `rails`, `webpacker-dev-server`
- `yarn --cwd ./nuxt run dev --port 8080` : lance `nuxt` uniquement

Ports :

- Nuxt : `localhost:8080`
- Rails : `localhost:3000`

après chaque git pull :

```
bundle && yarn && rails db:migrate && yarn --cwd ./nuxt
```

**NUXT**

Best practices :

- Toujours nesté votre CSS sinon il entre en conflit avec les autres pages/components

```scss
#my-navbar {
  button {
    padding: 10px 20px;
  }
}
```

- Privilegier les utilities Bootstrap (Spacing, colors, positions, flexbox...) https://getbootstrap.com/docs/4.4/utilities/spacing/
