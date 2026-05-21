/**
 * Generated using theia-extension-generator
 */
import { L3v3guideCommandContribution, L3v3guideMenuContribution } from './l3v3guide-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(L3v3guideCommandContribution);
    bind(MenuContribution).to(L3v3guideMenuContribution);
});
