import client = require('./client')

export const enum ChatMemberStateChange {
    /** This user has joined or is joining the lobby. */
    Entered,
    /** This user has left or is leaving the lobby. */
    Left,
    /** User disconnected without leaving the lobby first. */
    Disconnected,
    /** The user has been kicked. */
    Kicked,
    /** The user has been kicked and banned. */
    Banned,
}

export interface CallbackReturns {
    [client.callback.SteamCallback.PersonaStateChange]: {
        steam_id: bigint
        flags: { bits: number }
    }
    [client.callback.SteamCallback.SteamServersConnected]: {}
    [client.callback.SteamCallback.SteamServersDisconnected]: {
        reason: number
    }
    [client.callback.SteamCallback.SteamServerConnectFailure]: {
        reason: number
        still_retrying: boolean
    }
    [client.callback.SteamCallback.LobbyDataUpdate]: {
        lobby: bigint
        member: bigint
        success: boolean
    }
    [client.callback.SteamCallback.LobbyChatUpdate]: {
        lobby: bigint
        user_changed: bigint
        making_change: bigint
        member_state_change: ChatMemberStateChange
    }
    [client.callback.SteamCallback.P2PSessionRequest]: {
        remote: bigint
    }
    [client.callback.SteamCallback.P2PSessionConnectFail]: {
        remote: bigint
        error: number
    }
    [client.callback.SteamCallback.GameLobbyJoinRequested]: {
        lobby_steam_id: bigint
        friend_steam_id: bigint
    }
    [client.callback.SteamCallback.MicroTxnAuthorizationResponse]: {
        app_id: number
        order_id: number | bigint
        authorized: boolean
    }
    [client.callback.SteamCallback.NewUrlLaunchParameters]: {
        reason: number
    }
    [client.callback.SteamCallback.SteamInputConfigurationLoaded]: {
        app_id: number
        device_handle: number | bigint
        mapping_creator: bigint
        major_revision: number
        minor_revision: number
        uses_steam_input_api: boolean
        uses_gamepad_api: boolean
    }
    [client.callback.SteamCallback.SteamInputDeviceConnected]: {
        device_handle: number | bigint
    }
    [client.callback.SteamCallback.SteamInputDeviceDisconnected]: {
        device_handle: number | bigint
    }
    [client.callback.SteamCallback.SteamInputGamepadSlotChange]: {
        app_id: number
        device_handle: number | bigint
        device_type: client.input.InputType
        old_gamepad_slot: number
        new_gamepad_slot: number
    }
}
