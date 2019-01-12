(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{502:function(e,t){e.exports="---\nlayout: post\ntitle: Moving big parts to Angular 2\ntags:\n  - GSoC\n  - Jangouts\n---\n\nIn previous post I explained how I convert Jangouts to an hybrid Angular 1+2\napplication. This approach, instead of a full migration, has two objectives. In\nfirst place test that the functionalities are working correctly is more easy,\nbecause it's possible to run Jangouts and use it. And on the other hand, if I\ncan't finish the migration, the application will be still usable allowing others\nto continue the work. But I hope this last scenario won't be real.\n\nWith the hybrid approach applied, this week I have been working on migrate some\ncomponents to Angular 2. I started migrating the Chat component, more complex\nthan the Footer previously migrated, but not enough to be frustrating in these\nearly stages.\n\n## Migrating subcomponents\n\nThe Chat component of Jangouts has three subcomponents, a part of the main\ncomponent:\n\n- **`chat-message`**: That handles the render the message sent by the user.\n- **`log-entry`**: That handles the notifications sent by the system (like \"*The user\nX has joined*).\n- **`chat-form`**: That handles the input of messages.\n\nThese subcomponents are really simple, each one has a component class without\nmuch code and a template. But the key of this migration has been that the styles\nwas moved from the main `scss` file to independent files for each subcomponent.\nThis take profit of [Angular 2 View Encapsulation](https://angular.io/docs/ts/latest/guide/component-styles.html#!#view-encapsulation),\nensuring that the styles will be only applied to the component.\n\nDuring the `chat-message` migration I found a trouble. A problem that comes\nfrom the sue of [ngEmbed](https://github.com/ritz078/ng-embed) library that\nprovides a directive for render the user messages. This directive allows the\nusers to use emojis and embed links, images, videos, etc. But as expected the\nlibrary hasn't support for Angular 2, so I tried to upgrade the directive with\nthe [Angular 2 Upgrade Adapter](https://angular.io/docs/ts/latest/guide/upgrade.html#!#how-the-upgrade-adapter-works)\nbut I found an strange error.\n\nAfter some investigation, I found that ngEmbed use a function as `templateUrl`\nattribute (which is allowed in Angular 1), but in the version of Angular 2 that\nI'm currently using with the project, the upgrade adapter don't support this\nkind of `templateUrl`. I saw in the master branch of Angular 2 that the code\nhas been updated to support this functionality, but now neither version\nincorporates the change. So after discuss with my mentors we decide to disable\nthis functionality in Jangouts and keep moving with the migration.\n\nI wish have time to reenable it in the future.\n\n## Differentiate between component and directive\n\nMigrate the main component was more complex. The main component has the list of\nall messages (user and system messages) in a view that auto scroll when a new\nmessage arrives. In the old Jangouts, this was one directive that renders the\nlist of messages and control the auto scroll. But Angular 2 is a different\nparadigm. In Angular 2, the correct approach, a component always have a template\nand never interacts with the DOM and a directive never have a template and can\ninteract with the DOM.\n\nSo this evidence that the main chat component would be migrated into two\ndifferent things:\n\n- A **component** to render the list of messages.\n- A **directive** that auto scroll when it's necessary.\n\nAfter the migration we have the component that renders the list of messages and\ninside it the directive that handles the auto scroll.\n\n## Putting all together\n\nDuring the subcomponents migration, each one was downgraded to be Angular 1\ncompatible using the provided adapter by Angular 2 and manually tested with the\nold version of the main component. When the main component was migrated, this\nmade that the code of the component was pure Angular 2 (without downgrade the\nsubcomponents) and the only thing to do to keep the compatibility with the rest\nof the Angular 1 application was downgrade the main chat component.\n\n## Applying the correct application structure\n\nThe changes applied this week wasn't only in the code, I also update the\napplication structure following the recommendations of the [style guide](https://angular.io/styleguide#!#application-structure_).\nPrevious to the migration the application has the following structure:\n\n```\nsrc\n└── app\n    ├── adapter.ts\n    ├── variables.scss\n    ├── index.scss\n    ├── vendor.scss\n    ├── index.ts\n    ├── components\n    │   ├── chat\n    │   │   ├── chat-form.directive.html\n    │   │   ├── chat-form.directive.js\n    │   │   ├── chat.directive.html\n    │   │   ├── chat.directive.js\n    │   │   ├── chat-message.directive.html\n    │   │   ├── chat-message.directive.js\n    │   │   ├── log-entry.directive.html\n    │   │   └── log-entry.directive.html\n    │   ├── footer\n    │   │   ├── footer.directive.html\n    │   │   └── footer.directive.js\n    │   └── [...]\n    └── [...]\n```\n\nBut after the changes this is the result:\n\n```\nsrc\n└── app\n    ├── adapter.ts\n    ├── variables.scss\n    ├── index.scss\n    ├── vendor.scss\n    ├── index.ts\n    ├── chat\n    │   ├── index.ts\n    │   ├── chat.component.html\n    │   ├── chat.component.scss\n    │   ├── chat.component.spec.ts\n    │   ├── chat.component.ts\n    │   ├── chat-form\n    │   │   ├── chat-form.component.html\n    │   │   ├── chat-form.component.spec.ts\n    │   │   ├── chat-form.component.ts\n    │   │   └── index.ts\n    │   ├── chat-message\n    │   │   ├── chat-message.component.html\n    │   │   ├── chat-message.component.scss\n    │   │   ├── chat-message.component.spec.ts\n    │   │   ├── chat-message.component.ts\n    │   │   └── index.ts\n    │   ├── log-entry\n    │   │   ├── index.ts\n    │   │   ├── log-entry.component.html\n    │   │   ├── log-entry.component.spec.ts\n    │   │   └── log-entry.component.ts\n    │   └── message-autoscroll.directive.ts\n    ├── footer\n    │   ├── footer.component.html\n    │   ├── footer.component.scss\n    │   ├── footer.component.spec.ts\n    │   ├── footer.component.ts\n    │   └── index.ts\n    ├── components\n    │   └──  [...] // This contains the not migrated code\n    └── [...]\n```\n\n## Currently working\n\nCurrently I'm working on the migration of Feed component. This is one of the\nmost complex components in the application because it has a lot of services that\nhandles the video/audio streams.\n\nActually I've moved all the services and factories to Angular 2 services, but I\nstill not enabled the support for work with the Angular 1 code. The reason? I\nwant to make a full testsuite that tests this services deeply before to continue\nwith the migration of the rest of the component and make the integration with\nthe rest of the application.\n\n\n"}}]);