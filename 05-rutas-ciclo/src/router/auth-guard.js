const isAuthenticatedGuard = (to, from, next) => {
    return new Promise(() => {
        console.log({to, from, next});
        next();
    });
}

export default isAuthenticatedGuard;
