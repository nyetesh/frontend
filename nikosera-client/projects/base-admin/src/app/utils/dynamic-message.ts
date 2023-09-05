export class DynamicMessageUtil {
    static replaceDynamicParameter(message: string, replacements: Map<string, string>): string {

        return message.replace(/{([^{}]*)}/g, (_, key) => replacements.get(key) || ''); }

}