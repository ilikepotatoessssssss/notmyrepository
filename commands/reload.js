/* eslint prefer-destructuring: 0 */
var Spark = require("sparkbots")
const Command = Spark.command("reload")
Command.allowDms(true)
Command.setLevel(9)
Command.setDescription('reload stuf')

Command.code = async (client, message) => {
    var edit = null;
    var arg = message.content.split(" ")[1]
    if (arg) {
        arg = arg.toLowerCase()
    }
    if (!arg || arg == "all") {
        edit = await message.channel.send("<a:updating:403035325242540032> Reloading all files...");
        reloadAll();
        await reloadSearch();
        return edit.edit("<a:agooglethumbsup:419028365761314818> Successfully reloaded all files.");
    } else if (arg === "commands") {
        edit = await message.channel.send("<a:updating:403035325242540032> Reloading all commands...");
        reloadCommands();
        await reloadSearch();
        return edit.edit("<a:agooglethumbsup:419028365761314818> Successfully reloaded all commands.");
    } else if (arg === "observers") {
        edit = await message.channel.send("<a:updating:403035325242540032> Reloading all observers...");
        reloadObservers();
        await reloadSearch();
        return edit.edit("<a:agooglethumbsup:419028365761314818> Successfully reloaded all observers.");
    } else if (arg === "engines") {
        edit = await message.channel.send("<a:updating:403035325242540032> Reloading all engines...");
        reloadEngines();
        await reloadSearch();
        return edit.edit("<a:agooglethumbsup:419028365761314818> Successfully reloaded engines.");
    } else if (arg === "snippets") {
        edit = await message.channel.send("<a:updating:403035325242540032> Reloading all snippets...");
        reloadSnippets();
        await reloadSearch();
        return edit.edit("<a:agooglethumbsup:419028365761314818> Successfully reloaded all snippets.");
    } else if (arg === "permissions") {
        edit = await message.channel.send("<a:updating:403035325242540032> Reloading all permission files...");
        reloadPermissions();
        await reloadSearch();
        return edit.edit("<a:agooglethumbsup:419028365761314818> Successfully reloaded all permission files.");
    } else if (arg === "events") {
        edit = await message.channel.send("<a:updating:403035325242540032> Reloading all events...");
        reloadEvents();
        await reloadSearch();
        return edit.edit("Successfully reloaded all events.");
    } else if (![
            "commands",
            "observers",
            "engines",
            "snippets",
            "permissions",
            "events"
        ].includes(arg)) {
        return message.channel.send("Please enter a valid option! \nChoose between `commands`, `observers`, `engines`, `snippets`, `permissions`, or `events`.")
    }

    // Reload Functions

    function reloadAll() {
        reloadCommands()
        reloadObservers()
        reloadEngines();
        reloadSnippets();
        reloadPermissions();
        reloadEvents();
    }

    async function reloadSearch() {
        try {
            var temp = await client.search()
            client.dataStore = temp
        } catch (e) {
            console.error(e);
            message.channel.send("<:no:424361302069346304> There was an error while reloading.")
        }
    }

    function reloadCommands() {
        client.dataStore.commands.forEach((commands) => {
            delete require.cache[require.resolve(commands.location)];
        })
    }

    function reloadObservers() {
        client.dataStore.functions.observer.forEach((observer) => {
            delete require.cache[require.resolve(observer.location)];
        })
    }

    function reloadEngines() {
        client.dataStore.functions.engines.forEach((engine) => {
            delete require.cache[require.resolve(engine.location)];
        })
    }

    function reloadSnippets() {
        client.dataStore.functions.snippet.forEach((snippet) => {
            delete require.cache[require.resolve(snippet.location)];
        })
    }

    function reloadPermissions() {
        client.dataStore.permissions.forEach((permissions) => {
            delete require.cache[require.resolve(permissions.location)];
        })
    }

    function reloadEvents() {
        client.dataStore.events.forEach((events) => {
            delete require.cache[require.resolve(events.location)];
        })
    }
}
module.exports = Command;