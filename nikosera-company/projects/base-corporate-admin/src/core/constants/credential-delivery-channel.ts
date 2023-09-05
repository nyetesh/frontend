export function DELIVERY_CHANNELS(isResident: boolean): string[] {
    if (isResident) {
        return ['SMS', 'EMAIL', 'SMS_AND_EMAIL'];
    } else {
        return ['EMAIL'];
    }
}
