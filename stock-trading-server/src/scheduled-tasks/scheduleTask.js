export const scheduleTask = async (func, frequency, app) => {
    await func(app);
    setTimeout(() => scheduleTask(func, frequency, app), frequency);
}