export declare function init(appId?: number | undefined | null): void
export declare function restartAppIfNecessary(appId: number): boolean
export declare function runCallbacks(): void
export interface PlayerSteamId {
  steamId64: bigint
  steamId32: string
  accountId: number
}
export declare namespace achievement {
  export function activate(achievement: string): boolean
  export function isActivated(achievement: string): boolean
  export function clear(achievement: string): boolean
  export function names(): Array<string>
}
export declare namespace apps {
  export function isSubscribedApp(appId: number): boolean
  export function isAppInstalled(appId: number): boolean
  export function isDlcInstalled(appId: number): boolean
  export function isSubscribedFromFreeWeekend(): boolean
  export function isVacBanned(): boolean
  export function isCybercafe(): boolean
  export function isLowViolence(): boolean
  export function isSubscribed(): boolean
  export function appBuildId(): number
  export function appInstallDir(appId: number): string
  export function appOwner(): PlayerSteamId
  export function availableGameLanguages(): Array<string>
  export function currentGameLanguage(): string
  export function currentBetaName(): string | null
  export function launchCommandLine(): string
  export function launchQueryParam(key: string): string
}
export declare namespace auth {
  /**
   * @param steamId64 - The user steam id or game server steam id. Use as NetworkIdentity of the remote system that will authenticate the ticket. If it is peer-to-peer then the user steam ID. If it is a game server, then the game server steam ID may be used if it was obtained from a trusted 3rd party
   * @param timeoutSeconds - The number of seconds to wait for the ticket to be validated. Default value is 10 seconds.
   */
  export function getSessionTicketWithSteamId(steamId64: bigint, timeoutSeconds?: number | undefined | null): Promise<Ticket>
  /**
   * @param ip - The string of IPv4 or IPv6 address. Use as NetworkIdentity of the remote system that will authenticate the ticket.
   * @param timeoutSeconds - The number of seconds to wait for the ticket to be validated. Default value is 10 seconds.
   */
  export function getSessionTicketWithIp(ip: string, timeoutSeconds?: number | undefined | null): Promise<Ticket>
  export function getAuthTicketForWebApi(identity: string, timeoutSeconds?: number | undefined | null): Promise<Ticket>
  export class Ticket {
    cancel(): void
    getBytes(): Buffer
  }
}
export declare namespace callback {
  export const enum SteamCallback {
    PersonaStateChange = 'PersonaStateChange',
    SteamServersConnected = 'SteamServersConnected',
    SteamServersDisconnected = 'SteamServersDisconnected',
    SteamServerConnectFailure = 'SteamServerConnectFailure',
    LobbyDataUpdate = 'LobbyDataUpdate',
    LobbyChatUpdate = 'LobbyChatUpdate',
    P2PSessionRequest = 'P2PSessionRequest',
    P2PSessionConnectFail = 'P2PSessionConnectFail',
    GameLobbyJoinRequested = 'GameLobbyJoinRequested',
    MicroTxnAuthorizationResponse = 'MicroTxnAuthorizationResponse',
    NewUrlLaunchParameters = 'NewUrlLaunchParameters',
    SteamInputConfigurationLoaded = 'SteamInputConfigurationLoaded',
    SteamInputDeviceConnected = 'SteamInputDeviceConnected',
    SteamInputDeviceDisconnected = 'SteamInputDeviceDisconnected',
    SteamInputGamepadSlotChange = 'SteamInputGamepadSlotChange'
  }
  export function register<C extends keyof import('./callbacks').CallbackReturns>(steamCallback: C, handler: (value: import('./callbacks').CallbackReturns[C]) => void): Handle
  export class Handle {
    disconnect(): void
  }
}
export declare namespace cloud {
  export function isEnabledForAccount(): boolean
  export function isEnabledForApp(): boolean
  export function setEnabledForApp(enabled: boolean): void
  export function readFile(name: string): string
  export function writeFile(name: string, content: string): boolean
  export function deleteFile(name: string): boolean
  export function fileExists(name: string): boolean
  export function listFiles(): Array<FileInfo>
  export class FileInfo {
    name: string
    size: bigint
  }
}
export declare namespace input {
  export const enum InputType {
    Unknown = 'Unknown',
    SteamController = 'SteamController',
    XBox360Controller = 'XBox360Controller',
    XBoxOneController = 'XBoxOneController',
    GenericGamepad = 'GenericGamepad',
    PS4Controller = 'PS4Controller',
    AppleMFiController = 'AppleMFiController',
    AndroidController = 'AndroidController',
    SwitchJoyConPair = 'SwitchJoyConPair',
    SwitchJoyConSingle = 'SwitchJoyConSingle',
    SwitchProController = 'SwitchProController',
    MobileTouch = 'MobileTouch',
    PS3Controller = 'PS3Controller',
    PS5Controller = 'PS5Controller',
    SteamDeckController = 'SteamDeckController'
  }
  export const enum InputSourceMode {
    None = 'None',
    Dpad = 'Dpad',
    Buttons = 'Buttons',
    FourButtons = 'FourButtons',
    AbsoluteMouse = 'AbsoluteMouse',
    RelativeMouse = 'RelativeMouse',
    JoystickMove = 'JoystickMove',
    JoystickMouse = 'JoystickMouse',
    JoystickCamera = 'JoystickCamera',
    ScrollWheel = 'ScrollWheel',
    Trigger = 'Trigger',
    TouchMenu = 'TouchMenu',
    MouseJoystick = 'MouseJoystick',
    MouseRegion = 'MouseRegion',
    RadialMenu = 'RadialMenu',
    SingleButton = 'SingleButton',
    Switches = 'Switches'
  }
  export const enum InputGlyphSize {
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large'
  }
  export const enum GlyphStyle {
    Knockout = 0,
    Light = 1,
    Dark = 2,
    NeutralColorAbxy = 16,
    SolidAbxy = 32
  }
  export const enum InputActionOrigin {
    None = 'None',
    SteamControllerA = 'SteamControllerA',
    SteamControllerB = 'SteamControllerB',
    SteamControllerX = 'SteamControllerX',
    SteamControllerY = 'SteamControllerY',
    SteamControllerLeftBumper = 'SteamControllerLeftBumper',
    SteamControllerRightBumper = 'SteamControllerRightBumper',
    SteamControllerLeftGrip = 'SteamControllerLeftGrip',
    SteamControllerRightGrip = 'SteamControllerRightGrip',
    SteamControllerStart = 'SteamControllerStart',
    SteamControllerBack = 'SteamControllerBack',
    SteamControllerLeftPadTouch = 'SteamControllerLeftPadTouch',
    SteamControllerLeftPadSwipe = 'SteamControllerLeftPadSwipe',
    SteamControllerLeftPadClick = 'SteamControllerLeftPadClick',
    SteamControllerLeftPadDPadNorth = 'SteamControllerLeftPadDPadNorth',
    SteamControllerLeftPadDPadSouth = 'SteamControllerLeftPadDPadSouth',
    SteamControllerLeftPadDPadWest = 'SteamControllerLeftPadDPadWest',
    SteamControllerLeftPadDPadEast = 'SteamControllerLeftPadDPadEast',
    SteamControllerRightPadTouch = 'SteamControllerRightPadTouch',
    SteamControllerRightPadSwipe = 'SteamControllerRightPadSwipe',
    SteamControllerRightPadClick = 'SteamControllerRightPadClick',
    SteamControllerRightPadDPadNorth = 'SteamControllerRightPadDPadNorth',
    SteamControllerRightPadDPadSouth = 'SteamControllerRightPadDPadSouth',
    SteamControllerRightPadDPadWest = 'SteamControllerRightPadDPadWest',
    SteamControllerRightPadDPadEast = 'SteamControllerRightPadDPadEast',
    SteamControllerLeftTriggerPull = 'SteamControllerLeftTriggerPull',
    SteamControllerLeftTriggerClick = 'SteamControllerLeftTriggerClick',
    SteamControllerRightTriggerPull = 'SteamControllerRightTriggerPull',
    SteamControllerRightTriggerClick = 'SteamControllerRightTriggerClick',
    SteamControllerLeftStickMove = 'SteamControllerLeftStickMove',
    SteamControllerLeftStickClick = 'SteamControllerLeftStickClick',
    SteamControllerLeftStickDPadNorth = 'SteamControllerLeftStickDPadNorth',
    SteamControllerLeftStickDPadSouth = 'SteamControllerLeftStickDPadSouth',
    SteamControllerLeftStickDPadWest = 'SteamControllerLeftStickDPadWest',
    SteamControllerLeftStickDPadEast = 'SteamControllerLeftStickDPadEast',
    SteamControllerGyroMove = 'SteamControllerGyroMove',
    SteamControllerGyroPitch = 'SteamControllerGyroPitch',
    SteamControllerGyroYaw = 'SteamControllerGyroYaw',
    SteamControllerGyroRoll = 'SteamControllerGyroRoll',
    SteamControllerReserved0 = 'SteamControllerReserved0',
    SteamControllerReserved1 = 'SteamControllerReserved1',
    SteamControllerReserved2 = 'SteamControllerReserved2',
    SteamControllerReserved3 = 'SteamControllerReserved3',
    SteamControllerReserved4 = 'SteamControllerReserved4',
    SteamControllerReserved5 = 'SteamControllerReserved5',
    SteamControllerReserved6 = 'SteamControllerReserved6',
    SteamControllerReserved7 = 'SteamControllerReserved7',
    SteamControllerReserved8 = 'SteamControllerReserved8',
    SteamControllerReserved9 = 'SteamControllerReserved9',
    SteamControllerReserved10 = 'SteamControllerReserved10',
    PS4X = 'PS4X',
    PS4Circle = 'PS4Circle',
    PS4Triangle = 'PS4Triangle',
    PS4Square = 'PS4Square',
    PS4LeftBumper = 'PS4LeftBumper',
    PS4RightBumper = 'PS4RightBumper',
    PS4Options = 'PS4Options',
    PS4Share = 'PS4Share',
    PS4LeftPadTouch = 'PS4LeftPadTouch',
    PS4LeftPadSwipe = 'PS4LeftPadSwipe',
    PS4LeftPadClick = 'PS4LeftPadClick',
    PS4LeftPadDPadNorth = 'PS4LeftPadDPadNorth',
    PS4LeftPadDPadSouth = 'PS4LeftPadDPadSouth',
    PS4LeftPadDPadWest = 'PS4LeftPadDPadWest',
    PS4LeftPadDPadEast = 'PS4LeftPadDPadEast',
    PS4RightPadTouch = 'PS4RightPadTouch',
    PS4RightPadSwipe = 'PS4RightPadSwipe',
    PS4RightPadClick = 'PS4RightPadClick',
    PS4RightPadDPadNorth = 'PS4RightPadDPadNorth',
    PS4RightPadDPadSouth = 'PS4RightPadDPadSouth',
    PS4RightPadDPadWest = 'PS4RightPadDPadWest',
    PS4RightPadDPadEast = 'PS4RightPadDPadEast',
    PS4CenterPadTouch = 'PS4CenterPadTouch',
    PS4CenterPadSwipe = 'PS4CenterPadSwipe',
    PS4CenterPadClick = 'PS4CenterPadClick',
    PS4CenterPadDPadNorth = 'PS4CenterPadDPadNorth',
    PS4CenterPadDPadSouth = 'PS4CenterPadDPadSouth',
    PS4CenterPadDPadWest = 'PS4CenterPadDPadWest',
    PS4CenterPadDPadEast = 'PS4CenterPadDPadEast',
    PS4LeftTriggerPull = 'PS4LeftTriggerPull',
    PS4LeftTriggerClick = 'PS4LeftTriggerClick',
    PS4RightTriggerPull = 'PS4RightTriggerPull',
    PS4RightTriggerClick = 'PS4RightTriggerClick',
    PS4LeftStickMove = 'PS4LeftStickMove',
    PS4LeftStickClick = 'PS4LeftStickClick',
    PS4LeftStickDPadNorth = 'PS4LeftStickDPadNorth',
    PS4LeftStickDPadSouth = 'PS4LeftStickDPadSouth',
    PS4LeftStickDPadWest = 'PS4LeftStickDPadWest',
    PS4LeftStickDPadEast = 'PS4LeftStickDPadEast',
    PS4RightStickMove = 'PS4RightStickMove',
    PS4RightStickClick = 'PS4RightStickClick',
    PS4RightStickDPadNorth = 'PS4RightStickDPadNorth',
    PS4RightStickDPadSouth = 'PS4RightStickDPadSouth',
    PS4RightStickDPadWest = 'PS4RightStickDPadWest',
    PS4RightStickDPadEast = 'PS4RightStickDPadEast',
    PS4DPadNorth = 'PS4DPadNorth',
    PS4DPadSouth = 'PS4DPadSouth',
    PS4DPadWest = 'PS4DPadWest',
    PS4DPadEast = 'PS4DPadEast',
    PS4GyroMove = 'PS4GyroMove',
    PS4GyroPitch = 'PS4GyroPitch',
    PS4GyroYaw = 'PS4GyroYaw',
    PS4GyroRoll = 'PS4GyroRoll',
    PS4DPadMove = 'PS4DPadMove',
    PS4Reserved1 = 'PS4Reserved1',
    PS4Reserved2 = 'PS4Reserved2',
    PS4Reserved3 = 'PS4Reserved3',
    PS4Reserved4 = 'PS4Reserved4',
    PS4Reserved5 = 'PS4Reserved5',
    PS4Reserved6 = 'PS4Reserved6',
    PS4Reserved7 = 'PS4Reserved7',
    PS4Reserved8 = 'PS4Reserved8',
    PS4Reserved9 = 'PS4Reserved9',
    PS4Reserved10 = 'PS4Reserved10',
    XBoxOneA = 'XBoxOneA',
    XBoxOneB = 'XBoxOneB',
    XBoxOneX = 'XBoxOneX',
    XBoxOneY = 'XBoxOneY',
    XBoxOneLeftBumper = 'XBoxOneLeftBumper',
    XBoxOneRightBumper = 'XBoxOneRightBumper',
    XBoxOneMenu = 'XBoxOneMenu',
    XBoxOneView = 'XBoxOneView',
    XBoxOneLeftTriggerPull = 'XBoxOneLeftTriggerPull',
    XBoxOneLeftTriggerClick = 'XBoxOneLeftTriggerClick',
    XBoxOneRightTriggerPull = 'XBoxOneRightTriggerPull',
    XBoxOneRightTriggerClick = 'XBoxOneRightTriggerClick',
    XBoxOneLeftStickMove = 'XBoxOneLeftStickMove',
    XBoxOneLeftStickClick = 'XBoxOneLeftStickClick',
    XBoxOneLeftStickDPadNorth = 'XBoxOneLeftStickDPadNorth',
    XBoxOneLeftStickDPadSouth = 'XBoxOneLeftStickDPadSouth',
    XBoxOneLeftStickDPadWest = 'XBoxOneLeftStickDPadWest',
    XBoxOneLeftStickDPadEast = 'XBoxOneLeftStickDPadEast',
    XBoxOneRightStickMove = 'XBoxOneRightStickMove',
    XBoxOneRightStickClick = 'XBoxOneRightStickClick',
    XBoxOneRightStickDPadNorth = 'XBoxOneRightStickDPadNorth',
    XBoxOneRightStickDPadSouth = 'XBoxOneRightStickDPadSouth',
    XBoxOneRightStickDPadWest = 'XBoxOneRightStickDPadWest',
    XBoxOneRightStickDPadEast = 'XBoxOneRightStickDPadEast',
    XBoxOneDPadNorth = 'XBoxOneDPadNorth',
    XBoxOneDPadSouth = 'XBoxOneDPadSouth',
    XBoxOneDPadWest = 'XBoxOneDPadWest',
    XBoxOneDPadEast = 'XBoxOneDPadEast',
    XBoxOneDPadMove = 'XBoxOneDPadMove',
    XBoxOneLeftGripLower = 'XBoxOneLeftGripLower',
    XBoxOneLeftGripUpper = 'XBoxOneLeftGripUpper',
    XBoxOneRightGripLower = 'XBoxOneRightGripLower',
    XBoxOneRightGripUpper = 'XBoxOneRightGripUpper',
    XBoxOneShare = 'XBoxOneShare',
    XBoxOneReserved6 = 'XBoxOneReserved6',
    XBoxOneReserved7 = 'XBoxOneReserved7',
    XBoxOneReserved8 = 'XBoxOneReserved8',
    XBoxOneReserved9 = 'XBoxOneReserved9',
    XBoxOneReserved10 = 'XBoxOneReserved10',
    XBox360A = 'XBox360A',
    XBox360B = 'XBox360B',
    XBox360X = 'XBox360X',
    XBox360Y = 'XBox360Y',
    XBox360LeftBumper = 'XBox360LeftBumper',
    XBox360RightBumper = 'XBox360RightBumper',
    XBox360Start = 'XBox360Start',
    XBox360Back = 'XBox360Back',
    XBox360LeftTriggerPull = 'XBox360LeftTriggerPull',
    XBox360LeftTriggerClick = 'XBox360LeftTriggerClick',
    XBox360RightTriggerPull = 'XBox360RightTriggerPull',
    XBox360RightTriggerClick = 'XBox360RightTriggerClick',
    XBox360LeftStickMove = 'XBox360LeftStickMove',
    XBox360LeftStickClick = 'XBox360LeftStickClick',
    XBox360LeftStickDPadNorth = 'XBox360LeftStickDPadNorth',
    XBox360LeftStickDPadSouth = 'XBox360LeftStickDPadSouth',
    XBox360LeftStickDPadWest = 'XBox360LeftStickDPadWest',
    XBox360LeftStickDPadEast = 'XBox360LeftStickDPadEast',
    XBox360RightStickMove = 'XBox360RightStickMove',
    XBox360RightStickClick = 'XBox360RightStickClick',
    XBox360RightStickDPadNorth = 'XBox360RightStickDPadNorth',
    XBox360RightStickDPadSouth = 'XBox360RightStickDPadSouth',
    XBox360RightStickDPadWest = 'XBox360RightStickDPadWest',
    XBox360RightStickDPadEast = 'XBox360RightStickDPadEast',
    XBox360DPadNorth = 'XBox360DPadNorth',
    XBox360DPadSouth = 'XBox360DPadSouth',
    XBox360DPadWest = 'XBox360DPadWest',
    XBox360DPadEast = 'XBox360DPadEast',
    XBox360DPadMove = 'XBox360DPadMove',
    XBox360Reserved1 = 'XBox360Reserved1',
    XBox360Reserved2 = 'XBox360Reserved2',
    XBox360Reserved3 = 'XBox360Reserved3',
    XBox360Reserved4 = 'XBox360Reserved4',
    XBox360Reserved5 = 'XBox360Reserved5',
    XBox360Reserved6 = 'XBox360Reserved6',
    XBox360Reserved7 = 'XBox360Reserved7',
    XBox360Reserved8 = 'XBox360Reserved8',
    XBox360Reserved9 = 'XBox360Reserved9',
    XBox360Reserved10 = 'XBox360Reserved10',
    SwitchA = 'SwitchA',
    SwitchB = 'SwitchB',
    SwitchX = 'SwitchX',
    SwitchY = 'SwitchY',
    SwitchLeftBumper = 'SwitchLeftBumper',
    SwitchRightBumper = 'SwitchRightBumper',
    SwitchPlus = 'SwitchPlus',
    SwitchMinus = 'SwitchMinus',
    SwitchCapture = 'SwitchCapture',
    SwitchLeftTriggerPull = 'SwitchLeftTriggerPull',
    SwitchLeftTriggerClick = 'SwitchLeftTriggerClick',
    SwitchRightTriggerPull = 'SwitchRightTriggerPull',
    SwitchRightTriggerClick = 'SwitchRightTriggerClick',
    SwitchLeftStickMove = 'SwitchLeftStickMove',
    SwitchLeftStickClick = 'SwitchLeftStickClick',
    SwitchLeftStickDPadNorth = 'SwitchLeftStickDPadNorth',
    SwitchLeftStickDPadSouth = 'SwitchLeftStickDPadSouth',
    SwitchLeftStickDPadWest = 'SwitchLeftStickDPadWest',
    SwitchLeftStickDPadEast = 'SwitchLeftStickDPadEast',
    SwitchRightStickMove = 'SwitchRightStickMove',
    SwitchRightStickClick = 'SwitchRightStickClick',
    SwitchRightStickDPadNorth = 'SwitchRightStickDPadNorth',
    SwitchRightStickDPadSouth = 'SwitchRightStickDPadSouth',
    SwitchRightStickDPadWest = 'SwitchRightStickDPadWest',
    SwitchRightStickDPadEast = 'SwitchRightStickDPadEast',
    SwitchDPadNorth = 'SwitchDPadNorth',
    SwitchDPadSouth = 'SwitchDPadSouth',
    SwitchDPadWest = 'SwitchDPadWest',
    SwitchDPadEast = 'SwitchDPadEast',
    SwitchProGyroMove = 'SwitchProGyroMove',
    SwitchProGyroPitch = 'SwitchProGyroPitch',
    SwitchProGyroYaw = 'SwitchProGyroYaw',
    SwitchProGyroRoll = 'SwitchProGyroRoll',
    SwitchDPadMove = 'SwitchDPadMove',
    SwitchReserved1 = 'SwitchReserved1',
    SwitchReserved2 = 'SwitchReserved2',
    SwitchReserved3 = 'SwitchReserved3',
    SwitchReserved4 = 'SwitchReserved4',
    SwitchReserved5 = 'SwitchReserved5',
    SwitchReserved6 = 'SwitchReserved6',
    SwitchReserved7 = 'SwitchReserved7',
    SwitchReserved8 = 'SwitchReserved8',
    SwitchReserved9 = 'SwitchReserved9',
    SwitchReserved10 = 'SwitchReserved10',
    SwitchRightGyroMove = 'SwitchRightGyroMove',
    SwitchRightGyroPitch = 'SwitchRightGyroPitch',
    SwitchRightGyroYaw = 'SwitchRightGyroYaw',
    SwitchRightGyroRoll = 'SwitchRightGyroRoll',
    SwitchLeftGyroMove = 'SwitchLeftGyroMove',
    SwitchLeftGyroPitch = 'SwitchLeftGyroPitch',
    SwitchLeftGyroYaw = 'SwitchLeftGyroYaw',
    SwitchLeftGyroRoll = 'SwitchLeftGyroRoll',
    SwitchLeftGripLower = 'SwitchLeftGripLower',
    SwitchLeftGripUpper = 'SwitchLeftGripUpper',
    SwitchRightGripLower = 'SwitchRightGripLower',
    SwitchRightGripUpper = 'SwitchRightGripUpper',
    SwitchJoyConButtonN = 'SwitchJoyConButtonN',
    SwitchJoyConButtonE = 'SwitchJoyConButtonE',
    SwitchJoyConButtonS = 'SwitchJoyConButtonS',
    SwitchJoyConButtonW = 'SwitchJoyConButtonW',
    SwitchReserved15 = 'SwitchReserved15',
    SwitchReserved16 = 'SwitchReserved16',
    SwitchReserved17 = 'SwitchReserved17',
    SwitchReserved18 = 'SwitchReserved18',
    SwitchReserved19 = 'SwitchReserved19',
    SwitchReserved20 = 'SwitchReserved20',
    PS5X = 'PS5X',
    PS5Circle = 'PS5Circle',
    PS5Triangle = 'PS5Triangle',
    PS5Square = 'PS5Square',
    PS5LeftBumper = 'PS5LeftBumper',
    PS5RightBumper = 'PS5RightBumper',
    PS5Option = 'PS5Option',
    PS5Create = 'PS5Create',
    PS5Mute = 'PS5Mute',
    PS5LeftPadTouch = 'PS5LeftPadTouch',
    PS5LeftPadSwipe = 'PS5LeftPadSwipe',
    PS5LeftPadClick = 'PS5LeftPadClick',
    PS5LeftPadDPadNorth = 'PS5LeftPadDPadNorth',
    PS5LeftPadDPadSouth = 'PS5LeftPadDPadSouth',
    PS5LeftPadDPadWest = 'PS5LeftPadDPadWest',
    PS5LeftPadDPadEast = 'PS5LeftPadDPadEast',
    PS5RightPadTouch = 'PS5RightPadTouch',
    PS5RightPadSwipe = 'PS5RightPadSwipe',
    PS5RightPadClick = 'PS5RightPadClick',
    PS5RightPadDPadNorth = 'PS5RightPadDPadNorth',
    PS5RightPadDPadSouth = 'PS5RightPadDPadSouth',
    PS5RightPadDPadWest = 'PS5RightPadDPadWest',
    PS5RightPadDPadEast = 'PS5RightPadDPadEast',
    PS5CenterPadTouch = 'PS5CenterPadTouch',
    PS5CenterPadSwipe = 'PS5CenterPadSwipe',
    PS5CenterPadClick = 'PS5CenterPadClick',
    PS5CenterPadDPadNorth = 'PS5CenterPadDPadNorth',
    PS5CenterPadDPadSouth = 'PS5CenterPadDPadSouth',
    PS5CenterPadDPadWest = 'PS5CenterPadDPadWest',
    PS5CenterPadDPadEast = 'PS5CenterPadDPadEast',
    PS5LeftTriggerPull = 'PS5LeftTriggerPull',
    PS5LeftTriggerClick = 'PS5LeftTriggerClick',
    PS5RightTriggerPull = 'PS5RightTriggerPull',
    PS5RightTriggerClick = 'PS5RightTriggerClick',
    PS5LeftStickMove = 'PS5LeftStickMove',
    PS5LeftStickClick = 'PS5LeftStickClick',
    PS5LeftStickDPadNorth = 'PS5LeftStickDPadNorth',
    PS5LeftStickDPadSouth = 'PS5LeftStickDPadSouth',
    PS5LeftStickDPadWest = 'PS5LeftStickDPadWest',
    PS5LeftStickDPadEast = 'PS5LeftStickDPadEast',
    PS5RightStickMove = 'PS5RightStickMove',
    PS5RightStickClick = 'PS5RightStickClick',
    PS5RightStickDPadNorth = 'PS5RightStickDPadNorth',
    PS5RightStickDPadSouth = 'PS5RightStickDPadSouth',
    PS5RightStickDPadWest = 'PS5RightStickDPadWest',
    PS5RightStickDPadEast = 'PS5RightStickDPadEast',
    PS5DPadNorth = 'PS5DPadNorth',
    PS5DPadSouth = 'PS5DPadSouth',
    PS5DPadWest = 'PS5DPadWest',
    PS5DPadEast = 'PS5DPadEast',
    PS5GyroMove = 'PS5GyroMove',
    PS5GyroPitch = 'PS5GyroPitch',
    PS5GyroYaw = 'PS5GyroYaw',
    PS5GyroRoll = 'PS5GyroRoll',
    PS5DPadMove = 'PS5DPadMove',
    PS5LeftGrip = 'PS5LeftGrip',
    PS5RightGrip = 'PS5RightGrip',
    PS5LeftFn = 'PS5LeftFn',
    PS5RightFn = 'PS5RightFn',
    PS5Reserved5 = 'PS5Reserved5',
    PS5Reserved6 = 'PS5Reserved6',
    PS5Reserved7 = 'PS5Reserved7',
    PS5Reserved8 = 'PS5Reserved8',
    PS5Reserved9 = 'PS5Reserved9',
    PS5Reserved10 = 'PS5Reserved10',
    PS5Reserved11 = 'PS5Reserved11',
    PS5Reserved12 = 'PS5Reserved12',
    PS5Reserved13 = 'PS5Reserved13',
    PS5Reserved14 = 'PS5Reserved14',
    PS5Reserved15 = 'PS5Reserved15',
    PS5Reserved16 = 'PS5Reserved16',
    PS5Reserved17 = 'PS5Reserved17',
    PS5Reserved18 = 'PS5Reserved18',
    PS5Reserved19 = 'PS5Reserved19',
    PS5Reserved20 = 'PS5Reserved20',
    SteamDeckA = 'SteamDeckA',
    SteamDeckB = 'SteamDeckB',
    SteamDeckX = 'SteamDeckX',
    SteamDeckY = 'SteamDeckY',
    SteamDeckL1 = 'SteamDeckL1',
    SteamDeckR1 = 'SteamDeckR1',
    SteamDeckMenu = 'SteamDeckMenu',
    SteamDeckView = 'SteamDeckView',
    SteamDeckLeftPadTouch = 'SteamDeckLeftPadTouch',
    SteamDeckLeftPadSwipe = 'SteamDeckLeftPadSwipe',
    SteamDeckLeftPadClick = 'SteamDeckLeftPadClick',
    SteamDeckLeftPadDPadNorth = 'SteamDeckLeftPadDPadNorth',
    SteamDeckLeftPadDPadSouth = 'SteamDeckLeftPadDPadSouth',
    SteamDeckLeftPadDPadWest = 'SteamDeckLeftPadDPadWest',
    SteamDeckLeftPadDPadEast = 'SteamDeckLeftPadDPadEast',
    SteamDeckRightPadTouch = 'SteamDeckRightPadTouch',
    SteamDeckRightPadSwipe = 'SteamDeckRightPadSwipe',
    SteamDeckRightPadClick = 'SteamDeckRightPadClick',
    SteamDeckRightPadDPadNorth = 'SteamDeckRightPadDPadNorth',
    SteamDeckRightPadDPadSouth = 'SteamDeckRightPadDPadSouth',
    SteamDeckRightPadDPadWest = 'SteamDeckRightPadDPadWest',
    SteamDeckRightPadDPadEast = 'SteamDeckRightPadDPadEast',
    SteamDeckL2SoftPull = 'SteamDeckL2SoftPull',
    SteamDeckL2 = 'SteamDeckL2',
    SteamDeckR2SoftPull = 'SteamDeckR2SoftPull',
    SteamDeckR2 = 'SteamDeckR2',
    SteamDeckLeftStickMove = 'SteamDeckLeftStickMove',
    SteamDeckL3 = 'SteamDeckL3',
    SteamDeckLeftStickDPadNorth = 'SteamDeckLeftStickDPadNorth',
    SteamDeckLeftStickDPadSouth = 'SteamDeckLeftStickDPadSouth',
    SteamDeckLeftStickDPadWest = 'SteamDeckLeftStickDPadWest',
    SteamDeckLeftStickDPadEast = 'SteamDeckLeftStickDPadEast',
    SteamDeckLeftStickTouch = 'SteamDeckLeftStickTouch',
    SteamDeckRightStickMove = 'SteamDeckRightStickMove',
    SteamDeckR3 = 'SteamDeckR3',
    SteamDeckRightStickDPadNorth = 'SteamDeckRightStickDPadNorth',
    SteamDeckRightStickDPadSouth = 'SteamDeckRightStickDPadSouth',
    SteamDeckRightStickDPadWest = 'SteamDeckRightStickDPadWest',
    SteamDeckRightStickDPadEast = 'SteamDeckRightStickDPadEast',
    SteamDeckRightStickTouch = 'SteamDeckRightStickTouch',
    SteamDeckL4 = 'SteamDeckL4',
    SteamDeckR4 = 'SteamDeckR4',
    SteamDeckL5 = 'SteamDeckL5',
    SteamDeckR5 = 'SteamDeckR5',
    SteamDeckDPadMove = 'SteamDeckDPadMove',
    SteamDeckDPadNorth = 'SteamDeckDPadNorth',
    SteamDeckDPadSouth = 'SteamDeckDPadSouth',
    SteamDeckDPadWest = 'SteamDeckDPadWest',
    SteamDeckDPadEast = 'SteamDeckDPadEast',
    SteamDeckGyroMove = 'SteamDeckGyroMove',
    SteamDeckGyroPitch = 'SteamDeckGyroPitch',
    SteamDeckGyroYaw = 'SteamDeckGyroYaw',
    SteamDeckGyroRoll = 'SteamDeckGyroRoll',
    SteamDeckReserved1 = 'SteamDeckReserved1',
    SteamDeckReserved2 = 'SteamDeckReserved2',
    SteamDeckReserved3 = 'SteamDeckReserved3',
    SteamDeckReserved4 = 'SteamDeckReserved4',
    SteamDeckReserved5 = 'SteamDeckReserved5',
    SteamDeckReserved6 = 'SteamDeckReserved6',
    SteamDeckReserved7 = 'SteamDeckReserved7',
    SteamDeckReserved8 = 'SteamDeckReserved8',
    SteamDeckReserved9 = 'SteamDeckReserved9',
    SteamDeckReserved10 = 'SteamDeckReserved10',
    SteamDeckReserved11 = 'SteamDeckReserved11',
    SteamDeckReserved12 = 'SteamDeckReserved12',
    SteamDeckReserved13 = 'SteamDeckReserved13',
    SteamDeckReserved14 = 'SteamDeckReserved14',
    SteamDeckReserved15 = 'SteamDeckReserved15',
    SteamDeckReserved16 = 'SteamDeckReserved16',
    SteamDeckReserved17 = 'SteamDeckReserved17',
    SteamDeckReserved18 = 'SteamDeckReserved18',
    SteamDeckReserved19 = 'SteamDeckReserved19',
    SteamDeckReserved20 = 'SteamDeckReserved20',
    HoripadM1 = 'HoripadM1',
    HoripadM2 = 'HoripadM2',
    HoripadL4 = 'HoripadL4',
    HoripadR4 = 'HoripadR4'
  }
  export interface DigitalActionData {
    state: boolean
    active: boolean
  }
  export interface AnalogActionData {
    mode: InputSourceMode
    x: number
    y: number
    active: boolean
  }
  export interface MotionData {
    rotQuatX: number
    rotQuatY: number
    rotQuatZ: number
    rotQuatW: number
    posAccelX: number
    posAccelY: number
    posAccelZ: number
    rotVelX: number
    rotVelY: number
    rotVelZ: number
  }
  export function init(explicitlyCallRunFrame?: boolean | undefined | null): boolean
  export function runFrame(): void
  /**
   * Enables the SteamInputDeviceConnected and SteamInputDeviceDisconnected callbacks.
   * Each controller that is already connected will generate a device connected
   * callback once enabled.
   */
  export function enableDeviceCallbacks(): void
  export function getConnectedControllers(): Array<bigint>
  export function setInputActionManifestFilePath(path: string): boolean
  export function getActionSetHandle(actionSetName: string): bigint
  export function getInputTypeForHandle(inputHandle: bigint): InputType
  export function getGlyphForActionOrigin(actionOrigin: InputActionOrigin): string
  export function getGlyphPngForActionOrigin(actionOrigin: InputActionOrigin, size: InputGlyphSize, glyphStyle: number): string
  export function getGlyphSvgForActionOrigin(actionOrigin: InputActionOrigin, glyphStyle: number): string
  export function getStringForActionOrigin(actionOrigin: InputActionOrigin): string
  export function activateActionSet(inputHandle: bigint, actionSetHandle: bigint): void
  export function getDigitalActionHandle(actionName: string): bigint
  export function getAnalogActionHandle(actionName: string): bigint
  export function getDigitalActionData(inputHandle: bigint, actionHandle: bigint): DigitalActionData
  export function getAnalogActionData(inputHandle: bigint, actionHandle: bigint): AnalogActionData
  export function getDigitalActionOrigins(inputHandle: bigint, actionSetHandle: bigint, digitalActionHandle: bigint): Array<InputActionOrigin>
  export function getAnalogActionOrigins(inputHandle: bigint, actionSetHandle: bigint, analogActionHandle: bigint): Array<InputActionOrigin>
  export function getMotionData(inputHandle: bigint): MotionData
  export function showBindingPanel(inputHandle: bigint): boolean
  export function shutdown(): void
}
export declare namespace localplayer {
  export function getSteamId(): PlayerSteamId
  export function getName(): string
  export function getLevel(): number
  /** @returns the 2 digit ISO 3166-1-alpha-2 format country code which client is running in, e.g. "US" or "UK". */
  export function getIpCountry(): string
  export function setRichPresence(key: string, value?: string | undefined | null): void
}
export declare namespace matchmaking {
  export const enum LobbyType {
    Private = 'Private',
    FriendsOnly = 'FriendsOnly',
    Public = 'Public',
    Invisible = 'Invisible'
  }
  export function createLobby(lobbyType: LobbyType, maxMembers: number): Promise<bigint>
  export function joinLobby(lobbyId: bigint): Promise<bigint>
  export function getLobbies(): Promise<Array<bigint>>
  export function leaveLobby(lobbyId: bigint): void
  export function getLobbyMemberCount(lobbyId: bigint): bigint
  export function getLobbyMemberLimit(lobbyId: bigint): bigint | null
  export function getLobbyMembers(lobbyId: bigint): Array<PlayerSteamId>
  export function getLobbyOwner(lobbyId: bigint): PlayerSteamId
  export function setLobbyJoinable(lobbyId: bigint, joinable: boolean): boolean
  export function getLobbyData(lobbyId: bigint, key: string): string | null
  export function setLobbyData(lobbyId: bigint, key: string, value: string): boolean
  export function deleteLobbyData(lobbyId: bigint, key: string): boolean
  /** Get an object containing all the lobby data */
  export function getLobbyFullData(lobbyId: bigint): Record<string, string>
  /**
   * Merge current lobby data with provided data in a single batch
   * @returns true if all data was set successfully
   */
  export function mergeLobbyFullData(lobbyId: bigint, data: Record<string, string>): boolean
}
export declare namespace networking {
  export interface P2PPacket {
    data: Buffer
    size: number
    steamId: PlayerSteamId
  }
  /** The method used to send a packet */
  export const enum SendType {
    /**
     * Send the packet directly over udp.
     *
     * Can't be larger than 1200 bytes
     */
    Unreliable = 'Unreliable',
    /**
     * Like `Unreliable` but doesn't buffer packets
     * sent before the connection has started.
     */
    UnreliableNoDelay = 'UnreliableNoDelay',
    /**
     * Reliable packet sending.
     *
     * Can't be larger than 1 megabyte.
     */
    Reliable = 'Reliable',
    /**
     * Like `Reliable` but applies the nagle
     * algorithm to packets being sent
     */
    ReliableWithBuffering = 'ReliableWithBuffering'
  }
  export function sendP2PPacket(steamId64: bigint, sendType: SendType, data: Buffer): boolean
  export function isP2PPacketAvailable(): number
  export function readP2PPacket(size: number): P2PPacket
  export function acceptP2PSession(steamId64: bigint): void
}
export declare namespace overlay {
  export const enum Dialog {
    Friends = 'Friends',
    Community = 'Community',
    Players = 'Players',
    Settings = 'Settings',
    OfficialGameGroup = 'OfficialGameGroup',
    Stats = 'Stats',
    Achievements = 'Achievements'
  }
  export const enum StoreFlag {
    None = 'None',
    AddToCart = 'AddToCart',
    AddToCartAndShow = 'AddToCartAndShow'
  }
  export function activateDialog(dialog: Dialog): void
  export function activateDialogToUser(dialog: Dialog, steamId64: bigint): void
  export function activateInviteDialog(lobbyId: bigint): void
  export function activateToWebPage(url: string): void
  export function activateToStore(appId: number, flag: StoreFlag): void
}
export declare namespace stats {
  export function getInt(name: string): number | null
  export function setInt(name: string, value: number): boolean
  export function store(): boolean
  export function resetAll(achievementsToo: boolean): boolean
}
export declare namespace utils {
  export function getAppId(): number
  export function getServerRealTime(): number
  export function isSteamInBigPictureMode(): boolean
  export function isSteamRunningOnSteamDeck(): boolean
  export const enum GamepadTextInputMode {
    Normal = 'Normal',
    Password = 'Password'
  }
  export const enum GamepadTextInputLineMode {
    SingleLine = 'SingleLine',
    MultipleLines = 'MultipleLines'
  }
  /** @returns the entered text, or null if cancelled or could not show the input */
  export function showGamepadTextInput(inputMode: GamepadTextInputMode, inputLineMode: GamepadTextInputLineMode, description: string, maxCharacters: number, existingText?: string | undefined | null): Promise<string | null>
  export const enum FloatingGamepadTextInputMode {
    SingleLine = 'SingleLine',
    MultipleLines = 'MultipleLines',
    Email = 'Email',
    Numeric = 'Numeric'
  }
  /** @returns true if the floating keyboard was shown, otherwise, false */
  export function showFloatingGamepadTextInput(keyboardMode: FloatingGamepadTextInputMode, x: number, y: number, width: number, height: number): Promise<boolean>
}
export declare namespace workshop {
  export interface UgcResult {
    itemId: bigint
    needsToAcceptAgreement: boolean
  }
  export const enum UgcItemVisibility {
    Public = 'Public',
    FriendsOnly = 'FriendsOnly',
    Private = 'Private',
    Unlisted = 'Unlisted'
  }
  export interface UgcUpdate {
    title?: string
    description?: string
    changeNote?: string
    previewPath?: string
    contentPath?: string
    tags?: Array<string>
    visibility?: UgcItemVisibility
  }
  export interface InstallInfo {
    folder: string
    sizeOnDisk: bigint
    timestamp: number
  }
  export interface DownloadInfo {
    current: bigint
    total: bigint
  }
  export const enum UpdateStatus {
    Invalid = 'Invalid',
    PreparingConfig = 'PreparingConfig',
    PreparingContent = 'PreparingContent',
    UploadingContent = 'UploadingContent',
    UploadingPreviewFile = 'UploadingPreviewFile',
    CommittingChanges = 'CommittingChanges'
  }
  export interface UpdateProgress {
    status: UpdateStatus
    progress: bigint
    total: bigint
  }
  export function createItem(appId?: number | undefined | null): Promise<UgcResult>
  export function updateItem(itemId: bigint, updateDetails: UgcUpdate, appId?: number | undefined | null): Promise<UgcResult>
  export function updateItemWithCallback(itemId: bigint, updateDetails: UgcUpdate, appId: number | undefined | null, successCallback: (data: UgcResult) => void, errorCallback: (err: any) => void, progressCallback?: (data: UpdateProgress) => void, progressCallbackIntervalMs?: number | undefined | null): void
  /**
   * Subscribe to a workshop item. It will be downloaded and installed as soon as possible.
   *
   * {@link https://partner.steamgames.com/doc/api/ISteamUGC#SubscribeItem}
   */
  export function subscribe(itemId: bigint): Promise<void>
  /**
   * Unsubscribe from a workshop item. This will result in the item being removed after the game quits.
   *
   * {@link https://partner.steamgames.com/doc/api/ISteamUGC#UnsubscribeItem}
   */
  export function unsubscribe(itemId: bigint): Promise<void>
  /**
   * Gets the current state of a workshop item on this client. States can be combined.
   *
   * @returns a number with the current item state, e.g. 9
   * 9 = 1 (The current user is subscribed to this item) + 8 (The item needs an update)
   *
   * {@link https://partner.steamgames.com/doc/api/ISteamUGC#GetItemState}
   * {@link https://partner.steamgames.com/doc/api/ISteamUGC#EItemState}
   */
  export function state(itemId: bigint): number
  /**
   * Gets info about currently installed content on the disc for workshop item.
   *
   * @returns an object with the the properties {folder, size_on_disk, timestamp}
   *
   * {@link https://partner.steamgames.com/doc/api/ISteamUGC#GetItemInstallInfo}
   */
  export function installInfo(itemId: bigint): InstallInfo | null
  /**
   * Get info about a pending download of a workshop item.
   *
   * @returns an object with the properties {current, total}
   *
   * {@link https://partner.steamgames.com/doc/api/ISteamUGC#GetItemDownloadInfo}
   */
  export function downloadInfo(itemId: bigint): DownloadInfo | null
  /**
   * Download or update a workshop item.
   *
   * @param highPriority - If high priority is true, start the download in high priority mode, pausing any existing in-progress Steam downloads and immediately begin downloading this workshop item.
   * @returns true or false
   *
   * {@link https://partner.steamgames.com/doc/api/ISteamUGC#DownloadItem}
   */
  export function download(itemId: bigint, highPriority: boolean): boolean
  /**
   * Get all subscribed workshop items.
   * @returns an array of subscribed workshop item ids
   */
  export function getSubscribedItems(includeLocallyDisabled: boolean): Array<bigint>
  export const enum UGCQueryType {
    RankedByVote = 'RankedByVote',
    RankedByPublicationDate = 'RankedByPublicationDate',
    AcceptedForGameRankedByAcceptanceDate = 'AcceptedForGameRankedByAcceptanceDate',
    RankedByTrend = 'RankedByTrend',
    FavoritedByFriendsRankedByPublicationDate = 'FavoritedByFriendsRankedByPublicationDate',
    CreatedByFriendsRankedByPublicationDate = 'CreatedByFriendsRankedByPublicationDate',
    RankedByNumTimesReported = 'RankedByNumTimesReported',
    CreatedByFollowedUsersRankedByPublicationDate = 'CreatedByFollowedUsersRankedByPublicationDate',
    NotYetRated = 'NotYetRated',
    RankedByTotalVotesAsc = 'RankedByTotalVotesAsc',
    RankedByVotesUp = 'RankedByVotesUp',
    RankedByTextSearch = 'RankedByTextSearch',
    RankedByTotalUniqueSubscriptions = 'RankedByTotalUniqueSubscriptions',
    RankedByPlaytimeTrend = 'RankedByPlaytimeTrend',
    RankedByTotalPlaytime = 'RankedByTotalPlaytime',
    RankedByAveragePlaytimeTrend = 'RankedByAveragePlaytimeTrend',
    RankedByLifetimeAveragePlaytime = 'RankedByLifetimeAveragePlaytime',
    RankedByPlaytimeSessionsTrend = 'RankedByPlaytimeSessionsTrend',
    RankedByLifetimePlaytimeSessions = 'RankedByLifetimePlaytimeSessions',
    RankedByLastUpdatedDate = 'RankedByLastUpdatedDate'
  }
  export const enum UGCType {
    Items = 'Items',
    ItemsMtx = 'ItemsMtx',
    ItemsReadyToUse = 'ItemsReadyToUse',
    Collections = 'Collections',
    Artwork = 'Artwork',
    Videos = 'Videos',
    Screenshots = 'Screenshots',
    AllGuides = 'AllGuides',
    WebGuides = 'WebGuides',
    IntegratedGuides = 'IntegratedGuides',
    UsableInGame = 'UsableInGame',
    ControllerBindings = 'ControllerBindings',
    GameManagedItems = 'GameManagedItems',
    All = 'All'
  }
  export const enum UserListType {
    Published = 'Published',
    VotedOn = 'VotedOn',
    VotedUp = 'VotedUp',
    VotedDown = 'VotedDown',
    Favorited = 'Favorited',
    Subscribed = 'Subscribed',
    UsedOrPlayed = 'UsedOrPlayed',
    Followed = 'Followed'
  }
  export const enum UserListOrder {
    CreationOrderAsc = 'CreationOrderAsc',
    CreationOrderDesc = 'CreationOrderDesc',
    TitleAsc = 'TitleAsc',
    LastUpdatedDesc = 'LastUpdatedDesc',
    SubscriptionDateDesc = 'SubscriptionDateDesc',
    VoteScoreDesc = 'VoteScoreDesc',
    ForModeration = 'ForModeration'
  }
  export interface WorkshopItemStatistic {
    numSubscriptions?: bigint
    numFavorites?: bigint
    numFollowers?: bigint
    numUniqueSubscriptions?: bigint
    numUniqueFavorites?: bigint
    numUniqueFollowers?: bigint
    numUniqueWebsiteViews?: bigint
    reportScore?: bigint
    numSecondsPlayed?: bigint
    numPlaytimeSessions?: bigint
    numComments?: bigint
    numSecondsPlayedDuringTimePeriod?: bigint
    numPlaytimeSessionsDuringTimePeriod?: bigint
  }
  export interface WorkshopItem {
    publishedFileId: bigint
    creatorAppId?: number
    consumerAppId?: number
    title: string
    description: string
    owner: PlayerSteamId
    /** Time created in unix epoch seconds format */
    timeCreated: number
    /** Time updated in unix epoch seconds format */
    timeUpdated: number
    /** Time when the user added the published item to their list (not always applicable), provided in Unix epoch format (time since Jan 1st, 1970). */
    timeAddedToUserList: number
    visibility: UgcItemVisibility
    banned: boolean
    acceptedForUse: boolean
    tags: Array<string>
    tagsTruncated: boolean
    url: string
    numUpvotes: number
    numDownvotes: number
    numChildren: number
    previewUrl?: string
    statistics: WorkshopItemStatistic
  }
  export interface WorkshopPaginatedResult {
    items: Array<WorkshopItem | undefined | null>
    returnedResults: number
    totalResults: number
    wasCached: boolean
  }
  export interface WorkshopItemsResult {
    items: Array<WorkshopItem | undefined | null>
    wasCached: boolean
  }
  export interface WorkshopItemQueryConfig {
    cachedResponseMaxAge?: number
    includeMetadata?: boolean
    includeLongDescription?: boolean
    includeAdditionalPreviews?: boolean
    onlyIds?: boolean
    onlyTotal?: boolean
    language?: string
    matchAnyTag?: boolean
    requiredTags?: Array<string>
    excludedTags?: Array<string>
    searchText?: string
    rankedByTrendDays?: number
  }
  export interface AppIDs {
    creator?: number
    consumer?: number
  }
  export function getItem(item: bigint, queryConfig?: WorkshopItemQueryConfig | undefined | null): Promise<WorkshopItem | null>
  export function getItems(items: Array<bigint>, queryConfig?: WorkshopItemQueryConfig | undefined | null): Promise<WorkshopItemsResult>
  export function getAllItems(page: number, queryType: UGCQueryType, itemType: UGCType, creatorAppId: number, consumerAppId: number, queryConfig?: WorkshopItemQueryConfig | undefined | null): Promise<WorkshopPaginatedResult>
  export function getUserItems(page: number, accountId: number, listType: UserListType, itemType: UGCType, sortOrder: UserListOrder, appIds: AppIDs, queryConfig?: WorkshopItemQueryConfig | undefined | null): Promise<WorkshopPaginatedResult>
}
