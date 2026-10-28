const { init, SteamCallback } = require('../index.js')

const client = init(480)
const callback1 = client.callback.register(SteamCallback.LobbyDataUpdate, (data) => {
    console.log('LobbyDataUpdate', data)
});

const callback2 = client.callback.register(SteamCallback.LobbyChatUpdate, (data) => {
    console.log('LobbyChatUpdate', data)
});

setTimeout(() => {
    callback1.disconnect()
    callback2.disconnect()
}, 5000);

(async () => {
    const lobbyId = await client.matchmaking.createLobby(client.matchmaking.LobbyType.Public, 2)
    console.log(lobbyId)

    client.matchmaking.setLobbyData(lobbyId, 'batata', '1')
    client.matchmaking.mergeLobbyFullData(lobbyId, {
        'hello': 'world',
        'batata': '2'
    })
    console.log(client.matchmaking.getLobbyFullData(lobbyId))

    console.log("=====")
    console.log(client.matchmaking.getLobbyData(lobbyId, 'batata'))

    client.matchmaking.leaveLobby(lobbyId);

    console.log("=====")
    const lobbies = await client.matchmaking.getLobbies()
    console.log(lobbies)

    const lobbyWithMorePeople = lobbies.sort((a, b) =>
        Number(client.matchmaking.getLobbyMemberCount(b)) - Number(client.matchmaking.getLobbyMemberCount(a))
    )[1]
    const joinedLobbyId = await client.matchmaking.joinLobby(lobbyWithMorePeople)
    console.log("Joined at " + joinedLobbyId + " with " + client.matchmaking.getLobbyMemberCount(joinedLobbyId) + " members:")
    console.log(client.matchmaking.getLobbyMembers(joinedLobbyId))

    // The runCallbacks interval set by init() keeps the process alive, exit manually once done
    process.exit()
})();