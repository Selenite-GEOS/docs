---
title: Components
---

Selenite is divided into several components, each hosted in its own _GitHub_ repository.

The idea is to promote modularity and reusability, as well as to facilitate the development of new features and the maintenance of existing ones.

Each component deals only with a specific aspect of the project, and the dependencies between them are kept to a minimum.

## Components [![repo](@assets/github.svg)](https://github.com/orgs/Selenite-GEOS/repositories)
All components are hosted on _GitHub_ in the [Selenite organization](https://github.com/orgs/Selenite-GEOS).
### Commons [![repo](@assets/github.svg)](https://github.com/Selenite-GEOS/commons)
Commons contains the core classes and interfaces.
### Graph Editor [![repo](@assets/github.svg)](https://github.com/Selenite-GEOS/graph-editor)
#### Dependencies
- [Commons](#commons)
### Backend [![repo](@assets/github.svg)](https://github.com/Selenite-GEOS/backend)
MacroBlocs management.
### Simplified Interface [![repo](@assets/github.svg)](https://github.com/Selenite-GEOS/simplified-interface)
#### Dependencies
- [Commons](#commons)
- [Graph Editor](#graph-editor)
- [Astro](https://astro.build/)
- [Svelte 5](https://svelte-5-preview.vercel.app/docs/introduction) 
### Advanced Interface [![repo](@assets/github.svg)](https://github.com/Selenite-GEOS/advanced-interface)
The advanced interface is a web based appplication, which can also be installed as a desktop application.
#### Dependencies
- [Commons](#commons)
- [Graph Editor](#graph-editor)
- [Svelte 5](https://svelte-5-preview.vercel.app/docs/introduction)
- [SvelteKit](https://kit.svelte.dev)
- [Tauri](https://v2.tauri.app)

### Docs [![repo](@assets/github.svg)](https://github.com/Selenite-GEOS/docs)
The documentation you are currently reading!

It is based on [Starlight](https://starlight.astro.build), a documentation template built with [Astro](https://astro.build/), a static site generator that builds faster websites with less client-side JavaScript.


#### Dependencies
- [Astro](https://astro.build/)