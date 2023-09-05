export class StringUtils {

    static convertBooleanToString(content: boolean): string {
        if (content) {
            return 'Y';
        }
        return 'N';
    }

    static convertStringToBoolean(content: string): boolean {
        if (content === 'Y') {
            return true;
        }
        return false;
    }
}