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
### [Graph Editor](https://github.com/Selenite-GEOS/graph-editor)
#### Dependencies
- [Commons](#commons)
### [Backend](https://github.com/Selenite-GEOS/backend)
### [Simplified Interface]()
#### Dependencies
- [Commons](#commons)
- [Graph Editor](#graph-editor)
### [Advanced Interface](https://github.com/Selenite-GEOS/advanced-interface)
The advanced interface is a web based appplication 
#### Dependencies
- [Commons](#commons)
- [Graph Editor](#graph-editor)