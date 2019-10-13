const re = new RegExp('^[a-zA-Z0-9]*$');

export const validateRoomName = (roomName: string) => {
    return !roomName || !re.test(roomName);
}