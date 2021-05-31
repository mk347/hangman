Universal Template
========


Branches
--------

* `master` - Master branch that contains the latest production release. New branches are created from `master`.

* `preprod` - Preprod branch contains work in progress. This is used for testing and deploying work in progress. 

* `feature/<ticket>-<year>-<vehicle>-<feature>` - (i.e. `feature/USCMSSPT-93082-2020-silverado-colorizer`) Feature branches are created off of `master` and will only be used during testing.


• When new development begins, a feature branch should be created off of the `master` branch for the new functionality.

• Test a feature: 
	- Feature branches need to be pull requested into preprod for deployment. 

• Push a feature live - all pushes to production only come from master:
	- Pull request feature to Master
    - Pull from current master branch
    - address any merge issues
	- push to master
	- delete feature branch

![](docs/BuildProcess.png)

________

Troubleshooting
--------

This project has been updated and tested for node 11.13.0. Please use this version and do not upgrade any packages without extensive testing and documentation.

Please install and use Node Version Manager on this project to ensure there is no updates that will break these build tools.

https://github.com/nvm-sh/nvm#installation-and-update

After basic installation -> ```nvm install 11.13.0```
________

Error:

```SyntaxError: Unexpected string -> import './gulp';```

The version of babel used originally on this project has been deprecated. Include a ```.babelrc``` file inside the root of the component. Inside the file copy paste this:

```{"presets": ["@babel/preset-env"]}```
________

Error:

```ReferenceError: internalBinding is not defined -> 'use strict';```

Natives has been deprecated. This package relies on node.js's internals and broke after the newest version of node.

to fix in CLI in the root component directory -> ```npm install natives@1.1.6```

________

Error:

```Error: Couldn't find preset "@babel/preset-env" relative to directory "/Users/levy.adams/Creative Cloud Files/iframes/gmc/2019/Yukon/colorizer"```

This build does not utilize the latest babel module. Delete the .babelrc file out of the root directory of the component.


