- React Router Dom

This gives you the ability to route the different path using react router. We have to create the using createBrowerRouter which takes in the path and the component in fornm of list.

React provider is a component which takes createBrowerRouter in roter props.

Reacter router dom gives a hook useRouteError which gives the errorin more detail. We can use this to show the error in the UI.

If we want the same header and just change the component of the webapp when we change the path then we can use the children key inside createBrowerRoter component and pass the component in the children key with path.

We have component Outlet which is used to render the component which are present in the children key of the createBrowerRouter according to the path provided. We can use this to render the component in the same header.

It also provides a Link component which is used to link the different path. It takes in the to prop which is the path to which we want to link.

- Routing are of two types:
  Client Side Routing-> Raact is client side routing where it does not make a network call to reload the page. It just loads the component according to the path. Only the component is getting interchanged

  Server Side Routing-> This routing is associated where it makes a network call to reload the page according to click.
