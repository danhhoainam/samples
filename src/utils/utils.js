export const subscribeEvent = (component, service, event) => {

    const unsubscriber = service.subscribe(event);
    component.addSubscribeEvent(unsubscriber);
}