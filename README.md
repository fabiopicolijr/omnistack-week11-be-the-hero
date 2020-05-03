<h1 align="center"><img src="frontend/src/assets/logo.svg"></h1>

<h4 align="center">
  🚀 Rocketseat Omnistack Week 11
</h4>

<p align="center">
  <img alt="Repo Size" title="Repo Size" src="https://img.shields.io/github/repo-size/fabiopicolijr/be-the-hero?color=282A36" />

  <img alt="Languages" title="Languages" src="https://img.shields.io/github/languages/count/fabiopicolijr/be-the-hero?color=282A36" />

  <img alt="Language top" title="Language top" title="Made By fabiopicolijr"  src="https://img.shields.io/github/languages/top/fabiopicolijr/be-the-hero?color=282A36" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=282A36">

  <a href="https://github.com/fabiopicolijr">
    <img alt="Made By fabiopicolijr" title="Made By fabiopicolijr" src="https://img.shields.io/badge/made%20by-fabiopicolijr-DF2041" alt="Made by fabiopicolijr" />
  <a>
</p>

<p align="center">
  <a href="#fire-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#art-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#electric_plug-how-to-run">How-to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p>
  <img alt="Be The hero web presentation" title="Be The hero web presentation" src="frontend/src/assets/be-the-hero.gif" />
</p>

<br />

---

##  :fire: About the project

<p>
  <b>Be The Hero</b> is a system to helps <b>NGO's</b> to find sponsors. It was created whithin the event <b>Semana OmniStack11 - RocketSeat's</b> in order to put into practice all the content studied during the course.
</p>
<br />

---

##  :art: Layout

See project's layout at [be-the-hero-layout](https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11?node-id=37%3A394). Remember that you will have to login or create an account at [Figma](http://figma.com/).
<br />
<br />

---

## :electric_plug: How-to run

```bash

  # BACK-END - Install dependencies
  $ cd backend
  yarn install

  # BACK-END - Run test suits
  yarn test

  # BACK-END - Start application
  yarn dev


  # FRONT-END-WEB - Install dependencies
  $ cd frontend
  $ yarn start

  # FRONT-END-WEB - Run test suits
  $ yarn test

  # FRONT-END-WEB - Start application
  $ yarn dev


  # FRONT-END-MOBILE - Install dependencies
  $ cd mobiles
  $ yarn start

  # FRONT-END-MOBILE - Run test suits
  $ yarn test

  # FRONT-END-MOBILE - Start application
  $ expo start
```
<br />

---

## :link: Routes
- **User Resources**:
  - **<code>GET</code> /profile**
  - **<code>POST</code> /login**
- **Incidents Resources**:
  - **<code>POST</code> /incidents**
  - **<code>DEL</code> /incidents**
  - **<code>GET</code> /incidents**
- **Institutes Resources**:
  - **<code>POST</code> /institutes**
  - **<code>GET</code> /institutes**

<i>More information soon.</i>
<br />
<br />

---

## :traffic_light: Status Codes

Be the hero returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| <span style="color:green;">200</span> | `OK` |
| <span style="color:red;">422</span> | `UNPROCESSABLE ENTITY` |
| <span style="color:red;">400</span> | `BAD REQUEST` |
| <span style="color:red;">404</span> | `NOT FOUND` |
| <span style="color:red;">500</span> | `INTERNAL SERVER ERROR` |
<br />

---

## :memo: License

MIT License. See the file [LICENSE](LICENSE.md) for more details.
<br />
<br />

---

Developed :sparkles: by @fabiopicolijr :point_right: [See my linkedin](http://www.linkedin.com/in/fabiopicolijr).
