import { NbThemeModule } from '@nebular/theme';
import { Preview, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { StorybookShellComponent } from './storybook-shell.component';

const preview: Preview = {
    decorators: [
        moduleMetadata({
            imports: [
                NbThemeModule.forRoot(),
                StorybookShellComponent
            ]
        }),
        componentWrapperDecorator((story) => 
            `<storybook-shell>${story}</storybook-shell>`
        )
    ],
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        zeplinLink: "https://app.zeplin.io/project/5fbc7d1331e78a54dec5cb1e",
    },
};

export default preview;
