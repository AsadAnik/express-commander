# express-commander [NPM]
Express commander will help you to creating `Model`, `Controller`, `Route`, Or `Services` for your `Node-JS (Express)` application. You can make your workflow easier with this tool. You can use `JavaScript` or `TypeScript` Backend API application with this one.

## Installation
To installing this, you have to pre-installed `Node-JS` on your system. Then you can create your `Express` Application with `npm init` or `yarn init`.

#### Install on your project with **NPM**,
```bash
npm install express-commander
```

#### Or, install with **YARN**,
```bash
yarn add express-commander
```

*`After Installation done you can see there will be a directory on node_modules folder is 'express-commander', Now you can easily use the product.`*

<br/>

## Start Development with `express-commander`

#### `Model` Or `Schema` creation,
It will help you to creating `model` or `schema` for your application. By default this will be in `JavaScript` and at `root` of your application you can see the created model.
```bash
npx express-commander make:model <name_of_your_model>
```

#### `Service` creation,
It will help you to creating `service` for your application. By default this will be in `JavaScript` and at `root` of your application you can see the created service.
```bash
npx express-commander make:service <name_of_your_service>
```

#### `Controller` creation,
It will help you to creating `controller` for your application. By default this will be in `JavaScript` and at `root` of your application you can see the created controller.
```bash
npx express-commander make:controller <name_of_your_controller>
```

#### `Route` creation,
It will help you to creating `route` for your application. By default this will be in `JavaScript` and at `root` of your application you can see the created route.
```bash
npx express-commander make:route <name_of_your_route>
```

#### Creation of all parts for resources (`Service`, `Controller`, `Route`),
It will help you to creating `Service`, `Controller`, `Route` for your application. By default this will be in `JavaScript` and at `root` of your application you can see the created `Service`, `Controller`, `Route`.
```bash
npx express-commander make:all <name_of_your_resource>
```

#### Creation of all parts for resources with schema (`Model`, `Service`, `Controller`, `Route`),
It will help you to creating `Model`, `Service`, `Controller`, `Route` for your application. By default this will be in `JavaScript` and at `root` of your application you can see the created `Model`, `Service`, `Controller`, `Route`.
```bash
npx express-commander make:all:schema <name_of_your_resource>
```
<br/>

## Changing the configurations as you like
By default it is creating `directories` at root level of your application. If you have `src` directory on your project then you can configure the setting to `express-commander` to behave like that. Also if you are developing your application with `TypeScript` instead of `JavaScript` then you are also welcome, we have `TypeScript` supports for you and you can specifying which language you want to use by changing the configuration.

#### Using different directory on your project with different language,
Run this to make configuration with your directory or you want to use `TypeScript` instead of `JavaScript`, you can specify which is your prepared things for your project, 
```bash 
npx express-commander config
```

#### Choosing `src` or not for perfect project structure,
![This is an alt text.](/imgConfig/directoryConfig.png "This is a sample image.")

#### Choosing Language for your application,
![This is an alt text.](/imgConfig/languageConfig.png "This is a sample image.")

#### After success configuration,
![This is an alt text.](/imgConfig/doneConfig.png "This is a sample image.")

<br/>

## Make Custom Commands as you like or make it shorter
We don't made any feature till for now, but you can do with one easiest way. You can create a `Makefile` then you can make short the commands or make custom your own linked command. 

#### Make a file called `Makefile`,
You have to make a file on your root directory. To do it you can use terminal or your can create by your hand. I am showing you with terminal how you can do,
```bash
touch Makefile
```

#### There is an example of doing that,
After the file creation, you can copy and paste the bellow codes to your `Makefile`. Or you can write your own command on this file.
<br>`Makefile`
```makefile
model name:
	npx express-commander make:model $(name)

service:
	npx express-commander make:service $(name)

controller:
	npx express-commander make:controller $(name)

route:
	npx express-commander make:route $(name)

all:
	npx express-commander make:all $(name)

all-schema:
	npx express-commander make:all:schema $(name)
```

#### Let's check with testing with our new command here,
**Create `Model`**
```bash
make model name=<name_of_your_model>
```

**Create `Service`**
```bash
make service name=<name_of_your_service>
```

**Create `Controller`**
```bash
make controller name=<name_of_your_controller>
```

**Create `Route`**
```bash
make route name=<name_of_your_route>
```

**Create (`Service`, `Controller`, `Route`)**
```bash
make all name=<name_of_your_resource>
```

**Create (`Model`, `Service`, `Controller`, `Route`)**
```bash
make all-schema name=<name_of_your_resource>
```

<br/>

## Links

Check our github if you thinks that, have to contribute for helping on our project, [Express-Commander Github](https://github.com/AsadAnik/express-commander).

<br/>

## Developer's Quote

> Started with minimal features and going to making more usable features to make `Express Application` more easier and developers and most loveable development experiences.
>
<br/>

## Versions

| Versions  | Features |
| ------------- |:-------------:|
| v1.0.0 | Minimal Features |
| v1.0.3 | Testing Improved |
| v1.0.4 | Command Shorting Feature |
| `Coming Soon`| `Upcoming Feature`|

