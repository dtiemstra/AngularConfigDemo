# AngularConfigDemo

This repository contains an example for loading some configuration settings without using the APP_INITIALIZER.
This can be usefull for implementing (DI)factories in your AppModule for types that depend on configuration values.

The configuration is loaded async from a json-file in main.ts before the AppModule is bootstrapped.
The configuration can be accessed inside the AppModule and/or your components/services (see appcomponent for an example)

Since the configuration is stored in a seperate file it can be easily modified during the release-cycle in a Devops scenario.