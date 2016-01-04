#RxReact ToDo

This a simple react ToDo application using RxJs to implement a flux-style
architecture. I made it primarily as an educational experiment so it is *just*
the basics.

### app/main.jsx

Similar to Redux connect this wraps the application, connecting it to the store
and adding its update method to the store callbacks.

### app/components/layout.jsx

Contains all the components that make up the application UI.

### app/services/data.js

Contains the RxJS objects that consume data and send it to the store,
like a combination of an action and a dispatcher.

### app/services/store.js

A class that serves as the data store. Instead of reducers this class has
methods that update the application state. Those methods are invoked by the
RxJS Subjects when they receive data. There is also a toJSON method that is used
to dump the immutable data into the application as a basic JavaScript object.
